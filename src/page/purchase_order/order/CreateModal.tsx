import { Col, Form, Row, InputNumber, Divider } from "antd";
import { ColumnsType } from "antd/lib/table";
import CInput from "component/input/c-input";
import MoTable from "component/Table/MoTable";
import { useState, useEffect } from "react";
import axios from "axios";
import WhilteButton from "component/Button/whilteButton";
import DeepBlueButton from "component/Button/DeepBlue";
import BlueButton from "component/Button/BlueButton";
type Props = {
  setSelectData: (row: any, arrindex: any) => void; //ส่งค่ากลับไปที่หน้าสร้าง
  setOpenMoDal: (row: any) => void; //เปิดปิด modal
  historyData: any;
  selectIndex: number[];
};

interface TableType {
  index: number;
  sku: string;
  name: string;
  price: number;
  amount: number;
  unit: string;
  total: number;
}

const CreateModal = (props: Props) => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>();

  const [dataPage, setDataPage] = useState<any>([]); // ข้อมูลที่ list Table ให้เลือกตามหน้า
  const [historyData, sethistoryData] = useState<any>([]); // ข้อมูลที่ list Table ทั้งหมดที่เคย fetch มา ทำเพื่อเก็บข้อมูลการแก้ไขชั่วคราว

  const [selectKey, setSelectKey] = useState<number[]>([]); // item ที่เลือก

  const [keySearch, setKeySearch] = useState<string>(""); // คำที่ใช้ค้นหา
  let [_form] = Form.useForm();
  const onFinish = ({ nameProduct }: { nameProduct: string }) => {
    console.log("nameProduct", nameProduct);
    setKeySearch(nameProduct);
  };

  const columns: ColumnsType<TableType> = [
    {
      title: "index",
      dataIndex: "index",
    },
    {
      title: "SKU",
      dataIndex: "sku",
    },
    {
      title: "ชื่อสินค้า",
      dataIndex: "name",
    },
    {
      title: "ราคา/หน่วย",
      dataIndex: "price",
      render: (price: number) => {
        return <span>{price.toFixed(2)}</span>;
      },
    },
    {
      title: "จำนวนที่ต้องการ",
      dataIndex: "amount",
      render: (amount: number, record, index) => {
        return (
          <span>
            <InputNumber
              min={1}
              defaultValue={1}
              value={amount}
              onChange={(value) => {
                if (typeof value === "number")
                  onChangeInputAmout(value, record, index);
                else {
                  onChangeInputAmout(1, record, index);
                }
              }}
            />
          </span>
        );
      },
    },
    {
      title: "หน่วย",
      dataIndex: "unit",
    },
    {
      title: "ราคารวม(฿)",
      dataIndex: "fullpay",
      render: (_, record) => {
        return <span>{(record.price * record.amount).toFixed(2)}</span>;
      },
    },
  ];

  const onChangeInputAmout = (value: number, record: any, index: any) => {
    const changeArr = historyData.map((obj: any) => {
      if (record.index === obj.index) {
        return record;
      }
      return obj;
    });
    sethistoryData([...changeArr]);
    const newData = [...dataPage];
    newData[index].amount = value;
    setDataPage([...newData]);
  };

  const rowSelection = {
    // columnWidth:'150px',
    columnTitle: <span>#</span>,
    selectedRowKeys: selectKey,
    onSelect: (record: any, selected: any, selectedRows: any) => {
      if (selectKey.includes(record.index)) {
        let indexArr = selectKey.filter(
          (item: number) => item !== record.index
        );
        setSelectKey([...indexArr]);
      } else {
        setSelectKey((prevState: any) => {
          return [...prevState, record.index];
        });
      }
    },
  };

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") {
      setLimitPage(page);
    } else {
      setCurrentPage(page);
    }
  };

  const specialSwitch = async () => {
    await sethistoryData([...props.historyData]);
    setCurrentPage(1);
  };

  useEffect(() => {
    setSelectKey([...props.selectIndex]);
    specialSwitch();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // const obj = { limit: limitPage, page: currentPage, key: keySearch };
    fakerFetchData(currentPage);
    // eslint-disable-next-line
  }, [currentPage]);

  useEffect(() => {
    // const obj = { limit: limitPage, page: 1, key: keySearch };
    // console.log(createQueryString(obj));
    // fetchData(createQueryString(obj));
    // fakerFetchData(4)
    // eslint-disable-next-line
  }, [limitPage]);

  useEffect(() => {
    // const obj = { limit: limitPage, page: 1, key: keySearch };
    // console.log(createQueryString(obj));
    // fetchData(createQueryString(obj));
    // fakerFetchData(3)
    // eslint-disable-next-line
  }, [keySearch]);

  // const fetchData = async (query: string) => {
  //   const { data } = await axios.get(`http://localhost:5000/product${query}`);
  //   const arr = data.map((element: any) => {
  //     const find = historyData.find((obj: any) => {
  //       return obj.index === element.index;
  //     });
  //     if (find) {
  //       return find;
  //     } else {
  //       sethistoryData((prevState: any) => {
  //         return [...prevState, element];
  //       });
  //       return element;
  //     }
  //   });
  //   setDataPage(arr); //ทำงานปกติ
  // };

  const fakerFetchData = async (query: number | undefined) => {
    if (query === undefined) return;

    const { data } = await axios.get(`http://localhost:5000/product/${query}`);

    const arr = data.map((element: any) => {
      const find = historyData.find((obj: any) => {
        return obj.index === element.index;
      });

      if (find) {
        return find; // return ออกไป arr  มีแล้วก็ไม่ต้องเก็บ
      } else {
        sethistoryData((prevState: any) => {
          return [...prevState, element];
        }); // เอาเข้าไปเก็บใน history
        return element; // return ออกไป arr
      }
    });
    setDataPage(arr); //ทำงานปกติ
  };

  return (
    <>
      <div>
        <Row gutter={[16, 16]}>
          <Form form={_form} onFinish={onFinish} className="w-full lg:flex">
            <Col sm={24} lg={8}>
              <Form.Item name="nameProduct" className="mb-0 w-full ">
                <CInput.WithSearchICON
                  option={{ search: true }}
                  placeholder="ค้นหาชื่อและรหัสสินค้า"
                />
              </Form.Item>
            </Col>
            <Col sm={24} lg={8}>
              <Row gutter={[12, 6]}>
                <Col>
                  <DeepBlueButton
                    onClick={() => {
                      _form.submit();
                    }}
                    size="large"
                    style={{
                      fontSize: "20px",
                      borderRadius: "4px",
                      border: "none",
                      margin: 0,
                    }}
                  >
                    ค้นหา
                  </DeepBlueButton>
                </Col>
                <Col>
                  <WhilteButton
                    color="#004C97"
                    bordercolor="#004C97"
                    onClick={() => {
                      _form.resetFields();
                      _form.submit();
                    }}
                    size="large"
                    style={{
                      fontSize: "20px",
                      borderRadius: "4px",
                      margin: 0,
                    }}
                  >
                    รีเซ็ท
                  </WhilteButton>
                </Col>
              </Row>
            </Col>
          </Form>
        </Row>
      </div>
      <MoTable
        key="index"
        rowKey="index"
        columns={columns}
        dataSource={dataPage}
        rowSelection={rowSelection}
        onChangePage={onChangePage}
        scroll={{
          y: 340,
        }}
        config={{
          total: 40, //ค่าจาก backend ใช้หารหน้า
          pageSize: limitPage,
          currentPage: currentPage,
        }}
        noMarginX={true}
      />
      <Divider />
      <div className="flex space-x-4 justify-end">
        <BlueButton
          onClick={() => {
            props.setSelectData([...historyData], [...selectKey]);
            props.setOpenMoDal(false);
          }}
        >
          ยืนยัน
        </BlueButton>
        <WhilteButton
          onClick={() => {
            props.setOpenMoDal(false);
          }}
        >
          ยกเลิก
        </WhilteButton>
      </div>
    </>
  );
};

export default CreateModal;
