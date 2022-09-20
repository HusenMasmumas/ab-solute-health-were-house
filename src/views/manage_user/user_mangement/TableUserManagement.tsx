import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import MoTable from "component/Table/MoTable";
import {
  Button,
  Col,
  Dropdown,
  Form,
  Input,
  Menu,
  Row,
  Space,
  Switch,
} from "antd";
import { useNavigate } from "react-router-dom";
type Props = {
  dataTable: DataType[];
  // expandedRowRender?: () => void;
  // headerTable: string;
  // callAPI: ()=>void
};

interface DataType {
  key: number;
  profile: string;
  name: string;
  phone: string;
  email: string;
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

const TableUserManagement = ({ dataTable = [] }: Props) => {
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
      title: "ภาพโปรไฟล์",
      dataIndex: "profile",
    },
    {
      title: "ชื่อ-นามสกุล (ผู้จัดการ)",
      dataIndex: "name",
    },
    {
      title: "เบอร์โทร",
      dataIndex: "phone",
    },
    {
      title: "อีเมล",
      dataIndex: "email",
    },
    {
      title: "บทบาท",
      dataIndex: "role",
    },

    {
      title: "สถานะ",
      dataIndex: "status",
      render: (status) => {
        return <Switch defaultChecked onChange={onChange} />;
      },
    },
    {
      title: "จัดการ",
      dataIndex: "key",
      render: (key) => {
        return (
          <div className="flex gap-2">
            <div className="w-[30px] h-[30px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center ">
              <PencilSquareIcon
                className="h-4 w-4 text-[#646772]"
                // onClick={() => {
                //   navigate(`/manage-store-cabinet/${key}`);
                // }}
              />
            </div>
            <div className="w-[30px] h-[30px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
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
        rowSelection={rowSelection}
        // expandable={expandable}
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
export default TableUserManagement;
