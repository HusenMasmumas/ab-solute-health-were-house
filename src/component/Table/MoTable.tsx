import React from "react";
import { Table, Pagination, TableProps } from "antd";
import { StringLiteral } from "typescript";

interface Props extends TableProps<any> {
  headerTable?: String;
  config?: any;
  onChangePage?: (page: number, pageSize?: string) => void;
  onClickRow?: (row: any) => void;
  pagination?: boolean | any;
  onDoubleClick?: boolean;
  columns?: any[];
}

const MoTable = ({
  pagination = true,
  columns = [],
  dataSource = [],
  rowSelection,
  expandable,
  onChangePage,
  headerTable,
  config = { total: 15, currentPage: 1, pageSize: 10 },
  ...props
}: Props) => {
  return (
    <div>
      <div className="flex">
        <div className="">{headerTable}</div>
        <div className="ml-8">section action</div>
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={rowSelection}
        expandable={expandable}
        pagination={false}
        {...props}
      />
      {pagination && (
        <div className="flex justify-end mt-4">
          <div className="mr-6">ทั้งหมด: {config.total} รายการ</div>
          <Pagination
            total={config.total}
            current={config.currentPage}
            pageSize={config.pageSize}
            onChange={(page) => {
              onChangePage && onChangePage(page, "page");
            }}
            showSizeChanger
            onShowSizeChange={(_current, pageSize) =>
              onChangePage && onChangePage(pageSize, "pageSize")
            }
          />
        </div>
      )}
    </div>
  );
};

export default MoTable;
