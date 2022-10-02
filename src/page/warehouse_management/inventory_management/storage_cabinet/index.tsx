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
    <div>
      <CHeader
        keyHeader="warehouseManagement"
        // nevigate={{
        //   keytext: "addproductlist",
        //   fn: () => {
        //     navigate("/warehouse-management/create-store-cabinet");
        //   },
        // }}
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
      <div className="mt-[24px]">
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>
      <div className="bg-white px-[24px] py-[16px] mt-[16px]">
        <div className="grid grid-cols-2">
          <span className="text-[#231F20] text-[20px] font-semibold">{`${t(
            "รายการสั่งซื้อ"
          )}`}</span>
          <div className="grid items-center justify-end">
            <div className="w-[45px] h-[45px] bg-[#F5F5F5] p-[10px] rounded-[4px] mb-[8px]">
              <Image src={Excel} alt="excel" preview={false}></Image>
            </div>
          </div>
        </div>
        <div className="ant-table-cell ant-table-selection-column ant-table-cell.ant-table-tbody">
          <TableWarehouseManagement dataTable={data}></TableWarehouseManagement>
        </div>
      </div>
    </div>
  );
};
export default StoreCabinet;
