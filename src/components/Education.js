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
      id: 3,
      school: "SDN Indularang",
      degree: "Sekolah Dasar",
      year: "2009 - 2014",
      description: "Fokus pada pelajaran sekolah, selalu menjadi juara 1 di kelas."
    },
  ];

  // 2. DATA PENDIDIKAN PESANTREN
  const pesantrenEducation = [
    {
      id: 1,
      school: "SMA Pesantren Cintawana",
      degree: "Jurusan IPA & Santri",
      year: "2017 - 2020",
      description: "Mendalami ilmu agama Islam (Fiqh, Tauhid, Akhlaq) beriringan dengan pendidikan formal IPA. Aktif sebagai Ketua Umum PMR."
    },
    {
      id: 2,
      school: "Pondok Pesantren Nurul Huda Sukamiskin",
      degree: "Arcamanik - Kota Bandung",
      year: "2017 - 2020",
      description: "Mendalami ilmu agama Islam (Fiqh, Tauhid, Akhlaq) beriringan dengan perkuliahan. Aktif sebagai pengurus di bagian sekretaris."
    },
  ];

  // 3. DATA PENDIDIKAN NON-FORMAL (Bootcamp/Kursus)
  const courses = [
    {
      id: 1,
      school: "Orbit Future Academy",
      degree: "AI For Jobs",
      year: "2023",
      description: "Program intensif 6 bulan. Mempelajari pengembangan AI dari mulai pengenalan algoritma machine learning dan deep learning."
    },
    {
      id: 2,
      school: "Gamelab Indonesia",
      degree: "Fullstack Web Development",
      year: "2024",
      description: "Program intensif 6 bulan. Mempelajari pengembangan web dari sisi Front End dan Back End, serta database dan deployment."
    },
    {
      id: 3,
      school: "Alhazen Academy",
      degree: "Front End Development",
      year: "2024",
      description: "Mini bootcamp yang membahas dasar-dasar Front End Development, termasuk HTML, CSS, JavaScript."
    },
    {
      id: 4,
      school: "IBM SkillsBuild",
      degree: "Code Generation And Optimization",
      year: "2025",
      description: "Pelatihan yang berfokus pada teknik pembuatan kode secara efisien, optimal, dan sesuai standar industri."
    },
  ];

  // Helper function untuk merender item timeline (agar kode lebih ringkas)
  const renderItem = (item, borderColor, textColor, delay) => (
    <div key={item.id} className="relative pl-8" data-aos="fade-up" data-aos-delay={delay}>
      {/* Dot */}
      <div className={`absolute -left-3.5 top-1 bg-gray-50 dark:bg-gray-900 border-4 ${borderColor} w-6 h-6 rounded-full`}></div>
      
      {/* Card: Putih di Light, Abu di Dark */}
      <div className={`bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:${textColor.replace('text', 'border')} hover:border transition-colors`}>
        <span className={`text-xs ${textColor} font-semibold tracking-wide uppercase`}>{item.year}</span>
        <h4 className="text-lg font-bold mt-1 mb-1 text-gray-900 dark:text-white">{item.school}</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">{item.degree}</p>
        <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{item.description}</p>
      </div>
    </div>
  );

  return (
    // Background Dinamis
    <section id="education" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Utama */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Riwayat Pendidikan</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Perpaduan pendidikan akademis, karakter pesantren, dan kompetensi teknis.</p>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* KOLOM 1: FORMAL (BIRU) */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-blue-600 dark:text-blue-400" data-aos="fade-right">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              Akademik Formal
            </h3>
            <div className="relative border-l-4 border-blue-600 ml-3 space-y-10">
              {formalEducation.map((item, index) => renderItem(item, 'border-blue-600', 'text-blue-600 dark:text-blue-400', index * 100))}
            </div>
          </div>

          {/* KOLOM 2: PESANTREN (UNGU) */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-purple-600 dark:text-purple-400" data-aos="fade-up">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
              Pondok Pesantren
            </h3>
            <div className="relative border-l-4 border-purple-500 ml-3 space-y-10">
              {pesantrenEducation.map((item, index) => renderItem(item, 'border-purple-500', 'text-purple-600 dark:text-purple-400', index * 100 + 100))}
            </div>
          </div>

          {/* KOLOM 3: NON-FORMAL (HIJAU) */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-green-600 dark:text-green-400" data-aos="fade-left">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              Bootcamp & Kursus
            </h3>
            <div className="relative border-l-4 border-green-500 ml-3 space-y-10">
              {courses.map((item, index) => renderItem(item, 'border-green-500', 'text-green-600 dark:text-green-400', index * 100 + 200))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;