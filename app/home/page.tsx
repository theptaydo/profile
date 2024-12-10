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
import News from './news/page';
import VrTour from './vr-tour/page';
import useScrollEffect from '../hook/useScrollEffect';
import "@/styles/main.css";
import HomeNews from './news/page';

export default function HomePage() {
  useScrollEffect();
  return (

    <div className='home-page'>
      <Hero />
      <Clients />
      <News />
      <VrTour />
      <FeaturedServices />
      <About />
      <Stats />
      <Team />
      <Products />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
    </div>

  );
}
