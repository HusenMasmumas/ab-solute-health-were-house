import React, { useEffect } from "react";
import "./style.css";
import { ThemeContext } from "context/SwitchTheam";
import { useTranslation } from "react-i18next";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useAuthContextDispatch, useAuthContextState } from "context/Auth/store";
import CImage from "component/Image/CImage";
interface Props {
  setOpenDrawer: (value: boolean) => void;
  openDrawer: boolean;
}

const Hader = ({ setOpenDrawer, openDrawer }: Props) => {
  const { i18n } = useTranslation();
  const { setTheme, getTheme }: any = React.useContext(ThemeContext);
  const [crrLanguage, setLanguage] = React.useState("th");
  let { userInfo } = useAuthContextState();
  const { _signOut } = useAuthContextDispatch();

  const menu = (
    <Menu
      onClick={() => _signOut()}
      items={[
        {
          label: (
            <div className="text-[#01438F] text-[21px] h-10 flex items-center justify-center font-semibold">
              ออกจากระบบ
            </div>
          ),
          key: "3",
        },
      ]}
    />
  );
  useEffect(() => {
    if (window.localStorage.getItem("i18nextLng") != undefined) {
      const lang = window.localStorage.getItem("i18nextLng");
      setLanguage(lang as string);
      i18n.changeLanguage(lang as string);
    }
  }, []);
  return (
    <div className="header duration-500 bg-[#01438F] dark:bg-black py-2 px-6  min-h-[90px] flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div
          hidden
          className="w-10 h-10 cursor-pointer block 2xl:hidden"
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
        ></div>
      </div>
      <div className="flex !items-center">
        <Dropdown overlay={menu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <div className="flex items-center space-x-5 border-l-stone-50 border-l-4">
              <div className="max-h-12 w-12 ml-4 bg-[#F2F8FF] rounded-full border-2 border-[#3B8DE2]">
                <CImage.CIcon
                  src={userInfo?.image}
                  preview={false}
                  style={{ borderRadius: "100%" }}
                />
              </div>
              <div className="h-auto ml-4 leading-3 text-lg text-white flex justify-center ">
                <div className="pr-4">
                  <div className="mb-3 font-semibold">{ userInfo?.firstName ?? "undefine" }{'   '}{ userInfo?.firstName ?? "undefine" }</div>
                  <div className="text-[12px] font-semibold">{ userInfo?.role ?? "undefine" }</div>
                </div>
              </div>
              <DownOutlined className="!text-white" />
            </div>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Hader;
