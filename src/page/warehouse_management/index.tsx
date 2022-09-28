import { Image } from "antd";
import { useTranslation } from "react-i18next";
import Picture1 from "../../assets/img/pic-02.png";
import Picture2 from "../../assets/img/pic-04.png";
import { useNavigate } from "react-router-dom";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { ReactComponent as ArrowIcon } from "../../assets/Icon/Arrow.svg";
import { ReactComponent as DotIcon } from "../../assets/Icon/dot.svg";

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
      <div className="bg-bgcolor">
        <CHeader
          keyHeader="warehouseManagement"
          nevigate={{
            keytext: "createLocker",
            fn: () => {
              navigate("/manage-warehouse-management");
            },
          }}
          arrPath={["warehouseManagement"]}
        />
      </div>
      <div className="mt-[24px]">
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>
      {/* card */}
      <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-4 mt-[12px;]">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px] hover:border-darkblue hover:border"
            >
              <div className="grid justify-end items-end">
                <div className="w-[28px] h-[28px] bg-lightsky text-green rounded-[5px] grid justify-center items-center">
                  <DotIcon
                    onClick={() => {
                      navigate("/manage-warehouse-management");
                    }}
                  />
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
                  <ArrowIcon />
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
