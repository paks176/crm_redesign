import '@/shared/assets/styles/index.css'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { ApolloProvider } from "@apollo/client/react"
import { RouterProvider } from "@tanstack/react-router"
import { client } from '@/app/client.ts'
import { router } from '@/app/router.ts'

export default function App() {
    return (
        <ApolloProvider client={ client }>
            <MantineProvider>
                <RouterProvider router={ router } />
            </MantineProvider>
        </ApolloProvider>
    )
}