import '@/shared/assets/styles/App.css'
import '@/shared/assets/styles/index.css'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { ApolloProvider } from "@apollo/client/react"
import { RouterProvider } from "@tanstack/react-router"
import { useQuery } from '@apollo/client/react'
import { client } from '@/app/client.ts'
import Status from '@/shared/graphql/queries/Status.gql'
import { router } from '@/app/router.ts'

function GetStatus () {
    const { loading, error, data } = useQuery(Status)
    if (loading) {
        return <h3>Получение статуса</h3>
    }

    if (error) {
        return <h3 className='status-error'>Ошибка получения статуса</h3>
    }

    if (data) {
        return <h3 className='status-ok'>Статус: Ок</h3>
    }

    return <p>Что-то не так</p>
}

function App() {
    return (
        <ApolloProvider client={ client }>
            <MantineProvider>
                <GetStatus />
                <RouterProvider router={ router } />
            </MantineProvider>
        </ApolloProvider>
    )
}

export default App
