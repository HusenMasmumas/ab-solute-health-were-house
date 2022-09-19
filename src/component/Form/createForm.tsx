import { Col, Form, FormInstance, Input, Row } from "antd";
import { Store } from "antd/lib/form/interface";
import CDatePicker from "component/input/c-date-picker";
import CInput from "component/input/c-input";
import CSelect from "component/input/c-select";
import { ElementType } from "react";
import { IsearchFormItem, TPageHeaderInput } from "./searchForm";

type FormProps = {
  elements: IsearchFormItem[];
  form?: FormInstance;
  initialValues?: Store;
  onFinish?: (values: any) => void;
  onReset?: () => void;
};
const CreateForm = ({
  elements,
  form,
  onFinish,
  onReset,
  initialValues,
  ...props
}: FormProps) => {
  const [_form] = Form.useForm();

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
    <div>
      <div>
        <Form layout="vertical" onFinish={onFinish} form={form ? form : form}>
          <Row gutter={[12, 0]}>
            {elements.map((item) => {
              const Element = getInputByType(item.input.type) as ElementType;
              const onEnter = getOnEnter(item.input.type);
              const placeholder = getPlaceholder(item.input.type, item.label);
              return (
                <Col span={12} key={item.name}>
                  <Form.Item
                    className="mb-0"
                    name={item.name}
                    label={<span className="text-[20px]">{item.label}</span>}
                  >
                    <Element
                      style={{ fontSize: "18px", borderRadius: "4px" }}
                      size="medium"
                      placeholder={item.label}
                      option={item.input.options}
                    />
                  </Form.Item>
                </Col>
              );
            })}

            {/* <Col xl={12}>
              <Form.Item>
                <label>HI</label>
                <Input></Input>
              </Form.Item>
            </Col> */}
            {/* <Col xl={12}>
              <Form.Item>
                <label>HI</label>
                <Input></Input>
              </Form.Item>
            </Col> */}
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default CreateForm;
