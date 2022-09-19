import { Button } from "antd";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TableWarehouseManagement from "views/warehouse_managment/TableWarehouseManagement";

interface DataType {
  key: number;
  name: string;
  SKU: string;
  cost: string;
  amount: number;
  price: string;
  status: string;
}
const StoreCabinet = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const data: DataType[] = [
    {
      key: 1,
      name: "โซเดียมไบคาร์บอเนต",
      SKU: "WE-00001",
      cost: "฿ 450",
      amount: 100,
      price: "฿ 950",
      status: "เปิดการขาย",
    },
    {
      key: 2,
      name: "คลอเฟนิรามีน",
      SKU: "WE-00001",
      cost: "฿ 450",
      amount: 100,
      price: "฿ 950",
      status: "ปิดการขาย",
    },
  ];

  const elements: IsearchFormItem[] = [
    {
      name: "ชื่อร้านค้า",
      label: "ชื่อร้านค้า",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "SKU",
      label: "SKU",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "สถานะ",
      label: "สถานะ",
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
          <Button
            onClick={() => {
              navigate("/manage-store-cabinet");
            }}
            style={{
              width: "170px",
              height: "45px",
              backgroundColor: "#77C48B",
              fontSize: "20px",
              borderRadius: "4px",
              color: "#FFFFFF",
            }}
          >
            + เพิ่มรายการสินค้า
          </Button>
        </div>
      </div>
      <div>
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>
      <div className="bg-white px-[24px] py-[16px] mt-[16px]">
        <div className="grid grid-cols-2">
          <span className="text-[#231F20] text-[22px]">รายการสั่งซื้อ</span>
          <div className="grid items-center justify-end">xcel</div>
        </div>
        <div className="ant-table-cell ant-table-selection-column ant-table-cell.ant-table-tbody">
          <TableWarehouseManagement dataTable={data}></TableWarehouseManagement>
        </div>
      </div>
    </div>
  );
};
export default StoreCabinet;
