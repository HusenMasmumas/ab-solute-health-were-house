import React from "react";
import type { RouteObject } from "react-router-dom";
import { routes } from "routes/route.access";
import { useRoutes, Navigate } from "react-router-dom";
import { Permission, RouteCustom, ElementRender } from "routes/route.interface";
import RequireAuth from "routes/RequireAuth";
import { mocRoleAuth } from "./mocRoleAuth";

type Props = {};

const BankComponent = (props: Props) => {
  return <div />;
};

const RenderRoute = (props: Props) => {
  const permissionAllow: Permission[] = mocRoleAuth.role.member;

  const renderElementComponent = ({ obj }: ElementRender): RouteObject => {
    let Component: React.ReactNode = obj.element || <BankComponent />;

    if (!obj.element && !!obj.navigateElement) {
      return {
        ...obj,
        element: <Navigate to={obj.navigateElement.to} replace={true} />,
      } as RouteObject;
    }
    if (!!obj.requireAuth) {
      return {
        ...obj,
        element: (
          <RequireAuth route={obj} permissionAllow={permissionAllow}>
            {Component as React.ReactNode}
          </RequireAuth>
        ),
      } as RouteObject;
    } else {
      return { ...obj, element: Component } as RouteObject;
    }
  };
  const mapElementRoutesOfChildren = (
    routeChildren: RouteCustom[]
  ): RouteObject[] => {
    const newChildren: RouteObject[] = routeChildren.map((route) => {
      let newChild: RouteObject = route as RouteObject;
      if (!!route.navigateElement || !!route.element) {
        newChild = renderElementComponent({ obj: route });
      }
      if (!!route.children?.length) {
        newChild = {
          ...newChild,
          children: mapElementRoutesOfChildren(route.children),
        } as RouteObject;
      }
      return newChild;
    });
    return newChildren;
  };
  const mapRoutes: RouteObject[] = routes.map((route) => {
    let newRoute: RouteObject = route as RouteObject;
    if (!!route.navigateElement || !!route.element) {
      newRoute = renderElementComponent({ obj: route });
    }
    if (!!route.children?.length) {
      newRoute = {
        ...newRoute,
        children: mapElementRoutesOfChildren(route.children),
      } as RouteObject;
    }
    return newRoute;
  });

  let element = useRoutes(mapRoutes);
  return element;
};

export default RenderRoute;
