// src/components/Hero.js
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 pt-20">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* Bagian Teks (Kiri) */}
        <div className="text-center md:text-left" data-aos="fade-right">
          <p className="text-blue-400 font-medium mb-2 text-lg">
            Halo, nama saya
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Wandi
            </span>
          </h1>
          
          {/* EFEK MENGETIK DI SINI */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold h-10">
            <TypeAnimation
              sequence={[
                // Teks 1
                'Frontend Developer',
                1000, // Tunggu 1 detik
                // Teks 2
                'React Enthusiast',
                1000,
                // Teks 3
                'Freelancer',
                1000,
                // Teks 4
                'Tech Lover',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block', color: '#60A5FA' }} // Warna biru muda
            />
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Saya seorang pengembang web yang bersemangat membangun antarmuka yang indah dan fungsional menggunakan teknologi modern seperti React dan Tailwind CSS.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors">
              Lihat Project
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-600 hover:border-blue-400 hover:text-blue-400 rounded-full font-medium transition-colors">
              Kontak Saya
            </a>
          </div>
        </div>

        {/* Bagian Gambar (Kanan) */}
        <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="200">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gray-700 overflow-hidden shadow-2xl">
            <img 
              src="/profile.jpg" 
              alt="Foto Profil" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;