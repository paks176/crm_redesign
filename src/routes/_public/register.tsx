import { createFileRoute } from '@tanstack/react-router'
import RegisterPage from "@/pages/RegisterPage.tsx";

export const Route = createFileRoute('/_public/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RegisterPage />
}
