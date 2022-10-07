import { Image } from "antd";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TableWarehouseManagement from "views/warehouse_managment/inventory_management/TableWarehouseManagement";
import Excel from "../../../../assets/img/Excel.png";

interface DataType {
  key: number;
  name: string;
  sku: string;
  category: string;
  lot: string;
  price: string;
  dueDate: string;
  qty: string;
  status: string;
}
const StoreCabinet = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const data: DataType[] = [
    {
      key: 1,
      name: "K8763",
      sku: "โซเดียมไบคาร์บอเนต",
      category: "เคมีภัณฑ์",
      lot: "19/09/2023",
      price: "399",
      dueDate: "10/09/2022",
      qty: "300",
      status: "เปิดการขาย",
    },
    {
      key: 2,
      name: "K8763",
      sku: "โซเดียมไบคาร์บอเนต",
      category: "เคมีภัณฑ์",
      lot: "19/09/2023",
      price: "399",
      dueDate: "10/09/2022",
      qty: "300",
      status: "ปิดการขาย",
    },
  ];

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
        type: "input",
        options: {
          search: true,
        },
      },
    },
  ];

  // const onAdd = (value?: any) => {
  //   if (value?.id) {
  //     navigate("/setting/pdpa/edit", {
  //       state: {
  //         id: value?.id,
  //       },
  //     });
  //   } else {
  //     navigate("/setting/pdpa/add");
  //   }
  // };

  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <CHeader
        keyHeader="warehouseManagement"
        arrPath={["warehouseManagement", "locker"]}
        buttons={[
          { 
            colorButton: 'green',
            keytext: 'addproductlist',
            fn:  () => {
                  navigate("/warehouse-management/create-store-cabinet");
            }
          }
        ]}
      />
      <SearchForm elements={elements} onFinish={onFinish} />
      <TableWarehouseManagement dataTable={data}></TableWarehouseManagement>
      </>
  );
};
export default StoreCabinet;
