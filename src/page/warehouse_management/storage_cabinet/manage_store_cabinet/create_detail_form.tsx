import { Col, Form, Input, Row, Select } from "antd";
import { useTranslation } from "react-i18next";

const CreateDetailForm = () => {
  const { t } = useTranslation();
  const option = Select;
  return (
    <div>
      <div className="bg-white py-[16px] px-[24px]">
        <div className="text-lightblue text-[22px]">
          <span>รายละเอียด</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        <Form layout="vertical">
          <Row gutter={[24, 0]}>
            <Col span={24}>
              <Form.Item label="Drug label">
                <Input placeholder="Drug label"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Properties (TH)">
                <Input placeholder="Properties (TH)"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Properties (EN)">
                <Input placeholder="Properties (EN)"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Use (TH)">
                <Input placeholder="Use (TH)"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Use (EN)">
                <Input placeholder="Use (EN)"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Unit">
                <Input placeholder="Unit"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Warming">
                <Input placeholder="Warming"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Supplier">
                <Input placeholder="Supplier"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Blood Tube">
                <Input placeholder="Blood Tube"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="InspectionDetails (TH)">
                <Input placeholder="InspectionDetails (TH)"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="InspectionDetails (EN)">
                <Input placeholder="InspectionDetails (EN)"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Lab Company">
                <Input placeholder="Lab Company"></Input>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default CreateDetailForm;
