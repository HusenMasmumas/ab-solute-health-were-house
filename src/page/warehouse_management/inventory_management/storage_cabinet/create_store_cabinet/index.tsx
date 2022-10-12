import { Tabs } from "antd";
import CreateDataForm from "./craete_data_form";
import CreateDetailForm from "./create_detail_form";
import CHeader from "component/headerPage/Header";
import { useNavigate, useLocation } from "react-router-dom";

const CreateStoreCabinet = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      <Tabs
         defaultActiveKey="1"
         type="card"
         items={[
           {
             label: `ข้อมูลสินค้า`,
             key: '1',
             children:  <CreateDataForm />
           },
           {
             label: `รายละเอียด`,
             key: '2',
             children: <CreateDetailForm />
           }
         ]}
       />
    </>
  );
};
export default CreateStoreCabinet;
