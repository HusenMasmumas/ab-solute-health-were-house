import { useEffect, useState } from "react";
import { ColumnsType } from "antd/lib/table";
import MoTable from "component/Table/MoTable";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import { Card, Form } from "antd";
import WhilteButton from "component/Button/whilteButton";
import BlueButton from "component/Button/BlueButton";
import axios from "axios";

type Props = {
  setSelectData: (row: any) => void; //ส่งค่ากลับไปที่หน้าสร้าง
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

const elements: IsearchFormItem[] = [
  {
    name: "code",
    label: "ค้นหาชื่อรหัส",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
];

const CreateModal = (props: Props) => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataPage, setDataPage] = useState<any>([]);
  const [selectKey, setSelectKey] = useState<number[]>([]);
  const [rowData, setRowData] = useState<any>()

  let [_form] = Form.useForm();
  const columns: ColumnsType<ProductsType> = [
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
      dataIndex: "price",
    },
  ];

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };
  
  const rowSelection = {
    columnTitle:<div>#</div>,
    selectedRowKeys:selectKey,
    onSelect:(record:any, selected:any) => {    
      if(selected === true){
        //เลือก
        setSelectKey([record.index])
        setRowData({...record})
      }else if(selected === false){
        //เอาออก
        setSelectKey([]);
        setRowData(null)
      }
    }
  };

  const fakerFetchData = async (query:number | undefined) => {
    if(query === undefined) return
    
    const { data } = await axios.get(`http://localhost:5000/cabinet/${query}`);
    // console.log('data::::',data);
    setDataPage(data)
    //ทำงานปกติ
  };
  
  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };
  
  useEffect(() => {
    // console.log("current", currentPage);
    // console.log("limitPage", limitPage);
    fakerFetchData(currentPage)
  }, [currentPage, limitPage]);

  useEffect(() => {
    setSelectKey([...props.selectIndex])
    setCurrentPage(1)
  }, []);

  return (
    <>
      <SearchForm elements={elements} onFinish={onFinish} DeepBlue={true} NoPaddingY={true}/>
      <MoTable
        rowKey="index"
        columns={columns}
        dataSource={dataPage}
        rowSelection={rowSelection}
        onChangePage={onChangePage}
        noMarginTop={true}
        scroll={{
          y: 340,
        }}
        config={{
          total: 40, //ค่าจาก backend ใช้หารหน้า
          pageSize: limitPage,
          currentPage: currentPage,
        }}
      />
      <Card className="flex space-x-4 justify-end !p-0 !border-0" bodyStyle={{display:'flex', gap: '16px', padding: '0 0 0 0'}}>
        <BlueButton
          onClick={() => {
            props.setSelectData(rowData);
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
      </Card>
    </>
  );
};

export default CreateModal;
