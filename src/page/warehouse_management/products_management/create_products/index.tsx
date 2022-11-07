import {Form} from "antd";
import { Tabs } from "antd";
import ContentContainer from "component/container/ContentContainer";
import CHeader from "component/headerPage/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as _ from "lodash";
import Details from "./details";
import Information from "./information";
const CreateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useState<"editProduct" | "productlist">(
    "productlist"
  );
  const [form] = Form.useForm();
  const onFinish = (value: any) => {
    console.log(value);
  };

  const initialEmptyForm = () => {
    form.setFieldsValue({
      bloodTube: "",
      category: "",
      drugLabel: "",
      inspectionDetailsEN: "",
      inspectionDetailsTH: "",
      labCompany: "",
      name: "",
      priceCost: 0,
      priceNormal: 0,
      propertiesEN: "",
      propertiesTH: "",
      sbuCategory: "",
      sku: "",
      status: "",
      subSKU: "",
      supplier: "",
      unit: "",
      useEN: "",
      useTH: "",
      warming: "",
      werehouse: [{ index: 0, sku: "", color: null, amount: 0 }],
    });
  };

  useEffect(() => {
    if (location.state) {
      setMode("editProduct");
    } else {
      setMode("productlist");
      initialEmptyForm();
    }
  }, []);

  return (
    <>
      <CHeader
        keyHeader="manageGoods"
        arrPath={["manageGoods", mode]}
        buttons={[
          {
            colorButton: "whilte",
            keytext: "cancle",
            fn: () => {
              navigate("/warehouse-management/products-management");
            },
          },
          {
            colorButton: "green",
            keytext: "save",
            fn: () => {
              form.submit();
              // navigate("/warehouse-management/store-cabinet", {state:{id: location.state.id }});
            },
          },
        ]}
      />
      <ContentContainer>
        <div className="mt-[24px]">
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Tabs
              items={[
                {
                  label: "ข้อมูลสินค้า",
                  key: "1",
                  children: (<Details/>),
                },
                {
                  label: "รายละเอียดสินค้า",
                  key: "2",
                  children: (<Information/>),
                },
              ]}
              defaultActiveKey="1"
              size="large"
              type="card"
            />
          </Form>
        </div>
      </ContentContainer>
    </>
  );
};
export default CreateProduct;
