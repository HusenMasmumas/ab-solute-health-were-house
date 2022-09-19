import React, { ElementType } from "react";
import { Card, Form, Button, Row, FormInstance, Col } from "antd";
import { Store } from "antd/lib/form/interface";
import {
  BeakerIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import CInput from "component/input/c-input";
import CSelect from "component/input/c-select";
import SearchButton from "component/Button/SearchButton";
import CleanButton from "component/Button/CleanButton";
import CDatePicker from "component/input/c-date-picker";
import { spawn } from "child_process";
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
  label: string;
  input: {
    type: TPageHeaderInput;
    options?: any;
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
};

const SearchForm = ({
  elements,
  form,
  onFinish,
  onReset,
  initialValues,
  ...props
}: searchFormProps) => {
  let [_form] = Form.useForm();

  const getInputByType = (type: TPageHeaderInput) => {
    switch (type) {
      case "input":
        return CInput;
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
    // ทำงานเหมือนกดปุ่ม เรียกปุ่ม submit buttom
    if (form) {
      return form.submit();
    }
    _form.submit();
  };

  const getPlaceholder = (
    input: TPageHeaderInput,
    name: string
  ): string | undefined => {
    const list: TPageHeaderInput[] = [
      "input",
      "select",
      "select-car-brand",
      "select-car-type",
      "select-color",
      "select-pagination",
    ];
    if (list.includes(input)) {
      return name;
    }
  };

  const getOnEnter = (input: TPageHeaderInput): object => {
    if (input === "input") {
      return { onPressEnter: _onSubmit };
    }
    return {};
  };

  return (
    <Card className="w-full">
      <Form layout="vertical" onFinish={onFinish} form={form ? form : _form}>
        <Row gutter={[12, 6]} align="bottom">
          {elements.map((item) => {
            const Element = getInputByType(item.input.type) as ElementType;
            const onEnter = getOnEnter(item.input.type);
            const placeholder = getPlaceholder(item.input.type, item.label);
            return (
              <Col span={8} key={item.name}>
                <Form.Item
                  className="mb-0"
                  name={item.name}
                  label={<span className="text-[20px]">{item.label}</span>}
                >
                  <Element
                    style={{ fontSize: "20px", borderRadius: "4px" }}
                    size="large"
                    placeholder={item.label}
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
                  <SearchButton
                    onClick={_onSubmit}
                    size="large"
                    style={{
                      fontSize: "20px",
                      borderRadius: "4px",
                      border: "none",
                    }}
                  >
                    ค้นหา
                  </SearchButton>
                  <CleanButton
                    onClick={onReset ? onReset : _onReset}
                    size="large"
                    style={{
                      fontSize: "20px",
                      borderRadius: "4px",
                    }}
                  >
                    ล้าง
                  </CleanButton>
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
