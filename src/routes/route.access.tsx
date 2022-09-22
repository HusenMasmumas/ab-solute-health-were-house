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
import ManageWarehouseManagement from "page/warehouse_management/manage_warehouse_management/manage_warehouse_management";
import ManagePurcheaseOrder from "page/purchase_order/manage";
import OrderReport from "page/report/orderReport";
import ExpirationReport from "page/report/expirationReport";
import DamageReport from "page/report/damagedReport";
import StockReport from "page/report/stockReport";
import ImportedReport from "page/report/importedReport";
import UserManagement from "page/manage_user/user";
import RoleManagement from "page/manage_user/role";
import OvertimePurchease from "page/purchase_order/overtime";
import StoreCabinet from "page/warehouse_management/storage_cabinet/store_cabinet";
import ManageStroecabinet from "page/warehouse_management/storage_cabinet/manage_store_cabinet/manage_store_cabinet";
import CreatePurchase from "page/purchase_order/CreatePurchase";
import ApprovePurchase from "page/purchase_order/ApprovePurchase";

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
        // children: [
        //   { index: true, navigateElement: { to: "/warehouse-management" } },
        //   {
        //     path: "manage-warehouse-management",
        //     keyName: "/warehouse-management/manage-warehouse-management",
        //     requireAuth: true,
        //     element: <ManageWarehouseManagement />,
        //   },
        //   {
        //     path: "store-cabinet",
        //     keyName: "/warehouse-management/store-cabinet",
        //     requireAuth: true,
        //     element: <StoreCabinet />,
        //   },
        // ],
      },
      {
        path: "/manage-warehouse-management",
        keyName: "manage-warehouse-management",
        requireAuth: true,
        element: <ManageWarehouseManagement />,
      },
      {
        path: "/store-cabinet",
        keyName: "store-cabinet",
        requireAuth: true,
        element: <StoreCabinet />,
      },
      {
        path: "/manage-store-cabinet",
        keyName: "manage-store-cabinet",
        requireAuth: true,
        element: <ManageStroecabinet />,
      },
      {
        path: "/manage-store-cabinet/:id",
        keyName: "manage-store-cabinet-id",
        requireAuth: true,
        element: <ManageStroecabinet />,
      },
      {
        path: "/purchase-order/manage",
        keyName: "purchase-order/manage",
        requireAuth: true,
        element: <ManagePurcheaseOrder />,
      },
      {
        path: "purchase-order/create",
        keyName: "purchase-order/create",
        requireAuth: true,
        element: <CreatePurchase />,
      },
      {
        path: "purchase-order/approve",
        keyName: "purchase-order/approve",
        requireAuth: true,
        element: <ApprovePurchase />,
      },
      {
        path: "/report",
        keyName: "report",
        requireAuth: true,
        children: [
          { index: true, navigateElement: { to: "/orderReport" } },
          {
            path: "orderReport",
            keyName: "report/orderReport",
            requireAuth: true,
            element: <OrderReport />,
          },
          {
            path: "expirationReport",
            keyName: "report/expirationReport",
            requireAuth: true,
            element: <ExpirationReport />,
          },
          {
            path: "damageReport",
            keyName: "report/damageReport",
            requireAuth: true,
            element: <DamageReport />,
          },
          {
            path: "stockReport",
            keyName: "report/stockReport",
            requireAuth: true,
            element: <StockReport />,
          },
          {
            path: "importedReport",
            keyName: "report/importedReport",
            requireAuth: true,
            element: <ImportedReport />,
          },
        ],
      },

      {
        path: "/stores-branches",
        keyName: "stores-branches",
        requireAuth: true,
        element: <StoresBranches />,
      },

      {
        path: "/user",
        keyName: "manage-user",
        requireAuth: true,
        children: [
          { index: true, navigateElement: { to: "/manage" } },
          {
            path: "manage",
            keyName: "user/manage",
            requireAuth: true,
            element: <UserManagement />,
          },
          {
            path: "role",
            keyName: "user/role",
            requireAuth: true,
            element: <RoleManagement />,
          },
        ],
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
