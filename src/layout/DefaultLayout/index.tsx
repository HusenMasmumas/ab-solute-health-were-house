import { Layout, Image, Skeleton, Spin } from "antd";
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
import { LoadingOutlined } from "@ant-design/icons";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import CustomMenu from "component/SideNav/sideNav";
const { Header, Content, Sider } = Layout;

type Props = {};

const DefaultLayout = (props: Props) => {
  let navigate = useNavigate();
  let location = useLocation();
  const [Path, setPath] = useState(location.pathname);
  const [openDrawer, setOpenDrawer] = useState(true);
  const [isTabletSize, setIsTabletSize] = useState(false);
  let KeyCur = ["/stores-branches"];
  const { t } = useTranslation();
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  useEffect(() => {
    setPath(location.pathname);

    MenuList.forEach((item) => {
      if (localPath[1].toLowerCase() === item.page.toLowerCase()) {
        KeyCur[0] = item.key;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const localPath = Path.split("/");
  const activeMenu = (page: string) => {
    const haveSub = ["warehouse-management", "report", "user"];
    let inActive;
    if (
      localPath[1].toLowerCase() === page.toLowerCase() &&
      haveSub.includes(page.toLowerCase())
    ) {
      inActive = styles.Nav_select_have_sub;
    } else if (localPath[1].toLowerCase() === page.toLowerCase()) {
      inActive = styles.Nav_select;
    } else {
      inActive = styles.inNav_select;
    }

    return clsx(
      "cursor-pointer relative !hover:text-white !bg-white",
      inActive
    );
  };

  const activeSubMenu = (path1: string, page: string) => {
    console.log(localPath[2]?.toLowerCase() === page.toLowerCase());
    let style;
    if (localPath[2]?.toLowerCase() === page.toLowerCase()) {
      style = styles.Sub_Nav_Active;
    } else if (localPath[1]?.toLowerCase() === path1.toLowerCase()) {
      style = styles.Sub_Nav_near_Active;
    } else {
      style = styles.Sub_Nav_InActive;
    }
    return clsx("!h-[65px] !bg-white", style);
  };

  const activeIcon = (page: string, icon: any) => {
    const IconAcIn =
      localPath[1].toLowerCase() === page.toLowerCase()
        ? icon.active
        : icon.inactive;

    return IconAcIn;
  };

  const onChangePath = (pathname: string) => {
    navigate("../" + pathname, { replace: true });
  };

  const MenuList = [
    {
      key: "/over-all",
      label: isTabletSize && openDrawer ? null : t("overAll"),
      page: "over-all",
      icon: activeIcon("over-all", {
        inactive: <MenuBar className="w-6 h-6 hover:fill-white" />,
        active: <ActiveMenuBar className="w-6 h-6 " />,
      }),
      className: activeMenu("over-all"),
      style: {
        height: "65px",
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
      children: [
        {
          label: t("manageInventory"),
          key: "warehouse-management/inventory-management",
          className: activeSubMenu(
            "warehouse-management",
            "inventory-management"
          ),
        },
        {
          label: t("manageGoods"),
          key: "warehouse-management/products-management",
          className: activeSubMenu(
            "warehouse-management",
            "products-management"
          ),
        },
      ],
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
        height: "65px",
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
          className: activeSubMenu("report", "orderReport"),
        },
        {
          label: t("expirationReport"),
          key: "report/expirationReport",
          className: activeSubMenu("report", "expirationReport"),
        },
        {
          label: t("damageReport"),
          key: "report/damageReport",
          className: activeSubMenu("report", "damageReport"),
        },
        {
          label: t("stockReport"),
          key: "report/stockReport",
          className: activeSubMenu("report", "stockReport"),
        },
        {
          label: t("importedReport"),
          key: "report/importedReport",
          className: activeSubMenu("report", "importedReport"),
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
        height: "65px",
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
          label: t("user"),
          key: "user/manage",
          className: activeSubMenu("manage-user", "manage"),
        },
        {
          label: t("role"),
          key: "user/role",
          className: activeSubMenu("manage-user", "role"),
        },
      ],
    },
  ];

  return (
    <Skeleton active loading={false}>
      <Layout>
        <div className="!overflow-y-auto">
          <Sider
            width={320}
            className="cto_sider site-layout-background !bg-[#FFF] !min-h-screen !text-white hidden md:block border-r-4"
            trigger={null}
            collapsible
            collapsed={isTabletSize && openDrawer}
            breakpoint="xxl"
            onBreakpoint={(broken) => {
              setIsTabletSize(broken);
            }}
          >
            <Image
              className="h-[60px] !bg-[#FFF] flex justify-center items-center px-[40px]"
              src={Logo}
              preview={false}
            />
            <div style={{ overflow: "auto", height: "87vh" }}>
              <CustomMenu
                mode="inline"
                onClick={(e) => onChangePath(e.key)}
                // defaultSelectedKeys={[location.pathname]}
                // selectedKeys={KeyCur}
                style={{
                  borderRight: 0,
                  color: "#000",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                }}
                className="!bg-[#FFF] text-white  flex flex-col !gap-[7px]"
                items={MenuList}
              />
            </div>
          </Sider>
        </div>

        <Layout
          className={clsx(
            "w-full h-full bg-secondary-light dark:bg-[#16181c] duration-500 min-h-screen cto_h transition-all ",
            styles.cto_header
          )}
        >
          {(!!isFetching || !!isMutating) && (
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                margin: "auto",
                zIndex: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="w-[500px] text-center">
                <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />}
                />
              </div>
            </div>
          )}

          <Header
            style={{ position: "sticky", zIndex: 1, width: "100%" }}
            className={clsx(" hidden md:block")}
          >
            <HeaderSection
              setOpenDrawer={setOpenDrawer}
              openDrawer={openDrawer}
            />
          </Header>
          <div>
            <Content
              className="site-layout-background hidden md:block bg-[#F5F5F5] dark:bg-[#16181c] duration-500 h-full  transition-all "
              style={{
                padding: "0px 24px 24px 24px",
                margin: 0,
                minHeight: "100%",
              }}
            >
              <Outlet />
            </Content>
          </div>

          <div className="flex items-center justify-center md:hidden w-screen h-screen">
            <span className="text-3xl font-bold">
              This website does not support mobile size
            </span>
          </div>
        </Layout>
      </Layout>
    </Skeleton>
  );
};

export default DefaultLayout;
