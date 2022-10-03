import { Form, FormInstance, Row, Col, Input } from "antd";
import CDatePicker from "component/input/c-date-picker";
import CInput from "component/input/c-input";
import moment from 'moment';
import { useState } from "react";
type Props = {
    form: FormInstance,
    onFinish?: (values: any) => void;
    refDisable?: boolean,
}

const PurchaseForm = ( {form, onFinish, refDisable=false }: Props) => {
  const [date, setDate] = useState<Date>(new Date())
//   let [form] = Form.useForm();
  
  const { TextArea } = Input;
  return (
    <Form 
          layout="vertical" 
          onFinish={onFinish}
          form={form}
        >
          <Row gutter={[12, 6]} align="bottom">
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="codeOrder"
                label={<span className="text-[20px]">เลขที่ใบสั่งซื้อ</span>}
              >
                <CInput />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="sendDate"
                label={<span className="text-[20px]">วันที่ส่ง</span>}
                rules={[{ required: true, message: "โปรดเลือกวันที่" }]}
              >
                <CDatePicker 
                size="large" 
                disabledDate={d =>  d.isBefore(moment(moment(), 'YYYY/MM/DD').subtract(1, 'days'))}
                onChange={(d )=>{
                  setDate(new Date(d))
                  let overTimeDate = form.getFieldValue('overtimeDate')
                  if(overTimeDate){ 
                    form.setFieldsValue({ 'overtimeDate': null})
                  }
                }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="codeRef"
                label={
                  <span className="text-[20px]">เลขที่ใบส่งที่อ้างอิง</span>
                }
              >
                <CInput disabled={refDisable}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="overtimeDate"
                label={<span className="text-[20px]">วันครบกำหนด</span>}
                rules={[{ required: true, message: "โปรดเลือกวันที่" }]}
              >
                <CDatePicker 
                size="large" 
                disabledDate={d =>  d.isBefore(moment(date, 'YYYY/MM/DD'))}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="Description1"
                label={
                  <span className="text-[20px]">รายละเอียดผู้ส่งสินค้า</span>
                }
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="Description2"
                label={
                  <span className="text-[20px]">รายละเอียดผู้สั่งสินค้า</span>
                }
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
  )
}

export default PurchaseForm