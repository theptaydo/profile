'use client'

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import AOS from 'aos';
import Head from 'next/head';
import Header from '@/app/header/page';
import Footer from '@/app/footer/page';
import '@/styles/main.css';

import Script from 'next/script';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Import JavaScript của Bootstrap
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thép Tây Đô</title>
        <meta name="description" content="Thép Tây Đô" />
        <meta name="keywords" content="Thép, Công ty Thép, Thép Tây Đô" />


        {/* Vendor CSS Files */}
        {/* <link href="/vendor/aos/aos.css" rel="stylesheet" /> */}
        <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* Main CSS File */}
        <link href="/css/main.css" rel="stylesheet" />
        <link href="/css/product.css" rel="stylesheet" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet" />

        {/* Vendor JS Files */}
        {/* <script src="/vendor/php-email-form/validate.js" defer></script>
        <script src="/vendor/waypoints/noframework.waypoints.js" defer></script>
        <script src="/vendor/imagesloaded/imagesloaded.pkgd.min.js" defer></script> */}

      </Head>
      <body>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>

      <Script
        src="/js/main.js"
        strategy="afterInteractive"
      />


      {/* <Script src="/vendor/aos/aos.js" /> */}


      {/* <Script src="/vendor/glightbox/js/glightbox.min.js" />
      <Script src="/vendor/isotope-layout/isotope.pkgd.min.js" />
      <Script src="/vendor/swiper/swiper-bundle.min.js" /> */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" />
    </html>
  );
}
