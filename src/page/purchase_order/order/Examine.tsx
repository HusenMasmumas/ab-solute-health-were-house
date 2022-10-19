import React, { useEffect, useState } from 'react'
import CHeader from 'component/headerPage/Header';
import { useNavigate } from "react-router-dom";
import { Card, Col, ConfigProvider, Divider, Form, InputNumber, Modal, Row } from 'antd';
import form from 'antd/lib/form';
import PurchaseForm from 'component/Form/purchaseForm';
import moment from 'moment';
import MoTable from 'component/Table/MoTable';
import { ColumnsType } from 'antd/lib/table';
import _ from 'lodash';
import TextArea from 'antd/lib/input/TextArea';
import BlueButton from 'component/Button/BlueButton';
import styled from 'styled-components';
import ContentContainer from 'component/container/ContentContainer';
import CreateModal from './CreateModal';
import { DeleteFilled } from '@ant-design/icons';
type Props = {}

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
interface TableType {
    index: number;
    sku: string;
    name: string;
    price: number;
    amount: number;
    unit: string;
    total: number;
}

const Examine = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [historyData, sethistoryData] = useState<any>([]);
  const [selectIndex, setSelectIndex] = useState<number[]>([]);
  const [motalTableData, setMotableData] = useState<any>([]);
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
      render: (price: number) => {
        return <span>{price.toFixed(2)}</span>;
      },
    },
    {
      title: "สต็อคคงเหลือ",
      dataIndex: "stock",
    },
    {
      title: "จำนวนที่ต้องการ",
      dataIndex: "amount",
      render:(amount:number, record:TableType, index:number)=>{

        return(
          <InputNumber
              min={1}
              defaultValue={1}
              value={amount}
              onChange={(value) => {
                console.log('value', value,'__typeof' ,typeof value);
                
                if (typeof value === "number")
                  setNewValue(value, record)
                else {
                  setNewValue(1, record)
                }
              }}
          />
        )
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
      render: ( _, record) => {
        return (
          <div className="flex items-center justify-around">
            {(record.price * record.amount).toFixed(2)}
            <DeleteFilled onClick={()=>{
              // console.log('record',record);
              deleteSelected(record.index)
            }} />
          </div>
        )
      }
    },
  ];

    const navigate = useNavigate();
    let [form] = Form.useForm();

    const setNewValue = (amount:number, record:TableType )=>{
      const arr = historyData.map((element:TableType)=>{
        if(element.index === record.index){
          element.amount = amount
          console.log('change value',element);
          return element
        }
          return element
      })
      sethistoryData([...arr])
  }

    const onFinishModal = (values: any,indexArray:any) => {
      console.log('working');
      // console.log("amount Received Modal ", values); //ตัวที่เคย get มาทั้งหมด
      sethistoryData([...values])
      // console.log("indexArray",indexArray) //ตัวที่เลือก
      setSelectIndex([...indexArray])
    };

    const deleteSelected = (index:number) => {
      console.log('index',index);
      let indexArr = selectIndex.filter((item:number) => item !== index)
      console.log('indexArr',indexArr);
      setSelectIndex([...indexArr])
    }

    useEffect(()=>{
      setMotableData([...historyData.filter( (element:TableType) => selectIndex.includes(element.index) )])    
    },[historyData, selectIndex])

    useEffect(()=>{
      //set history จากฐานข้อมูลไปก่อน
      //set select เป็นเลือกทั้งหมด
      //โยนเข้า Modal
    },[])
  
    return (
      <>
          <CHeader
          keyHeader="purchaseOrderManagement"
          arrPath={["purchaseOrderManagement", "createPurchaseOrder"]}
          buttons={[
            { 
              colorButton: 'whilte',
              keytext: 'ยกเลิก',
              fn:  () => {
                navigate("/purchase-order/manage");
              }
            },
            { 
              colorButton: 'green',
              keytext: 'อนุมัติ',
              fn:  () => {
                navigate("/purchase-order/manage");
              }
            },
          ]}
          />
          <ContentContainer>
            <Card className="w-full">
              <div className="text-[#498DCB] text-[26px]">รายละเอียดใบสั่งซื้อ</div>
              <Divider />
              <PurchaseForm
                form={form}
                setValue={{
                  codeOrder:'RESD5656',
                  sendDate: moment('2022-10-02'),
                  codeRef: "ERTSD",
                  overtimeDate: moment('2022-10-11'),
                  Description1:"ผู้ส่ง",
                  Description2:"ผู้รับ"
                }}
              />
              <MoTable 
                key='index'
                rowKey="index"
                headerTable='รายละเอียดสินค้า'
                columns={columns} 
                dataSource={ _.cloneDeep(motalTableData)} 
                pagination={false} 
                noMarginX={true}
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
          </ContentContainer>
          <Modal
            title={<span className="text-[#498DCB] text-[18px]">รายละเอียดสินค้า</span>}
            centered
            open={open}
            footer={false}
            // onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
            destroyOnClose={true}
            zIndex={2000}
          >
            <CreateModal 
              historyData={_.cloneDeep(historyData)} //โยน historyData เข้าไป initial 
              selectIndex={selectIndex} //โยนเข้าไป initial
              setSelectData={onFinishModal} 
              setOpenMoDal={setOpen}
            />
        </Modal>
      </>
    )
}   

export default Examine