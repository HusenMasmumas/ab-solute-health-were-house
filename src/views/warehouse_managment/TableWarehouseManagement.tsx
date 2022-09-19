import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import MoTable from "component/Table/MoTable";
import { Button, Dropdown, Menu, Space } from "antd";
type Props = {
  dataTable: DataType[];
  // expandedRowRender?: () => void;
  // headerTable: string;
  // callAPI: ()=>void
};

interface DataType {
  key: number;
  name: string;
  SKU: string;
  cost: string;
  amount: number;
  price: string;
  status: string;
}

const menu = (
  <Menu
    items={[
      {
        label: "ปิดการขาย",
        key: "1",
      },
      {
        label: "เปิดการขาย",
        key: "2",
      },
    ]}
  />
);
const columns: ColumnsType<DataType> = [
  {
    title: "ชื่อสินค้า",
    dataIndex: "name",
  },
  {
    title: "SKU",
    dataIndex: "SKU",
  },
  {
    title: "ต้นทุน",
    dataIndex: "cost",
    render: (cost: string) => {
      return (
        <div className="flex justify-start items-center">
          <span className="mr-[8px]">{cost}</span>
          <PencilSquareIcon className="h-4 w-4 text-gray" />
        </div>
      );
    },
  },
  {
    title: "จำนวน",
    dataIndex: "amount",
    render: (amount: number) => {
      return (
        <div className="flex justify-start items-center">
          <span className="mr-[8px]">{amount}</span>
          <PencilSquareIcon className="h-4 w-4 text-gray" />
        </div>
      );
    },
  },
  {
    title: "ราคา",
    dataIndex: "price",
    render: (price: string) => {
      return (
        <div className="flex justify-start items-center">
          <span className="mr-[8px]">{price}</span>
          <PencilSquareIcon className="h-4 w-4 text-gray" />
        </div>
      );
    },
  },
  {
    title: "สถานะ",
    dataIndex: "status",
    render: (status: string) => {
      return (
        <div className="flex justify-start items-center">
          <Dropdown overlay={menu}>
            {status === "เปิดการขาย" ? (
              <Button
                className="!pt-0 py-[8px]"
                style={{ borderRadius: "4px", backgroundColor: "#77C48B" }}
              >
                <Space style={{ fontSize: "18px" }}>
                  {status}
                  <DownOutlined style={{ fontSize: "10px" }} />
                </Space>
              </Button>
            ) : (
              <Button
                className="!pt-0 py-[8px]"
                style={{ borderRadius: "4px", backgroundColor: "#949594" }}
              >
                <Space style={{ fontSize: "18px" }}>
                  {status}
                  <DownOutlined style={{ fontSize: "10px" }} />
                </Space>
              </Button>
            )}
          </Dropdown>
        </div>
      );
    },
  },
  {
    title: "จัดการ",
    dataIndex: "manage",
    render: () => {
      return (
        <div className="flex gap-2">
          <div className="w-[30px] h-[30px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center ">
            <PencilSquareIcon className="h-4 w-4 text-[#646772]" />
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

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const TableWarehouseManagement = ({ dataTable = [] }: Props) => {
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
      <div></div>
      <MoTable
        columns={columns}
        dataSource={dataTable}
        // expandable={{
        //   expandedRowRender: (record) => (
        //     <p style={{ margin: 0 }}>{record.description}</p>
        //   ),
        //   rowExpandable: (record) => record.name !== "Not Expandable",
        // }}
        rowSelection={rowSelection}
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
export default TableWarehouseManagement;
