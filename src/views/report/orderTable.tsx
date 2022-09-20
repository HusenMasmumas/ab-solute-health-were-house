import React, { useEffect, useState } from 'react'
import type { ColumnsType } from "antd/es/table";
import MoTable from 'component/Table/MoTable';
type Props = {
  dataTable: DataType[]
  headerTable: string
}

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
    title: "วันที่สั่งซื้อ",
    dataIndex: "date",
  },
  {
    title: "เลขที่ใบสั่งซื้อ",
    dataIndex: "code",
  },
  {
    title: "ชื่อสาขา",
    dataIndex: "branch",
  },
  {
    title: "ชื่อนามสกุล",
    dataIndex: "name",
  },
  {
    title: "เบอร์โทร",
    dataIndex: "phone",
  },
  {
    title: "รวม(฿)",
    dataIndex: "amount",
  },
  {
    title: "สถานะ",
    dataIndex: "state",
  },
];
const OrderTable = ({ dataTable=[], headerTable='' , ...props}: Props) => {
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
      <MoTable
        headerTable={headerTable}
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

export default OrderTable