import { Layout, Menu } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./style.module.css";

import "./style.css";
import { ReactComponent as Logo } from "assets/img/AB.svg";
import { ReactComponent as DashIcon } from "assets/Icon/dashbord_in.svg";
import { ReactComponent as GraphIcon } from "assets/Icon/graph_in.svg";
import { ReactComponent as ReportIcon } from "assets/Icon/report_in.svg";
import { ReactComponent as MapIcon } from "assets/Icon/map_in.svg";
// import { ReactComponent as UserIcon } from "assets/Icon/user_in.svg";
import { ReactComponent as DashIconAC } from "assets/Icon/active/dashbord_ac.svg";
import { ReactComponent as GraphIconAC } from "assets/Icon/active/graph_ac.svg";
import { ReactComponent as ReportIconAC } from "assets/Icon/active/report_ac.svg";
import { ReactComponent as MapIconAC } from "assets/Icon/active/map_ac.svg";
import { ReactComponent as UserIconAC } from "assets/Icon/active/user_ac.svg";
import { UserIcon } from "@heroicons/react/24/solid";

import HeaderSection from "./Header";
import { useTranslation } from "react-i18next";

const { Header, Content, Sider } = Layout;

type Props = {};

const DefaultLayout = (props: Props) => {
  let navigate = useNavigate();
  let location = useLocation();
  const [Path, setPath] = useState(location.pathname);
  const [openDrawer, setOpenDrawer] = useState(true);
  const [isTabletSize, setIsTabletSize] = useState(false);
  let KeyCur = [""];
  const { t } = useTranslation();

  useEffect(() => {
    setPath(location.pathname);
    MenuList.map((item) => {
      if (localPath[1].toLowerCase() === item.page.toLowerCase()) {
        KeyCur[0] = item.key;
      }
    });
  }, [location]);

  const localPath = Path.split("/");
  const activeMenu = (page: string) => {
    const inActive =
      localPath[1].toLowerCase() === page.toLowerCase()
        ? styles.Nav_select
        : "";

    return clsx(
      "cursor-pointer duration-500 relative !hover:text-white ",
      inActive,
      styles.inNav_select
    );
  };

  const activeSubMenu = (page: string) => {
    const inActive =
      localPath[2]?.toLowerCase() === page.toLowerCase()
        ? styles.Nav_select
        : "";

    return clsx(
      "cursor-pointer duration-500 relative !hover:text-white ",
      inActive,
      styles.inNav_select
    );
  };

  const activeIcon = (page: string, icon: any) => {
    const IconAcIn =
      localPath[1].toLowerCase() === page.toLowerCase()
        ? icon.active
        : icon.inactive;

    return IconAcIn;
  };

  const onChangePath = (pathname: string) => {
    navigate(pathname, { replace: true });
  };

  const MenuList = [
    {
      key: "/over-all",
      label: isTabletSize && openDrawer ? null : t("overAll"),
      page: "Over all",
      icon: activeIcon("over-all", {
        inactive: <GraphIcon className="w-6 h-6 fill-white " />,
        active: <GraphIconAC className="w-6 h-6 fill-white" />,
      }),
      className: activeMenu("over-all"),
      style: {
        height: "60px",
        display: "flex",
      },
    },
    {
      key: "/warehouse-management",
      label: isTabletSize && openDrawer ? null : t("warehouseManagement"),
      page: "Warehouse management",
      icon: activeIcon("warehouse-management", {
        inactive: <DashIcon className="w-6 h-6 hover:fill-white" />,
        active: <DashIconAC className="w-6 h-6 fill-white" />,
      }),
      className: activeMenu("warehouse-management"),
      style: {
        height: "60px",
        display: "flex",
      },
    },
    {
      key: "purchase-order",
      label: isTabletSize && openDrawer ? null : t("purchaseOrder"),
      page: "Purchase order",
      icon: activeIcon("warehouse-management", {
        inactive: <MapIcon className="w-6 h-6 hover:fill-white" />,
        active: <MapIconAC className="w-6 h-6 fill-white" />,
      }),
      className: activeMenu("warehouse-management"),

      children: [
        {
          label: isTabletSize && openDrawer ? null : t("purchaseOrderManagement"),
          key: "purchase-order/manage",
          className: activeSubMenu('manage')
        },
        {
          label: isTabletSize && openDrawer ? null : t("overtimepurchaseOrderManagement"),
          key: "purchase-order/overtime",
          className: activeSubMenu('overtime')
        },
      ],
    },
    {
      key: "/report",
      label: isTabletSize && openDrawer ? null : t("report"),
      page: "Report",
      icon: activeIcon("warehouse-management", {
        inactive: <ReportIcon className="w-6 h-6 hover:fill-white" />,
        active: <ReportIconAC className="w-6 h-6 fill-white" />,
      }),
      className: activeMenu("report"),

      children: [
        {
          label: isTabletSize && openDrawer ? null : t("orderReport"),
          key: "report/orderReport",
          className: activeSubMenu('orderReport')
        },
        {
          label: isTabletSize && openDrawer ? null : t("expirationReport"),
          key: "report/expirationReport",
          className: activeSubMenu('expirationReport')
        },
        {
          label: isTabletSize && openDrawer ? null : t("damageReport"),
          key: "report/damageReport",
          className: activeSubMenu('damageReport')
        },
        {
          label: isTabletSize && openDrawer ? null : t("stockReport"),
          key: "report/stockReport",
          className: activeSubMenu('stockReport')
        },
        {
          label: isTabletSize && openDrawer ? null : t("importedReport"),
          key: "report/importedReport",
          className: activeSubMenu('importedReport')
        },
      ],
    },

    {
      key: "/stores-branches",
      label: isTabletSize && openDrawer ? null : t("stores&branches"),
      page: "Stores & Branches",
      icon: activeIcon("stores-branches", {
        inactive: <UserIcon className="w-6 h-6 fill-white" />,
        active: <UserIconAC className="w-6 h-6 fill-white" />,
      }),
      className: activeMenu("stores-branches"),
      style: {
        height: "60px",
        display: "flex",
      },
    },

    {
      key: "/manage-user",
      label: isTabletSize && openDrawer ? null : t("manageUser"),
      page: "Manage user",
      icon: activeIcon("manage-user", {
        inactive: <UserIcon className="w-6 h-6  " />,
        active: <UserIconAC className="w-6 h-6 fill-white" />,
      }),
      className: activeMenu("manage-user"),
      children: [
        {
          label: isTabletSize && openDrawer ? null : t("user"),
          key: "user/manage",
          className: activeSubMenu('manage')
        },
        {
          label: isTabletSize && openDrawer ? null : t("role"),
          key: "user/role",
          className: activeSubMenu('role')
        },
      ],
    },
  ];

  return (
    <Layout className={clsx("flex")}>
      <Sider
        width={270}
        className="cto_sider site-layout-background !bg-[#fcfcfc]  !min-h-screen !text-white hidden md:block border-r-4"
        trigger={null}
        collapsible
        collapsed={isTabletSize && openDrawer}
        breakpoint="xxl"
        onBreakpoint={(broken) => {
          setIsTabletSize(broken);
        }}
      >
        <Menu
          mode="inline"
          onClick={(e) => onChangePath(e.key)}
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={["sub1"]}
          selectedKeys={KeyCur}
          style={{ borderRight: 0, color: "#fff", fontSize: "1.2rem" }}
          className="!bg-[#ffffff] text-white  flex flex-col  "
          items={MenuList}
        />
      </Sider>
      <Layout
        className={clsx(
          "w-full h-full bg-secondary-light dark:bg-[#16181c] duration-500 min-h-screen cto_h transition-all ",
          styles.cto_header
        )}
      >
        <Header className={clsx(" hidden md:block")}>
          <HeaderSection
            setOpenDrawer={setOpenDrawer}
            openDrawer={openDrawer}
          />
        </Header>
        <Content
          className="site-layout-background hidden md:block bg-[#F5F5F5] dark:bg-[#16181c] duration-500 h-full overflow-y-auto transition-all"
          style={{
            padding: 24,
            margin: 0,
            minHeight: "100%",
          }}
        >
          <Outlet />
        </Content>
        <div className="flex items-center justify-center md:hidden w-screen h-screen">
          <span className="text-3xl font-bold">
            This website does not support mobile size{" "}
          </span>
        </div>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
