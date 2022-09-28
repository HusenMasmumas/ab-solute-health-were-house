import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import MoTable from "component/Table/MoTable";
import { Button, Col, Form, Input, Row } from "antd";
import CSelectStatus from "component/input/c-select-status";
type Props = {
  dataTable: DataType[];
  // expandedRowRender?: () => void;
  // headerTable: string;
  // callAPI: ()=>void
};

interface DataType {
  key: number;
  name: string;
  sku: string;
  category: string;
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

  useEffect(() => {
    console.log("current", currentPage);
    console.log("limitPage", limitPage);
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };

  const columns: ColumnsType<DataType> = [
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
    <div>
      <div></div>
      <MoTable
        columns={columns}
        dataSource={dataTable}
        expandable={expandable}
        onChangePage={onChangePage}
        config={{
          total: 20, //ค่าจาก backend ใช้หารหน้า
          pageSize: limitPage,
          currentPage: currentPage,
        }}
      />
    </div>
  );
};
export default TableProductsManagement;
