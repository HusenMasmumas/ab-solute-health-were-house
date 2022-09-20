import React from "react";
import { Button, Form, Input, Image, Row, Col, Card } from "antd";
import { useTranslation } from "react-i18next";
import Picture1 from "../../assets/img/pic-02.png";
import Picture2 from "../../assets/img/pic-04.png";
import { useNavigate } from "react-router-dom";
import CreateButton from "component/Button/CreateButton";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";

const WarehouseManagement = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const data = [
    { picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A1" },
    { picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A2" },
    { picture: Picture2, code: "A00124680", storeNo: "ตู้จัดเก็บ A3" },
    { picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A4" },
    { picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A5" },
    { picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A6" },
    { picture: Picture2, code: "A00124680", storeNo: "ตู้จัดเก็บ A7" },
    { picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A8" },
    { picture: Picture2, code: "A00124680", storeNo: "ตู้จัดเก็บ A9" },
    { picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A10" },
  ];

  const elements: IsearchFormItem[] = [
    {
      name: "ชื่อตู้เก็บ",
      label: "ชื่อตู้เก็บ",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "รหัสตู้เก็บ",
      label: "รหัสตู้เก็บ",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
  ];

  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-darkblue font-[600] text-[30px] !mb-0">{`${t(
            "warehouseManagement"
          )}`}</h1>
          <p className="!mb-0 text-darkblue">{`${t("จัดการคลังสินค้า")}`}</p>
        </div>
        <div className="grid justify-end items-center">
          <CreateButton
            onClick={() => {
              navigate("/manage-warehouse-management");
            }}
          >
            + สร้างตู้เก็บสินค้า
          </CreateButton>
        </div>
      </div>
      <div className="mt-[24px]">
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>
      {/* card */}
      <div className="grid grid-cols-5 gap-4 mt-[12px;]">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px] hover:border-darkblue hover:border"
            >
              <div className="grid justify-end items-end">
                <div className="w-[28px] h-[28px] bg-lightsky text-green rounded-[5px] grid justify-center items-center">
                  <svg
                    onClick={() => {
                      navigate("/manage-warehouse-management");
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="grid justify-center items-center">
                <Image
                  src={item.picture}
                  width={"98%"}
                  height={"98%"}
                  preview={false}
                ></Image>
              </div>
              <div>
                <span className="text-lightgray !mb-0">{`${t(
                  item.code
                )}`}</span>
              </div>
              <div className="grid grid-cols-2">
                <span
                  className="text-lightblue text-[25px] font-bold"
                  onClick={() => {
                    navigate("/store-cabinet");
                  }}
                >
                  {item.storeNo}
                </span>
                <div className="flex text-green  items-end justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WarehouseManagement;
