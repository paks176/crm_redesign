import { createFileRoute } from '@tanstack/react-router'
import RecoveryPage from "@/pages/RecoveryPage.tsx";

export const Route = createFileRoute('/_public/recovery')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RecoveryPage />
}
