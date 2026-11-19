import { createFileRoute } from '@tanstack/react-router'
import AuthPage from '@/pages/AuthPage.tsx'

export const Route = createFileRoute('/_public/auth')({
    component: AuthPage
})
