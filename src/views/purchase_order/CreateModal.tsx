import { Col, Form, Row, InputNumber, Button } from "antd";
import { ColumnsType } from "antd/lib/table";
import CleanButton from "component/Button/CleanButton";
import SearchButton from "component/Button/SearchButton";
import CInput from "component/input/c-input";
import MoTable from "component/Table/MoTable";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { createQueryString } from 'utils/utils'
type Props = {
  setSelectData: (row: any,arrindex:any) => void; //ส่งค่ากลับไปที่หน้าสร้าง
  setOpenMoDal: (row: any) => void; //เปิดปิด modal
};

interface TableType {
  index: number;
  sku: string;
  name: string;
  price: number;
  amount: number;
  unit: string;
  total: number;
}

const CreateModal = (props: Props) => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataPage, setDataPage] = useState<any>([]);
  const [historyData, sethistoryData] = useState<any>([]);
  const [selectKey, setSelectKey] = useState<any>([]);
  const [keySearch, setKeySearch] = useState<string>('');
  
  let [_form] = Form.useForm();
  const onFinish = ({ nameProduct }: {nameProduct:string}) => {
    setKeySearch(nameProduct)
  };

  const columns: ColumnsType<TableType> = [
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
      title: "จำนวนที่ต้องการ",
      dataIndex: "amount",
      render: (amount: number, record, index) => {
        return (
          <span>
            <InputNumber
              min={1}
              defaultValue={1}
              value={amount}
              onChange={(value) => {
                if (typeof value === "number")
                  onChangeInputAmout(value, record, index);
                else {
                  onChangeInputAmout(1, record, index);
                }
              }}
            />
          </span>
        );
      },
    },
    {
      title: "หน่วย",
      dataIndex: "unit",
    },
    {
      title: "ราคารวม(฿)",
      dataIndex: "fullpay",
      render: (price: number, record, index) => {
        // console.log("record.price*record.amount",record.price*record.amount);
        return <span>{(record.price * record.amount).toFixed(2)}</span>;
      },
    },
  ];

  const onChangeInputAmout = (value: number, record: any, index: any) => {
    const changeArr = historyData.map((obj:any)=>{ 
        if(record.index === obj.index){
          // console.log('find');
          return record
        } 
        // console.log('not find');
        
        return obj 
      })
    sethistoryData([...changeArr])
    const newData = [...dataPage];
    newData[index].amount = value;
    setDataPage([...newData]);
  };

  const rowSelection = {
    // columnWidth:'150px',
    columnTitle:<span>#</span>,
    selectedRowKeys: selectKey,
    onSelect:(record:any, selected:any, selectedRows:any)=>{
      console.log('onSelect',record,selected,selectedRows);
      if(selectKey.includes(record.index)){
        let index =  selectKey.indexOf(record.index)
        setSelectKey((prevState:any) => {
          return [
            ...(prevState.splice(index+1, 1))
          ]
        })
      }else{
        setSelectKey((prevState:any) => {
          return [
            ...prevState,
            record.index
          ]
        })
      }
    }
  };

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize"){
      setLimitPage(page)
    }
    else {
      setCurrentPage(page)
    }
  };

  useEffect(() => {
    // fetchData(createQueryString({limit: limitPage, page: currentPage, key: keySearch}))
    fakerFetchData(1)
  }, []);

  useEffect(()=>{
    const obj = {limit: limitPage, page: currentPage, key: keySearch}
    // console.log(createQueryString(obj));
    // fetchData(createQueryString(obj));
    fakerFetchData(currentPage)
  },[currentPage])

  useEffect(()=>{
    const obj = {limit: limitPage, page: 1, key: keySearch}
    // console.log(createQueryString(obj));
    // fetchData(createQueryString(obj));
    fakerFetchData(4)
  },[limitPage])

  useEffect(()=>{
    const obj = {limit: limitPage, page: 1, key: keySearch}
    // console.log(createQueryString(obj));
    // fetchData(createQueryString(obj));
    fakerFetchData(3)
  },[keySearch])

  const fetchData = async (query:string) => {
    const { data } = await axios.get(`http://localhost:5000/product${query}`);
    const arr = data.map((element:any) => {
      const find = historyData.find((obj:any)=>{ 
        return obj.index === element.index 
      })
      if(find){
        return find
      }else{
        sethistoryData((prevState:any) => {
          return [ ...prevState, element ]
        })
        return element
      }
    });
    setDataPage(arr);//ทำงานปกติ
  };

  const fakerFetchData = async (query:number) => {
    const { data } = await axios.get(`http://localhost:5000/product/${query}`);
    const arr = data.map((element:any) => {
      const find = historyData.find((obj:any)=>{ 
        return obj.index === element.index 
      })
      if(find){
        return find
      }else{
        sethistoryData((prevState:any) => {
          return [ ...prevState, element ]
        })
        return element
      }
    });
    setDataPage(arr);//ทำงานปกติ
  };

  return (
    <div>
      <div>
        <Row gutter={[16, 16]}>
          <Form form={_form} onFinish={onFinish} className="w-full lg:flex">
            <Col sm={24} lg={8}>
              <Form.Item name="nameProduct" className="mb-0 w-full ">
                <CInput
                  option={{ search: true }}
                  placeholder="ค้นหาชื่อและรหัสสินค้า"
                />
              </Form.Item>
            </Col>
            <Col sm={24} lg={8}>
              <Row gutter={[12, 6]}>
                <Col>
                  <SearchButton
                    onClick={() => {
                      _form.submit();
                    }}
                    size="large"
                    style={{
                      fontSize: "20px",
                      borderRadius: "4px",
                      border: "none",
                      margin: 0,
                    }}
                  >
                    ค้นหา
                  </SearchButton>
                </Col>
                <Col>
                  <CleanButton
                    onClick={() => {
                      _form.resetFields();
                      _form.submit();
                    }}
                    size="large"
                    style={{
                      fontSize: "20px",
                      borderRadius: "4px",
                      margin: 0,
                    }}
                  >
                    ล้าง
                  </CleanButton>
                </Col>
              </Row>
            </Col>
          </Form>
        </Row>
      </div>
      <MoTable
        rowKey="index"
        columns={columns}
        dataSource={dataPage}
        rowSelection={rowSelection}
        onChangePage={onChangePage}
        scroll={{
          y: 340,
        }}
        config={{
          total: 40, //ค่าจาก backend ใช้หารหน้า
          pageSize: limitPage,
          currentPage: currentPage,
        }}
      />
      <div className="flex space-x-4">
        <Button onClick={()=>{
          props.setSelectData([...historyData],[...selectKey])
          props.setOpenMoDal(false)
        }}>ยืนยัน</Button>
        <Button onClick={()=>{
          props.setOpenMoDal(false)
        }}>ยกเลิก</Button>
      </div>
    </div>
  );
};

export default CreateModal;
