import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import CreateForm from "component/Form/createForm";
import { IsearchFormItem } from "component/Form/searchForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import type { RadioChangeEvent } from "antd";
import { Radio, Tabs } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import CreateDataForm from "./craete_data_form";
import CreateDetailForm from "./create_detail_form";

const ManageStoreCabinet = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const Options = Select;
  // const navigate = useNavigate();
  // const param = useParams();
  const [size, setSize] = useState<SizeType>("small");

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
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
      <div className="mt-[24px]">
        <Tabs defaultActiveKey="1" size="large" type="card">
          <Tabs.TabPane tab="ข้อมูลสินค้า" key="1">
            <CreateDataForm></CreateDataForm>
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
