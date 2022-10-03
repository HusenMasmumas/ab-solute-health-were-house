import React from "react";
import { Table, Pagination, TableProps, Divider } from "antd";
import { StringLiteral } from "typescript";

interface Props extends TableProps<any> {
  headerTable?: String;
  config?: any;
  onChangePage?: (page: number, pageSize?: string) => void;
  onClickRow?: (row: any) => void;
  pagination?: boolean | any;
  onDoubleClick?: boolean;
  columns?: any[];
  action?: any;
  scroll?: any;
}

const MoTable = ({
  pagination = true,
  columns = [],
  dataSource = [],
  rowSelection,
  expandable,
  onChangePage,
  scroll,
  headerTable,
  action,
  config = { total: 15, currentPage: 1, pageSize: 10 },
  ...props
}: Props) => {
  return (
    <div>
      {action ||
        (headerTable && (
          <div className="flex h-16">
            {headerTable ? (
              <div className="text-[20px] font-semibold w-[70%] flex items-center">
                {headerTable}
              </div>
            ) : (
              <div className="text-[20px] font-semibold w-[70%] flex items-center">
                {headerTable}
              </div>
            )}
            {action ? (
              <div className="ml-8 w-[30%] flex items-center">
                section action
              </div>
            ) : (
              <div className="ml-8 w-[30%] flex items-center"></div>
            )}
          </div>
        ))}
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={rowSelection}
        scroll={scroll}
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
