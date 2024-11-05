'use client'
import Head from 'next/head';
import Script from 'next/script';
import Header from '@/app/components/admin/header';
import Sidebar from '@/app/components/admin/sidebar';
import '@/assets/admin/css/style.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/admin/css/maps/style.css.map" />
        <link rel="stylesheet" href="/vendors/mdi/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="/admin/vendors/ti-icons/css/themify-icons.css" />
        <link rel="stylesheet" href="/admin/vendors/css/vendor.bundle.base.css" />
        <link rel="stylesheet" href="/admin/vendors/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/admin/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css" />
      </Head>
      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />

          {children}

        </div>
      </div>
      {/* Bố cục hoặc cấu trúc bạn muốn cho các trang admin */}

      <Script src="/admin/vendors/js/vendor.bundle.base.js"></Script>
      <Script src="/admin/vendors/chart.js/chart.umd.js"></Script>
      <Script src="/admin/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"></Script>
      <Script src="/admin/js/off-canvas.js"></Script>
      <Script src="/admin/js/settings.js"></Script>
      <Script src="/admin/js/todolist.js"></Script>
      <Script src="/admin/js/jquery.cookie.js"></Script>
      <Script src="/admin/js/dashboard.js"></Script>

    </div>
  );
}
