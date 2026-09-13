import { RootLayout } from "@/components/layouts/RootLayout";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});
