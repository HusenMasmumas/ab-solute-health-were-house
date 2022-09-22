import { ApexOptions } from "apexcharts";
import ApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";
import { Select, Image } from "antd";
import Dashboard1 from "./../../assets/img/Dashboard-1.png";
import Dashboard from "./../../assets/img/Dashboard.png";
import Dashboard2 from "./../../assets/img/Dashboard-2.png";
import Dashboard3 from "./../../assets/img/Dashboard-3.png";
import Arrow from "./../../assets/img/Dashboard-4.png";

const OverAllPage = () => {
  const { t } = useTranslation();
  const { Option } = Select;

  const dataSourceBar = [
    {
      data: [700, 650, 860, 250],
    },
  ];
  const optionsBar = {
    chart: { toolbar: { show: false } },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    xaxis: {
      categories: ["รออนุมัติ", "อนุมัติ", "อยู่ระหว่างขนส่ง", "ตีกลับ"],
      labels: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 40,
      position: "right",
      style: {
        fontSize: "12px",
        colors: ["#000000"],
      },
    },
    tooltip: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 10,
      colors: ["#fff"],
    },
  } as ApexOptions;
  const dataScouces = [
    {
      data: [5, 10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      data: [10, 20, 21, 35, 41, 49, 62, 89, 91, 128],
    },
    {
      data: [20, 85, 2, 35, 41, 55, 88, 89, 55, 89],
    },
  ];
  const options = {
    chart: { toolbar: { show: false } },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      row: {
        colors: ["#ffffff", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.1,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Aug 2018",
        "Sep 2018",
        "Oct 2018",
        "Nov 2018",
        "Dec 2018",
        "Jan 2019",
        "Feb 2019",
        "Mar 2019",
        "Apr 2019",
        "May 2019",
      ],
      tickPlacement: "on",
      position: "button",
      labels: {
        show: true,
        style: {
          colors: "#8D8D8D",
          fontSize: "15px",
          fontFamily: "FCIconic",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
  } as ApexOptions;

  return (
    <div>
      <div className="grid grid-cols-2">
        <h1 className="text-darkblue font-[600] text-[30px] !mb-0">{`${t(
          "ภาพรวมระบบ"
        )}`}</h1>
        <div className="grid justify-end items-center">
          <Select
            className="!w-[154px] !text-[18px] !text-gray !rounded-[4px]"
            defaultValue="Sep,2022"
          >
            <Option value="Sep,2022">Sep,2022</Option>
            <Option value="Oct,2022">Oct,2022</Option>
            <Option value="Nov,2022">Nov,2022</Option>
            <Option value="Dec,2022">Dec,2022</Option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-[12px;]">
        <div className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px]">
          <p className="!mb-0">{`${t("รายการการสั่งสินค้าทั้งหมด")}`}</p>
          <div className="border-b-[0.1px] my-[16px] border-lightgray"></div>
          <div className="grid grid-cols-3 ">
            <div className=" text-green">
              <div className="bg-[#F5FAF7] h-[65px] w-[65px] rounded-full flex items-center justify-center p-4">
                {/* icon */}
                <Image src={Dashboard} alt="dashboard" preview={false}></Image>
              </div>
            </div>
            <div className="basis-4/6 text-[42px] font-semibold text-[#0F1B45]">
              {`${t("300 K")}`}
            </div>
            <div className="flex text-lightblue items-end justify-end pt-[40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px]">
          <p className="!mb-0">{`${t("จำนวนการสินค้าทั้งหมด")}`}</p>
          <div className="border-b-[0.1px] my-[16px] border-lightgray"></div>
          <div className="grid grid-cols-3">
            <div className=" text-green">
              <div className="bg-[#F5FAF7] h-[65px] w-[65px] rounded-full flex items-center justify-center p-4">
                {/* icon */}
                <Image src={Dashboard1} alt="dashboard" preview={false}></Image>
              </div>
            </div>
            <div className="basis-4/6 text-[42px] font-semibold text-[#0F1B45]">
              {`${t("300 K")}`}
            </div>
            <div className="flex text-lightblue items-end justify-end pt-[40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px]">
          <p className="!mb-0">{`${t("จํานวนสินค้าที่หมดอายุ")}`}</p>
          <div className="border-b-[0.1px] my-[16px] border-lightgray"></div>
          <div className="grid grid-cols-3">
            <div className=" text-green">
              <div className="bg-[#F5FAF7] h-[65px] w-[65px] rounded-full flex items-center justify-center p-4">
                {/* icon */}
                <Image src={Dashboard2} alt="dashboard" preview={false}></Image>
              </div>
            </div>
            <div className="basis-4/6 text-[42px] font-semibold text-[#0F1B45] ">
              {`${t("300 K")}`}
            </div>
            <div className="flex text-[#4E8FCC] items-end justify-end  pt-[40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] px-[24px] pt-[16px] py-[10px] rounded-[10px]">
          <p className="!mb-0">{`${t("จํานวนสินค้าที่เสียหาย")}`}</p>
          <div className="border-b-[0.1px] my-[16px] border-[#DCDCDE]"></div>
          <div className="grid grid-cols-3">
            <div className=" text-[#77C48B]">
              <div className="bg-[#F5FAF7] h-[65px] w-[65px] rounded-full flex items-center justify-center p-4">
                {/* icon */}
                <Image src={Dashboard3} alt="dashboard" preview={false}></Image>
              </div>
            </div>
            <div className="basis-4/6 text-[42px] font-semibold text-[#0F1B45]">
              {`${t("300 K")}`}
            </div>
            <div className="flex text-[#4E8FCC] items-end justify-end  pt-[40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* col2 */}
      <div className="grid grid-cols-3 gap-6 pt-[16px]">
        <div className="col-span-2 bg-white rounded-[10px] px-[24px] pt-[16px] py-[10px]">
          <div>
            <div className="grid grid-cols-2">
              <div className="!mb-0 ">{`${t("ยอดขาย")}`}</div>
              <div className="grid justify-end items-end  grid-cols-3">
                <div className=""></div>
                <div className="pl-5">
                  <span className="text-[16px] text-[#D3D3D3]">{`${t(
                    "form"
                  )}`}</span>
                  <Select
                    defaultValue="Aug 2018"
                    style={{ width: 100, fontSize: 16, color: "#7D7D88" }}
                    bordered={false}
                  >
                    <Option value="Aug 2018">Aug 2018</Option>
                    <Option value="Sep 2018">Sep 2018</Option>
                    <Option value="Oct 2018">Oct 2018</Option>
                  </Select>
                </div>
                <div className="pl-4">
                  <span className="text-[16px] text-[#D3D3D3]">{`${t(
                    "to"
                  )}`}</span>
                  <Select
                    defaultValue="Aug 2018"
                    style={{ width: 100, fontSize: 16, color: "#7D7D88" }}
                    bordered={false}
                  >
                    <Option value="Aug 2018">Aug 2018</Option>
                    <Option value="Sep 2018">Sep 2018</Option>
                    <Option value="Oct 2018">Oct 2018</Option>
                  </Select>
                </div>
              </div>
            </div>

            <p className="text-[#4E8FCC] !mb-0">{`${t(
              "ยอดการสั่งสินค้าโดยเปรียบเทียบแต่ละเดือน"
            )}`}</p>
            <div>
              <ApexChart
                type="line"
                options={options}
                series={dataScouces}
                width={900}
                height={250}
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[10px] px-[24px] pt-[16px] py-[10px]">
          <p className="!mb-0">จํานวนการดําเนินงาน</p>
          <div className="">
            <ApexChart
              type="bar"
              options={optionsBar}
              series={dataSourceBar}
              width={400}
              height={250}
            />
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="grid grid-cols-3 gap-6 pt-[16px]">
        <div className="bg-white rounded-[10px] px-[24px] pt-[16px] py-[10px]">
          <p className="!mb-0">สาขาที่สั่งสินค้าเยอะที่สุด</p>
          <div className="border-b-[0.1px] my-[16px] border-[#DCDCDE]"></div>
          <div className="grid grid-cols-7">
            <div className="grid justify-center items-center">
              <Image
                src={Arrow}
                alt="arrow"
                width={"75%"}
                height={"75%"}
                preview={false}
              ></Image>
            </div>
            <div className="my-[8px] col-span-6 grid items-center">
              แอ็บโซลูท เฮลธ์ คลินิค สาขาสุขุมวิท
            </div>
          </div>
          <div className="grid grid-cols-7 bg-[#F7FBFF]">
            <div className="grid justify-center items-center">
              <Image
                src={Arrow}
                alt="arrow"
                width={"75%"}
                height={"75%"}
                preview={false}
              ></Image>
            </div>
            <div className="my-[8px] col-span-6 grid items-center">
              แอ็บโซลูท เฮลธ์ คลินิค สาขาอโศก
            </div>
          </div>
          <div className="grid grid-cols-7">
            <div className="grid justify-center items-center">
              <Image
                src={Arrow}
                alt="arrow"
                width={"75%"}
                height={"75%"}
                preview={false}
              ></Image>
            </div>
            <div className="my-[8px] col-span-6 grid items-center">
              แอ็บโซลูท เฮลธ์ คลินิค สาขาพระราม
            </div>
          </div>
          <div className="grid grid-cols-7 bg-[#F7FBFF]">
            <div className="grid justify-center items-center">
              <Image
                src={Arrow}
                alt="arrow"
                width={"75%"}
                height={"75%"}
                preview={false}
              ></Image>
            </div>
            <div className="my-[8px] col-span-6 grid items-center">
              แอ็บโซลูท เฮลธ์ คลินิค สาขานานา
            </div>
          </div>
          <div className="grid grid-cols-7">
            <div className="grid justify-center items-center">
              <Image
                src={Arrow}
                alt="arrow"
                width={"75%"}
                height={"75%"}
                preview={false}
              ></Image>
            </div>
            <div className="my-[8px] col-span-6 grid items-center">
              แอ็บโซลูท เฮลธ์ คลินิค สาขาพระราม
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[10px] px-[24px] pt-[16px] py-[10px]">
          <p className="!mb-0">สินค้าที่ใกล้หมดสต็อก</p>
          <div className="border-b-[0.1px] my-[16px] border-[#DCDCDE]"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid justify-center items-center">
              <p className="my-[8px]">Benzoyl Peroxide</p>
              <p className="my-[8px]">PRM-Anti IL-4</p>
              <p className="my-[8px]">7-KETO DHEA</p>
              <p className="my-[8px]">PRM-Anti IL-4</p>
              <p className="my-[8px]">PRM-Anti IL-5</p>
            </div>
            <div className="text-[#D3D3D3] grid justify-center items-center">
              <p className="my-[8px]">มีอยู่ในสต็อก</p>
              <p className="my-[8px]">มีอยู่ในสต็อก</p>
              <p className="my-[8px]">มีอยู่ในสต็อก</p>
              <p className="my-[8px]">มีอยู่ในสต็อก</p>
              <p className="my-[8px]">มีอยู่ในสต็อก</p>
            </div>
            <div className="text-[#4E8FCC] grid justify-center items-center">
              <p className="my-[8px]">2000 ชิ้น</p>
              <p className="my-[8px]">500 ชิ้น</p>
              <p className="my-[8px]">300 ชิ้น</p>
              <p className="my-[8px]">1200 ชิ้น</p>
              <p className="my-[8px]">800 ชิ้น</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[10px] px-[24px] pt-[16px] py-[10px]">
          <p className="!mb-0 ">สินค้าที่ใกล้หมดสต็อก</p>
          <div className="border-b-[0.1px] my-[16px] border-[#DCDCDE]"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid justify-center items-center">
              <p className="my-[8px]">Benzoyl Peroxide</p>
              <p className="my-[8px]">PRM-Anti IL-4</p>
              <p className="my-[8px]">7-KETO DHEA</p>
              <p className="my-[8px]">PRM-Anti IL-4</p>
              <p className="my-[8px]">PRM-Anti IL-5</p>
            </div>
            <div className="text-[#D3D3D3] grid justify-center items-center">
              <p className="my-[8px]">วันที่หมดอายุ</p>
              <p className="my-[8px]">วันที่หมดอายุ</p>
              <p className="my-[8px]">วันที่หมดอายุ</p>
              <p className="my-[8px]">วันที่หมดอายุ</p>
              <p className="my-[8px]">วันที่หมดอายุ</p>
            </div>
            <div className="text-[#FF6567]  grid justify-center items-center">
              <p className="my-[8px] bg-[#FFF4F4] px-[16px] rounded-[4px]">
                อีก 1 วัน
              </p>
              <p className="my-[8px] bg-[#FFF4F4] px-[16px] rounded-[4px]">
                อีก 1 วัน
              </p>
              <p className="my-[8px] bg-[#FFF4F4] px-[16px] rounded-[4px]">
                อีก 5 วัน
              </p>
              <p className="my-[8px] bg-[#FFF4F4] px-[16px] rounded-[4px]">
                อีก 3 วัน
              </p>
              <p className="my-[8px] bg-[#FFF4F4] px-[16px] rounded-[4px]">
                อีก 2 วัน
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverAllPage;
