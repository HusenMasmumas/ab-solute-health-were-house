import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { DashOutlined } from "@ant-design/icons";
import MoTable from "component/Table/MoTable";
type Props = {
  dataTable: DataType[]
  headerTable: string
  // callAPI: ()=>void
};

interface DataType {
  key: React.Key;
  date: string;
  code: string;
  sku: string;
  name:string;
  amount:number;
  state:string;
}
const columns: ColumnsType<DataType> = [
  {
    title: "วันที่",
    dataIndex: "date",
  },
  {
    title: "รหัสสินค้า",
    dataIndex: "code",
  },
  {
    title: "SKU",
    dataIndex: "sku",
  },
  {
    title: "ชื่อสินค้า  ",
    dataIndex: "name",
  },
  {
    title: "จำนวน",
    dataIndex: "amount",
  },
  {
    title: "สถานะ",
    dataIndex: "state",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
const DamageTable = ({ dataTable=[], headerTable='' , ...props}: Props) => {
    const [limitPage, setLimitPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
  
    useEffect(() => {
      console.log('current',currentPage);
      console.log('limitPage',limitPage);
    }, [currentPage, limitPage]);
  
    const onChangePage = (page: number, type?: string) => {
      if (type === "pageSize") setLimitPage(page);
      else setCurrentPage(page);
    };
  return (
    <div>
      <div>
        <div className="my-6">{headerTable}</div>
        <div></div>
      </div>
      <MoTable
        
        columns={columns}
        dataSource={dataTable}
        onChangePage={onChangePage}
        config={{
          total: 20, //ค่าจาก backend ใช้หารหน้า
          pageSize: limitPage,
          currentPage: currentPage,
        }}
      />
    </div>
  )
}

export default DamageTable
