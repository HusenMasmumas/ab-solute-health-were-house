import CHeader from "component/headerPage/Header";
import { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import MoTable from "component/Table/MoTable";
import CreateModal from "./CreateModal";
import { useLocation, useNavigate } from "react-router-dom";
import PurchaseForm from "component/Form/purchaseForm";
import BlueButton from "component/Button/BlueButton";
import * as _ from "lodash";
import { DeleteFilled } from "@ant-design/icons";
import styled from "styled-components";
import {
  Card,
  Col,
  Divider,
  Form,
  Row,
  Input,
  InputNumber,
  ConfigProvider,
  Modal,
} from "antd";
import ContentContainer from "component/container/ContentContainer";


type Props = {
};

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
  const [mode, setMode] = useState<'edit' | 'confirm'>('edit');
  const [open, setOpen] = useState(false);
  // const [selectData, setSelectData] = useState<any>([])
  const [historyData, sethistoryData] = useState<any>([]);
  const [selectIndex, setSelectIndex] = useState<number[]>([]);
  const [motalTableData, setMotableData] = useState<any>([]);
  const [forms, setForm] = useState<any>()
  
  const navigate = useNavigate();
  const location = useLocation();
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

  const deleteSelected = (index:number) => {
    console.log('index',index);
    let indexArr = selectIndex.filter((item:number) => item !== index)
    console.log('indexArr',indexArr);
    setSelectIndex([...indexArr])
  }

  const onFinishModal = (values: any,indexArray:any) => {
    // console.log("amount Received Modal ", values); //ตัวที่เคย get มาทั้งหมด
    sethistoryData([...values])
    // console.log("indexArray",indexArray) //ตัวที่เลือก
    setSelectIndex([...indexArray])
  };

  useEffect(()=>{
    setMotableData([...historyData.filter( (element:TableType) => selectIndex.includes(element.index) )])    
  },[historyData, selectIndex])

  useEffect(()=>{
    if(location.state){      
      console.log('fetch fill form');
      setMode('confirm')
    }else{
      console.log('new create');
    }
  },[])

  return (
    <div>
      {
        mode==='edit'&&
        <CHeader
        keyHeader="purchaseOrder"
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
            colorButton: 'blue',
            keytext: 'บันทึก',
            fn:  () => {
              form.submit()
            },
          }
        ]}
      />
      }
      {
        mode==='confirm'&&
        <CHeader
        keyHeader="purchaseOrder"
        arrPath={["purchaseOrderManagement", "createPurchaseOrder"]}
        buttons={[
          { 
            colorButton: 'print',
            keytext: '',
            fn:  () => {
              console.log('print');
            }
          },
          { colorButton: 'whilte',
            keytext: 'ยกเลิก',
            fn:  () => {
              // navigate("/purchase-order/manage");
              if(location.state){
                navigate("/purchase-order/manage");
              }else{
                setMode('edit')
              }
            }
          },
          { colorButton: 'green',
            keytext: 'บันทึก',
            fn:  () => {
              //ยิงไปบันทึกและออก
              navigate("/purchase-order/manage");
            },
          },
          { colorButton: 'blue',
            keytext: 'บันทึกและรออนุมัติ',
            fn:  () => {
              //ยิงไปบันทึกและ แล้วต้องรอว่าบันทึกได้มั่ย  แล้วต้องดึงจากที่บันทึกมา แสดง ??????
              navigate("/purchase-order/manage");
            },
          }
        ]}
      />
      }
    <ContentContainer>
      <Card className="w-full">
        <div className="text-[#498DCB] text-[26px] !font-normal">รายละเอียดใบสั่งซื้อ</div>
        <Divider />
        <PurchaseForm
          form={form}
          onFinish={(value:any)=>{
            setForm(value)
            // console.log(value);
            if(selectIndex.length > 0){
              //  navigate("/purchase-order/examine");
              setMode('confirm')
            }
          }}
          refDisable={true}
          AllreadOnly={mode === 'edit' ? false : true}
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
          <Row >
            <Col sm={24} lg={12} className="!flex !items-end pb-6">
              <div className="w-full">
                <div className="text-[20px] !font-normal">หมายเหตุ</div>
                <TextArea rows={4} />
              </div>
            </Col>
            <Col sm={24} lg={12} >
              <Row className="mb-5 ">
                <Col sm={9} offset={3}>
                  <div className="text-[15px] !font-normal h-full flex items-center">รวมเป็นเงิน</div>
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
                <Col sm={9} offset={3}>
                  <div className="text-[15px] !font-normal h-full flex items-center">ส่วนลด</div>
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
                <Col sm={9} offset={3}>
                  
                  <div className="text-[15px] !font-normal h-full flex items-center">จำนวนเงินหลังหักส่วนลด</div>
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
                <Col sm={9} offset={3}>
                  
                  <div className="text-[15px] !font-normal h-full flex items-center">จำนวนเงินรวมทั้งสิ้น</div>
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
          setOpenMoDal={setOpen}/>
        </Modal>
    </div>
    
  );
};

export default CreatePurchase;
