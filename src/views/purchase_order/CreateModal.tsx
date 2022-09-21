import { Col, Form, Row } from "antd";
import CleanButton from "component/Button/CleanButton";
import SearchButton from "component/Button/SearchButton";
import CInput from "component/input/c-input";

type Props = {};



const CreateModal = (props: Props) => {
  
  let [_form] = Form.useForm();
  
  const onFinish = (values:any)=>{
    console.log(values);
  }

  return (
    <div>
      <div>
        <Row  gutter={[16, 16]}>
          <Form 
            form={_form}
            onFinish={onFinish}
            className="w-full lg:flex">
            
            <Col sm={24} lg={8}>
              <Form.Item
                name="nameProduct"
                className="mb-0 w-full ">
                <CInput
                  option={{ search: true }}
                  placeholder="ค้นหาชื่อและรหัสสินค้า"
                />
              </Form.Item>
            </Col>

            <Col sm={24} lg={8}>
              <Form.Item 
                name="SKU"
                className="mb-0">
                <CInput
                  option={{ search: true }}
                  placeholder="SKU"
                />
              </Form.Item>
            </Col>
            
            <Col sm={24} lg={8}>
              <Row gutter={[12, 6]}>
                <Col >
                  <SearchButton
                    onClick={()=>{ _form.submit();}}
                    size="large"
                    style={{
                      fontSize: "20px",
                      borderRadius: "4px",
                      border: "none",
                      margin: 0
                    }}
                  >
                    ค้นหา
                  </SearchButton>
                  </Col>
                  <Col >
                  <CleanButton
                    onClick={()=>{_form.resetFields();
                      _form.submit();}}
                    size="large"
                    style={{
                      fontSize: "20px",
                      borderRadius: "4px",
                      margin: 0
                    }}
                  >
                    ล้าง
                  </CleanButton>
                </Col>
              </Row>
            </Col>
          
          </Form>
        </Row>
      </div>
    </div>
  );
};

export default CreateModal;
