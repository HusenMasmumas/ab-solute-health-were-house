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
  lot: string;
  price: string;
  dueDate: string;
  qty: string;
  status: string;
}

const expandable = {
  expandedRowRender: (record: any) => (
    <div className="py-[12px] px-[65px]">
      <div className="flex justify-end items-center gap-2">
        <Button className="!py-0 !rounded-[4px] !w-[80px] !text-[16px]">
          ยกเลิก
        </Button>
        <Button className="!py-0 !bg-lightblue !text-white !rounded-[4px] !w-[80px] !text-[16px]">
          บันทึก
        </Button>
      </div>
      <div className="grid grid-cols-3 px-[200px]">
        <div className="col-span-2 flex text-[16px] justify-center pl-[500px]">
          สีแดง
        </div>
        <div className=" flex justify-center items-center ">
          <Form>
            <Row gutter={[12, 0]}>
              <Col xl={12}>
                <Form.Item>
                  <Input className="table-expend" />
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item>
                  <Input className="table-expend" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div className="grid grid-cols-3 px-[200px]">
        <div className="col-span-2 flex text-[16px] justify-center pl-[500px]">
          สีเหลือง
        </div>
        <div className=" flex justify-center items-center ">
          <Form>
            <Row gutter={[12, 0]}>
              <Col xl={12}>
                <Form.Item>
                  <Input className="table-expend" />
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item>
                  <Input className="table-expend" />
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
      render: (status, row) => {
        return (
          <CSelectStatus
            state={status}
            listOption={[
              { label: "ปิดการขาย", value: "ปิดการขาย" },
              { label: "เปิดการขาย", value: "เปิดการขาย" },
            ]}
            labelKey={"label"}
            valueKey={"value"}
            activeBackground={"#77C48B"}
            initialValue={status}
            activeValue={"เปิดการขาย"}
          />
        );
      },
    },
  ];

  return (
    <>
      <MoTable
        headerTable={`รายการสินค้า`}
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
    </>
  );
};
export default TableWarehouseManagement;
