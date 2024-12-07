"use client";
import { useRef, useEffect } from "react";
import { Chart, ChartTypeRegistry } from "chart.js/auto";

export default function PieChart() {
  // Use the correct type for the ref, HTMLCanvasElement | null
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Type assertion to specify that chart is an instance of Chart
      const canvasElement = chartRef.current as HTMLCanvasElement & { chart?: Chart };

      // Destroy existing chart instance if present
      if (canvasElement.chart) {
        canvasElement.chart.destroy();
      }

      const context = canvasElement.getContext("2d");
      if (!context) return; // Check if context is null

      // Create a new Chart instance with proper types
      const newChart = new Chart<keyof ChartTypeRegistry, number[], string>(context, {
        type: "pie",
        data: {
          labels: ["John", "Jane", "Doe", "Emily", "Jack", "David", "Ruby"],
          datasets: [
            {
              label: "Info",
              data: [34, 64, 23, 45, 67, 24, 64],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          // responsive: true
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
