import React, { useEffect } from "react";
import { ReactComponent as Moon } from "assets/mode/moon.svg";
import { ReactComponent as Sun } from "assets/mode/sun.svg";
import { ReactComponent as Dark } from "assets/mode/Dark.svg";
import { ReactComponent as Light } from "assets/mode/Light.svg";
import { Select } from "antd";
import { ChevronDownIcon, MinusIcon } from "@heroicons/react/24/solid";
import "./style.css";
import { ThemeContext } from "context/SwitchTheam";
import { useTranslation } from "react-i18next";
import Profile from "../../../assets/img/profile-2.jpg";
import { Image } from "antd";

interface Props {
  setOpenDrawer: (value: boolean) => void;
  openDrawer: boolean;
}

const Hader = ({ setOpenDrawer, openDrawer }: Props) => {
  const { Option } = Select;
  const { t, i18n } = useTranslation();
  const { setTheme, getTheme }: any = React.useContext(ThemeContext);
  const [crrLanguage, setLanguage] = React.useState("th");

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
    // <div className="header duration-500 bg-gradient-to-r from-[#148ce7] dark:from-[#091a36] dark:to-[#20252d] py-2 px-6  to-white min-h-[80px] border-b-4 dark:border-[#16181b] flex justify-between items-center">
    <div className="header duration-500 bg-[#01438F] dark:bg-black py-2 px-6  min-h-[90px] flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 cursor-pointer block 2xl:hidden"
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
        >
          <MinusIcon className="w-full h-full my-auto text-secondary-default cursor-pointer dark:fill-white " />
        </div>
        <div className="text-[#123265] dark:text-white text-base xl:text-lg 2xl:text-[28px] flex">
          {/* <span className="font-bold  ">Template </span> */}
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-14 flex items-center ">
          <Select
            defaultValue="th"
            className="flex !text-2xl !font-semibold cto_select tracking-wider  w-32 !px-2"
            suffixIcon={<ChevronDownIcon className="w-6 text-[#65a6e9]" />}
            onChange={changeLanguageHandler}
            value={crrLanguage}
          >
            <Option value="th" className="!text-2xl">
              TH
            </Option>
            <Option value="en" className="!text-2xl">
              EN
            </Option>
          </Select>
        </div>

        <div className=" gap-1 px-2 py-1 flex justify-center items-center rounded-full bg-[#F2F8FF] dark:bg-[#16181c] duration-500 ">
          <div
            className=" rounded-full flex justify-center items-center bg-white dark:bg-[#16181c] duration-500 w-8 h-8 cursor-pointer"
            onClick={() => {
              setTheme.SetLight();
            }}
          >
            {getTheme() === "light" ? (
              <Sun className=" object-cover p-2 fill-white stroke-primary-default stroke-[1px]" />
            ) : (
              <Light className=" object-cover p-2 fill-white stroke-white stroke-[1px]" />
            )}
          </div>
          <div
            className=" rounded-full flex justify-center items-center w-8 h-8 hover:bg-white dark:bg-[#20252d] duration-500 group cursor-pointer"
            onClick={() => {
              setTheme.SetDark();
            }}
          >
            {getTheme() === "dark" ? (
              <Dark className=" object-cover p-2 fill-white stroke-primary-default stroke-[1px]" />
            ) : (
              <Moon className=" object-cover p-2 fill-white stroke-primary-default stroke-[1px]" />
            )}
          </div>
        </div>

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
        <ChevronDownIcon className="w-6 text-[#65a6e9] ml-8" />
      </div>
    </div>
  );
};

export default Hader;
