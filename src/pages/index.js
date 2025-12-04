// src/pages/index.js
import { useEffect, useState } from 'react';
import Head from 'next/head';

// Import Komponen
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Divider from '../components/Divider';
import About from '../components/About';
import Education from '../components/Education';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Preloader from '../components/Preloader';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Portofolio Wandi | Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portofolio Wandi, Software Engineer. Lihat karya, keahlian, dan pengalaman saya." />
        {/* Meta tags lain... */}
        <meta property="og:title" content="Wandi | Software Engineer Portfolio" />
        <meta property="og:description" content="Halo, saya Wandi. Lihat project dan keahlian saya dalam membangun website modern." />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      {/* Preloader */}
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      {/* Konten Utama */}
      {/* PERBAIKAN DI SINI: Menambahkan class dark:bg-gray-900 dan dark:text-white */}
      <main 
        className={`min-h-screen relative transition-colors duration-300 
        bg-white dark:bg-gray-900 
        text-gray-900 dark:text-white 
        ${isLoading ? 'overflow-hidden h-screen' : ''}`}
      >
        
        <Navbar />
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Education />
        <Divider />
        <TechStack />
        <Divider />
        <Projects />
        <Divider />
        <Certificates />
        <Divider />
        <Services />
        <Divider />
        <Contact />
        <Footer />
        <ScrollToTop />
        
      </main>
    </>
  );
}