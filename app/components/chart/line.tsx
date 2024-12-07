"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function LineChart() {
  // Use the correct type for the ref, HTMLCanvasElement | null
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Use type assertion to inform TypeScript about custom properties
      const canvasElement = chartRef.current as HTMLCanvasElement & { chart?: Chart };

      if (canvasElement.chart) {
        canvasElement.chart.destroy();
      }

      const context = canvasElement.getContext("2d");
      if (!context) return; // Add null check for context

      const newChart = new Chart(context, {
        type: "line",
        data: {
          labels: [15, 37, 43, 47, 57, 76, 113],
          datasets: [
            {
              label: "Info",
              data: [34, 64, 23, 45, 67, 24, 64],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "linear",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      // Store the chart instance in the canvas element
      canvasElement.chart = newChart;
    }
  }, []);

  return (
    <div style={{ position: "relative", width: "90vw", height: "80vh" }}>
      <canvas ref={chartRef} />
    </div>
  );
}
