import React, { useEffect } from "react";
import { Select } from "antd";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import "./style.css";
import { ThemeContext } from "context/SwitchTheam";
import { useTranslation } from "react-i18next";
import Profile from "assets/img/profile-2.jpg";
import { Image } from "antd";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useAuthContextDispatch } from "context/Auth/store";
interface Props {
  setOpenDrawer: (value: boolean) => void;
  openDrawer: boolean;
}

const Hader = ({ setOpenDrawer, openDrawer }: Props) => {
  const { Option } = Select;
  const { t, i18n } = useTranslation();
  const { setTheme, getTheme }: any = React.useContext(ThemeContext);
  const [crrLanguage, setLanguage] = React.useState("th");

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

  function changeLanguageHandler(lang: string) {
    setLanguage(lang);
    window.localStorage.setItem("i18nextLng", lang);
    i18n.changeLanguage(lang);
  }
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
        <div className="h-14 flex items-center ">
          <Select
            defaultValue="th"
            className="flex !text-[16px] !font-semibold cto_select tracking-wider  w-32 !px-2"
            suffixIcon={<ChevronDownIcon className="w-6 text-[#65a6e9]" />}
            onChange={changeLanguageHandler}
            value={crrLanguage}
          >
            <Option value="th" className="!text-[16px] ">
              TH
            </Option>
            <Option value="en" className="!text-[16px] ">
              EN
            </Option>
          </Select>
        </div>
        <Dropdown overlay={menu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <div className="flex items-center space-x-5">
              <div className="max-h-12 w-12 ml-4 bg-[#F2F8FF] rounded-full border-2 border-[#3B8DE2]">
                <Image
                  src={Profile}
                  preview={false}
                  style={{ borderRadius: "100%" }}
                />
              </div>
              <div className="h-auto ml-4 py-1 flex flex-col leading-3 justify-center ">
                <span className="text-lg text-[#FFFFFF] dark:text-[#FFFFFF]">
                  NongPang Prakaifa
                </span>
                <span className="text-[#FFFFFF] dark:text-[#FFFFFF] text-base -mt-2 dark:opacity-50">
                  Super Admin
                </span>
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
