// src/components/Hero.js
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 pt-20">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Bagian Teks (Kiri) */}
        <div className="text-center md:text-left" data-aos="fade-right">
          <p className="text-blue-400 font-medium mb-2 text-lg">
            Halo, nama saya
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Wandi Fahrizal
            </span>
          </h1>
          
          {/* Efek Mengetik */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold h-10">
            <TypeAnimation
              sequence={[
                'Software Engineer',
                1000,
                'System Analyst',
                1000,
                'Graphic Designer',
                1000,
                'Tech Enthusiast',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block', color: '#60A5FA' }}
            />
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Seorang Software Engineer yang terbiasa merancang dan membangun sistem yang fungsional, terstruktur, dan mudah dikembangkan untuk berbagai kebutuhan digital.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors">
              Project Saya
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-600 hover:border-blue-400 hover:text-blue-400 rounded-full font-medium transition-colors">
              Kontak Saya
            </a>
          </div>
        </div>

        {/* Bagian Gambar (Kanan) - GAYA 3D OFFSET FRAME */}
        <div className="flex justify-center py-10" data-aos="zoom-in" data-aos-delay="200">
          <div className="relative w-64 h-80 md:w-72 md:h-96">
            
            {/* Bingkai Belakang (Border Kosong) */}
            <div className="absolute top-4 left-4 w-full h-full border-4 border-blue-500 rounded-lg"></div>
            
            {/* Gambar Depan */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg overflow-hidden shadow-2xl hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300">
              <img 
                src="/profile.png" 
                alt="Foto Profil" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;