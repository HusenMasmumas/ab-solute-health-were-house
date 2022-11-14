import {
  Button,
  Col,
  Form,
  FormInstance,
  Input,
  Modal,
  Row,
  Switch,
} from "antd";
import CInput from "component/input/c-input";
import CreateModal, { ProductsType } from "./createModal";
import CDatePicker from "component/input/c-date-picker";
import moment from "moment";
import * as _ from "lodash";
import { useEffect, useState } from "react";
import DiverderBlue from "component/Divider/DiverderBlue";
import styled from 'styled-components'

const InputSytle = styled(Input)<{readOnly:string}>`
  width: 100%;
  border-radius: 5px !important;
`

const CreateDataForm = (props: {
  form: FormInstance;
  formFN: (value: any) => void;
}) => {
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  const onFinishModal = (values: ProductsType) => {
    console.log("amount Received Modal ", values);
    props.form.setFieldsValue({
      ...values,
    });
  };

  const InitForm = async () => {
    await props.form.setFieldValue("users", [
      { index: 0, sku: "", color: null, amount: 0 },
    ]);
  };
  useEffect(() => {
    InitForm();
  }, []);

  return (
    <>
      <div className="bg-white py-[35px] px-[24px]">
        <div className="text-lightblue text-[20px] font-semibold">ข้อมูลตู้เก็บสินค้า</div>
        <DiverderBlue />
        <Form layout="vertical" form={props.form} onFinish={props.formFN}>
          <Row gutter={[24, 0]}>
            <Col span={24}>
              <Form.Item label=" ">
                <Button
                  className="!text-[16px] !h-[45px] !rounded-[5px] !border-darkblue !text-darkblue !flex !justify-center !items-center"
                  onClick={() => setOpen(true)}
                >
                  เลือกจากรายการสินค้า
                </Button>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Category" name="category">
                <CInput className="input-form" placeholder="Category" disabled/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Sub Category" name="subCategory">
                <CInput className="input-form" placeholder="Sub Category" disabled/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="SKU" name="sku">
                <CInput className="input-form" placeholder="Category" disabled/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Sub SKU" name="subSku">
                <CInput className="input-form" placeholder="Sub Category" disabled/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Name" name="name">
                <CInput className="input-form" placeholder="Name" disabled/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Price Cost" name="priceCost">
                <CInput.CInputNumberSytle disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Price Normal" name="priceNormal">
                <CInput.CInputNumberSytle disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="การใช้งาน" name="status" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
          <Col span={24}>
            <div className="text-lightblue text-[22px] font-semibold mt-16">ข้อมูลตามคลังสินค้า</div>
            <DiverderBlue />
          </Col>
          <Col span={12}>
              <Form.Item label="Lot" name="lot">
                <CDatePicker
                  disabledDate={(d) =>
                    d.isBefore(
                      moment(moment(), "YYYY/MM/DD").subtract(1, "days")
                    )
                  }
                  onChange={(d) => {
                    setDate(new Date(moment(d).format("YYYY-MM-DD")));
                    let dueDate = props.form.getFieldValue("dueDate");
                    if (dueDate) {
                      props.form.setFieldsValue({ dueDate: null });
                    }
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Due Date" name="dueDate">
                <CDatePicker
                  disabledDate={(d) => d.isBefore(moment(date, "YYYY/MM/DD"))}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="QTY" name="qty">
                <CInput className="input-form" placeholder="qty" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <Modal
        title={
          <span className="text-lightblue font-semibold text-[20px]">
            รายละเอียดสินค้า
          </span>
        }
        centered
        open={open}
        footer={false}
        onCancel={() => setOpen(false)}
        width={1000}
        destroyOnClose={true}
        zIndex={2000}
        bodyStyle={{ padding: "0 0 20px 0" }}
      >
        <CreateModal
          onFinishModal={onFinishModal}
          setOpenMoDal={setOpen}
          selectIndex={[]}
        />
      </Modal>
    </>
  );
};
export default CreateDataForm;
