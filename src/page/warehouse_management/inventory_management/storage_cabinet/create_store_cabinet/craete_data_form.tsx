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
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CreateModal from "./createModal";
import CDatePicker from "component/input/c-date-picker";
import moment from "moment";
import { ColumnsType } from "antd/lib/table";
import * as _ from "lodash";
import React, { useEffect } from "react";
interface Colomns {
  index: React.Key;
  sku: string;
  color: string;
  amount: number;
}
const CreateDataForm = (props: {
  form: FormInstance;
  formFN: (value: any) => void;
}) => {
  const [date, setDate] = useState<Date>(new Date());
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<Colomns[]>();

  const onFinishModal = (values: any) => {
    console.log("amount Received Modal ", values);
    props.form.setFieldsValue({
      ...values,
    });
  };

  const columns: ColumnsType<Colomns> = [
    {
      title: "SKU",
      dataIndex: "sku",
      width: "30%",
    },
    {
      title: "สี",
      dataIndex: "color",
      width: "40%",
    },
    {
      title: "จำนวน",
      dataIndex: "amount",
    },
  ];

  const customizeRenderEmpty = () => <div className="h-32"></div>;

  const onChangeList = (value: any) => {
    setPreview(_.cloneDeep(value));
  };

  const InitForm = async () => {
    await props.form.setFieldValue("users", [
      { index: 0, sku: "", color: null, amount: 0 },
    ]);
    setPreview(_.cloneDeep(props.form.getFieldsValue().users));
  };
  useEffect(() => {
    InitForm();
  }, []);

  return (
    <>
      <div className="bg-white py-[35px] px-[24px]">
        <div className="text-lightblue text-[20px] font-semibold">
          <span>{`${t("ข้อมูลตู้เก็บสินค้า")}`}</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        <Form layout="vertical" form={props.form} onFinish={props.formFN}>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label=" ">
                <Button
                  className="!text-[16px] !h-[45px] !rounded-[5px] !border-darkblue !text-darkblue !flex !justify-center !items-center"
                  onClick={() => setOpen(true)}
                >
                  เลือกจากรายการสินค้า
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Category" name="category">
                <Input className="input-form" placeholder="Category" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Sub Category" name="subCategory">
                <Input
                  className="input-form"
                  placeholder="Sub Category"
                ></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="SKU" name="sku">
                <Input className="input-form" placeholder="Category" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Sub SKU" name="subsku">
                <Input
                  className="input-form"
                  placeholder="Sub Category"
                ></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Name" name="name">
                <Input className="input-form" placeholder="Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Price Cost" name="priceCost">
                <CInput.CInputNumberSytle />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Price Normal" name="priceNormal">
                <CInput.CInputNumberSytle />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="การใช้งาน" name="status">
                <Switch />
              </Form.Item>
            </Col>
          </Row>
          <div className="text-lightblue text-[22px] font-semibold mt-16">
            <span>ข้อมูลตามคลังสินค้า</span>
          </div>
          <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
          <Row gutter={[24, 0]}>
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
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="QTY" name="qty">
                <Input className="input-form" placeholder="qty" />
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
          setSelectData={onFinishModal}
          setOpenMoDal={setOpen}
          selectIndex={[]}
        />
      </Modal>
    </>
  );
};
export default CreateDataForm;
