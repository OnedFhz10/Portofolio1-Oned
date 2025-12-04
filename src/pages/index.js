import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact'; // 1. Import Contact
import Footer from '../components/Footer';   // 2. Import Footer

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio Wandi</title>
        <meta name="description" content="Portofolio Frontend Developer" />
      </Head>

      <main className="bg-gray-900 min-h-screen text-white">
        {/* Urutan Komponen */}
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact /> {/* Bagian Kontak */}
        <Footer />  {/* Bagian Paling Bawah */}
      </main>
    </>
  );
}