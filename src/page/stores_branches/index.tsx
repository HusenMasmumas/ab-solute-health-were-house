import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Form, Input, Select, Button } from "antd";
import { BeakerIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const { Option } = Select;
const StoresBranches = () => {
  const { t } = useTranslation();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="bg-[#F5F5F5] m-0 p-0">
      <div>
        <div>{`${t("stores&branches")}`}</div>
        <div>{`${t("stores&branches")}`}</div>
      </div>
      <div>
        <Card className="w-full">
          <Form layout="vertical">
            <div className="flex columns-lg">
              <div
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Form.Item name="nameShop" label="ชื่อร้าน">
                  <Input placeholder="ชื่อร้าน" />
                </Form.Item>
                <Form.Item name="status" label="สถานะพัสดุ">
                  <Select
                    // onChange={onGenderChange}
                    placeholder="สถานะพัสดุ"
                    allowClear
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                  </Select>
                </Form.Item>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Form.Item name="fullname" label="ชื่อ-นามสกุล (ผุ้จัดการ)">
                  <Input
                    prefix={<MagnifyingGlassIcon className="h-4 w-4 " />}
                    placeholder="ชื่อ-นามสกุล (ผุ้จัดการ)"
                  />
                </Form.Item>
                <div className="pt-7 flex space-x-4">
                  <Button type="primary" className="w-32">ค้นหา</Button>
                  <Button className="w-32">ล้าง</Button>
                </div>
              </div>

              <Form.Item
                name="tel"
                label="เบอร์โทร"
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input
                  prefix={<MagnifyingGlassIcon className="h-4 w-4 " />}
                  placeholder="เบอร์โทร"
                />
              </Form.Item>
            </div>
          </Form>
        </Card>
      </div>
      <div></div>
    </div>
  );
};

export default StoresBranches;
