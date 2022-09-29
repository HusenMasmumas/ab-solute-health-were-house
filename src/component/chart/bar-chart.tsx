import { ApexOptions } from "apexcharts";
import React from "react";
import ApexChart from "react-apexcharts";

const dataSourceBar = [
  {
    data: [700, 650, 860, 250],
  },
];
const optionsBar = {
  chart: { toolbar: { show: false } },
  tooltip: { enabled: false },
  plotOptions: {
    bar: {
      barHeight: "60%",
      horizontal: true,
      dataLabels: { position: "top" },
    },
  },
  xaxis: {
    categories: ["รออนุมัติ", "อนุมัติ", "อยู่ระหว่างขนส่ง", "ตีกลับ"],
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        fontFamily: "SukhumvitSet",
        fontSize: "14px",
      },
      align: "left",
    },
    crosshairs: {
      show: false,
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  dataLabels: {
    enabled: true,
    offsetX: 40,
    position: "right",
    style: {
      fontSize: "12px",
      colors: ["#000000"],
      fontFamily: "SukhumvitSet",
    },
  },
  stroke: { show: true, width: 10, colors: ["#ffffff"] },
  grid: {
    show: true,
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: false } },
  },
} as ApexOptions;

const BarChart = () => {
  return (
    <div>
      <ApexChart
        type="bar"
        options={optionsBar}
        series={dataSourceBar}
        width={"100%"}
        height={250}
      />
    </div>
  );
};

export default BarChart;

// const options = {
//   chart: { type: "bar", toolbar: { show: false } },
//   tooltip: {
//     shared: true,
//     intersect: false,
//     theme: "dark",
//     enabled: true,
//     style: { fontSize: "12px", fontFamily: undefined },
//     onDatasetHover: { highlightDataSeries: false },
//     y: { formatter: undefined, title: { formatter: (seriesName: any) => "" } },
//   },
//   dataLabels: {
//     style: { fontSize: "16px", fontWeight: "300", colors: ["#000000"] },
//   },
//   colors: ["#E2C799"],
//   plotOptions: {
//     bar: {
//       barHeight: "40%",
//       horizontal: true,
//       dataLabels: { position: "top" },
//     },
//   },
//   stroke: { show: true, width: 1, colors: ["#E2C799"] },
//   fill: { opacity: 1 },
//   xaxis: {
//     categories: mostStation.map((item: IMostStation) => item?.name),
//     labels: {
//       show: false,
//       style: { colors: ["#FFFFFF"], fontSize: "16px", fontWeight: 200 },
//     },
//     axisBorder: { show: false },
//     axisTicks: { show: false },
//   },
//   yaxis: {
//     labels: {
//       show: true,
//       align: "left",
//       style: {
//         colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
//         fontSize: "12px",
//         fontWeight: 100,
//       },
//     },
//   },
//   grid: {
//     show: true,
//     xaxis: { lines: { show: true } },
//     yaxis: { lines: { show: false } },
//   },
// } as ApexOptions;
