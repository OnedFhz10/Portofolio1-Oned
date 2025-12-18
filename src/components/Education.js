import { useState, useEffect } from 'react';
import { client } from '../sanity/lib/client';

const Education = () => {
  const [eduData, setEduData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State untuk Filter & Tampilan
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Fetch Data
  useEffect(() => {
    const getEducation = async () => {
      try {
        // Fetch data diurutkan berdasarkan periode terbaru
        const query = `*[_type == "education"] | order(period desc) {
          _id,
          school,
          degree,
          period,
          description,
          category
        }`;
        
        const data = await client.fetch(query);
        setEduData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data education:", error);
        setIsLoading(false);
      }
    };

    getEducation();
  }, []);

  const categories = ["All", "Formal", "Non-Formal", "Bootcamp"];

  // --- LOGIKA UTAMA DI SINI ---
  let filteredData;

  if (activeCategory === "All") {
    // Jika "All": Kita copy data lalu urutkan ulang
    // Prioritaskan 'Formal' agar muncul di paling atas
    filteredData = [...eduData].sort((a, b) => {
      const isAFormal = a.category === 'Formal';
      const isBFormal = b.category === 'Formal';
      
      if (isAFormal && !isBFormal) return -1; // A (Formal) naik ke atas
      if (!isAFormal && isBFormal) return 1;  // B (Formal) naik ke atas
      return 0; // Jika sama, biarkan sesuai urutan waktu (default)
    });
  } else {
    // Jika filter kategori lain, filter biasa
    filteredData = eduData.filter((item) => item.category === activeCategory);
  }

  // Tentukan data yang ditampilkan (Semua atau Cuma 3)
  const displayedData = showAll ? filteredData : filteredData.slice(0, 3);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setShowAll(false); 
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perjalanan Pendidikan</h2>
          <div className="w-24 h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Jejak langkah akademis dan pengalaman yang membentuk saya.
          </p>
        </div>

        {/* Filter Buttons */}
        {!isLoading && (
          <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-purple-600 border-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-purple-400 hover:text-purple-600 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* TIMELINE CONTAINER */}
        <div className="relative border-l-4 border-purple-200 dark:border-purple-900 ml-3 md:ml-6 space-y-12">
          
          {/* Skeleton Loading */}
          {isLoading && [1, 2, 3].map((n) => (
            <div key={n} className="mb-10 ml-8 relative animate-pulse">
               <span className="absolute -left-11 top-1 bg-gray-300 w-6 h-6 rounded-full border-4 border-white"></span>
               <div className="h-24 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            </div>
          ))}

          {/* Data Items */}
          {!isLoading && displayedData.map((item, index) => (
            <div 
              key={item._id} 
              className="ml-8 md:ml-12 relative group"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100} 
            >
              {/* Dot Timeline */}
              <span className="absolute -left-[43px] md:-left-[59px] top-0 bg-white dark:bg-gray-900 border-4 border-purple-500 w-6 h-6 rounded-full group-hover:scale-125 group-hover:bg-purple-500 transition-all duration-300 z-10"></span>

              {/* Konten Timeline */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.school}
                  </h3>
                  <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mt-1">
                    {item.degree}
                  </h4>
                </div>
                
                {/* Tahun & Badge */}
                <div className="flex flex-col sm:items-end mt-2 sm:mt-0 gap-2">
                  <span className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-full">
                    {item.period}
                  </span>
                  <span className={`text-xs border px-2 py-0.5 rounded ${
                    item.category === 'Formal' 
                      ? 'text-blue-500 border-blue-200 dark:text-blue-300 dark:border-blue-800' 
                      : 'text-gray-400 border-gray-200 dark:border-gray-700'
                  }`}>
                    {item.category || "General"}
                  </span>
                </div>
              </div>
              
              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* TOMBOL LIHAT SELENGKAPNYA */}
        {!isLoading && filteredData.length > 3 && (
          <div className="mt-12 ml-8 md:ml-12 text-center md:text-left">
             <button 
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
             >
                {showAll ? (
                  <>
                    <span>Tampilkan Lebih Sedikit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-y-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Lihat Selengkapnya ({filteredData.length - 3} lagi)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-y-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </>
                )}
             </button>
          </div>
        )}

        {/* Pesan Kosong */}
        {!isLoading && filteredData.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-10 ml-6">
            <p>Tidak ada riwayat pendidikan di kategori ini.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Education;