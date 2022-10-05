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
import PurchaseForm from "component/Form/purchaseForm";
import BlueButton from "component/Button/BlueButton";
import { json } from "stream/consumers";
import * as _ from "lodash";
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

interface TableType {
  index: number;
  sku: string;
  name: string;
  price: number;
  amount: number;
  unit: string;
  total: number;
}

const { TextArea } = Input;

const CreatePurchase = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [selectData, setSelectData] = useState<any>([])
  const [date, setDate] = useState<Date>(new Date())
  const [historyData, sethistoryData] = useState<any>([]);
  const [selectIndex, setSelectIndex] = useState<number[]>([]);
  const [motalTableData, setMotableData] = useState<any>([]);
  const [forms, setForm] = useState<any>()
  
  const navigate = useNavigate();
  let [form] = Form.useForm();
  

  const columns: ColumnsType<TableType> = [
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
      dataIndex: "amount",
      render:(data:any, record:TableType, index:number)=>{

        return(
          <CInput onChange={(e:any)=>{
            console.log(e.target.value);
            console.log('record',record);
            setNewValue(e.target.value, record)
          }} value={data}/>)
       }
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

  const setNewValue = (amount:number, record:TableType )=>{
      const arr = historyData.map((element:TableType)=>{
        if(element.index === record.index){
          element.amount = amount
          return element
        }
          return element
      })
      sethistoryData([...arr])
  }

  const onFinishModal = (values: any,indexArray:any) => {
    // console.log("amount Received Modal ", values); //ตัวที่เคย get มาทั้งหมด
    sethistoryData([...values])
    // console.log("indexArray",indexArray) //ตัวที่เลือก
    setSelectIndex([...indexArray])
  };

  useEffect(()=>{
    console.log('form modal',selectData);
  },[selectData])

  useEffect(()=>{
    //ถ้า กดปุ่มยันทึกแล้วให้บันทึก  ก่อนบันทึกเช็คจำนวนสินค้า

  },[forms])

  useEffect(()=>{
    setMotableData([...historyData.filter( (element:TableType) => selectIndex.includes(element.index) )])

    console.log("AAAAAA",[...historyData.filter( (element:TableType) => selectIndex.includes(element.index) )]);
    
  },[historyData])



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
              form.submit()
            },
          }
        ]}
      />
      <Card className="w-full">
        <div className="text-[#498DCB] text-[26px]">รายละเอียดใบสั่งซื้อ</div>
        <Divider />
        <PurchaseForm
          form={form}
          onFinish={(value:any)=>{
            setForm(value)
            console.log(value);
          }}
          refDisable={true}
        />
        <MoTable 
          key='index'
          rowKey="index"
          headerTable='รายละเอียดสินค้า'
          columns={columns} 
          dataSource={ _.cloneDeep(motalTableData)} 
          pagination={false} 
        />
        <div className="mt-5">
          <BlueButton
            onClick={() => setOpen(true)}
          >
            + เพิ่มสินค้า
          </BlueButton>
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
        destroyOnClose={true}
      >
        <CreateModal 
          historyData={historyData} //โยน historyData เข้าไป initial 
          selectIndex={selectIndex} //โยนเข้าไป initial
          setSelectData={onFinishModal} 
          setOpenMoDal={setOpen}/>
        </Modal>
    </div>
    
  );
};

export default CreatePurchase;
