import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { AppShell, Burger, Group, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

function AuthenticatedLayout() {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Text fw={700}>Кабинет Сотрудника</Text>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    )
}

export const Route = createFileRoute('/_authenticated')({
    beforeLoad: () => {
        const token = localStorage.getItem('apollo-token')

        if (!token) {
            throw redirect({
                to: '/auth',
                replace: true,
            });
        }
    },
    component: AuthenticatedLayout
})