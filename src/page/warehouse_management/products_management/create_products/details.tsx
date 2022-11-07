import { Row, Col, Input, Switch, Form } from 'antd'
import CInput from 'component/input/c-input'
import { t } from 'i18next'

type Props = {}

const Details = (props: Props) => {
  return (
    <>
    <div className="bg-white py-[35px] px-[24px]">
      <div className="text-lightblue text-[20px] font-semibold">
        <span>{`${t("ข้อมูลสินค้า")}`}</span>
      </div>
      <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item label="SKU" name="sku">
            <Input
              className="input-form"
              placeholder="SKU"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Sub SKU" name="subSKU">
            <Input
              className="input-form"
              placeholder="Sub SKU"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item label="Name" name="name">
            <Input
              className="input-form"
              placeholder="Name"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item label="Category" name="category">
            <Input
              className="input-form"
              placeholder="Category"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Sub Category" name="sbuCategory">
            <Input
              className="input-form"
              placeholder="Sub Category"
            />
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
          <Form.Item
            label="การใช้งาน"
            name="status"
            valuePropName="checked"
          >
            <Switch
              defaultChecked={false}
              // onChange={onChange}
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  </>
  )
}

export default Details