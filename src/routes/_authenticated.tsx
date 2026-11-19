import { createFileRoute, redirect, Outlet } from '@tanstack/react-router';

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
    component: Outlet,
})