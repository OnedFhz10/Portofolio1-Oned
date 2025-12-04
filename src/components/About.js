// src/components/About.js

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Bagian - Fade Down */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Saya</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Deskripsi - Fade Right */}
          <div data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Siapa Saya?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hai! Saya Wandi, seorang pengembang web yang berbasis di Indonesia. 
              Saya mulai belajar coding karena penasaran bagaimana website keren dibuat, 
              dan sekarang saya fokus membangun pengalaman web yang cepat dan responsif.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Saat ini saya sedang mendalami ekosistem React dan Next.js untuk membuat 
              aplikasi web yang modern. Saya suka memecahkan masalah dan belajar teknologi baru.
            </p>
          </div>

          {/* Kolom Kanan: Skill Cards - Fade Left */}
          <div data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Keahlian Saya</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Skill Items */}
              <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                <span className="font-bold text-lg block mb-1">HTML & CSS</span>
                <span className="text-sm text-gray-400">Dasar Web</span>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                <span className="font-bold text-lg block mb-1">JavaScript</span>
                <span className="text-sm text-gray-400">Interaksi & Logika</span>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                <span className="font-bold text-lg block mb-1">React JS</span>
                <span className="text-sm text-gray-400">Frontend Library</span>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                <span className="font-bold text-lg block mb-1">Tailwind CSS</span>
                <span className="text-sm text-gray-400">Styling Cepat</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;