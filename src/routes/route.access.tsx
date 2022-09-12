import DefaultLayout from "layout/DefaultLayout";

import LoginPage from "page/login_page";
import NoneLayout from "layout/NoneLayout";
import Page404 from "page/error/Page404";
import Page500 from "page/error/Page500";
import { RouteCustom } from "routes/route.interface";
import Register from "page/register";
import OverAllPage from "page/over_all";
import WarehouseManagement from "page/warehouse_management";
import PurchaseOrder from "page/purchase_order";
import Report from "page/report";
import StoresBranches from "page/stores_branches";
import ManageUser from "page/manage_user";

export const _routesDefault: RouteCustom[] = [
  {
    path: "/error",
    element: <NoneLayout />,
    children: [
      { path: "/error/404", element: <Page404 /> },
      { path: "/error/500", element: <Page500 /> },
      { path: "*", navigateElement: { to: "/error/404" } },
      { index: true, navigateElement: { to: "/error/500" } },
    ],
  },
  { path: "/login", element: <LoginPage />, requireAuth: false },
  { path: "/register", element: <Register />, requireAuth: false },
  { path: "*", navigateElement: { to: "/error/404" }, requireAuth: false },
];
export const _requirePermission: RouteCustom[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, navigateElement: { to: "/over-all" } },

      {
        path: "/over-all",
        keyName: "over-all",
        requireAuth: true,
        element: <OverAllPage />,
      },
      {
        path: "/warehouse-management",
        keyName: "warehouse-management",
        requireAuth: true,
        element: <WarehouseManagement />,
      },

      {
        path: "/purchase-order",
        keyName: "purchase-order",
        requireAuth: true,
        element: <PurchaseOrder />,
      },

      {
        path: "/report",
        keyName: "report",
        requireAuth: true,
        element: <Report />,
      },

      {
        path: "/stores-branches",
        keyName: "stores-branches",
        requireAuth: true,
        element: <StoresBranches />,
      },

      {
        path: "/manage-user",
        keyName: "manage-user",
        requireAuth: true,
        element: <ManageUser />,
      },

      {
        path: "/404",
        keyName: "error404",
        requireAuth: false,
        element: <Page404 />,
      },

      { path: "*", keyName: "error", navigateElement: { to: "/404" } },
    ],
  },
];

export const routes: RouteCustom[] = [..._requirePermission, ..._routesDefault];

export const getRoutes = () => {};
