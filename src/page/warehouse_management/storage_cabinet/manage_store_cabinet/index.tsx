import { Button, Form } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import type { RadioChangeEvent } from "antd";
import { Tabs } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import CreateDataForm from "./craete_data_form";
import CreateDetailForm from "./create_detail_form";
import Table, { ColumnsType } from "antd/lib/table";
import CHeader from "component/headerPage/Header";

const ManageStoreCabinet = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  // const param = useParams();
  const [size, setSize] = useState<SizeType>("small");

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const columns = [
    {
      title: "SKU",
      dataIndex: "sku",
    },
    {
      title: "สี",
      dataIndex: "colour",
    },
    {
      title: "จำนวน",
      dataIndex: "amount",
    },
    {
      title: "หมายเหตุ",
      dataIndex: "ps",
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
          <Button className="!h-[40px] !rounded-[4px] !text-[20px]">
            ยกเลิก
          </Button>
          <Button className="!h-[40px] !rounded-[4px] !text-[20px] !text-white !bg-green">
            บันทึก
          </Button>
        </div>
      </div>
      <div className="mt-[24px]">
        <Tabs defaultActiveKey="1" size="large" type="card">
          <Tabs.TabPane tab="ข้อมูลสินค้า" key="1">
            <CreateDataForm></CreateDataForm>
            <Table
              columns={columns}
              // dataSource={dataSource}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="รายละเอียด" key="2">
            <CreateDetailForm></CreateDetailForm>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default ManageStoreCabinet;
