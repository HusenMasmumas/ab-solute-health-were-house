import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import MoTable from "component/Table/MoTable";
import { Switch } from "antd";
import { useNavigate } from "react-router-dom";
type Props = {
  dataTable: DataType[];
  // expandedRowRender?: () => void;
  // headerTable: string;
  // callAPI: ()=>void
};

interface DataType {
  key: number;
  role: string;
  status: boolean;
}

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const TableRoleManagement = ({ dataTable = [] }: Props) => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("current", currentPage);
    console.log("limitPage", limitPage);
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "ชื่อบทบาท",
      dataIndex: "role",
    },
    {
      title: "การใช้งาน",
      dataIndex: "status",
      render: (status) => {
        return <Switch defaultChecked onChange={onChange} />;
      },
    },
  ];

  return (
    <div>
      <div></div>
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
  );
};
export default TableRoleManagement;
