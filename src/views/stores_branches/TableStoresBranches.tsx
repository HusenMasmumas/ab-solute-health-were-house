import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import MoTable from "component/Table/MoTable";
import { Switch } from "antd";
type Props = {
  dataTable: DataType[];
  headerTable: string;
  // callAPI: ()=>void
};

interface DataType {
  key: React.Key;
  store: string;
  name: string;
  phone: string;
  status: boolean;
}

const columns: ColumnsType<DataType> = [
  {
    title: "#",
    dataIndex: "key",
    align: "center",
    width: "7%",
  },
  {
    title: "ชื่อร้าน",
    dataIndex: "store",
    width: "20%",
  },
  {
    title: "ชื่อนามสกุล(ผู้จัดการ)",
    dataIndex: "name",
  },
  {
    title: "เบอร์โทร",
    dataIndex: "phone",
  },
<<<<<<< HEAD
  // {
  //   title: "จัดการ",
  //   dataIndex: "address",
  //   render: () => {
  //     return (
  //       <div className="flex space-x-4 ">
  //         {/* <PencilSquareIcon className="h-4 w-4 !text-[40px]" /> */}
  //         <PencilSquareIcon className="!w-6" />
  //         <DashOutlined className="!w-6 text-2xl"/>
  //       </div>
  //     );
  //   },
  // },
=======

  {
    title: "การใช้งาน",
    dataIndex: "status",
    width: "5%",
    render: () => {
      return (
        <div className="mr-10">
          <Switch defaultChecked onChange={onChange} />
        </div>
      );
    },
  },
>>>>>>> 0e5a716309f9e22a800ba245acb3bf96fc83f8e9
];

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const TableStoresBranches = ({ dataTable = [], headerTable = "" }: Props) => {
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
  );
};

export default TableStoresBranches;
