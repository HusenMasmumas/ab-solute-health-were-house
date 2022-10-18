import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, ConfigProvider, Divider, Form, FormInstance, Input, Modal, Row, Table } from "antd";
import CInput from "component/input/c-input";
import CSelect from "component/input/c-select";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CreateModal from "./createModal";
import CDatePicker from "component/input/c-date-picker";
import moment from 'moment';
import { ColumnsType } from "antd/lib/table";
import * as _ from "lodash";
import React, {useEffect} from 'react'
interface Colomns {
  index: React.Key,
  sku:string,
  color:string,
  amount:number
}
const CreateDataForm = ( props:{form:FormInstance , formFN: (value:any) => void } ) => {
  const [date, setDate] = useState<Date>(new Date())
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<Colomns[]>();

  const onFinishModal = (values: any) => {
    console.log("amount Received Modal ", values);
    props.form.setFieldsValue({
      ...values
    })
  };

  const columns: ColumnsType<Colomns> = [
    {
      title: "SKU",
      dataIndex: "sku",
      width: "30%",
    },
    {
      title: "สี",
      dataIndex: "color",
      width: "40%",
    },
    {
      title: "จำนวน",
      dataIndex: "amount",
    },
  ];

  const customizeRenderEmpty = () => (
    <div className="h-32"></div>
  );

  const onChangeList = (value:any)=>{
    setPreview(_.cloneDeep(value))
  }

  const InitForm = async () => {
    await props.form.setFieldValue('users',[{index:0, sku:'', color:null, amount:0}])
    setPreview(_.cloneDeep(props.form.getFieldsValue().users));
  }
  useEffect(()=>{
    InitForm()
  },[])

  return (
    <>
      <div className="bg-white py-[35px] px-[24px]">
        <div className="text-lightblue text-[20px] font-semibold">
          <span>{`${t("ข้อมูลตู้เก็บสินค้า")}`}</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        <Form 
          layout="vertical" 
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
              <CDatePicker
                disabledDate={d =>  d.isBefore(moment(moment(), 'YYYY/MM/DD').subtract(1, 'days'))}
                onChange={(d )=>{
                  setDate(new Date( moment(d).format('YYYY-MM-DD') ))
                  let dueDate =  props.form.getFieldValue('dueDate')
                  if(dueDate){ 
                    props.form.setFieldsValue({ 'dueDate': null})
                  }
                }}
              />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Due Date" name='dueDate'>
                <CDatePicker 
                   disabledDate={d =>  d.isBefore(moment(date, 'YYYY/MM/DD'))}
                />
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
                        name={[name, 'sku']}
                        label= "sku"
                        rules={[{ required: true, message:'' }]}
                    >
                      <CInput placeholder="sku" className="h-[45px]" onChange={()=>{onChangeList(props.form.getFieldValue('users'))}}/>
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
                    name={[name, 'color']}
                    label="สี"
                    rules={[{ required: true, message:'' }]}
                    >
                      <CSelect 
                        style={{width:'100%', height:'40px !important'}}
                        placeholder="สี" 
                        option={{values: [
                            { key: 1, value: "red", label: "สีแดง" },
                            { key: 2, value: "green", label: "สีเขียว" }
                          ]}}
                        onChange={()=>{onChangeList(props.form.getFieldValue('users'))}}  
                      />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'amount']}
                      label="จำนวน"
                      rules={[{ required: true, message:''}]}
                    >
                      <CInput.CInputNumberSytle prefix={<></>} placeholder="จำนวน" onChange={()=>{onChangeList(props.form.getFieldValue('users'))}}/>
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            ))}
             <Form.Item>
              <Button
                  className="grid justify-start items-center !w-[170px] !h-[45px] !text-[16px] !text-darkblue !rounded-[4px] !border-darkblue mt-[16px]"
                  onClick={() => { 
                    add({index: props.form.getFieldsValue().users?.length ?? 1 - 1,sku:'', color:null ,amount:0}); 
                    setPreview(_.cloneDeep(props.form.getFieldsValue().users));
                  }}
                >
                  + เพิ่มตัวแปร
              </Button>              
             </Form.Item>
          </>
        )}
      </Form.List>       
        </Form>
        <ConfigProvider renderEmpty={customizeRenderEmpty}>
          <Table
            rowKey={'index'}
            columns={columns}
            dataSource={preview}
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
