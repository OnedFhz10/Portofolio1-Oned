// src/components/Projects.js

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Website Koperasi Desa Merah Putih",
      description: "Website ini dibuat untuk keperluan manajemen koperasi serta transparansi dana koperasi",
      // 1. DI SINI KITA TAMBAHKAN DATA GAMBAR
      image: "/project1.png", 
      tech: ["Laravel", "Tailwind", "React"],
      link: "#", 
      github: "#" 
    },
    {
      id: 2,
      title: "Aplikasi To-Do List",
      description: "Aplikasi manajemen tugas sederhana dengan fitur tambah dan hapus.",
      // Jika tidak ada gambar, biarkan kosong atau hapus baris image
      image: "", 
      tech: ["React", "CSS", "LocalStorage"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Landing Page Sederhana",
      description: "Halaman landing page responsif untuk produk fiktif.",
      image: "",
      tech: ["HTML", "Tailwind", "JavaScript"],
      link: "#",
      github: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Terbaru</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Berikut adalah beberapa project yang pernah saya kerjakan.</p>
        </div>

        {/* Grid Kartu Project */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-gray-700">
              
              {/* 2. DI SINI LOGIKA TAMPILAN GAMBARNYA */}
              <div className="h-48 bg-gray-800 overflow-hidden relative">
                
                {/* Cek: Apakah ada gambar? */}
                {project.image ? (
                  // JIKA ADA GAMBAR: Tampilkan <img>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // JIKA TIDAK ADA GAMBAR: Tampilkan kotak Gradient (Fallback)
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white opacity-50">{project.title}</span>
                  </div>
                )}
                
              </div>

              {/* Konten Kartu (Judul, Deskripsi, Tombol) */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags Teknologi */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-900 text-xs text-blue-300 rounded-full border border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Tombol Aksi */}
                <div className="flex gap-4">
                  <a href={project.link} className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                    Demo
                  </a>
                  <a href={project.github} className="flex-1 text-center py-2 border border-gray-600 hover:border-gray-500 rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;