// src/components/Projects.js
import { useState, useEffect } from 'react';
import { client } from '../sanity/lib/client'; // 1. Import koneksi Sanity

const Projects = () => {
  // 2. State untuk menyimpan data dari Sanity
  const [projectData, setProjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 3. FETCH DATA (Ambil data saat halaman dibuka)
  useEffect(() => {
    const getProjects = async () => {
      try {
        // Query GROQ: "Ambil semua dokumen tipe 'project', dan ambil URL gambarnya"
        const query = `*[_type == "project"]{
          _id,
          title,
          description,
          "image": image.asset->url, 
          tech,
          category,
          link,
          github
        }`;
        
        const data = await client.fetch(query);
        setProjectData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        setIsLoading(false);
      }
    };

    getProjects();
  }, []);

  // 4. LOGIKA FILTER (Masih sama, tapi datanya dinamis)
  const [activeCategory, setActiveCategory] = useState("All");

  // Ambil kategori unik dari data yang baru ditarik
  const categories = ["All", ...new Set(projectData.map((item) => item.category))];

  const filteredProjects = activeCategory === "All" 
    ? projectData 
    : projectData.filter((item) => item.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 relative z-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section */}
        <div className="text-center mb-8" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Terbaru</h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {isLoading ? "Sedang mengambil data dari server..." : "Lihat karya terbaik saya berdasarkan kategori."}
          </p>
        </div>

        {/* 5. TOMBOL FILTER (Hanya muncul jika tidak loading) */}
        {!isLoading && (
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-purple-600 border-purple-600 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-purple-500 hover:text-purple-600 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* 6. GRID PROJECT */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skeleton Loading (Tampilan sementara saat loading) */}
          {isLoading && [1,2,3].map((n) => (
             <div key={n} className="h-96 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
          ))}

          {/* Data Asli */}
          {!isLoading && filteredProjects.map((project) => (
            <div 
              key={project._id} 
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col"
              data-aos="fade-up"
            >
              
              {/* Gambar Project */}
              <div className="h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-800">
                    <span className="text-gray-500 text-sm">No Image</span>
                  </div>
                )}
                {/* Badge Kategori */}
                {project.category && (
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white">
                    {project.category}
                  </div>
                )}
              </div>

              {/* Konten */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>
                
                {/* Tags Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech && project.tech.map((t, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-blue-600 dark:text-blue-300 rounded-full border border-gray-200 dark:border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Tombol */}
                <div className="flex gap-4 mt-auto">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">Demo</a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-500 rounded-lg text-sm font-medium transition-colors">GitHub</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pesan Kosong */}
        {!isLoading && filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-10">
            <p>Belum ada project di kategori ini.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;