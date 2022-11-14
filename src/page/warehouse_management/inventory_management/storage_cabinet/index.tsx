import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ColumnsType } from "antd/lib/table";
import MoTable from "component/Table/MoTable";
import { IStoreCabinet } from '../interface'
import CDropDown from "component/Dropdown/DropDown";
import ContentContainer from "component/container/ContentContainer";

const StoreCabinet = () => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
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
            { key: 1, value: "เปิดการขาย", label: "เปิดการขาย" },
            {
              key: 2,
              value: "ปิดการขาย",
              label: "ปิดการขาย",
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
    {
      name: "Lot",
      label: "Lot",
      input: {
        type: "date-picker",
        options: {
          search: true,
        },
      },
    },
  ];

  const columns: ColumnsType<IStoreCabinet> = [
    {
      title: "#",
      dataIndex: "id",
      width:'5%'
    },
    {
      title: "Category",
      dataIndex: "category",
      width:'10%'
    },
    {
      title: "Sub Category",
      dataIndex: "subCategory",
      width:'10%'
    },
    {
      title: "SKU",
      dataIndex: "sku",
      width:'10%'
    },
    {
      title: "subSKU",
      dataIndex: "subSku",
      width:'10%'
    },
    {
      title: "name",
      dataIndex: "name",
      width:'10%'
    },
    {
      title: "Price Cost",
      dataIndex: "priceCost",
      width:'10%',
    },
    {
      title: "Price Normal",
      dataIndex: "priceNormal",
      width:'10%',
    },
    {
      title: "Status",
      dataIndex: "status",
      width:'10%',
      render: (state:boolean) => {
        switch(state) {
          case true:
            return <CDropDown 
                      background="#77C48B" 
                      hoverbackground="#5F9C6F"
                      selection={
                        {title:'เปิด', option:[
                          {label: 'ปิด', value:'close' , action:close },
                    ]}}/>
          case false:
            return <CDropDown 
                      background="#949594" 
                      hoverbackground="#949594"
                      selection={
                        {title:'ปิด', option:[
                          {label: 'เปิด', value:'open' , action:open }
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
        keyHeader="warehouseManagement"
        arrPath={["warehouseManagement", "locker "+ location.state.id]}
        buttons={[
          { 
            colorButton: 'green',
            keytext: 'addproductlist',
            fn:  () => {
                  navigate("/warehouse-management/create-store-cabinet", {state:{id: location.state.id }} );
            }
          }
        ]}
      />
      <ContentContainer>
      <SearchForm elements={elements} onFinish={onFinish} />
      <MoTable
        rowKey={'id'}
        headerTable={`รายการสินค้า`}
        columns={columns}
        dataSource={mockData}
        onChangePage={onChangePage}
        config={{
          total: 20,
          pageSize: limitPage,
          currentPage: currentPage,
        }}
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
export default StoreCabinet;

const mockData:IStoreCabinet[] = [
  {
    id: 1,
    name: 'Treatment Service',
    sku: 'T002',
    subSku: 'T002-ALA-600',
    category: 'Treatment Service',
    subCategory: 'Detoxfication',
    priceCost: 2500,
    priceNormal: 3500,
    status: true
  },
  {
    id: 2,
    name: 'PRM-Anti IL-4',
    sku: 'DS004',
    subSku: 'DS004-ALA-020',
    category: 'Drugs & Supplements',
    subCategory: 'Homeo',
    priceCost: 1500,
    priceNormal: 500,
    status: false
  }
]