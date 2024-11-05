'use client';

import LineChart from '@/app/components/chart/line';
import BarChart from '@/app/components/chart/bar';
import Head from 'next/head';
import Script from 'next/script';

export default function Chart() {
  return (
    <>
      <LineChart />
      <BarChart />
    </>

  );
}
