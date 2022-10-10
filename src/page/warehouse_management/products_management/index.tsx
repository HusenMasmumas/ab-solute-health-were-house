import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import CSelectStatus from "component/input/c-select-status";
import MoTable from "component/Table/MoTable";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ProductsType, subSKU } from './interface'
import SubTable from "component/Table/subTable";


const ProductsMangement = () => {
  const navigate = useNavigate();
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("current", currentPage);
    console.log("limitPage", limitPage);
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };

  const elements: IsearchFormItem[] = [
    {
      name: "SKU/Sub SKU",
      label: "SKU/Sub SKU",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "Name",
      label: "Name",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "Status",
      label: "Status",
      input: {
        type: "select",
        options: {
          values: [
            { key: 1, value: "เปิด", label: "เปิด" },
            {
              key: 2,
              value: "ปิด",
              label: "ปิด",
            },
          ],
          key: "stateProduct",
          label: "stateProduct",
        },
      },
    },
    {
      name: "Category/Sub Category",
      label: "Category/Sub Category",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
  ];

  const columns: ColumnsType<ProductsType> = [
    {
      title: "SKU/Sub SKU",
      dataIndex: "sku",
      width: "20%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "20%",
    },
    {
      title: "Category/Sub Category",
      dataIndex: "category",
      width: "50%",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      width: "10%",
      render: (status, row) => {
        return (
          <CSelectStatus
            state={status}
            listOption={[
              { label: "ปิด", value: "ปิด" },
              { label: "เปิด", value: "เปิด" },
            ]}
            labelKey={"label"}
            valueKey={"value"}
            activeBackground={"#77C48B"}
            initialValue={status}
            activeValue={"เปิด"}
          />
        );
      },
    },
  ];

  const subColumns: ColumnsType<any> = [
    {
      title: "SKU/Sub SKU",
      dataIndex: "name",
      width: "20%",
    },
    {
      title: "Name",
      dataIndex: "amount",
      width: "20%",
    },
    {
      title: "Name",
      // dataIndex: "amount",
      width: "60%",
    },
  ]

  const expandable = {
    expandedRowRender: ({subSku, ...record}: ProductsType) => (    
      <SubTable columns={subColumns} dataSource={subSku} pagination={false} showHeader={false}/>
    ),
    rowExpandable: (record: any) => record.name !== "Not Expandable",
    // defaultExpandedRowKeys: ['0']
  };


  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };
  
  return (
    <>
      <CHeader
        keyHeader="manageGoods"
        arrPath={["manageGoods"]}
        buttons={[
          { 
            colorButton: 'green',
            keytext: 'addproductlist',
            fn:  () => {
                  navigate("/warehouse-management/craete-products-management");
            }
          }
        ]}
      />
      <SearchForm elements={elements} onFinish={onFinish} /> 
      <MoTable
        headerTable={`${t("รายการสินค้า")}`}
        scroll={{x:900}}
        columns={columns}
        dataSource={data}
        expandable={expandable}
        onChangePage={onChangePage}
        config={{
          total: 20, //ค่าจาก backend ใช้หารหน้า
          pageSize: limitPage,
          currentPage: currentPage,
        }}
        actions={[{
          type: 'excel',
          fn: ()=>{console.log('download excel');
          }
        }]}
      />
    </>
  );
};
export default ProductsMangement;

const data: ProductsType[] = [
  {
    key: 1,
    name: "K8763666",
    sku: "โซเดียมไบคาร์บอเนต",
    subSku: [{id:1, name:'SE-00001', amount: 20}, {id:2, name:'SE-00002', amount: 11}],
    category: "เคมีภัณฑ์",
    subCategory: "สารละลาย",
    priceNormal: 0,
    priceCost: 0,
    status: "เปิด",
  },
  {
    key: 2,
    name: "K8763",
    sku: "โซเดียมไบคาร์บอเนต",
    subSku: [{id:5, name:'SE-00003', amount: 20}, {id:4, name:'SE-00004', amount: 11}],
    category: "เคมีภัณฑ์",
    subCategory: "สารละลาย",
    priceNormal: 0,
    priceCost: 0,
    status: "ปิด",
  }
];