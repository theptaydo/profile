"use client";

import { useEffect, useState } from 'react';
import en from '../../public/lang/en';
import vi from '../../public/lang/vi';
import zh_cn from '../../public/lang/zh-cn';
import km from '../../public/lang/km';
import ja from '../../public/lang/ja';

const useTrans = () => {
  const [trans, setTrans] = useState(vi);

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'vi';
    switch (storedLang) {
      case 'en':
        setTrans(en);
        break;
      case 'zh-cn':
        setTrans(zh_cn);
        break;
      case 'km':
        setTrans(km);
        break;
      case 'ja':
        setTrans(ja);
        break;
      default:
        setTrans(vi);
        break;
    }
  }, []);

  const switchLanguage = (lang: string) => {
    localStorage.setItem('lang', lang);
    switch (lang) {
      case 'en':
        setTrans(en);
        break;
      case 'zh-cn':
        setTrans(zh_cn);
        break;
      case 'km':
        setTrans(km);
        break;
      case 'ja':
        setTrans(ja);
        break;
      default:
        setTrans(vi);
        break;
    }
  };

  return trans;
};

export default useTrans;
