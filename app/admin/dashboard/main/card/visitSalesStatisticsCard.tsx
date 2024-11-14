"use client";

import BarChart from "@/app/components/chart/bar";
export default function VisitSalesStatistics() {
  return (
    <div className="col-md-7 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="clearfix">
            <h4 className="card-title float-start">Visit And Sales Stdatistics</h4>
            <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-end"></div>
          </div>
          <BarChart />
          {/* <canvas id="visit-sale-chart" className="mt-4"></canvas> */}
        </div>
      </div>
    </div>
  );
}