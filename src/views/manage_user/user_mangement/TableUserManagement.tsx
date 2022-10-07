import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import MoTable from "component/Table/MoTable";
import { Image, Switch } from "antd";
type Props = {
  dataTable: DataType[];
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

const TableUserManagement = ({ dataTable = [] }: Props) => {
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

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "key",
      align: "center",
      width: "7%",
    },
    {
      title: "ภาพโปรไฟล์",
      dataIndex: "profile",
      width: "10%",
      render: (profile: string) => {
        return (
          <div className="w-[50px] h-[50px]">
            <Image
              style={{ borderRadius: "100%" }}
              src={profile}
              alt="profile"
              preview={false}
            ></Image>
          </div>
        );
      },
    },
    {
      title: "ชื่อ-นามสกุล (ผู้จัดการ)",
      dataIndex: "name",
      width: "16%",
    },
    {
      title: "เบอร์โทร",
      dataIndex: "phone",
      width: "16%",
    },
    {
      title: "อีเมล",
      dataIndex: "email",
      width: "20%",
    },
    {
      title: "บทบาท",
      dataIndex: "role",
    },

    {
      title: "สถานะ",
      dataIndex: "status",
      width: "7%",
      render: (status) => {
        return <Switch defaultChecked onChange={onChange} />;
      },
    },
  ];

  return (
      <MoTable
        headerTable={'จัดการผู้ใช้'}
        columns={columns}
        dataSource={dataTable}
        onChangePage={onChangePage}
        config={{
          total: 20, //ค่าจาก backend ใช้หารหน้า
          pageSize: limitPage,
          currentPage: currentPage,
        }}
      />
  );
};
export default TableUserManagement;
