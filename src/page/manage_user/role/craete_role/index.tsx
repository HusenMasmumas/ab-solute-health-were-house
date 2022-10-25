import { Col, Form, Input, Row } from "antd";
import { ColumnsType } from "antd/lib/table";
import CHeader from "component/headerPage/Header";
import MoTable from "component/Table/MoTable";
import { useNavigate } from "react-router-dom";
import ContentContainer from "component/container/ContentContainer";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CCheckBox from "component/input/c-checkBox";
import { useEffect, useState } from "react";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import _ from "lodash";
import { useCreateRole, useGetRole } from "service/permission";
import { Permission } from "service/permission/interface";
import { useQueryClient } from "@tanstack/react-query";
interface DataType {
  nameTh: string;
  nameEn: string;
  active: boolean;
  isEdit: boolean;
  subMenu?: DataType[];
}

const StyleTable = styled(MoTable)`
  .ant-table-row-level-0 {
    background-color: #f9fafc;
  }
  .ant-table-cell.ant-table-cell-with-append {
    display: flex;
    align-items: center;
  }
`;

const CreateRole = () => {
  const navigate = useNavigate();
  const [GlobalTemp, setGlobalTemp] = useState<Permission[]>([]);
  const [name, setName] = useState<String>('')
  const { data } = useGetRole();
  const queryClient = useQueryClient();
  
  const setting = (
    keyname: "active" | "isEdit",
    state: boolean,
    record: Permission
  ) => {
    let tempArr = data?.result?.[0]?.permission.map((item: Permission) => {
      if (item.nameTh === record.nameTh && item.nameEn === record.nameEn) {
        //เป็นตัวแม่
        if (
          record.subMenu?.length !== 0 &&
          record.subMenu !== undefined &&
          record.subMenu !== null
        ) {
          item.subMenu?.map((subItem: DataType) => {
            setting(keyname, state ? true : false, subItem);
          });
        }
        item[keyname] = state;
        return item;
      } else if (
        item.subMenu?.length !== 0 &&
        item.subMenu !== undefined &&
        item.subMenu !== null
      ) {
        //เป็นตัวลูก
        let check = true;
        let temp = item.subMenu?.map((subItem: DataType) => {
          if (
            subItem.nameTh === record.nameTh &&
            subItem.nameEn === record.nameEn
          ) {
            subItem[keyname] = state;
            if (state === true) {
              item[keyname] = state;
            }
            return subItem;
          }
          if (subItem[keyname] !== state) {
            check = false;
          }
          return subItem;
        });
        if (check) {
          item[keyname] = state;
        }
        item.subMenu = temp;
        return item; 
      }
      return item;
    });

    setGlobalTemp(tempArr || [])
  };

  useEffect(()=>{
    queryClient.setQueryData(["get-role"], {...data,result:[{...data?.result?.[0] || [] ,permission: _.cloneDeep(GlobalTemp)|| [] }]})
  },[GlobalTemp])

  const columns: ColumnsType<DataType> = [
    {
      title: (
        <div className="flex">
          <div className="w-7"></div>
          {"ชื่อเมนู"}
        </div>
      ),
      dataIndex: "nameTh",
      width: "50%",
    },
    {
      title: "จัดการ",
      dataIndex: "",
      render: (_, record: DataType) => {
        return (
          <>
            <CCheckBox
              label="แสดงผล"
              checked={record.active}
              onChange={(e: CheckboxChangeEvent) => {
                setting("active", e.target.checked, record);
              }}
            />
            {record.nameEn.includes("REPORT") ? (
              <CCheckBox
                label="แก้ไข้/เพิ่ม/ลบ"
                checked={false}
                disabled
                onChange={(e: CheckboxChangeEvent) => {
                  setting("isEdit", e.target.checked, record);
                }}
              />
            ) : (
              <CCheckBox
                label="แก้ไข้/เพิ่ม/ลบ"
                checked={record.isEdit}
                onChange={(e: CheckboxChangeEvent) => {
                  setting("isEdit", e.target.checked, record);
                }}
              />
            )}
          </>
        );
      },
    },
  ];

  const expandable = {
    childrenColumnName: "subMenu",
    expandIcon: (props: any) => {
      const { expanded, onExpand, record } = props;
      if (
        record.subMenu?.length !== 0 &&
        record.subMenu != undefined &&
        record.subMenu != null
      ) {
        return expanded ? (
          <div className="w-7 flex items-center">
            <MinusSquareOutlined onClick={(e) => onExpand(record, e)} />
          </div>
        ) : (
          <div className="w-7 flex items-center">
            <PlusSquareOutlined onClick={(e) => onExpand(record, e)} />
          </div>
        );
      } else {
        return <div className="w-7"></div>;
      }
    },
  };

  const createRole = useCreateRole()
  return (
    <>
      <CHeader
        keyHeader="manageUser"
        arrPath={["manageUser", "role", "addRole"]}
        buttons={[
          {
            colorButton: "whilte",
            keytext: "cancle",
            fn: () => {
              navigate("/user/role");
            },
          },
          {
            colorButton: "green",
            keytext: "save",
            fn: () => {
              if( data?.result[0].permission ){
              createRole.mutate(
                {
                  name: name as string,
                  isActive: true,
                  permission: data?.result[0].permission 
                },
                {
                  onSuccess: async () => {
                    alert('success')
                    navigate("/user/role");
                  },
                  onError: async () => {
                    alert('onError')
                  },
                }
              )
              }
            },
          },
        ]}
      />
      <ContentContainer>
        <div className="bg-white mt-[24px] px-[30px] py-[24px]">
          <div className="text-[#231F20] text-[20px] font-semibold mb-[8px]">
            เพิ่มบทบาท
          </div>
          <Form layout="vertical">
            <Row gutter={[24, 0]}>
              <Col span={24}>
                <Form.Item label="ชื่อบทบาท">
                  <Input className="input-form" placeholder="ชื่อบทบาท" onChange={(e)=>{setName(e.target.value)}}/>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="bg-white mt-[24px] px-[30px] py-[24px]">
          <StyleTable
            key="nameEn"
            rowKey="nameEn"
            pagination={false}
            columns={columns}
            dataSource={data?.result[0].permission}
            expandable={expandable}
            noMarginX={true}
            noMarginTop={true}
          />
        </div>
      </ContentContainer>
    </>
  );
};
export default CreateRole;