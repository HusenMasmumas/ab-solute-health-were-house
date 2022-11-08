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
      width:'15%'
    },
    {
      title: "Sub Category",
      dataIndex: "SubCategory",
      width:'20%'
    },
    {
      title: "SKU",
      dataIndex: "sku",
      width:'15%'
    },
    {
      title: "subSKU",
      dataIndex: "subSKU",
      width:'10%'
    },
    {
      title: "Name",
      dataIndex: "dueDate",
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
      render: (text) => {
        switch(true) {
          case text === 'เปิดการขาย':
            return <CDropDown 
                      background="#77C48B" 
                      hoverbackground="#5F9C6F"
                      selection={
                        {title:text, option:[
                          {label: 'เปิดการขาย', value:'open' , action:open },
                    ]}}/>
          case text === 'ปิดการขาย':
            return <CDropDown 
                      background="#949594" 
                      hoverbackground="#949594"
                      selection={
                        {title:text, option:[
                          {label: 'ปิดการขาย', value:'close' , action:close }
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
        headerTable={`รายการสินค้า`}
        columns={columns}
        dataSource={[]}
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