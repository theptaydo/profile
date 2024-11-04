"use client";

import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

// Fake data
const ChartData = [
  { name: "Apple", sales: 150 },
  { name: "Banana", sales: 100 },
  { name: "Orange", sales: 120 },
  { name: "Grapes", sales: 180 },
  { name: "Mango", sales: 200 },
  { name: "Strawberry", sales: 80 },
  { name: "Blueberry", sales: 130 },
  { name: "Pineapple", sales: 170 },
  { name: "Watermelon", sales: 90 },
  { name: "Peach", sales: 110 },
];

const BarChart = () => {
  const productsName = ChartData.map((item) => item.name);
  const productsSales = ChartData.map((item) => item.sales);

  const data = {
    labels: productsName,
    datasets: [
      {
        label: "Foods & Drinks",
        data: productsSales,
        backgroundColor: [
          "#a83293",
          "#6632a8",
          "#3281a8",
          "#3242a8",
          "#a83277",
          "#32a883",
          "#3ea832",
          "#a8a832",
          "#a86932",
          "#329ea8",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "black",
          boxWidth: 0,
        },
      },
    },
    layout: {
      padding: 20,
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
