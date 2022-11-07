import { Row, Col, Input, Form } from 'antd'
import { t } from 'i18next'
import React from 'react'

type Props = {}

const Information = (props: Props) => {
  return (
    <>
    <div className="bg-white py-[35px] px-[24px]">
      <div className="text-lightblue text-[20px] font-semibold">
        <span>{`${t("รายละเอียด")}`}</span>
      </div>
      <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
      <Row gutter={[24, 0]}>
        <Col span={24}>
          <Form.Item label="Drug label" name="drugLabel">
            <Input
              className="input-form"
              placeholder="Drug label"
            ></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item
            label="Properties (TH)"
            name="propertiesTH"
          >
            <Input
              className="input-form"
              placeholder="Properties (TH)"
            ></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Properties (EN)"
            name="propertiesEN"
          >
            <Input
              className="input-form"
              placeholder="Properties (EN)"
            ></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item label="Use (TH)" name="useTH">
            <Input
              className="input-form"
              placeholder="Use (TH)"
            ></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Use (EN)" name="useEN">
            <Input
              className="input-form"
              placeholder="Use (EN)"
            ></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item label="Unit" name="unit">
            <Input
              className="input-form"
              placeholder="Unit"
            ></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Warming" name="warming">
            <Input
              className="input-form"
              placeholder="Warming"
            ></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item label="Supplier" name="supplier">
            <Input
              className="input-form"
              placeholder="Supplier"
            ></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Blood Tube" name="bloodTube">
            <Input
              className="input-form"
              placeholder="Blood Tube"
            ></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item
            label="InspectionDetails (TH)"
            name="inspectionDetailsTH"
          >
            <Input
              className="input-form"
              placeholder="InspectionDetails (TH)"
            ></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="InspectionDetails (EN)"
            name="inspectionDetailsEN"
          >
            <Input
              className="input-form"
              placeholder="InspectionDetails (EN)"
            ></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item label="Lab Company" name="labCompany">
            <Input
              className="input-form"
              placeholder="Lab Company"
            ></Input>
          </Form.Item>
        </Col>
      </Row>
    </div>
  </>
  )
}

export default Information