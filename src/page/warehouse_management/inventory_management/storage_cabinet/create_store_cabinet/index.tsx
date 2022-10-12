import { Tabs } from "antd";
import CreateDataForm from "./craete_data_form";
import CreateDetailForm from "./create_detail_form";
import CHeader from "component/headerPage/Header";
import { useNavigate, useLocation } from "react-router-dom";
import { Form } from "antd";
const CreateStoreCabinet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();

  const reciveTab1 = (value:any)=>{
    console.log('reciveTab1',value);
  }
  const reciveTab2 = (value:any)=>{
    console.log('reciveTab2',value);
  }
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
              form.submit()
              // navigate("/warehouse-management/store-cabinet", {state:{id: location.state.id }});
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
             children:  <CreateDataForm form={form} formFN={reciveTab1}/>
           },
           {
             label: `รายละเอียด`,
             key: '2',
             children: <CreateDetailForm  form={form} formFN={reciveTab2}/>
           }
         ]}
       />
    </>
  );
};
export default CreateStoreCabinet;
