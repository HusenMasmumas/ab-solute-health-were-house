import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import MoTable from "component/Table/MoTable";
import CSelectStatus from "component/input/c-select-status";
import { useTranslation } from "react-i18next";
type Props = {
  dataTable: ProductsType[];
};

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

const expandable = {
  expandedRowRender: (record: any) => (
    <div className="py-[12px] px-[65px]"></div>
  ),
  rowExpandable: (record: any) => record.name !== "Not Expandable",
};

const TableProductsManagement = ({ dataTable = [] }: Props) => {
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

  return (
      <MoTable
        headerTable={`${t("รายการสินค้า")}`}
        columns={columns}
        dataSource={dataTable}
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
  );
};
export default TableProductsManagement;
