import { Col, Row } from "antd";
import CInput from "component/input/c-input";

type Props = {
  total?: number;
  discount?: number;
  totalWithoutDiscount?: number;
  netPrice?: number;
};

const LabelPay = ({
  total,
  discount,
  totalWithoutDiscount,
  netPrice,
}: Props) => {
  return (
    <Col sm={24} lg={12}>
      {typeof total == 'number' && (
        <Row className="mb-5">
          <Col sm={11} offset={1}>
            <div className="font-bold text-[20px]">รวมเป็นเงิน</div>
          </Col>
          <Col sm={12}>
            <CInput.CInputNumberSytle
              text_align="end"
              value={total}
              className="!pr-2 font-bold !text-[20px]"
              readOnly={true}
            />
          </Col>
        </Row>
      )}
      { typeof discount == 'number' && (
        <Row className="mb-5">
          <Col sm={11} offset={1}>
            <div className="font-bold text-[20px]">ส่วนลด</div>
          </Col>
          <Col sm={12}>
            <CInput.CInputNumberSytle
              text_align="end"
              value={discount}
              className="!pr-2 font-bold !text-[20px]"
              readOnly={true}
            />
          </Col>
        </Row>
      )}
      { 
        typeof totalWithoutDiscount == 'number' && (
        <Row className="mb-5">
          <Col sm={11} offset={1}>
            <div className="font-bold text-[20px]">จำนวนเงินหลังหักส่วนลด</div>
          </Col>
          <Col sm={12}>
            <CInput.CInputNumberSytle
              text_align="end"
              value={totalWithoutDiscount}
              className="!pr-2 font-bold !text-[20px]"
              readOnly={true}
            />
          </Col>
        </Row>
      )}
      { 
        typeof netPrice == 'number' && 
        <Row className="mb-5">
          <Col sm={11} offset={1}>
            <div className=" font-bold !text-[20px] ">จำนวนเงินรวมทั้งสิ้น</div>
          </Col>
          <Col sm={12}>
            <CInput.CInputNumberSytle
              text_align="end"
              value={netPrice}
              className="!pr-2 font-bold !text-[20px]"
              readOnly={true}
            />
          </Col>
        </Row>
      }
    </Col>
  );
};

export default LabelPay;
