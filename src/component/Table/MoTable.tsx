import { Table, Pagination, TableProps, Card, Image } from "antd";
import Excel from "assets/img/Excel.png";
import styled from "styled-components";
interface IAction {
  type: "excel" | "delete"
  fn?: (row?: any) => void;
}

const StyleTable = styled(Table)`
  .ant-table-expanded-row td {
    padding : 0px;
  }
`
interface Props extends TableProps<any> {
  headerTable?: String;
  config?: any;
  onChangePage?: (page: number, pageSize?: string) => void;
  onClickRow?: (row: any) => void;
  pagination?: boolean | any;
  onDoubleClick?: boolean;
  columns?: any[];
  actions?: IAction[];
  scroll?: any;
  noMarginTop?: boolean;
}

const MoTable = ({
  pagination = true,
  columns = [],
  dataSource = [],
  rowSelection,
  expandable,
  onChangePage,
  headerTable,
  actions,
  config = { total: 15, currentPage: 1, pageSize: 10 },
  scroll = {x:900},
  noMarginTop = false,
  ...props
}: Props) => {
  
  return (
    <>
      <Card className={`w-full !my-10 !border-0 ${noMarginTop ? '!my-0' : '!my-10'}`}>
        {
          headerTable && actions &&
          <div className="flex h-16">
            <div className="text-[20px] font-semibold w-[70%] flex items-center">
              {headerTable ? headerTable : null}
            </div> 
            <div className="ml-8 w-[30%] flex items-center justify-end">
              {
                actions?.map((element:IAction,index:number)=>{
                  switch (element.type) {
                    case 'excel':
                      return (
                        <div key={index} className="w-[45px] h-[45px] bg-[#F5F5F5] p-[10px] rounded-[4px] mb-[8px] hover:cursor-pointer">
                          <Image src={Excel} alt="excel" preview={false} onClick={element.fn} />
                        </div>
                      )
                    default:
                      return <span></span>
                  }
                })
              }
            </div>
          </div>
        }
        <StyleTable
          columns={columns}
          dataSource={[...dataSource]}
          rowSelection={rowSelection}
          scroll={scroll}
          expandable={expandable}
          pagination={false}
          {...props}
        />
        {pagination && (
          <div className="flex justify-end items-center mt-4">
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
      </Card>
    </>
  );
};

export default MoTable;
