// src/components/Hero.js

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* Bagian Teks (Kiri) */}
        <div className="text-center md:text-left">
          <p className="text-blue-400 font-medium mb-2 text-lg">
            Halo, nama saya
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Wandi
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Frontend Developer
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Saya seorang pengembang web yang bersemangat membangun antarmuka yang indah dan fungsional menggunakan teknologi modern seperti React dan Tailwind CSS.
          </p>
          
          {/* Tombol Aksi */}
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors">
              Lihat Project
            </button>
            <button className="px-6 py-3 border border-gray-600 hover:border-blue-400 hover:text-blue-400 rounded-full font-medium transition-colors">
              Kontak Saya
            </button>
          </div>
        </div>

        {/* Bagian Gambar/Visual (Kanan) */}
        <div className="flex justify-center">
          {/* Ini adalah lingkaran placeholder untuk foto profil nanti */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 absolute"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gray-700 overflow-hidden shadow-2xl">
  <img 
    src="/profile.png" /* Pastikan nama file sesuai dengan yang ada di folder public */
    alt="Foto Profil Wandi" 
    className="w-full h-full object-cover" 
  />
</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;