'use client'

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import AOS from 'aos';
import Head from 'next/head';
import AppFooter from '@/app/components/app.footer';
import AppHeader from '@/app/components/app.header';
import AppContact from '@/app/components/app.contact';
// import '@/styles/main.css';
// import { useLocale } from 'next-intl';
// import useTrans from './pages/useTrans';

import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // const locale = pathname?.split('/')[1] || 'vi';

  // const searchParams = useSearchParams();
  // const lang = searchParams.get('lang') || 'vi';
  const [lang, setLang] = useState('vi'); // Mặc định là 'vi'
  useEffect(() => {
    // Import JavaScript của Bootstrap
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      setLang(storedLang);
    }
  }, []);


  if (pathname.startsWith('/admin')) {
    return (
      <html lang={lang}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Thép Tây Đô</title>
          <meta name="description" content="Thép Tây Đô" />
          <meta name="keywords" content="Thép, Công ty Thép, Thép Tây Đô" />

        </Head>
        <body>
          <main className="main">
            {children}
          </main>

        </body>

        <Script
          src="/admin/js/dashboard.js"
          strategy="afterInteractive"
        />


      </html>
    );
  }

  return (
    <html lang={lang}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thép Tây Đô</title>
        <meta name="description" content="Thép Tây Đô" />
        <meta name="keywords" content="Thép, Công ty Thép, Thép Tây Đô" />


        <link href="/css/main.css" rel="stylesheet" />
        <link href="/css/product.css" rel="stylesheet" />

        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet" /> */}
      </Head>
      <body>
        <AppHeader />
        {/* <AppContact /> */}

        <main className="main">
          {children}
        </main>

        <AppFooter />
      </body>

      <Script
        src="/js/main.js"
        strategy="afterInteractive"
      />


    </html>
  );
}
