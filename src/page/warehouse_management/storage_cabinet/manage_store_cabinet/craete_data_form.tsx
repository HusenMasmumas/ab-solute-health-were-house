import { Button, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useTranslation } from "react-i18next";

const CreateDataForm = () => {
  const { t } = useTranslation();
  const Option = Select;
  return (
    <div>
      <div className="bg-white py-[16px] px-[24px]">
        <div className="text-lightblue text-[22px]">
          <span>ข้อมูลตู้เก็บสินค้า</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        <Form layout="vertical">
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="SKU">
                <Input placeholder="SKU"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Sub SKU">
                <Input placeholder="Sub SKU"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Name">
                <Input placeholder="Name"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Category">
                <Input placeholder="Category"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Sub Category">
                <Input placeholder="Sub Category"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Lot">
                <Input placeholder="Lot"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Due Date">
                <Input placeholder="Due Date"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Price Cost">
                <Input placeholder="Price Cost"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Price Normal">
                <Input placeholder="Price Normal"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="QTY">
                <Input placeholder="QTY"></Input>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="bg-white py-[16px] px-[24px] mt-[16px]">
        <div className="text-lightblue text-[22px]">
          <span>ข้อมูลตามประเภท</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        <Form layout="vertical">
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="SKU">
                <Input placeholder="SKU"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="สี">
                <Select defaultValue="สีแดง" placeholder="สีแดง">
                  <Option value="สีแดง">สีแดง</Option>
                  <Option value="สีเขียว">สีเขียว</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="จำนวน ( จำแนกตามสี )">
                <Input placeholder="จำนวน ( จำแนกตามสี )"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={24}>
              <Form.Item label="หมายเหตุ">
                <TextArea placeholder="หมายเหตุ"></TextArea>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button className="grid justify-start items-center !w-[170px] !h-[45px] !text-[20px] !text-darkblue !rounded-[4px] !border-darkblue mt-[16px]">
          + เพิ่มตัวแปร
        </Button>
      </div>
    </div>
  );
};
export default CreateDataForm;
