import React, { useEffect, useState } from 'react'
import type { ColumnsType } from "antd/es/table";
import MoTable from 'component/Table/MoTable';
type Props = {
  dataTable: IImportTable[]
  headerTable: string
}

interface IImportTable {
  key: React.Key;
  date: string;
  code: string;
  sku: string;
  name:string;
  amount:number;
  state:string;
}

const columns: ColumnsType<IImportTable> = [
  {
    title: "วันที่",
    dataIndex: "date",
  },
  {
    title: "รหัสสินค้า",
    dataIndex: "code",
  },
  {
    title: "ชื่อสินค้า",
    dataIndex: "branch",
  },
  {
    title: "ปริมาณ",
    dataIndex: "name",
  },
  {
    title: "ราคาต้นทุน",
    dataIndex: "phone",
  },
  {
    title: "ราคาขายปลีก",
    dataIndex: "amount",
  },
];
const ImportTable = ({ dataTable=[], headerTable='' , ...props}: Props) => {
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

export default ImportTable