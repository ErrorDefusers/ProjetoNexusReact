import React, { useState, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import "./ApexChart.css";

export default function ApexChart() {
  // datasets de exemplo
  const datasets = {
    vendas: [44, 55, 13, 33],
    marketing: [20, 35, 45, 15],
    financeiro: [60, 25, 40, 10],
    suporte: [30, 20, 50, 25],
  };

  // estado só para a série atual (array de números)
  const [filtro, setFiltro] = useState("vendas");
  const [series, setSeries] = useState(datasets[filtro]);

  // options memoizadas (não re-criar toda vez)
  const options = useMemo(
    () => ({
      chart: {
        width: 380,
        type: "donut",
      },
      labels: ["Setor A", "Setor B", "Setor C", "Setor D"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
        labels: {
          colors: "#fff",
          useSeriesColors: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 250,
            },
            legend: {
              show: true,
              position: "bottom",
            },
          },
        },
      ],
    }),
    []
  );

  // quando o filtro muda: atualiza filtro e série
  const handleFiltroChange = (e) => {
    const novoFiltro = e.target.value;
    setFiltro(novoFiltro);
    setSeries(datasets[novoFiltro]);
    console.log("Filtro:", novoFiltro, "-> series:", datasets[novoFiltro]);
  };

  return (
    <div className="chart-container">
      <div className="filter-container">
        <label htmlFor="filtro">Filtrar por:</label>
        <select id="filtro" value={filtro} onChange={handleFiltroChange}>
          <option value="vendas">Vendas</option>
          <option value="marketing">Marketing</option>
          <option value="financeiro">Financeiro</option>
          <option value="suporte">Suporte</option>
        </select>
      </div>

      <div className="chart-wrap">
        <ReactApexChart options={options} series={series} type="donut" width={370} />
      </div>
    </div>
  );
}