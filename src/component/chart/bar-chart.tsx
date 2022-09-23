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

const BarChart = () => {
  return (
    <div>
      <ApexChart
        type="bar"
        options={optionsBar}
        series={dataSourceBar}
        width={400}
        height={250}
      />
    </div>
  );
};

export default BarChart;
