import type { RouteObject } from "react-router-dom";
import React,{FC} from "react";




export interface RouteCustom extends Omit<RouteObject, "children"> {
  keyName?: string;
  children?: RouteCustom[];
  requireAuth?: boolean;
  navigateElement?: NavigateElement;
  element?: React.ReactNode;
}


export interface NavigateElement {
  to: string;
}
export interface Permission {
  keyName: string;
  title_en: string;
  title_th: string;
  AccessPermission: string[];
}
export interface ElementRender {
  obj: RouteCustom;
}
