"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";

// Định nghĩa dữ liệu mẫu
interface User {
  firstName: string;
  weight: number;
}

export default function BarChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const [chartData, setChartData] = useState<User[]>([
    { firstName: "Alice", weight: 68 },
    { firstName: "Bob", weight: 75 },
    { firstName: "Charlie", weight: 82 },
    { firstName: "David", weight: 90 },
    { firstName: "Eve", weight: 60 },
    { firstName: "Frank", weight: 85 },
  ]);

  useEffect(() => {
    if (chartRef.current) {
      const context = chartRef.current.getContext("2d");
      if (!context) return;

      // Hủy biểu đồ cũ nếu có
      if ((chartRef.current as any).chart) {
        (chartRef.current as any).chart.destroy();
      }

      // Tạo biểu đồ mới
      const labels = chartData.map((user) => user.firstName);
      const data = chartData.map((user) => user.weight);

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Weight Info",
              data,
              backgroundColor: "rgb(111, 151, 212)",
              borderColor: "rgb(75, 192, 192)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Weight Name Info",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      // Lưu trữ instance biểu đồ
      (chartRef.current as any).chart = newChart;
    }
  }, [chartData]);

  return (
    <canvas ref={chartRef} />
    // <div style={{ width: "90vw", height: "80vh" }}>
    //   <canvas ref={chartRef} />
    // </div>
  );
}
