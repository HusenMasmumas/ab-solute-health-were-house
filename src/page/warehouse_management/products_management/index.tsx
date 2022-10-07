import { Image } from "antd";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TableProductsManagement from "views/warehouse_managment/products_management/TableProductsManagement";
import Excel from "../../../assets/img/Excel.png";

interface ProductsType {
  key: number;
  name: string;
  sku: string;
  subSku: string;
  category: string;
  subCategory: string;
  priceNormal: number;
  priceCost: number;
  status: string;
}
const ProductsMangement = () => {
  const navigate = useNavigate();
  // const { t } = useTranslation();
  const data: ProductsType[] = [
    {
      key: 1,
      name: "K8763",
      sku: "โซเดียมไบคาร์บอเนต",
      subSku: "",
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
      subSku: "",
      category: "เคมีภัณฑ์",
      subCategory: "สารละลาย",
      priceNormal: 0,
      priceCost: 0,
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
      <TableProductsManagement dataTable={data} />
    </>
  );
};
export default ProductsMangement;
