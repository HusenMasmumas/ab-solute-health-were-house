import { useTranslation } from "react-i18next";
import Picture1 from "assets/img/pic-02.png";
import Picture2 from "assets/img/pic-04.png";
import { useNavigate, useLocation } from "react-router-dom";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { ReactComponent as ArrowIcon } from "assets/Icon/Arrow.svg";
import { ReactComponent as DotIcon } from "assets/Icon/dot.svg";
import CImage from "component/Image/CImage";
import ContentContainer from "component/container/ContentContainer";

const WarehouseManagement = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const data = [
    { id:1, picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A1" },
    { id:2, picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A2" },
    { id:3, picture: Picture2, code: "A00124680", storeNo: "ตู้จัดเก็บ A3" },
    { id:4, picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A4" },
    { id:5, picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A5" },
    { id:6, picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A6" },
    { id:7, picture: Picture2, code: "A00124680", storeNo: "ตู้จัดเก็บ A7" },
    { id:8, picture: Picture1, code: "A00124680", storeNo: "ตู้จัดเก็บ A8" },
    { id:9, picture: Picture2, code: "A00124680", storeNo: "ตู้จัดเก็บ A9" },
    { id:10, picture: '', code: "A00124680", storeNo: "ตู้จัดเก็บ A10" },
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
    <>
      <CHeader
        keyHeader="warehouseManagement"
        arrPath={["warehouseManagement"]}
        buttons={[
          { 
            colorButton: 'green',
            keytext: 'createLocker',
            fn:  () => {
                  navigate("/warehouse-management/create-inventory");
            }
          }
        ]}
      />
      <ContentContainer>
      <SearchForm elements={elements} onFinish={onFinish} />
      <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-4 mt-[12px;]">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px] hover:border-darkblue hover:border"
            >
              <div className="grid justify-end items-end">
                <div className="w-[28px] h-[28px] bg-lightsky text-green rounded-[5px] grid justify-center items-center hover:cursor-pointer">
                  <DotIcon
                    onClick={() => {
                      navigate("/warehouse-management/create-inventory", {state:{id: item.id }} );
                    }}
                  />
                </div>
              </div>
              <div className="grid justify-center items-center">
                <CImage
                  src={item.picture}
                  width={"98%"}
                  height={"98%"}
                  preview={false}
                />
              </div>
              <div>
                <span className="text-lightgray !mb-0">{`${t(item.code)}`}</span>
              </div>
              <div className="grid grid-cols-2 content-center !place-content-between">
                <span className="text-lightblue text-[20px] font-bold flex items-center">
                  {item.storeNo}
                </span>
                <div className=" text-green  w-full flex justify-end" >
                  <ArrowIcon className="hover:cursor-pointer w-12" onClick={()=>{navigate("/warehouse-management/store-cabinet", {state:{id: item.id }} )}}/> 
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
