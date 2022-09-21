import { Button } from "antd";
import CreateButton from "component/Button/CreateButton";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TableWarehouseManagement from "views/warehouse_managment/TableWarehouseManagement";

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

  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-darkblue font-[600] text-[30px] !mb-0">{`${t(
            "warehouseManagement"
          )}`}</h1>
          <p className="!mb-0 text-darkblue">{`${t("จัดการคลังสินค้า")}`}</p>
        </div>
        <div className="grid justify-end items-center">
          <CreateButton
            onClick={() => {
              navigate("/manage-store-cabinet");
            }}
          >
            + เพิ่มรายการสินค้า
          </CreateButton>
        </div>
      </div>
      <div className="mt-[24px]">
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>
      <div className="bg-white px-[24px] py-[16px] mt-[16px]">
        <div className="grid grid-cols-2">
          <span className="text-[#231F20] text-[22px]">รายการสั่งซื้อ</span>
          <div className="grid items-center justify-end">Exel</div>
        </div>
        <div className="ant-table-cell ant-table-selection-column ant-table-cell.ant-table-tbody">
          <TableWarehouseManagement dataTable={data}></TableWarehouseManagement>
        </div>
      </div>
    </div>
  );
};
export default StoreCabinet;
