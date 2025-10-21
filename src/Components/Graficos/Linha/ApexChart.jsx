import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./ApexChart.css";

const ApexChart = () => {
  const initialSeries = [
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
  ];

  const [series, setSeries] = useState(initialSeries);
  const [selected, setSelected] = useState("Todos");

  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: { enabled: false },
      foreColor: "#ffffff",
    },
    dataLabels: { enabled: false },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    title: {
      text: "Page Statistics",
      align: "left",
      style: { color: "#ffffff" },
    },
    legend: {
      show: true,
      position: "top",
      labels: { colors: "#ffffff" },
      onItemClick: { toggleDataSeries: true },
    },
    markers: { size: 0, hover: { sizeOffset: 6 } },
    xaxis: {
      categories: [
        "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan",
        "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan",
      ],
      labels: { style: { colors: "#ffffff" } },
    },
    yaxis: { labels: { style: { colors: "#ffffff" } } },
    tooltip: { theme: "dark" },
    grid: { borderColor: "rgba(255,255,255,0.2)" },
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelected(value);

    if (value === "Todos") {
      setSeries(initialSeries);
    } else {
      const filtered = initialSeries.filter((item) => item.name === value);
      setSeries(filtered);
    }
  };

  return (
    <div className="chart-container">
      <div className="filtros">
        <label htmlFor="filtro">Filtrar gráfico:</label>
        <select id="filtro" value={selected} onChange={handleFilterChange}>
          <option value="Todos">Todos</option>
          <option value="Session Duration">Session Duration</option>
          <option value="Page Views">Page Views</option>
          <option value="Total Visits">Total Visits</option>
        </select>
      </div>

      <div className="chart-wrap">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={230}
        />
      </div>
    </div>
  );
};

export default ApexChart;