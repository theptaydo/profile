'use client'

import Head from 'next/head';
import Header from '@/app/components/admin/header';
import Sidebar from '@/app/components/admin/sidebar';
import '@/assets/admin/css/style.css';
import '@/app/globals.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />

          {children}

        </div>
      </div>
    </div>
  );
}
