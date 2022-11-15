import { ColumnsType } from "antd/lib/table";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import MoTable from "component/Table/MoTable";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ProductsType } from './interface'
import CDropDown from "component/Dropdown/DropDown";
import ContentContainer from "component/container/ContentContainer";

const ProductsMangement = () => {
  const navigate = useNavigate();
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { t } = useTranslation();

  useEffect(() => {
    // console.log("current", currentPage);
    // console.log("limitPage", limitPage);
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };

  const open = () => {
    console.log('open');
  };

  const close = () => {
    console.log('close');
  };
  const elements: IsearchFormItem[] = [
    {
      name: "Category",
      label: "category",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "Sub Category",
      label: "subCategory",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "sku",
      label: "SKU",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "subSku",
      label: "Sub SKU",
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
  ];

  const columns: ColumnsType<ProductsType> = [
    {
      title: "#",
      dataIndex: "id",
      width: "3%",
    },
    {
      title: "Category",
      dataIndex: "category",
      width: "20%",
    },
    {
      title: "Sub category",
      dataIndex: "subCategory",
      width: "20%",
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
    {
      title: "สถานะ",
      dataIndex: "status",
      width: "10%",
      render: (state:boolean) => {
        switch(true) {
          case state===true:
            return <CDropDown 
                      background="#77C48B" 
                      hoverbackground="#5F9C6F"
                      selection={
                        {title:'เปิด', option:[
                          {label: 'ปิด', value:'close' , action:close }
                    ]}}/>
          case state === false:
            return <CDropDown 
                      background="#949594" 
                      hoverbackground="#949594"
                      selection={
                        {title:'ปิด', option:[
                          {label: 'เปิด', value:'open' , action:open },
                    ]}}/>
        }
      },
    },
  ];

  const onFinish = (values: any) => {
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
      <ContentContainer>
        <SearchForm elements={elements} onFinish={onFinish} /> 
        <MoTable
          rowKey={'id'}
          headerTable={`${t("รายการสินค้า")}`}
          scroll={{x:900}}
          columns={columns}
          dataSource={data}
          onChangePage={onChangePage}
          config={{
            total: 20,
            pageSize: limitPage,
            currentPage: currentPage,
          }}
          onRow={(record)=>({
            onDoubleClick: () => {
              console.log(record);
              navigate("/warehouse-management/craete-products-management", {state:{id: record.key }} );
              }
          })}
          actions={[{
            type: 'excel',
            fn: ()=>{console.log('download excel');
            }
          }]}
        />
      </ContentContainer>
    </>
  );
};
export default ProductsMangement;

const data: ProductsType[] = [
  {
    id: 1,
    name: "K876366688888",
    sku: "T001",
    subSku: "T001-ALA-001",
    category: "Treatment Service",
    subCategory: "Detoxification",
    priceNormal: 0,
    priceCost: 0,
    status: true,
  },
  {
    id: 2,
    name: "K876366688888",
    sku: "T001",
    subSku: "T001-ALA-001",
    category: "Treatment Service",
    subCategory: "Detoxification",
    priceNormal: 0,
    priceCost: 0,
    status: false,
  },
];