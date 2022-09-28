import { Button, Col, Form, Input, Row, Select, Switch } from "antd";
import { Tabs } from "antd";
import TextArea from "antd/lib/input/TextArea";
// import CreateDataForm from "./craete_data_form";
// import CreateDetailForm from "./create_detail_form";
import Table from "antd/lib/table";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";

const CreateProduct = () => {
  const { t } = useTranslation();
  const Option = Select;
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
      title: "หมายเหตุ",
      dataIndex: "ps",
    },
  ];
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <CHeader
            keyHeader="manageGoods"
            arrPath={["manageGoods", "productlist"]}
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
            <div className="bg-white py-[35px] px-[24px]">
              <div className="text-lightblue text-[20px] font-semibold">
                <span>{`${t("ข้อมูลสินค้า")}`}</span>
              </div>
              <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
              <Form layout="vertical">
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item label="SKU">
                      <Input className="input-form" placeholder="SKU"></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Sub SKU">
                      <Input
                        className="input-form"
                        placeholder="Sub SKU"
                      ></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label="Name">
                      <Input className="input-form" placeholder="Name"></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item label="Category">
                      <Input
                        className="input-form"
                        placeholder="Category"
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Sub Category">
                      <Input
                        className="input-form"
                        placeholder="Sub Category"
                      ></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item label="Price Cost">
                      <Input
                        className="input-form"
                        placeholder="Price Cost"
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Price Normal">
                      <Input
                        className="input-form"
                        placeholder="Price Normal"
                      ></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item label="การใช้งาน">
                      <Switch defaultChecked onChange={onChange} />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="bg-white py-[35px] px-[24px] mt-[16px]">
              <div className="text-lightblue text-[22px] font-semibold">
                <span>ข้อมูลตามประเภท</span>
              </div>

              {/* ฟอร์มล่าง */}
              <Form
                name="dynamic_form_nest_item"
                layout="vertical"
                initialValues={{ werehouse: [""] }}
              >
                <Form.List name="werehouse">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <div key={key}>
                          <Row gutter={[24, 0]}>
                            <Col span={24}>
                              <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
                            </Col>
                          </Row>
                          <Row gutter={[24, 0]}>
                            <Col span={12}>
                              <Form.Item {...fields} label="SKU">
                                <Input
                                  className="input-form"
                                  placeholder="SKU"
                                ></Input>
                              </Form.Item>
                            </Col>
                            <Col span={12}>
                              <Form.Item {...fields} label="สี">
                                <Select
                                  defaultValue="สีแดง"
                                  placeholder="สีแดง"
                                >
                                  <Option value="สีแดง">สีแดง</Option>
                                  <Option value="สีเขียว">สีเขียว</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row gutter={[24, 0]}>
                            <Col span={24}>
                              <Form.Item label="หมายเหตุ">
                                <TextArea placeholder="หมายเหตุ"></TextArea>
                              </Form.Item>
                            </Col>
                          </Row>
                        </div>
                      ))}
                      <Form.Item>
                        <Button
                          className="grid justify-start items-center !w-[170px] !h-[45px] !text-[16px] !text-darkblue !rounded-[4px] !border-darkblue mt-[16px]"
                          onClick={() => add()}
                        >
                          + เพิ่มตัวแปร
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </Form>
            </div>
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
            <div className="bg-white py-[35px] px-[24px]">
              <div className="text-lightblue text-[20px] font-semibold">
                <span>{`${t("รายละเอียด")}`}</span>
              </div>
              <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
              <Form layout="vertical">
                <Row gutter={[24, 0]}>
                  <Col span={24}>
                    <Form.Item label="Drug label">
                      <Input
                        className="input-form"
                        placeholder="Drug label"
                      ></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item label="Properties (TH)">
                      <Input
                        className="input-form"
                        placeholder="Properties (TH)"
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Properties (EN)">
                      <Input
                        className="input-form"
                        placeholder="Properties (EN)"
                      ></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item label="Use (TH)">
                      <Input
                        className="input-form"
                        placeholder="Use (TH)"
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Use (EN)">
                      <Input
                        className="input-form"
                        placeholder="Use (EN)"
                      ></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item label="Unit">
                      <Input className="input-form" placeholder="Unit"></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Warming">
                      <Input
                        className="input-form"
                        placeholder="Warming"
                      ></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item label="Supplier">
                      <Input
                        className="input-form"
                        placeholder="Supplier"
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Blood Tube">
                      <Input
                        className="input-form"
                        placeholder="Blood Tube"
                      ></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item label="InspectionDetails (TH)">
                      <Input
                        className="input-form"
                        placeholder="InspectionDetails (TH)"
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="InspectionDetails (EN)">
                      <Input
                        className="input-form"
                        placeholder="InspectionDetails (EN)"
                      ></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item label="Lab Company">
                      <Input
                        className="input-form"
                        placeholder="Lab Company"
                      ></Input>
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
export default CreateProduct;
