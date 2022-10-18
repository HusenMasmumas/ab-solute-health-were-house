import { Button, Col, Form, Input, Row, Select, Switch } from "antd";
import { Tabs } from "antd";
import Table from "antd/lib/table";
import ContentContainer from "component/container/ContentContainer";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import CInput from "component/input/c-input";

const CreateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [mode, setMode] = useState<'editProduct' | 'productlist'>('productlist');
  const [form] = Form.useForm();
  const { Option } = Select;
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

  const onFinish = (value:any)=>{
    console.log(value);
  }

  useEffect(()=>{
    if(location.state){
      setMode('editProduct')
    }else{
      setMode('productlist')
    }
  },[])

  return (
    <>
      <CHeader
        keyHeader="manageGoods"
        arrPath={["manageGoods", mode]}
        buttons={[
          { 
            colorButton: 'whilte',
            keytext: 'cancle',
            fn:  () => {
              navigate("/warehouse-management/products-management");
            }
          },
          { 
            colorButton: 'green',
            keytext: 'save',
            fn:  () => {
              form.submit()
              // navigate("/warehouse-management/store-cabinet", {state:{id: location.state.id }});
            }
          }
        ]}
      />
      <ContentContainer>
      <div className="mt-[24px]">
        <Form 
          form={form}
          onFinish={onFinish}
          layout="vertical"
        >
        <Tabs items={[
          { label: 'Tab 1', 
            key: '1', 
            children:
            <>
            <div className="bg-white py-[35px] px-[24px]">
            <div className="text-lightblue text-[20px] font-semibold">
              <span>{`${t("ข้อมูลสินค้า")}`}</span>
            </div>
            <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
              <Row gutter={[24, 0]}>
                <Col span={12}>
                  <Form.Item label="SKU" name='sku'>
                    <Input className="input-form" placeholder="SKU"></Input>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Sub SKU" name='subSKU'>
                    <Input
                      className="input-form"
                      placeholder="Sub SKU"
                    ></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item label="Name" name='name'>
                    <Input className="input-form" placeholder="Name"></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 0]}>
                <Col span={12}>
                  <Form.Item label="Category" name='category'>
                    <Input
                      className="input-form"
                      placeholder="Category"
                    ></Input>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Sub Category" name='sbuCategory'>
                    <Input
                      className="input-form"
                      placeholder="Sub Category"
                    ></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 0]}>
                <Col span={12}>
                  <Form.Item label="Price Cost" name='priceCost'>
                    <Input
                      className="input-form"
                      placeholder="Price Cost"
                    ></Input>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Price Normal" name='priceNormal'>
                    <Input
                      className="input-form"
                      placeholder="Price Normal"
                    ></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 0]}>
                <Col span={12}>
                  <Form.Item label="การใช้งาน" name='status' valuePropName="checked">
                    <Switch defaultChecked={false} onChange={onChange} />
                  </Form.Item>
                </Col>
              </Row>
            <div className="text-lightblue text-[22px] font-semibold">
              <span>ข้อมูลตามประเภท</span>
            </div>
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
                            <Form.Item {...restField} label="SKU" name='sku'>
                              <Input
                                className="input-form"
                                placeholder="SKU"
                              ></Input>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={[24, 0]}>
                          <Col span={12}>
                            <Form.Item {...restField} label="สี" name='color'>
                              <Select
                                defaultValue="สีแดง"
                                placeholder="สีแดง"
                              >
                                <Option value="สีแดง">สีแดง</Option>
                                <Option value="สีเขียว">สีเขียว</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item {...restField} label="จำนวน (จำแนกตามสี)" name='amount'>
                              <CInput />
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
          </div>
          <Table
            columns={columns}
            // dataSource={dataSource}
          /> 
          </>
          
          },
          { label: 'Tab 2', key: '2', children: 
            <>
              <div className="bg-white py-[35px] px-[24px]">
              <div className="text-lightblue text-[20px] font-semibold">
                <span>{`${t("รายละเอียด")}`}</span>
              </div>
              <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
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
            </div>
            </>
          },
        ]}  defaultActiveKey="1" size="large" type="card" />
        </Form>
      </div>
      </ContentContainer>
    </>
  );
};
export default CreateProduct;
