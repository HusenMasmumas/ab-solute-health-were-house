import { Col, Form, FormInstance, Row } from "antd";
import CInput from "component/input/c-input";
import { useTranslation } from "react-i18next";

const CreateDetailForm = (props: {
  form: FormInstance;
  formFN: (value: any) => void;
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-white py-[35px] px-[24px]">
        <div className="text-lightblue text-[20px] font-semibold">
          <span>{`${t("รายละเอียด")}`}</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        <Form layout="vertical" form={props.form} onFinish={props.formFN}>
          <Row gutter={[24, 0]}>
            <Col span={24}>
              <Form.Item label="Drug label" name="DrugLabel">
                <CInput
                  className="input-form"
                  placeholder="Drug label"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Properties (TH)" name="Properties_(TH)">
                <CInput
                  className="input-form"
                  placeholder="Properties (TH)"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Properties (EN)" name="Properties_(EN)">
                <CInput
                  className="input-form"
                  placeholder="Properties (EN)"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Use (TH)">
                <CInput
                  className="input-form"
                  placeholder="Use (TH)"
                  name="useTH"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Use (EN)">
                <CInput
                  className="input-form"
                  placeholder="Use (EN)"
                  name="useEN"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Unit">
                <CInput
                  className="input-form"
                  placeholder="Unit"
                  name="unit"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Warming">
                <CInput
                  className="input-form"
                  placeholder="Warming"
                  name="warming"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Supplier">
                <CInput
                  className="input-form"
                  placeholder="Supplier"
                  name="supplier"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Blood Tube">
                <CInput
                  className="input-form"
                  placeholder="Blood Tube"
                  name="bloodTube"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="InspectionDetails (TH)">
                <CInput
                  className="input-form"
                  placeholder="InspectionDetails (TH)"
                  name="InspectionDetailsTH"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="InspectionDetails (EN)">
                <CInput
                  className="input-form"
                  placeholder="InspectionDetails (EN)"
                  name="InspectionDetailsEN"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Lab Company">
                <CInput
                  className="input-form"
                  placeholder="Lab Company"
                  name="labCompany"
                  disabled
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};
export default CreateDetailForm;
