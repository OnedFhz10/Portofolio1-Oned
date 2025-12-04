// src/pages/index.js
import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Certificates from '../components/Certificates'; // 1. Import
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Home() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Portofolio Wandi</title>
        <meta name="description" content="Portofolio Frontend Developer" />
      </Head>

      <main className="bg-gray-900 min-h-screen text-white relative">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Education />
        
        {/* 2. Pasang Sertifikat di sini */}
        <Certificates />
        
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}