'use client';

import LineChart from '@/app/components/chart/line';
import BarChart from '@/app/components/chart/bar';
import DoughnutChart from '@/app/components/chart/DoughnutChart';
import ScatterChart from "@/app/components/chart/ScatterChart";
import Head from 'next/head';
import Script from 'next/script';

export default function Chart() {
  return (
    <>
      <div>
        <h3>Scatter Chart</h3>
        <ScatterChart />
      </div>
    </>

  );
}
