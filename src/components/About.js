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
             Saya seorang Software Engineer yang suka memecahkan masalah melalui teknologi. Saya menikmati proses membangun aplikasi dari awal mulai dari memahami kebutuhan, mendesain alurnya, hingga menjadi sebuah produk yang benar-benar bisa dipakai.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Saya juga tertarik pada Machine Learning dan pernah membuat beberapa proyek seperti prediksi gaji dan klasifikasi gambar batik. Bagi saya, teknologi adalah alat untuk membantu orang bekerja lebih mudah dan efisien.
            </p>
          </div>

          {/* Kolom Kanan: Skill Cards - Fade Left */}
          <div data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Keahlian Saya</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Skill Items */}
              <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                <span className="font-bold text-lg block mb-1">Fullstack Development</span>
                <span className="text-sm text-gray-400">Pengembangan aplikasi web dan mobile</span>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                <span className="font-bold text-lg block mb-1">System Analysis & Architecture</span>
                <span className="text-sm text-gray-400">Perancangan arsitektur sistem</span>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                <span className="font-bold text-lg block mb-1">Machine Learning & AI Integration</span>
                <span className="text-sm text-gray-400">Perancangan model Machine Learning</span>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                <span className="font-bold text-lg block mb-1">Application Deployment</span>
                <span className="text-sm text-gray-400">Deployment aplikasi web dan mobile</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;