// src/components/Certificates.js

const Certificates = () => {
  // DATA SERTIFIKAT ASLI ANDA
  const certificates = [
    {
      id: 1,
      title: "AI For Jobs",
      issuer: "Orbit Future Academy",
      date: "Desember 2023",
      link: "#", 
      image: "/c1.png" 
    },
    {
      id: 2,
      title: "Fullstack Web Development",
      issuer: "Gamelab Indonesia",
      date: "Juli 2024",
      link: "#",
      image: "/c2.png"
    },
    {
      id: 3,
      title: "Bootcamp Front End Development",
      issuer: "Alhazen Academy",
      date: "Januari 2025",
      link: "#",
      image: "/c3.png"
    },
    {
      id: 4,
      title: "Code Generation and Optimization",
      issuer: "IBM SkillsBuild",
      date: "Juni 2025",
      link: "#",
      image: "/c4.png"
    },
  ];

  return (
    // Background Dinamis
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sertifikat & Lisensi</h2>
          <div className="w-20 h-1 bg-green-600 dark:bg-green-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Bukti pembelajaran dan kompetensi profesional saya.</p>
        </div>

        {/* Grid Sertifikat */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id} 
              // Kartu: Putih di Light, Hitam di Dark
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              
              {/* Gambar Sertifikat */}
              <div className="h-48 overflow-hidden relative bg-gray-100 dark:bg-gray-800">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Hitam saat hover (Tetap hitam transparan di kedua mode agar teks putih terbaca) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={cert.link} className="px-4 py-2 bg-white text-gray-900 font-bold rounded-full text-sm hover:bg-gray-200 transition-colors">
                    Lihat Kredensial
                  </a>
                </div>
              </div>

              {/* Konten Teks */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{cert.issuer}</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-xs">
                    {cert.date}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;