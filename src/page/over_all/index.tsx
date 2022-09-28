import { useTranslation } from "react-i18next";
import { Select, Image } from "antd";
import Dashboard1 from "./../../assets/img/Dashboard-1.png";
import Dashboard from "./../../assets/img/Dashboard.png";
import Dashboard2 from "./../../assets/img/Dashboard-2.png";
import Dashboard3 from "./../../assets/img/Dashboard-3.png";
import Arrow from "./../../assets/img/Dashboard-4.png";
import BarChart from "component/chart/bar-chart";
import Linechart from "component/chart/line-chart";
import { ReactComponent as ArrowIcon } from "../../assets/Icon/Arrow.svg";

const OverAllPage = () => {
  const { t } = useTranslation();
  const { Option } = Select;

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
      {/* dashboard */}
      <div className="grid grid-cols-12 gap-6 mt-[12px]">
        <div className="grid xl:col-span-3 md:col-span-6">
          <div className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px]">
            <p className="!mb-0">{`${t("รายการการสั่งสินค้าทั้งหมด")}`}</p>
            <div className="border-b-[0.1px] my-[16px] border-lightgray"></div>
            <div className="grid grid-cols-3">
              <div className=" text-green">
                <div className="bg-[#F5FAF7] h-[65px] w-[65px] rounded-full flex items-center justify-center p-4">
                  <Image
                    src={Dashboard}
                    alt="dashboard"
                    preview={false}
                  ></Image>
                </div>
              </div>
              <div className="basis-4/6 text-[42px] md:text-[38px] font-semibold text-[#0F1B45]">
                {`${t("300 K")}`}
              </div>
              <div className="flex text-lightblue items-end justify-end pt-[40px]">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="grid xl:col-span-3 md:col-span-6">
          <div className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px]">
            <p className="!mb-0">{`${t("จำนวนสินค้าทั้งหมด")}`}</p>
            <div className="border-b-[0.1px] my-[16px] border-lightgray"></div>
            <div className="grid grid-cols-3">
              <div className=" text-green">
                <div className="bg-[#F5FAF7] h-[65px] w-[65px] rounded-full flex items-center justify-center p-4">
                  <Image
                    src={Dashboard1}
                    alt="dashboard"
                    preview={false}
                  ></Image>
                </div>
              </div>
              <div className="basis-4/6 text-[42px] md:text-[38px] font-semibold text-[#0F1B45] ">
                {`${t("300 K")}`}
              </div>
              <div className="flex text-[#4E8FCC] items-end justify-end  pt-[40px]">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="grid xl:col-span-3 md:col-span-6">
          {" "}
          <div className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px]">
            <p className="!mb-0">{`${t("จํานวนสินค้าที่หมดอายุ")}`}</p>
            <div className="border-b-[0.1px] my-[16px] border-lightgray"></div>
            <div className="grid grid-cols-3">
              <div className=" text-green">
                <div className="bg-[#F5FAF7] h-[65px] w-[65px] rounded-full flex items-center justify-center p-4">
                  <Image
                    src={Dashboard2}
                    alt="dashboard"
                    preview={false}
                  ></Image>
                </div>
              </div>
              <div className="basis-4/6 text-[42px] md:text-[38px] font-semibold text-[#0F1B45] ">
                {`${t("300 K")}`}
              </div>
              <div className="flex text-[#4E8FCC] items-end justify-end  pt-[40px]">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="grid xl:col-span-3 md:col-span-6">
          {" "}
          <div className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px]">
            <p className="!mb-0">{`${t("จํานวนสินค้าที่เสียหาย")}`}</p>
            <div className="border-b-[0.1px] my-[16px] border-lightgray"></div>
            <div className="grid grid-cols-3">
              <div className=" text-green">
                <div className="bg-[#F5FAF7] h-[65px] w-[65px] rounded-full flex items-center justify-center p-4">
                  <Image
                    src={Dashboard3}
                    alt="dashboard"
                    preview={false}
                  ></Image>
                </div>
              </div>
              <div className="basis-4/6 text-[42px] md:text-[38px] font-semibold text-[#0F1B45] ">
                {`${t("300 K")}`}
              </div>
              <div className="flex text-[#4E8FCC] items-end justify-end  pt-[40px]">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
        {/* chart */}
        <div className="grid xl:col-span-8 md:col-span-12">
          <div className="bg-white rounded-[10px] px-[24px] pt-[16px] py-[10px]">
            <div>
              <div className="xl:grid xl:grid-cols-2">
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
              <Linechart />
            </div>
          </div>
        </div>
        <div className="grid xl:col-span-4 md:col-span-6">
          <div className="bg-white rounded-[10px] px-[24px] pt-[16px] py-[10px]">
            <p className="!mb-0">จํานวนการดําเนินงาน</p>
            <BarChart />
          </div>
        </div>
        <div className="grid xl:col-span-4 md:col-span-6">
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
        </div>
        <div className="grid xl:col-span-4 md:col-span-6">
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
        </div>
        <div className="grid xl:col-span-4 md:col-span-6">
          {" "}
          <div className="bg-white rounded-[10px] px-[24px] pt-[16px] py-[10px]">
            <p className="!mb-0 ">สินค้าที่ใกล้หมดอายุ</p>
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
    </div>
  );
};

export default OverAllPage;
