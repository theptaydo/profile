'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client

import Hero from './hero/page';
import FeaturedServices from './featured-services/page';
import About from './about/page';
import Stats from './stats/page';
import Clients from './clients/page';
import Services from './services/page';
import Testimonials from './testimonials/page';
import Portfolio from './portfolio/page';
import Team from './team/page';
import Products from './products/page';
import Faq from './faq/page';
import Contact from './contact/page';

import "@/styles/main.css";

export default function HomePage() {
  return (

    <div className='home-page'>
      <Hero />
      <FeaturedServices />
      <About />
      <Stats />
      <Clients />
      <Services />
      <Testimonials />
      <Portfolio />
      <Team />
      <Products />
      <Faq />
      <Contact />
    </div>

  );
}
