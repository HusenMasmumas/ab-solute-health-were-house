import Table, { ColumnsType } from "antd/lib/table";
import MoTable from "component/Table/MoTable";
import { useTranslation } from "react-i18next";

type Props = {
  dataTable: DataType[];
};
interface DataType {
  key: number;
  name: string;
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

const TableCreateRole = ({ dataTable = [] }: Props) => {
  const { t } = useTranslation();

  const columns: ColumnsType<DataType> = [
    {
      title: "ชื่อเมนู",
      dataIndex: "name",
      // render: (name: string) => {
      //   return <div>{}</div>;
      // },
    },
  ];

  return (
    <div>
      <div></div>
      <Table
        columns={columns}
        dataSource={dataTable}
        rowSelection={rowSelection}
      />
    </div>
  );
};

export default TableCreateRole;
