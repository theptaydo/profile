'use client';

import Script from 'next/script';
import Main from '@/app/admin/dashboard/main/page';

export default function Dashboard() {
  return (
    <>

      <Main />

      {/* <Script
        src="/admin/vendors/js/vendor.bundle.base.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/vendors/chart.js/chart.umd.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/js/off-canvas.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/js/misc.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/js/settings.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/js/todolist.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/js/jquery.cookie.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admin/js/dashboard.js"
        strategy="afterInteractive"
      /> */}
    </>
  );
}
