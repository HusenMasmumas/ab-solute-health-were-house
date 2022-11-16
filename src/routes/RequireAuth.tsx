import React from "react";
import { useAuthContextState } from "context/Auth/store";
import { useLocation, Navigate } from "react-router-dom";
import { _findObjectOfArrayByKeyName } from "utils/utils";
import { Permission, RouteCustom } from "routes/route.interface";

type Props = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  permissionAllow: Permission[];
  route: RouteCustom;
};
const RequireAuth = ({ children, route, permissionAllow }: Props) => {  
  // const { _setLoading } = useAuthContextDispatch();
  const keyName = route.keyName
    ? route.keyName
    : route.path
    ? route.path.split("/")[1]
    : "";
  let location = useLocation();
  let { auth } = useAuthContextState();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  const permissionMenu = _findObjectOfArrayByKeyName(
    permissionAllow,
    keyName,
    "keyName"
  );

  return !!permissionMenu ? (
    (children as JSX.Element)
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
