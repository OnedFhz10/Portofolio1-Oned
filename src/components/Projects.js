// src/components/Projects.js
import { useState } from 'react';

const Projects = () => {
  // 1. DATA PROJECT (LENGKAP DENGAN KATEGORI)
  const projectData = [
    {
      id: 1,
      title: "Website Koperasi Merah Putih",
      description: "Website untuk manajemen koperasi desertai landing page untuk transparansi dana koperasi.",
      image: "/project1.png", 
      tech: ["Laravel", "Tailwind"],
      category: "Web App", // Kategori baru
      link: "#", 
      github: "#" 
    },
    {
      id: 2,
      title: "Dasboard Manajemen Apotek",
      description: "Website untuk manajemen apotek lengkap mulai dari transakasi, inventori dan laporan.",
      image: "/project2.png", 
      tech: ["Laravel", "Tailwind"],
      category: "Web App",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Batik Sense",
      description: "Aplikasi untuk klasifikasi batik berbasis AI yang di deploy ke dalam mobile",
      image: "/project3.jpg",
      tech: ["Python", "Java"],
      category: "Mobile App",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Pencatatan Keuangan",
      description: "Website keuangan digital untuk mempermudah pencatatan transaksi pribadi. ",
      image: "/project4.png",
      tech: ["Laravel", "Bootstrap"],
      category: "Web App",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Metal Detection",
      description: "Sistem computer vision untuk deteksi cacat pada logam berbasis AI ",
      image: "/project5.png",
      tech: ["Python", "Django"],
      category: "Web App",
      link: "#",
      github: "#"
    },
  ];

  // 2. LOGIKA FILTER
  const [activeCategory, setActiveCategory] = useState("All");

  // Ambil daftar kategori unik dari data project
  const categories = ["All", ...new Set(projectData.map((item) => item.category))];

  // Filter data berdasarkan kategori yang dipilih
  const filteredProjects = activeCategory === "All" 
    ? projectData 
    : projectData.filter((item) => item.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white relative z-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section */}
        <div className="text-center mb-8" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Terbaru</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Lihat karya terbaik saya berdasarkan kategori.</p>
        </div>

        {/* 3. TOMBOL FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-purple-600 border-purple-600 text-white shadow-lg scale-105" // Style Aktif
                  : "bg-gray-800 border-gray-700 text-gray-400 hover:border-purple-500 hover:text-white" // Style Tidak Aktif
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4. GRID PROJECT (YANG SUDAH DI-FILTER) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              // Tambahkan key animation agar animasi ulang saat filter berubah
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 flex flex-col"
              data-aos="fade-up"
            >
              
              {/* Gambar Project */}
              <div className="h-48 bg-gray-700 overflow-hidden relative">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center">
                    <span className="text-xl font-bold text-white opacity-40">{project.category}</span>
                  </div>
                )}
                {/* Badge Kategori di pojok gambar */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                  {project.category}
                </div>
              </div>

              {/* Konten */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>
                
                {/* Tags Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-900 text-xs text-blue-300 rounded-full border border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Tombol */}
                <div className="flex gap-4 mt-auto">
                  <a href={project.link} className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">Demo</a>
                  <a href={project.github} className="flex-1 text-center py-2 border border-gray-600 hover:border-gray-500 rounded-lg text-sm font-medium transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pesan jika tidak ada project di kategori tersebut */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            <p>Belum ada project di kategori ini.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;