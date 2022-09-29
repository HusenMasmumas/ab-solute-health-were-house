import { Button, Modal } from "antd";
import { Tabs } from "antd";
import CreateDataForm from "./craete_data_form";
import CreateDetailForm from "./create_detail_form";
import Table from "antd/lib/table";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";

const CreateStoreCabinet = () => {
  const { t } = useTranslation();
  const columns = [
    {
      title: "SKU",
      dataIndex: "sku",
      width: "30%",
    },
    {
      title: "สี",
      dataIndex: "colour",
      width: "40%",
    },
    {
      title: "จำนวน",
      dataIndex: "amount",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <CHeader
            keyHeader="warehouseManagement"
            arrPath={["warehouseManagement", "productlist"]}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 justify-end items-center">
          <Button className="!h-[45px] !rounded-[4px] !text-[16px]">
            {`${t("ยกเลิก")}`}
          </Button>
          <Button className="!h-[45px] !rounded-[4px] !text-[16px] !text-white !bg-green">
            {`${t("บันทึก")}`}
          </Button>
        </div>
      </div>
      <div className="mt-[24px]">
        <Tabs defaultActiveKey="1" size="large" type="card">
          <Tabs.TabPane
            className="!text-[20px] font-semibold"
            tab="ข้อมูลสินค้า"
            key="1"
          >
            <CreateDataForm></CreateDataForm>
            <Table
              columns={columns}
              // dataSource={dataSource}
            />
          </Tabs.TabPane>
          <Tabs.TabPane
            className="!text-[20px] font-semibold"
            tab="รายละเอียด"
            key="2"
          >
            <CreateDetailForm></CreateDetailForm>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default CreateStoreCabinet;
