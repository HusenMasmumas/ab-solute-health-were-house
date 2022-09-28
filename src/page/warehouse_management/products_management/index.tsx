import { Image } from "antd";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TableProductsManagement from "views/warehouse_managment/products_management/TableProductsManagement";
import Excel from "../../../assets/img/Excel.png";

interface DataType {
  key: number;
  name: string;
  sku: string;
  category: string;
  status: string;
}
const ProductsMangement = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const data: DataType[] = [
    {
      key: 1,
      name: "K8763",
      sku: "โซเดียมไบคาร์บอเนต",
      category: "เคมีภัณฑ์",
      status: "เปิด",
    },
    {
      key: 2,
      name: "K8763",
      sku: "โซเดียมไบคาร์บอเนต",
      category: "เคมีภัณฑ์",
      status: "ปิด",
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
        keyHeader="manageGoods"
        nevigate={{
          keytext: "addproductlist",
          fn: () => {
            navigate("/warehouse-management/craete-products-management");
          },
        }}
        arrPath={["manageGoods"]}
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
          <TableProductsManagement dataTable={data} />
        </div>
      </div>
    </div>
  );
};
export default ProductsMangement;
