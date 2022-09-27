import { Layout, Menu, Image } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./style.module.css";
import "./style.css";
import { ReactComponent as MenuBar } from "assets/Icon/menubar/Menu.svg";
import { ReactComponent as MenuBar1 } from "assets/Icon/menubar/Menu1.svg";
import { ReactComponent as MenuBar2 } from "assets/Icon/menubar/Menu2.svg";
import { ReactComponent as MenuBar3 } from "assets/Icon/menubar/Menu3.svg";
import { ReactComponent as MenuBar4 } from "assets/Icon/menubar/Menu4.svg";
import { ReactComponent as MenuBar5 } from "assets/Icon/menubar/Menu5.svg";
import { ReactComponent as ActiveMenuBar } from "assets/Icon/active/Menu.svg";
import { ReactComponent as ActiveMenuBar1 } from "assets/Icon/active/Menu1.svg";
import { ReactComponent as ActiveMenuBar2 } from "assets/Icon/active/Menu2.svg";
import { ReactComponent as ActiveMenuBar3 } from "assets/Icon/active/Menu3.svg";
import { ReactComponent as ActiveMenuBar4 } from "assets/Icon/active/Menu4.svg";
import { ReactComponent as ActiveMenuBar5 } from "assets/Icon/active/Menu5.svg";
import Logo from "assets/img/logo.png";
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
      "cursor-pointer duration-500 relative !hover:text-white !bg-white",
      inActive,
      styles.inNav_select
    );
  };

  const activeSubMenu = (page: string) => {
    const inActive =
      localPath[2]?.toLowerCase() === page.toLowerCase()
        ? styles.Sub_Nav_select
        : "";

    return clsx(
      "cursor-pointer duration-500 relative !hover:text-white !text-[18px]",
      inActive,
      styles.sub_inNav_select
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
        inactive: <MenuBar className="w-6 h-6 hover:fill-white" />,
        active: <ActiveMenuBar className="w-6 h-6 " />,
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
        inactive: <MenuBar1 className="w-6 h-6 " />,
        active: <ActiveMenuBar1 className="w-6 h-6 " />,
      }),
      className: activeMenu("warehouse-management"),
      style: {
        height: "60px",
        display: "flex",
      },
    },
    {
      key: "purchase-order/manage",
      label: isTabletSize && openDrawer ? null : t("purchaseOrderManagement"),
      page: "Purchase order",
      icon: activeIcon("purchase-order", {
        inactive: <MenuBar2 className="w-6 h-6" />,
        active: <ActiveMenuBar2 className="w-6 h-6" />,
      }),
      className: activeMenu("purchase-order"),
      style: {
        height: "60px",
        display: "flex",
      },
    },
    {
      key: "/report",
      label: isTabletSize && openDrawer ? null : t("report"),
      page: "Report",
      icon: activeIcon("Report", {
        inactive: <MenuBar3 className="w-6 h-6" />,
        active: <ActiveMenuBar3 className="w-6 h-6" />,
      }),
      className: activeMenu("report"),

      children: [
        {
          label: t("orderReport"),
          key: "report/orderReport",
          className: activeSubMenu("orderReport"),
          style: {
            height: "60px",
            display: "flex",
            backgroundColor: "#FFFFFF",
          },
        },
        {
          label: t("expirationReport"),
          key: "report/expirationReport",
          className: activeSubMenu("expirationReport"),
          style: {
            height: "60px",
            display: "flex",
            backgroundColor: "#FFFFFF",
          },
        },
        {
          label: t("damageReport"),
          key: "report/damageReport",
          className: activeSubMenu("damageReport"),
          style: {
            height: "60px",
            display: "flex",
            backgroundColor: "#FFFFFF",
          },
        },
        {
          label: t("stockReport"),
          key: "report/stockReport",
          className: activeSubMenu("stockReport"),
          style: {
            height: "60px",
            display: "flex",
            backgroundColor: "#FFFFFF",
          },
        },
        {
          label: t("importedReport"),
          key: "report/importedReport",
          className: activeSubMenu("importedReport"),
          style: {
            height: "60px",
            display: "flex",
            backgroundColor: "#FFFFFF",
          },
        },
      ],
    },

    {
      key: "/stores-branches",
      label: isTabletSize && openDrawer ? null : t("stores&branches"),
      page: "Stores & Branches",
      icon: activeIcon("stores-branches", {
        inactive: <MenuBar4 className="w-6 h-6 " />,
        active: <ActiveMenuBar4 className="w-6 h-6 fill-white" />,
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
        inactive: <MenuBar5 className="w-6 h-6  " />,
        active: <ActiveMenuBar5 className="w-6 h-6 fill-white" />,
      }),
      className: activeMenu("manage-user"),
      children: [
        {
          label: isTabletSize && openDrawer ? null : t("user"),
          key: "user/manage",
          className: activeSubMenu("manage"),
          style: {
            height: "60px",
            display: "flex",
            backgroundColor: "#FFFFFF",
          },
        },
        {
          label: isTabletSize && openDrawer ? null : t("role"),
          key: "user/role",
          className: activeSubMenu("role"),
          style: {
            height: "60px",
            display: "flex",
            backgroundColor: "#FFFFFF",
          },
        },
      ],
    },
  ];

  return (
    <Layout className={clsx("flex")}>
      <Sider
        width={270}
        className="cto_sider site-layout-background !bg-[#ffffff]  !min-h-screen !text-white hidden md:block border-r-4"
        trigger={null}
        collapsible
        collapsed={isTabletSize && openDrawer}
        breakpoint="xxl"
        onBreakpoint={(broken) => {
          setIsTabletSize(broken);
        }}
      >
        <Image
          className="h-[60px] bg-white flex justify-center items-center px-[28px]"
          src={Logo}
          preview={false}
        />
        <Menu
          mode="inline"
          onClick={(e) => onChangePath(e.key)}
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={["sub1"]}
          selectedKeys={KeyCur}
          style={{
            borderRight: 0,
            color: "#fff",
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
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
