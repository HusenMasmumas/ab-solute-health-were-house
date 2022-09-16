import SearchForm, { IsearchFormItem } from 'component/Form/searchForm';
import CHeader from 'component/headerPage/Header';
import React from 'react'
import { useTranslation } from "react-i18next";
type Props = {}

const elements: IsearchFormItem[] = [
  {
    name: 'fullname',
    label: 'ชื่อ-นามสกุล(ผู้จัดการ)',
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "tel",
    label: 'เบอร์โทร',
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "mail",
    label: 'อีเมล',
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "role",
    label: 'บทบาท',
    input: {
      type: "select",
      options: {
        values: [
          {key:1, value:'marketing', label:'การตลาด'},
          {key:2, value:'manager', label:'ผู้จัดการ'}
        ],
      },
    },
  },
  {
    name: "status", 
    label: 'การใช้งาน',
    input: {
      type: "select",
      options: {
        values: [
          {key:1, value:'active', label:'ใช้งาน'},
          {key:2, value:'inactive', label:'ไม่ใช้งาน'}
        ],
      },
    },
  },
]

const onFinish = (values: any) => {
  //โยนเข้า create query
  console.log("Received values of form: ", values);
};

const UserManagement = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F5F5F5] m-0 p-0 ">
      <CHeader 
        keyHeader="stores&branches" 
        nevigate={{
          keytext:"createShop", 
          fn:()=>{console.log('nevigate')}}
        }
        arrPath={[t('manageUser'), t('user') ]} 
      />
      <div>
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>
      {/* Table */}
      <div className="mt-10 bg-white">
        {/* <TableStoresBranches dataTable={data} headerTable={t("orderlist")}  /> */}
      </div>
    </div>
  )
}

export default UserManagement