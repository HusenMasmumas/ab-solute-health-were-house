import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, ConfigProvider, Divider, Form, FormInstance, Input, Modal, Row, Select, DatePicker , Table } from "antd";
import CInput from "component/input/c-input";
import CSelect from "component/input/c-select";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CreateModal from "./createModal";
import CDatePicker from "component/input/c-date-picker";

const CreateDataForm = ( props:{form:FormInstance , formFN: (value:any) => void } ) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { Option } = Select;

  const onFinishModal = (values: any) => {
    console.log("amount Received Modal ", values);
    props.form.setFieldsValue({
      ...values
    })
  };

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

  const customizeRenderEmpty = () => (
    <div className="h-32">
    </div>
  );

  return (
    <>
      <div className="bg-white py-[35px] px-[24px]">
        <div className="text-lightblue text-[20px] font-semibold">
          <span>{`${t("ข้อมูลตู้เก็บสินค้า")}`}</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        <Form 
          layout="vertical" 
          initialValues={{ users:[{first:'',last:'',amount:0}]}} 
          form={props.form}
          onFinish={props.formFN}
        >
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="SKU" name="sku">
                <Input className="input-form" placeholder="SKU"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label=" " >
                <Button
                  className="!text-[16px] !h-[45px] !rounded-[5px] !border-darkblue !text-darkblue !flex !justify-center !items-center"
                  onClick={() => setOpen(true)}
                >
                  เลือกจากรายการสินค้า
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Name" name="name">
                <Input className="input-form" placeholder="Name"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Category" name="category">
                <Input className="input-form" placeholder="Category"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Sub Category" name="subCategory">
                <Input
                  className="input-form"
                  placeholder="Sub Category"
                ></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item 
              label="Price Cost" 
              name='priceCost'
              >
                <CInput.CInputNumberSytle />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item 
                label="Price Normal" 
                name='priceNormal'
              >
                <CInput.CInputNumberSytle />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Lot" name="lot">
              <CDatePicker/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Due Date" name='dueDate'>
                <CDatePicker />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="QTY" name='qty'>
                <Input className="input-form" placeholder="QTY"></Input>
              </Form.Item>
            </Col>
          </Row> 
        <div className="text-lightblue text-[22px] font-semibold mt-16">
          <span>ข้อมูลตามประเภท</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key}>
                <Divider />                
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item
                        {...restField}
                        name={[name, 'first']}
                        label="sku"
                    >
                      <CInput placeholder="sku" className="h-[45px]" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <div className="w-full flex justify-end"><MinusCircleOutlined onClick={() => remove(name)} className="w-[50px]"/></div>
                  </Col>
                </Row>
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <Form.Item
                    {...restField}
                    name={[name, 'last']}
                    label="สี"
                    >
                      <CSelect 
                        style={{width:'100%', height:'40px !important'}}
                        placeholder="สี" 
                        option={{values: [
                            { key: 1, value: "red", label: "สีแดง" },
                            { key: 2, value: "green", label: "สีเขียว" }
                          ]}}
                      />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'amount']}
                      label="จำนวน"
                    >
                      <CInput placeholder="จำนวน" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            ))}
             <Form.Item>
              <Button type="dashed" onClick={() => { add() }} block icon={<PlusOutlined />}>
                เพิ่มตัวแปร
              </Button>
             </Form.Item>
          </>
        )}
        
      </Form.List>       
        </Form>
        <ConfigProvider renderEmpty={customizeRenderEmpty}>
          <Table
            columns={columns}
            dataSource={[]}
          />
        </ConfigProvider>
      </div>
      
      <Modal
        title={
          <span className="text-lightblue font-semibold text-[20px]">
            รายละเอียดสินค้า
          </span>
        }
        centered
        open={open}
        footer={false}
        // onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        destroyOnClose={true}
        zIndex={2000}
        bodyStyle={{padding: '0 0 20px 0'}}
      >
        <CreateModal setSelectData={onFinishModal} setOpenMoDal={setOpen} selectIndex={[]} />
      </Modal>
    </>
  );
};
export default CreateDataForm;
