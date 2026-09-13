import { Outlet } from "@tanstack/react-router";

export function AuthenticatedLayout() {
  return (
    <div>
      <header>Admin Header</header>

      <div className="flex">
        <aside>Sidebar</aside>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
