// src/pages/index.js
import { useEffect, useState } from 'react'; // 1. Tambah useState
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
import Preloader from '../components/Preloader'; // 2. Import Preloader

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Home() {
  // 3. State untuk Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Inisialisasi AOS tetap jalan di background
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Portofolio Wandi | Frontend Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portofolio Wandi, Frontend Developer. Lihat karya, keahlian, dan pengalaman saya." />
        <meta property="og:title" content="Wandi | Frontend Developer Portfolio" />
        <meta property="og:description" content="Halo, saya Wandi. Lihat project dan keahlian saya dalam membangun website modern." />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      {/* 4. Logika Tampilan: Tampilkan Preloader jika isLoading masih true */}
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      {/* Konten Utama (Disembunyikan scrollbarnya saat loading agar tidak bisa discroll) */}
      <main className={`bg-gray-900 min-h-screen text-white relative ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
        
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