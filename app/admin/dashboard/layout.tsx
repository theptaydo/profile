'use client'

import Head from 'next/head';
import Header from '@/app/components/admin/header';
import '@/public/admin/css/style.css';
import '@/app/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin');
    }
  }, [router]);
  return (
    <div>
      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
          {/* <Sidebar /> */}

          {children}

        </div>
      </div>
    </div>
  );
}
