import { Button, Card, Col, Form, Input, Row } from "antd";
import CreateForm from "component/Form/createForm";
import { IsearchFormItem } from "component/Form/searchForm";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const ManageStoreCabinet = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  // const navigate = useNavigate();
  // const param = useParams();

  const elements: IsearchFormItem[] = [
    {
      name: "nameproduct",
      label: "ชื่อสินค้า",
      input: {
        type: "input",
      },
    },
    {
      name: "รหัสสินค้า",
      label: "รหัสสินค้า",
      input: {
        type: "input",
      },
    },
    {
      name: "ราคาต้นทุน",
      label: "ราคาต้นทุน",
      input: {
        type: "input",
      },
    },
    {
      name: "ราคาขาย",
      label: "ราคาขาย",
      input: {
        type: "input",
      },
    },
    {
      name: "จำนวนทั้งหมด",
      label: "จำนวนทั้งหมด",
      input: {
        type: "input",
      },
    },
  ];
  const element: IsearchFormItem[] = [
    {
      name: "SKU",
      label: "SKU",
      input: {
        type: "input",
      },
    },
    {
      name: "สี",
      label: "สี",
      input: {
        type: "select",
        options: {
          values: [
            { key: 1, value: "สีเหลือง", label: "สีเหลือง" },
            {
              key: 2,
              value: "สีแดง",
              label: "สีแดง",
            },
          ],
          key: "stateProduct",
          label: "stateProduct",
        },
      },
    },
    {
      name: "จำนวน ( จำแนกตามสี )",
      label: "จำนวน ",
      input: {
        type: "input",
      },
    },
  ];
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-darkblue font-[600] text-[30px] !mb-0">{`${t(
            "warehouseManagement"
          )}`}</h1>
          <p className="!mb-0 text-darkblue">{`${t("จัดการคลังสินค้า")}`}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-end items-center">
          <Button className="!h-[40px] !rounded-[4px] !text-[20px]">
            ยกเลิก
          </Button>
          <Button className="!h-[40px] !rounded-[4px] !text-[20px] !text-white !bg-green">
            บันทึก
          </Button>
        </div>
      </div>
      <div className="bg-white py-[16px] px-[24px]">
        <div className="text-lightblue text-[22px]">
          <span>ข้อมูลตู้เก็บสินค้า</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        {/* form */}
        <div className="bg-white">
          <CreateForm
            elements={elements}
            onFinish={onFinish}
            initialValues={{ nameproduct: "โซเดียมไบคาร์บอเนต" }} //get api from backend useParam
          ></CreateForm>
        </div>
      </div>
      <div className="bg-white py-[16px] px-[24px] mt-[16px]">
        <div className="text-lightblue text-[22px]">
          <span>ข้อมูลตามประเภท</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        {/* form */}
        <div className="bg-white">
          <CreateForm elements={element} onFinish={onFinish}></CreateForm>
        </div>
        <Button className="grid justify-start items-center !w-[170px] !h-[45px] !text-[20px] !text-darkblue !rounded-[4px] !border-darkblue mt-[16px]">
          + เพิ่มตัวแปร
        </Button>
      </div>
    </div>
  );
};
export default ManageStoreCabinet;
