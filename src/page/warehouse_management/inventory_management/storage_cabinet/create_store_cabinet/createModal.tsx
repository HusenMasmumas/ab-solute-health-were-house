import React, { useEffect, useState } from "react";
import { ColumnsType } from "antd/lib/table";
import MoTable from "component/Table/MoTable";
import { IsearchFormItem } from "component/Form/searchForm";
import CleanButton from "component/Button/CleanButton";
import { Button, Col, Form, Row } from "antd";
import SearchButton from "component/Button/SearchButton";
import CInput from "component/input/c-input";
import DeepBlueButton from "component/Button/DeepBlue";
import WhilteButton from "component/Button/whilteButton";
import BlueButton from "component/Button/BlueButton";
import axios from "axios";

type Props = {
  setSelectData: (row: any, arrindex: any) => void; //ส่งค่ากลับไปที่หน้าสร้าง
  setOpenMoDal: (row: any) => void; //เปิดปิด modal
  selectIndex: number[];
};

interface ProductsType {
  key: number;
  name: string;
  sku: string;
  category: string;
  priceNormal: number;
  priceCost: number;
  status: string;
}

const CreateModal = (props: Props) => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataPage, setDataPage] = useState<any>([]);
  const [historyData, sethistoryData] = useState<any>([]);
  const [selectKey, setSelectKey] = useState<any>([]);
  const [keySearch, setKeySearch] = useState<string>("");


  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: ProductsType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  const columns: ColumnsType<ProductsType> = [
    {
      title: "#",
      width: "10%",
    },
    {
      title: "SKU",
      dataIndex: "sku",
      width: "18%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "18%",
    },
    {
      title: "Category / Sub Category",
      dataIndex: "category",
      width: "30%",
    },
    {
      title: "Price Normal",
      dataIndex: "priceNormal",
    },
  ];

  const fakerFetchData = async (query:number | undefined) => {
    if(query === undefined) return
    
    const { data } = await axios.get(`http://localhost:5000/cabinet/${query}`);
    console.log('data::::',data);
    
    // setDataPage(arr);
    //ทำงานปกติ
  };
  
  useEffect(() => {
    console.log("current", currentPage);
    console.log("limitPage", limitPage);
    fakerFetchData(currentPage)
  }, [currentPage, limitPage]);

  useEffect(() => {
    setSelectKey([...props.selectIndex])
    setCurrentPage(1)
  }, []);

  return (
    <>
      <div>
        <Row gutter={[16, 16]}>
          <Form className="w-full lg:flex">
            <Col sm={24} lg={8}>
              <Form.Item name="nameProduct" className="mb-0 w-full ">
                <CInput.withSerchICON
                  option={{ search: true }}
                  placeholder="ค้นหาชื่อ , รหัสสินค้า"
                />
              </Form.Item>
            </Col>
            <Col sm={24} lg={8}>
              <Row gutter={[12, 6]}>
                <Col>
                  <DeepBlueButton
                    size="large"
                    style={{
                      fontSize: "16px",
                      borderRadius: "5px",
                      margin: 0,
                    }}  
                  >
                    ค้นหา
                  </DeepBlueButton>
                </Col>
                <Col>
                  <WhilteButton
                    size="large"
                    style={{
                      fontSize: "16px",
                      borderRadius: "5px",
                      margin: 0,
                    }}
                  >
                    ล้าง
                  </WhilteButton>
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
      <div className="flex space-x-4 justify-end">
        <BlueButton
          onClick={() => {
            props.setSelectData([...historyData], [...selectKey]);
            props.setOpenMoDal(false);
          }}
        >
          ยืนยัน
        </BlueButton>
        <WhilteButton
          onClick={() => {
            props.setOpenMoDal(false);
          }}
        >
          ยกเลิก
        </WhilteButton>
      </div>
    </>
  );
};

export default CreateModal;
