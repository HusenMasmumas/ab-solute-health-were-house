import { useTranslation } from "react-i18next";
import ImgBlue from "assets/img/pic-02.png";
import ImgGreen from "assets/img/pic-04.png";
import { useNavigate } from "react-router-dom";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { ReactComponent as ArrowIcon } from "assets/Icon/Arrow.svg";
import { ReactComponent as DotIcon } from "assets/Icon/dot.svg";
import CImage from "component/Image/CImage";
import ContentContainer from "component/container/ContentContainer";
import { useGetContainers } from "service/container";
import { useState } from "react";

const WarehouseManagement = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [search, setSearch] = useState<{ name: string; code: string }>();
  const { data: listContainer } = useGetContainers(search);
  const elements: IsearchFormItem[] = [
    {
      name: "name",
      label: "ชื่อตู้เก็บ",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "code",
      label: "รหัสตู้เก็บ",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
  ];

  const onFinish = (values: { name: string; code: string }) => {
    setSearch(values);
  };
  return (
    <>
      <CHeader
        keyHeader="warehouseManagement"
        arrPath={["warehouseManagement"]}
        buttons={[
          {
            colorButton: "green",
            keytext: "createLocker",
            fn: () => {
              navigate("/warehouse-management/create-inventory");
            },
          },
        ]}
      />
      <ContentContainer>
        <SearchForm elements={elements} onFinish={onFinish} />
        <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-4 mt-[12px;]">
          {listContainer?.result[0].data.map((item, index) => {
            return (
              <div
                key={item.id}
                className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px] hover:border-darkblue hover:border"
              >
                <div className="grid justify-end items-end">
                  <div className="w-[28px] h-[28px] bg-lightsky text-green rounded-[5px] grid justify-center items-center hover:cursor-pointer">
                    <DotIcon
                      onClick={() => {
                        navigate("/warehouse-management/create-inventory", {
                          state: { id: item.id },
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="grid justify-center items-center">
                  <CImage
                    src={item.color === "blue" ? ImgBlue : ImgGreen}
                    width={"98%"}
                    height={"98%"}
                    preview={false}
                  />
                </div>
                <div>
                  <span className="text-lightgray !mb-0">{`${t(
                    item.code
                  )}`}</span>
                </div>
                <div className="grid grid-cols-2 content-center !place-content-between">
                  <span className="text-lightblue text-[20px] font-bold flex items-center">
                    {item.name}
                  </span>
                  <div className=" text-green  w-full flex justify-end">
                    <ArrowIcon
                      className="hover:cursor-pointer w-12"
                      onClick={() => {
                        navigate("/warehouse-management/store-cabinet", {
                          state: { id: item.id },
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </>
  );
};

export default WarehouseManagement;
