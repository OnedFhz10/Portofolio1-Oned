// src/components/Education.js

const Education = () => {
  // 1. DATA PENDIDIKAN FORMAL (Sekolah Umum/Kuliah)
  const formalEducation = [
    {
      id: 1,
      school: "Universitas Al-Ghifari",
      degree: "Sistem Informasi",
      year: "2021 - 2025",
      description: "Lulus dengan predikat Cum Laude (IPK 3.54). Aktif dalam organisasi UKM, Himpunan, dan BEM."
    },
    {
      id: 2,
      school: "SMA Pesantren Cintawana",
      degree: "Sekolah Menengah Atas",
      year: "2014 - 2017",
      description: "Fokus pada pelajaran eksakta, aktif di organisasi PMR sebagai ketua umum."
    },
    {
      id: 3,
      school: "SMP Satu Atap 2 Taraju",
      degree: "Sekolah Menengah Pertama",
      year: "2014 - 2017",
      description: "Fokus pada pelajaran sekolah, pernah mengikuti olimpiade catur tingkat kabupaten."
    },
    {
      id: 4,
      school: "SDN Indularang",
      degree: "Sekolah Dasar",
      year: "2009 - 2014",
      description: "Fokus pada pelajaran sekolah, selalu menjadi juara 1 di kelas."
    },
  ];

  // 2. DATA PENDIDIKAN PESANTREN (Agama & Karakter)
  // Saya memindahkan SMA Pesantren ke sini karena ada unsur pesantrennya
  const pesantrenEducation = [
    {
      id: 1,
      school: "Pondok Pesantren Cintawana",
      degree: "Singaparna - Kab. Tasikmalaya",
      year: "2017 - 2020",
      description: "Mendalami ilmu agama Islam (Fiqh, Tauhid, Akhlaq) beriringan dengan pendidikan formal di SMA. Aktif sebagai pengurus di bagian bendahara umum."
    },
    {
      id: 2,
      school: "Pondok Pesantren Nurul Huda Sukamiskin",
      degree: "Arcamanik - Kota Bandung",
      year: "2017 - 2020",
      description: "Mendalami ilmu agama Islam (Fiqh, Tauhid, Akhlaq) beriringan dengan perkuliahan. Aktif sebagai pengurus di bagian sekretaris."
    },
    // Anda bisa menambahkan data lain jika ada, misal pengabdian atau madrasah diniyah
  ];

  // 3. DATA PENDIDIKAN NON-FORMAL (Bootcamp/Kursus)
  const courses = [
    {
      id: 1,
      school: "Orbit Future Academy",
      degree: "AI For Jobs",
      year: "2023",
      description: "Program intensif 6 bulan. Mempelajari pengembangan AI dari mulai pengenalan algoritma machine learning dan deep learning, serta pembuatan model yang nantinya dilakukan deployment berbasis web dan mobile"
    },
    {
      id: 2,
      school: "Gamelab Indonesia",
      degree: "Fullstack Web Development",
      year: "2024",
      description: "Program intensif 6 bulan. Mempelajari pengembangan web dari sisi Front End dan Back End, serta database dan deployment"
    },
    {
      id: 3,
      school: "Alhazen Academy",
      degree: "Front End Development",
      year: "2024",
      description: "Mini bootcamp yang membahas dasar-dasar Front End Development, termasuk HTML, CSS, JavaScript, serta konsep pembuatan antarmuka web yang responsif dan user-friendly."
    },
    {
      id: 4,
      school: "IBM SkillsBuild",
      degree: "Code Generation And Optimization",
      year: "2025",
      description: "Pelatihan yang berfokus pada teknik pembuatan kode secara efisien, optimal, dan sesuai standar industri. Mempelajari prinsip penulisan kode yang bersih, optimasi performa, serta pemanfaatan teknologi AI untuk mempercepat proses pengembangan perangkat lunak"
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Lebar container diperbesar (max-w-7xl) agar muat 3 kolom */}
        
        {/* Judul Utama */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Riwayat Pendidikan</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Perpaduan pendidikan akademis, karakter pesantren, dan kompetensi teknis.</p>
        </div>

        {/* Grid menjadi 3 Kolom di layar besar (lg:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* KOLOM 1: FORMAL (BIRU) */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-blue-400" data-aos="fade-right">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Akademik Formal
            </h3>
            <div className="relative border-l-4 border-blue-600 ml-3 space-y-10">
              {formalEducation.map((item, index) => (
                <div key={item.id} className="relative pl-8" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="absolute -left-3.5 top-1 bg-gray-900 border-4 border-blue-600 w-6 h-6 rounded-full"></div>
                  <div className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700 hover:border-blue-500 transition-colors">
                    <span className="text-xs text-blue-300 font-semibold tracking-wide uppercase">{item.year}</span>
                    <h4 className="text-lg font-bold mt-1 mb-1">{item.school}</h4>
                    <p className="text-sm text-white font-medium mb-2">{item.degree}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KOLOM 2: PESANTREN (UNGU) */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-purple-400" data-aos="fade-up">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              Pondok Pesantren
            </h3>
            <div className="relative border-l-4 border-purple-500 ml-3 space-y-10">
              {pesantrenEducation.map((item, index) => (
                <div key={item.id} className="relative pl-8" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                  {/* Dot Ungu */}
                  <div className="absolute -left-3.5 top-1 bg-gray-900 border-4 border-purple-500 w-6 h-6 rounded-full"></div>
                  <div className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700 hover:border-purple-500 transition-colors">
                    <span className="text-xs text-purple-300 font-semibold tracking-wide uppercase">{item.year}</span>
                    <h4 className="text-lg font-bold mt-1 mb-1">{item.school}</h4>
                    <p className="text-sm text-white font-medium mb-2">{item.degree}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KOLOM 3: NON-FORMAL (HIJAU) */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-green-400" data-aos="fade-left">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Bootcamp & Kursus
            </h3>
            <div className="relative border-l-4 border-green-500 ml-3 space-y-10">
              {courses.map((item, index) => (
                <div key={item.id} className="relative pl-8" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                  <div className="absolute -left-3.5 top-1 bg-gray-900 border-4 border-green-500 w-6 h-6 rounded-full"></div>
                  <div className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700 hover:border-green-500 transition-colors">
                    <span className="text-xs text-green-300 font-semibold tracking-wide uppercase">{item.year}</span>
                    <h4 className="text-lg font-bold mt-1 mb-1">{item.school}</h4>
                    <p className="text-sm text-white font-medium mb-2">{item.degree}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;