import DefaultLayout from "layout/DefaultLayout";

import LoginPage from "page/login_page";
import NoneLayout from "layout/NoneLayout";
import Page404 from "page/error/Page404";
import Page500 from "page/error/Page500";
import { RouteCustom } from "routes/route.interface";
import Register from "page/register";
import OverAllPage from "page/over_all";
import WarehouseManagement from "page/warehouse_management/inventory_management";
import StoresBranches from "page/stores_branches";
import ManagePurcheaseOrder from "page/purchase_order/index";
import OrderReport from "page/report/orderReport";
import ExpirationReport from "page/report/expirationReport";
import DamageReport from "page/report/damagedReport";
import StockReport from "page/report/stockReport";
import ImportedReport from "page/report/importedReport";
import UserManagement from "page/manage_user/user";
import RoleManagement from "page/manage_user/role";
import CreateUser from "page/manage_user/user/create_user";
import CreateRole from "page/manage_user/role/craete_role";
import CreatePurchase from "page/purchase_order/order/CreatePurchase";
import StoreCabinet from "page/warehouse_management/inventory_management/storage_cabinet";
import ManageStoreCabinet from "page/warehouse_management/inventory_management/storage_cabinet/create_store_cabinet";
import CreateStore from "page/stores_branches/create_stores";
import CreateInventory from "page/warehouse_management/inventory_management/craete/edit_inventory";
import ProductsManagemnet from "page/warehouse_management/products_management";
import CreateProduct from "page/warehouse_management/products_management/create_products";
import Examine from "page/purchase_order/order/Examine";
import CreateStoreCabinet from "page/warehouse_management/inventory_management/storage_cabinet/create_store_cabinet";
import PreviewPrepare from "page/purchase_order/prepare/Preview";
import EditPrepare from "page/purchase_order/prepare/EditPrepare";

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
        children: [
          { index: true, navigateElement: { to: "/inventory-management" } },
          {
            path: "inventory-management",
            keyName: "/warehouse-management/inventory-management",
            requireAuth: true,
            element: <WarehouseManagement />,
          },
          {
            path: "create-inventory",
            keyName: "/warehouse-management/create-inventory",
            requireAuth: true,
            element: <CreateInventory />,
          },
          {
            path: "store-cabinet",
            keyName: "/warehouse-management/store-cabinet",
            requireAuth: true,
            element: <StoreCabinet />,
          },
          {
            path: "create-Create-store-cabinet",
            keyName: "/warehouse-management/store-cabinet",
            requireAuth: true,
            element: <CreateStoreCabinet />,
          },
          {
            path: "create-store-cabinet",
            keyName: "/warehouse-management/create-store-cabinet",
            requireAuth: true,
            element: <ManageStoreCabinet />,
          },
          {
            path: "create-store-cabinet/:id",
            keyName: "/warehouse-management/create-store-cabinet-id",
            requireAuth: true,
            element: <ManageStoreCabinet />,
          },
          {
            path: "products-management",
            keyName: "/warehouse-management/products-management",
            requireAuth: true,
            element: <ProductsManagemnet />,
          },
          {
            path: "craete-products-management",
            keyName: "/warehouse-management/craete-products-management",
            requireAuth: true,
            element: <CreateProduct />,
          },
        ],
      },

      {
        path: "/purchase-order/manage",
        keyName: "purchase-order/manage",
        requireAuth: true,
        element: <ManagePurcheaseOrder />,
      },
      {
        path: "purchase-order/previewPrepare",
        keyName: "purchase-order/previewPrepare",
        requireAuth: true,
        element: <PreviewPrepare />,
      },
      {
        path: "purchase-order/editPrepare",
        keyName: "purchase-order/editPrepare",
        requireAuth: true,
        element: <EditPrepare />,
      },
      {
        path: "purchase-order/create",
        keyName: "purchase-order/create",
        requireAuth: true,
        element: <CreatePurchase />,
      },
      {
        path: "purchase-order/examine",
        keyName: "purchase-order/examine",
        requireAuth: true,
        element: <Examine />,
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
        path: "/craete-stores-branches",
        keyName: "craete-stores-branches",
        requireAuth: true,
        element: <CreateStore />,
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
          {
            path: "create-user",
            keyName: "user/craete-user",
            requireAuth: true,
            element: <CreateUser />,
          },
          {
            path: "create-role",
            keyName: "user/craete-role",
            requireAuth: true,
            element: <CreateRole />,
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
