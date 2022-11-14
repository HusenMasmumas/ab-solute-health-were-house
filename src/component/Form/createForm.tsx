import { Col, Form, FormInstance, Row } from "antd";
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

  return (
      <>
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form ? form : form}
          initialValues={initialValues}
        >
          <Row gutter={[12, 0]}>
            {elements.map((item) => {
              const Element = getInputByType(item.input.type) as ElementType;
              return (
                <Col span={12} key={item.name}>
                  <Form.Item
                    className="mb-0"
                    name={item.name}
                    label={<span className="text-[14px]">{item.label}</span>}
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
          </Row>
        </Form>
      </>
  );
};
export default CreateForm;
