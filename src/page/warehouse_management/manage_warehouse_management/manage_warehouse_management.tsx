import { Button, Card, Col, Form, Input, Row } from "antd";
import CreateForm from "component/Form/createForm";
import { IsearchFormItem } from "component/Form/searchForm";
import { useTranslation } from "react-i18next";

const ManageWarehouseManagement = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const element: IsearchFormItem[] = [
    {
      name: "SKU",
      label: "SKU",
      input: {
        type: "input",
      },
    },
    {
      name: "รหัสตู้สินค้า",
      label: "รหัสตู้สินค้า",
      input: {
        type: "input",
      },
    },
    {
      name: "เลือกสีตู้",
      label: "เลือกสีตู้",
      input: {
        type: "select",
        options: {
          values: [
            { key: 1, value: "สีน้ำเงิน", label: "สีน้ำเงิน" },
            {
              key: 2,
              value: "สีเขียว",
              label: "สีเขียว",
            },
          ],
          key: "stateProduct",
          label: "stateProduct",
        },
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
          <CreateForm elements={element} onFinish={onFinish}></CreateForm>
        </div>
      </div>
    </div>
  );
};
export default ManageWarehouseManagement;
