import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import CreateForm from "component/Form/createForm";
import { IsearchFormItem } from "component/Form/searchForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import type { RadioChangeEvent } from "antd";
import { Radio, Tabs } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { Options } from "pretty-format";

const ManageStoreCabinet = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
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
            <div className="bg-white py-[16px] px-[24px]">
              <div className="text-lightblue text-[22px]">
                <span>ข้อมูลตู้เก็บสินค้า</span>
              </div>
              <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
              <Form>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">SKU</label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Sub SKU
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Name
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Category
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Sub Category
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">Lot</label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Due Date
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Price Cost
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Price Normal
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">QTY</label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="bg-white py-[16px] px-[24px] mt-[16px]">
              <div className="text-lightblue text-[22px]">
                <span>ข้อมูลตามประเภท</span>
              </div>
              <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
              <Form>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">SKU</label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">สี</label>
                      <Select></Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        จำนวน ( จำแนกตามสี )
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Button className="grid justify-start items-center !w-[170px] !h-[45px] !text-[20px] !text-darkblue !rounded-[4px] !border-darkblue mt-[16px]">
                + เพิ่มตัวแปร
              </Button>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="รายละเอียด" key="2">
            <div className="bg-white py-[16px] px-[24px]">
              <div className="text-lightblue text-[22px]">
                <span>รายละเอียด</span>
              </div>
              <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
              <Form>
                <Row gutter={[24, 0]}>
                  <Col span={24}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Drug label
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Properties (TH)
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Properties (EN)
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Use (TH)
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Use (EN)
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Unit
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Warming
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Supplier
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Blood Tube
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        InspectionDetails (TH)
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        InspectionDetails (EN)
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item>
                      <label className="!text-darkgray !text-[18px]">
                        Lab Company
                      </label>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default ManageStoreCabinet;
