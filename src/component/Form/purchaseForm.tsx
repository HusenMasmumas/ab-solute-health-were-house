import { useState, useEffect } from "react";
import { Form, FormInstance, Row, Col, Input, DatePicker } from "antd";
import CInput from "component/input/c-input";
import moment from 'moment';
import { ConfigProvider } from 'antd';
import styled from "styled-components";
import CDatePicker from 'component/input/c-date-picker' 

interface IForm {
  codeOrder?:string | null | undefined,
  sendDate?: moment.Moment | null | undefined,
  codeRef?:string | null | undefined,
  overtimeDate?: moment.Moment | null | undefined,
  Description1?:string | null | undefined,
  Description2?:string | null | undefined,
}

const StyleCDatePicker = styled(DatePicker)`
  width: 100%;
  background-color: #FFF !important;
  color: #231F20 !important;
`;

type Props = {
    form: FormInstance,
    onFinish?: (values: any) => void,
    refDisable?: boolean,
    setValue?: IForm,
    AllreadOnly?: boolean
}

const PurchaseForm = ( {form, onFinish, refDisable=false, setValue, AllreadOnly=false }: Props) => {
  const [date, setDate] = useState<Date>(new Date())
  //let [form] = Form.useForm();
  const { TextArea } = Input;

  useEffect(()=>{
    console.log('setValueeeeeeeeeee',setValue);
    
    form.setFieldsValue({
      ...setValue,
      // sendDate: moment(new Date())
    })
  },[])

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
                <CInput readOnly={AllreadOnly}/>
              </Form.Item>
            </Col>
            <Col span={12}>
            <ConfigProvider getPopupContainer={(trigger:any) => trigger.parentElement}>
              <Form.Item
                className="mb-0"
                name="sendDate"
                label={<span className="text-[20px]">วันที่ส่ง</span>}
                rules={[{ required: true, message: "โปรดเลือกวันที่" }]}
                
              >
                  <CDatePicker 
                  disabledDate={d =>  d.isBefore(moment(moment(), 'YYYY/MM/DD').subtract(1, 'days'))}
                  onChange={(d )=>{
                    setDate(new Date( moment(d).format('YYYY-MM-DD') ))
                    let overTimeDate = form.getFieldValue('overtimeDate')
                    console.log('dddddd',d);
                    if(overTimeDate){ 
                      form.setFieldsValue({ 'overtimeDate': null})
                    }
                  }}
                  />
              
              </Form.Item>
              </ConfigProvider>
            </Col>
            <Col span={12}>
              <Form.Item
                className="mb-0"
                name="codeRef"
                label={
                  <span className="text-[20px]">เลขที่ใบส่งที่อ้างอิง</span>
                }
              >
                <CInput  readOnly={AllreadOnly} disabled={refDisable}/>
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
                <TextArea rows={4} readOnly={AllreadOnly}/>
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
                <TextArea rows={4} readOnly={AllreadOnly}/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
  )
}

export default PurchaseForm