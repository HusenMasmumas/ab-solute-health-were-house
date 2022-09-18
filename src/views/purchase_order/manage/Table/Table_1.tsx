import React , { useEffect, useState }  from 'react' 
import MoTable from 'component/Table/MoTable'
import type { ColumnsType } from "antd/es/table";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { DashOutlined } from "@ant-design/icons";
type Props = {}

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: "#",
        dataIndex: "index",
    },
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
      title: "ชื่อ-นามสกุล",
      dataIndex: "fullname",
    },
    {
      title: "เบอร์โทร",
      dataIndex: "phone",
    },
    {
      title: "รวม(บาท)",
      dataIndex: "pay",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
    },
    {
      title: "จัดการ",
      dataIndex: "status",
      render: () => {
        return (
          <div className="flex space-x-4 ">
            <PencilSquareIcon className="!w-6" />
            <DashOutlined className="!w-6 text-2xl"/>
          </div>
        );
      },
    },
  ];

const Table_1 = (props: Props) => {
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
    <div className="mt-10 bg-white">
          <MoTable 
            columns={columns}
            dataSource={mock}
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

export default Table_1

const mock = [
    {
        index:1,
        date:'23-02-2564',
        code:'asdsad',
        branch:'ร้านขายยาวังทองหลาง',
        fullname:'สมพงษ์ ตามังกร',
        phone:'0934213455',
        pay:'3000',
        status:'อนุมัติ'
    },
    {
        index:1,
        date:'23-02-2564',
        code:'asdsad',
        branch:'ร้านขายยาวังทองหลาง',
        fullname:'สมพงษ์ ตามังกร',
        phone:'0934213455',
        pay:'3000',
        status:'อนุมัติ'
    }
]