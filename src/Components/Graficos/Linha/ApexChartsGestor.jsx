    import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
      {
        name: "Total Visits",
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: "100%", // agora usa toda a altura da div
        width: "100%",  // usa toda a largura da div
        zoom: { enabled: false },
      },
      dataLabels: { enabled: false },
      stroke: {
        width: [4, 5, 4],
        curve: "smooth",
        dashArray: [0, 8, 5],
      },
      title: {
        text: "Estatísticas de Página",
        align: "center",
      },
      xaxis: {
        categories: [
          "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan",
          "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan",
          "11 Jan", "12 Jan",
        ],
      },
      grid: { borderColor: "#e0e0e0" },
    },
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ApexChart;