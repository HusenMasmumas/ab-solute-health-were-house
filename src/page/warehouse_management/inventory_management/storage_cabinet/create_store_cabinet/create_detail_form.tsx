import { Col, Form, Input, Row } from "antd";
import { useTranslation } from "react-i18next";

const CreateDetailForm = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-white py-[35px] px-[24px]">
        <div className="text-lightblue text-[20px] font-semibold">
          <span>{`${t("รายละเอียด")}`}</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        <Form layout="vertical">
          <Row gutter={[24, 0]}>
            <Col span={24}>
              <Form.Item label="Drug label">
                <Input className="input-form" placeholder="Drug label"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Properties (TH)">
                <Input
                  className="input-form"
                  placeholder="Properties (TH)"
                ></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Properties (EN)">
                <Input
                  className="input-form"
                  placeholder="Properties (EN)"
                ></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Use (TH)">
                <Input className="input-form" placeholder="Use (TH)"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Use (EN)">
                <Input className="input-form" placeholder="Use (EN)"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Unit">
                <Input className="input-form" placeholder="Unit"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Warming">
                <Input className="input-form" placeholder="Warming"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Supplier">
                <Input className="input-form" placeholder="Supplier"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Blood Tube">
                <Input className="input-form" placeholder="Blood Tube"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="InspectionDetails (TH)">
                <Input
                  className="input-form"
                  placeholder="InspectionDetails (TH)"
                ></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="InspectionDetails (EN)">
                <Input
                  className="input-form"
                  placeholder="InspectionDetails (EN)"
                ></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="Lab Company">
                <Input className="input-form" placeholder="Lab Company"></Input>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default CreateDetailForm;
