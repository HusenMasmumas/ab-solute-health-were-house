import { ApexOptions } from "apexcharts";
import ApexChart from "react-apexcharts";

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
        fontFamily: "SukhumvitSet",
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

const Linechart = () => {
  return (
    <div>
      <ApexChart
        type="line"
        options={options}
        series={dataScouces}
        width={"100%"}
        height={250}
      />
    </div>
  );
};

export default Linechart;
