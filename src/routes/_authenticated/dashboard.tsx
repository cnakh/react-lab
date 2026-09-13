import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
});
