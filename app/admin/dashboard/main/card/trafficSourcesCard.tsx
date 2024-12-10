"use client";
import DoughnutChart from "@/app/components/chart/DoughnutChart";
export default function TrafficSources() {
  return (
    <div className="col-md-5 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Traffic Sources</h4>
          <div className="doughnutjs-wrapper d-flex justify-content-center">
            {/* <canvas id="traffic-chart"></canvas> */}
            <DoughnutChart />
          </div>
          <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
        </div>
      </div>
    </div>
  );
}