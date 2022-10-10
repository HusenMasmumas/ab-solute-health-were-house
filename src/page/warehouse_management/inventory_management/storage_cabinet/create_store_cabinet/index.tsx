import { Button } from "antd";
import { Tabs } from "antd";
import CreateDataForm from "./craete_data_form";
import CreateDetailForm from "./create_detail_form";
import Table from "antd/lib/table";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const CreateStoreCabinet = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const columns = [
    {
      title: "SKU",
      dataIndex: "sku",
      width: "30%",
    },
    {
      title: "สี",
      dataIndex: "colour",
      width: "40%",
    },
    {
      title: "จำนวน",
      dataIndex: "amount",
    },
  ];

  return (
    <>
      <CHeader
        keyHeader="warehouseManagement"
        arrPath={["warehouseManagement", "productlist"]}
        buttons={[
          { 
            colorButton: 'whilte',
            keytext: 'cancle',
            fn:  () => {
              navigate("/warehouse-management/store-cabinet",{state:{id: location.state.id }});
            }
          },
          { 
            colorButton: 'green',
            keytext: 'save',
            fn:  () => {
              navigate("/warehouse-management/store-cabinet", {state:{id: location.state.id }});
            }
          }
        ]}
      />
      <div className="mt-[24px]">
        <Tabs defaultActiveKey="1" size="large" type="card">
          <Tabs.TabPane
            className="!text-[20px] font-semibold"
            tab="ข้อมูลสินค้า"
            key="1"
          >
            <CreateDataForm></CreateDataForm>
            <Table
              columns={columns}
              // dataSource={dataSource}
            />
          </Tabs.TabPane>
          <Tabs.TabPane
            className="!text-[20px] font-semibold"
            tab="รายละเอียด"
            key="2"
          >
            <CreateDetailForm></CreateDetailForm>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};
export default CreateStoreCabinet;
