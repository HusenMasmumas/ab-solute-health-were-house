import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import MoTable from "component/Table/MoTable";
import { Button, Col, Dropdown, Form, Input, Menu, Row, Space } from "antd";
import { useNavigate } from "react-router-dom";
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
  lot: string;
  price: string;
  dueDate: string;
  qty: string;
  status: string;
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

const expandable = {
  expandedRowRender: (record: any) => (
    <div className="py-[12px] px-[65px]">
      <div className="flex justify-end items-center gap-2">
        <Button className="!py-0 !rounded-[4px] !w-[80px] !text-[18px]">
          ยกเลิก
        </Button>
        <Button className="!py-0 !bg-lightblue !text-white !rounded-[4px] !w-[80px] !text-[18px]">
          บันทึก
        </Button>
      </div>
      <div className="grid grid-cols-6 px-[250px]">
        <div>
          <span className="text-[20px] !m-0">สีแดง</span>
        </div>
        <div className="col-span-5 ">
          <Form>
            <Row gutter={[24, 0]}>
              <Col xl={6}>
                <Form.Item>
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xl={6}>
                <Form.Item>
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xl={6}>
                <Form.Item>
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div className="grid grid-cols-6 px-[250px]">
        <span className="text-[20px]">สีเหลือง</span>
        <div className="col-span-5">
          <Form>
            <Row gutter={[24, 0]}>
              <Col xl={6}>
                <Form.Item>
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xl={6}>
                <Form.Item>
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xl={6}>
                <Form.Item>
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  ),
  rowExpandable: (record: any) => record.name !== "Not Expandable",
};

const TableWarehouseManagement = ({ dataTable = [] }: Props) => {
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
      title: "SKU/Sub SKU",
      dataIndex: "sku",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Category/Sub Category",
      dataIndex: "category",
    },
    {
      title: "Lot",
      dataIndex: "lot",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
    },
    {
      title: "Price Normal",
      dataIndex: "price",
      render: (price: string) => {
        return (
          <div className="flex justify-center items-center bg-white w-[100px] h-[35px] border-2 border-gray rounded-[4px] ">
            <div className="grid grid-cols-2">
              <span className="grid justify-start items-center">฿</span>
              <span className="grid justify-end items-center">{price}</span>
            </div>
          </div>
        );
      },
    },
    {
      title: "QTY",
      dataIndex: "qty",
      render: (qty: string) => {
        return (
          <div className="flex justify-center items-center bg-white w-[100px] h-[35px] border-2 border-gray rounded-[4px]">
            <div className="grid grid-cols-2">
              <span className="">{qty}</span>
            </div>
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
export default TableWarehouseManagement;
