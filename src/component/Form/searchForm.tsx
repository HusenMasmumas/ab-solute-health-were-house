import React, { ElementType } from "react";
import { Card, Form, Row, FormInstance, Col } from "antd";
import { Store } from "antd/lib/form/interface";
import CInput from "component/input/c-input";
import CSelect from "component/input/c-select";
import CDatePicker from "component/input/c-date-picker";
import LightButton from "component/Button/LightBlueButton";
import WhilteButton from "component/Button/whilteButton";
import DeepBlueButton from "component/Button/DeepBlue";
export type TPageHeaderInput =
  | "input"
  | "select"
  | "date-picker"
  | "range-picker"
  | "cascader"
  | "select-car-brand"
  | "select-car-type"
  | "select-pagination"
  | "select-color";
export interface IsearchFormItem {
  name: string; //ใช้เป็นชื่อ FormItemName ควรเป็นอิง
  label: string; //ใช้เป็นข้อความที่แสดง
  placeholder?: string;
  input: {
    //เลือกประเภท
    type: TPageHeaderInput;
    options?: any; //ใส่ตาม interface ของ input นั้นๆ
  };
  className?: string;
  style?: React.CSSProperties;
}

type searchFormProps = {
  elements: IsearchFormItem[];
  form?: FormInstance;
  initialValues?: Store; // ใส่ object:store แต่ยังไม่รู้หน้า { ?:?, ?:?, ?:?, }
  onFinish?: (values: any) => void;
  onReset?: () => void;
  DeepBlue?: boolean;
  NoPaddingY?: boolean;
};

const SearchForm = ({
  elements,
  form,
  onFinish,
  onReset,
  initialValues,
  DeepBlue = false,
  NoPaddingY = false,
}: searchFormProps) => {
  let [_form] = Form.useForm();

  const getInputByType = (type: TPageHeaderInput) => {
    switch (type) {
      case "input":
        return CInput.WithSearchICON;
      case "select":
        return CSelect;
      case "date-picker":
        return CDatePicker;
    }
  };

  const _onReset = () => {
    if (form) {
      form.resetFields();
      return form.submit();
    }
    _form.resetFields();
    _form.submit();
  };

  const _onSubmit = () => {
    if (form) {
      return form.submit();
    }
    _form.submit();
  };

  return (
    <Card
      className={`w-full !mt-[24px] !border-0`}
      bodyStyle={NoPaddingY ? { padding: "0px 24px 0px 24px" } : {}}
    >
      <Form layout="vertical" onFinish={onFinish} form={form ? form : _form}>
        <Row gutter={[12, 6]} align="bottom">
          {elements.map((item) => {
            const Element = getInputByType(item.input.type) as ElementType;
            return (
              <Col span={8} key={item.name}>
                <Form.Item
                  className="mb-0"
                  name={item.name}
                  label={
                    item.label ? (
                      <span className="!text-[14px]">{item.label}</span>
                    ) : null
                  }
                >
                  <Element
                    style={{ fontSize: "14px", borderRadius: "4px" }}
                    size="large"
                    placeholder={
                      item?.placeholder ? item?.placeholder : item.label
                    }
                    option={item.input.options}
                  />
                </Form.Item>
              </Col>
            );
          })}
          <Col span={8}>
            <Form.Item className="mb-0">
              <Row gutter={[0, 6]}>
                <Col className="flex space-x-4">
                  {DeepBlue ? (
                    <DeepBlueButton onClick={_onSubmit} size="large">
                      ค้นหา
                    </DeepBlueButton>
                  ) : (
                    <LightButton onClick={_onSubmit} size="large">
                      ค้นหา
                    </LightButton>
                  )}
                  <WhilteButton
                    onClick={onReset ? onReset : _onReset}
                    size="large"
                    style={{
                      fontSize: "16px",
                      borderRadius: "4px",
                    }}
                  >
                    ล้าง
                  </WhilteButton>
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default SearchForm;
