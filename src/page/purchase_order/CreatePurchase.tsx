import {
  Card,
  Col,
  Divider,
  Form,
  Row,
  Input,
  Button,
  ConfigProvider,
  Modal,
} from "antd";
import CHeader from "component/headerPage/Header";
import CDatePicker from "component/input/c-date-picker";
import CInput from "component/input/c-input";
import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import MoTable from "component/Table/MoTable";
import { InputNumber } from "antd";
import styled from "styled-components";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CreateModal from "views/purchase_order/CreateModal";
import moment from 'moment';
import { useNavigate } from "react-router-dom";
type Props = {};

const StyledInputNumber = styled(InputNumber)<{bg:string, fontSize:number}>`
    font-size:25px; 
    width: 100%;
    padding-right: 15px;
    background: ${({bg})=> bg};
    input{
      font-size: ${({fontSize})=> fontSize}px !important;
      color: ${props => props.color ? props.color : 'black'}
    }
`;
interface DataType {
  index: number;
  sku: string;
  name: string;
  price: string;
  stock: string;
  point: string;
  pack: number;
  unit: number;
  pay: number;
}



const columns: ColumnsType<DataType> = [
  {
    title: "#",
    dataIndex: "index",
  },
  {
    title: "SKU",
    dataIndex: "sku",
  },
  {
    title: "ชื่อสินค้า",
    dataIndex: "name",
  },
  {
    title: "ราคา/หน่วย",
    dataIndex: "price",
  },
  {
    title: "สต็อคคงเหลือ",
    dataIndex: "stock",
  },
  {
    title: "จำนวนที่ต้องการ",
    dataIndex: "point",
  },
  {
    title: "ที่สามารถแพ็คได้",
    dataIndex: "handle",
  },
  {
    title: "หน่วย",
    dataIndex: "unit",
  },
  {
    title: "ราคารวม (฿)",
    dataIndex: "pay",
  },
];
const { TextArea } = Input;

const CreatePurchase = (props: Props) => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [open, setOpen] = useState(false);
  const [selectData, setSelectData] = useState<any>([])
  const [date, setDate] = useState<Date>(new Date())
  const navigate = useNavigate();
  let [form] = Form.useForm();
  useEffect(() => {
    console.log("current", currentPage);
    console.log("limitPage", limitPage);
  }, [currentPage, limitPage]);

  useEffect(()=>{
    console.log('form modal',selectData);
  },[selectData])

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishModal = (values: any,indexArray:any) => {
    console.log("amount Received Modal ", values);
    console.log("indexArray",indexArray)
  };

  const rowSelection = {
    // columnWidth:'150px',
    columnTitle:<span>#</span>,
  };

  return (
    <div>
      <CHeader
        keyHeader="purchaseOrder"
        arrPath={["purchaseOrderManagement", "createPurchaseOrder"]}
        buttons={[
          { colorButton: 'whilte',
            keytext: 'ยกเลิก',
            fn:  () => {
              navigate("/purchase-order/manage");
            }
          },
          { colorButton: 'blue',
            keytext: 'บันทึก',
            fn:  () => {
              form.submit();
            },
          }
        ]}
      />
      <Card className="w-full">
        <div className="text-[#498DCB] text-[26px]">รายละเอียดใบสั่งซื้อ</div>
        <Button
            className="!bg-[#4E8FCC] !text-lg !h-11 !rounded-md !border-[#4E8FCC] !text-white"
            onClick={() => { form.submit(); }}
          >
            สร้าง
          </Button>
        <Divider />
        <Form 
          layout="vertical" 
          onFinish={onFinish}
          form={form}
        >
          <Row gutter={[12, 6]} align="bottom">
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="codeOrder"
                label={<span className="text-[20px]">เลขที่ใบสั่งซื้อ</span>}
              >
                <CInput />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="sendDate"
                label={<span className="text-[20px]">วันที่ส่ง</span>}
                rules={[{ required: true, message: "โปรดเลือกวันที่" }]}
              >
                <CDatePicker 
                size="large" 
                disabledDate={d =>  d.isBefore(moment(moment(), 'YYYY/MM/DD').subtract(1, 'days'))}
                onChange={(d )=>{
                  setDate(new Date(d))
                  let overTimeDate = form.getFieldValue('overtimeDate')
                  if(overTimeDate){ 
                    form.setFieldsValue({ 'overtimeDate': null})
                  }
                }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="codeRef"
                label={
                  <span className="text-[20px]">เลขที่ใบส่งที่อ้างอิง</span>
                }
              >
                <CInput />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="overtimeDate"
                label={<span className="text-[20px]">วันครบกำหนด</span>}
                rules={[{ required: true, message: "โปรดเลือกวันที่" }]}
              >
                <CDatePicker 
                size="large" 
                disabledDate={d =>  d.isBefore(moment(date, 'YYYY/MM/DD'))}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="Description1"
                label={
                  <span className="text-[20px]">รายละเอียดผู้ส่งสินค้า</span>
                }
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="Description2"
                label={
                  <span className="text-[20px]">รายละเอียดผู้สั่งสินค้า</span>
                }
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <div className="text-2xl">รายละเอียดสินค้า</div>
        <MoTable 
          columns={columns} 
          dataSource={[]} 
          pagination={false} 
        />
        <div className="mt-5">
          <Button
            className="!bg-[#4E8FCC] !text-lg !h-11 !rounded-md !border-[#4E8FCC] !text-white"
            onClick={() => setOpen(true)}
          >
            + เพิ่มสินค้า
          </Button>
          <Row>
            <Col sm={24} lg={12} className="!flex !items-end pb-6">
              <div className="w-full">
                <div className="text-[20px]">หมายเหตุ</div>
                <TextArea rows={4} />
              </div>
            </Col>
            <Col sm={24} lg={12} >
              <Row className="mb-5">
                <Col sm={6} offset={6}>
                  
                  <div className="text-[20px]">รวมเป็นเงิน</div>
                </Col>
                <Col sm={12}>
                  <ConfigProvider direction="rtl">
                  <StyledInputNumber
                      prefix="฿"
                      controls={false}
                      readOnly={true}
                      defaultValue="00.00"
                      step="0.01"
                      bg="white"
                      fontSize={20}
                    />
                  </ConfigProvider>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col sm={6} offset={6}>
                  <div className="text-[20px]">ส่วนลด</div>
                </Col>
                <Col sm={12}>
                  <ConfigProvider direction="rtl">
                  <StyledInputNumber
                      prefix="฿"
                      controls={false}
                      readOnly={true}
                      defaultValue="00.00"
                      step="0.01"
                      bg="white"
                      fontSize={20}
                    />
                  </ConfigProvider>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col sm={6} offset={6}>
                  
                  <div className="text-[20px]">จำนวนเงินหลังหักส่วนลด</div>
                </Col>
                <Col sm={12}>
                  <ConfigProvider direction="rtl">
                    <StyledInputNumber
                      prefix="฿"
                      controls={false}
                      readOnly={true}
                      defaultValue="00.00"
                      step="0.01"
                      fontSize={20}
                      bg="white"
                    />
                  </ConfigProvider>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col sm={6} offset={6}>
                  
                  <div className="text-[20px]">จำนวนเงินรวมทั้งสิ้น</div>
                </Col>
                <Col sm={12}>
                  <ConfigProvider direction="rtl">
                    <StyledInputNumber
                      prefix="฿"
                      controls={false}
                      readOnly={true}
                      defaultValue="00.00"
                      step="0.01"
                      bg='#F3F9FF'
                      fontSize={25}
                      color='#01438F'
                    />
                  </ConfigProvider>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>
      <Modal
        title={<span className="text-[#498DCB] text-[18px]">รายละเอียดสินค้า</span>}
        centered
        open={open}
        footer={false}
        // onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        // destroyOnClose={true}
      >
        <CreateModal setSelectData={onFinishModal} setOpenMoDal={setOpen}/>
      </Modal>
    </div>
    
  );
};

export default CreatePurchase;
