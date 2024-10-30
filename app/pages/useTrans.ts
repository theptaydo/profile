"use client";

import { useEffect, useState } from 'react';
import en from '../../public/lang/en';
import vi from '../../public/lang/vi';

const useTrans = () => {
  const [trans, setTrans] = useState(vi);

  // useEffect(() => {
  //   const storedLang = localStorage.getItem('lang') || 'vi';
  //   setTrans(storedLang === 'en' ? en : vi);
  // }, [localStorage.getItem('lang')]); // Theo dõi sự thay đổi của 'lang'

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'vi';
    setTrans(storedLang === 'en' ? en : vi);
  }, []);

  const switchLanguage = (lang: string) => {
    localStorage.setItem('lang', lang);
    setTrans(lang === 'en' ? en : vi);
  };
  return trans;
};

export default useTrans;
