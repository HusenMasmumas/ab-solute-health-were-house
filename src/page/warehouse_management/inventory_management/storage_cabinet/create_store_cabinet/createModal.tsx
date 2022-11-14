import { useEffect, useState } from "react";
import { ColumnsType } from "antd/lib/table";
import MoTable from "component/Table/MoTable";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import axios from "axios";

type Props = {
  onFinishModal: (row: any) => void; //ส่งค่ากลับไปที่หน้าสร้าง
  setOpenMoDal: (row: any) => void; //เปิดปิด modal
  selectIndex: number[];
};

export interface ProductsType {
  id: number;
  name: string;
  sku: string;
  subSku: string;
  category: string;
  subCategory: string;
  priceNormal: number;
  priceCost: number;
}

const elements: IsearchFormItem[] = [
  {
    name: "code",
    label: "",
    placeholder: "ค้นหาชื่อและรหัสสินค้า",
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

  const columns: ColumnsType<ProductsType> = [
    {
      title: "#",
      dataIndex: "id",
      width: "5%", 
    },
    {
      title: "Category",
      dataIndex: "category",
      width: "10%",
    },
    {
      title: "Sub Category",
      dataIndex: "subCategory",
      width: "10%",
    },
    {
      title: "SKU",
      dataIndex: "sku",
      width: "10%",
    },
    {
      title: "Sub SKU",
      dataIndex: "subSku",
      width: "10%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "10%",
    },
    {
      title: "Price Cost",
      dataIndex: "priceCost",
      width: "10%",
    },
    {
      title: "Price Normal",
      dataIndex: "priceNormal",
      width: "10%",
    },
  ];

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };
  
  const fakerFetchData = async (query:number | undefined) => {
    if(query === undefined) return
    // const { data } = await axios.get(`http://localhost:5000/cabinet/${query}`);
    setDataPage(mockData)
  };
  
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  
  useEffect(() => {
    fakerFetchData(currentPage)
  }, [currentPage, limitPage]);

  useEffect(() => {
    setCurrentPage(1)
  }, []);

  return (
    <>
      <SearchForm elements={elements} onFinish={onFinish} DeepBlue={true} NoPaddingY={true}/>
      <MoTable
        rowKey="id"
        columns={columns}
        dataSource={dataPage}
        onChangePage={onChangePage}
        noMarginTop={true}
        scroll={{
          y: 340,
        }}
        config={{
          total: 40,
          pageSize: limitPage,
          currentPage: currentPage,
        }}
        onRow={(record)=>({
          onDoubleClick: () => {
            props.onFinishModal(record)
            props.setOpenMoDal(false)
          }
        })}
      />
    </>
  );
};

export default CreateModal;

const mockData: ProductsType[] = [
  {
    id:1,
    name: 'ALA 300mg',
    priceCost: 3000,
    priceNormal: 1500,
    sku: 'SKU',
    subSku: 'T001-ALA-300',
    category: 'Treatment Service',
    subCategory: 'Detoxfication'
  },
  {
    id:2,
    name: 'ALA 300mg',
    priceCost: 3500,
    priceNormal: 4000,
    sku: 'T002',
    subSku: 'T002-ALA-600',
    category: 'Treatment Service',
    subCategory: 'Detoxfication'
  },
  {
    id:3,
    name: 'PRM-Anti IL-4',
    priceCost: 2500,
    priceNormal: 1500,
    sku: 'DS004',
    subSku: 'DS004-ALA-020',
    category: 'Drugs & Supplements',
    subCategory: 'Homeo'
  },
]
