import { lazy } from "react";

// PAGE
const DashboardPage = lazy(() => import("../pages/admin/DashboardPage"));

const privateRoutes = [
  {
    path: "/admin/dashboard",
    key: "dashboard_admin",
    exact: true,
    name: "Dashboard Admin",
    element: <DashboardPage />,
  },
];

export default privateRoutes;
