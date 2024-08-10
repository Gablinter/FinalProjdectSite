import Header from '../../components/HomePageComponents/Header'
import SliderSection from '../../components/HomePageComponents/SliderSection'
import ServiceSection from '../../components/HomePageComponents/ServiceSection'
import AboutSection from '../../components/HomePageComponents/AboutSection'
import ProductSection from '../../components/HomePageComponents/ProductSection'
import ContactSection from '../../components/HomePageComponents/ContactSection'
import ClientSection from '../../components/HomePageComponents/ClientSection'
import InfoSection from '../../components/HomePageComponents/InfoSection'
import Footer from '../../components/HomePageComponents/Footer';
import { HomePageContext } from '../../Context/HomePageContext'
// import { useState } from 'react';
// import { useEffect } from 'react';

export default function App() {

  return (
    <HomePageContext.Provider value={'Gabro'}>
      <div>
        <Header />
        <SliderSection />
        <ServiceSection />
        <AboutSection />
        <ProductSection />
        <ContactSection />
        <ClientSection />
        <InfoSection />
        <Footer />
      </div>
    </HomePageContext.Provider>
  )
}

// export default function App
