import {
    ApolloClient,
    ApolloLink,
    CombinedGraphQLErrors,
    HttpLink,
    InMemoryCache,
    ServerError,
} from '@apollo/client'
import { SetContextLink } from '@apollo/client/link/context'
import { ErrorLink } from '@apollo/client/link/error'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { OperationTypeNode } from 'graphql'
import { createClient } from 'graphql-ws'
import { tap } from 'rxjs'

const isWebSocketOnly = import.meta.env.VITE_APP_WEBSOCKET_ONLY === 'true'

const httpLink = new HttpLink({
    uri: import.meta.env.VITE_APP_HTTP
})

const authLink = new SetContextLink((prevContext) => {
    const token = localStorage.getItem('apollo-token')

    return {
        headers: {
            ...prevContext.headers,
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    }
})

const authedHttpLink = ApolloLink.from([authLink, httpLink])

let activeSocket = null
let pongTimeout = null

const wsClient = createClient({
    url: import.meta.env.VITE_GRAPHQL_WS_URL ?? 'wss://your-graphql-api.com/graphql',
    keepAlive: 15_000,
    connectionAckWaitTimeout: 10_000,
    connectionParams: () => {
        const token = localStorage.getItem('access_token')
        return token ? { Authorization: `Bearer ${token}` } : {}
    },
    shouldRetry: () => true,
    retryAttempts: Infinity,
    retryWait: async (retries) => {
        const delay = Math.min(1000 * 2 ** retries, 10_000)
        await new Promise((resolve) => setTimeout(resolve, delay))
    },
    on: {
        connected: (socket) => {
            activeSocket = socket
        },
        ping: (received) => {
            if (!received) {
                pongTimeout = setTimeout(() => {
                    if (activeSocket && activeSocket.readyState === WebSocket.OPEN) {
                        activeSocket.close(4408, 'Request Timeout')
                    }
                }, 5_000)
            }
        },
        pong: (received) => {
            if (received && pongTimeout) {
                clearTimeout(pongTimeout)
                pongTimeout = null
            }
        },
        closed: () => {
            if (pongTimeout) {
                clearTimeout(pongTimeout)
                pongTimeout = null
            }
        },
    },
})

const wsLink = new GraphQLWsLink(wsClient)

const transportLink = isWebSocketOnly
    ? wsLink
    : ApolloLink.split(
        ({ operationType }) => operationType === OperationTypeNode.SUBSCRIPTION,
        wsLink,
        authedHttpLink
    )

const handleUnauthorized = () => {
    localStorage.removeItem('apollo-token')
    void wsClient.dispose()
    void client.clearStore()

    if (window.location.pathname !== '/login') {
        window.location.assign('/login')
    }
}

const errorLink = new ErrorLink(({ error, operation }) => {
    if (CombinedGraphQLErrors.is(error)) {
        for (const gqlError of error.errors) {
            console.error(
                `[GraphQL error] (${operation.operationName}): ${gqlError.message}`,
                { locations: gqlError.locations, path: gqlError.path }
            )

            if (gqlError.extensions?.code === 'UNAUTHENTICATED') {
                handleUnauthorized()
                return
            }
        }
    }

    if (ServerError.is(error)) {
        console.error(`[Server error ${error.statusCode}]:`, error.bodyText)

        if (error.statusCode === 401) {
            handleUnauthorized()
            return
        }
    }

    if (!CombinedGraphQLErrors.is(error) && !ServerError.is(error)) {
        console.error(`[Network/WS error]:`, error)
    }
})

const loggingLink = new ApolloLink((operation, forward) => {
    if (import.meta.env.DEV) {
        const transport =
            isWebSocketOnly || operation.operationType === OperationTypeNode.SUBSCRIPTION
                ? 'WS'
                : 'HTTP'
        console.log(`[GraphQL ${transport} Request]: ${operation.operationName}`)
    }

    return forward(operation).pipe(
        tap((response) => {
            if (import.meta.env.DEV) {
                console.log(`[GraphQL Response]: ${operation.operationName}`, response)
            }
        })
    )
})

export const client = new ApolloClient({
    link: ApolloLink.from([errorLink, loggingLink, transportLink]),
    cache: new InMemoryCache(),
    devtools: {
        enabled: import.meta.env.DEV,
    },
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first',
            errorPolicy: 'all',
        },
        query: {
            fetchPolicy: 'cache-first',
            errorPolicy: 'all',
        },
        mutate: {
            errorPolicy: 'all',
        },
    },
})
