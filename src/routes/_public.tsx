import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { Center, Container, Paper, Stack, Title } from '@mantine/core'

export const Route = createFileRoute('/_public')({
    beforeLoad: () => {
        if (localStorage.getItem('apollo-token')) {
            throw redirect({ to: '/', replace: true })
        }
    },
    component: PublicLayout
});

function PublicLayout() {
    return (
        <Center mih="100vh" bg="gray.1" p="md">
            <Container size="xs" w="100%">
                <Stack align="center" mb="lg">
                    <Title order={2}>Кабинет "Лизинг-трейд"</Title>
                </Stack>
                <Paper withBorder shadow="md" p="xl" radius="md">
                    <Outlet />
                </Paper>
            </Container>
        </Center>
    );
}
