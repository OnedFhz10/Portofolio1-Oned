import { useState, useEffect } from 'react';
import { client } from '../sanity/lib/client';

const Certificates = () => {
  const [certData, setCertData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); // State untuk tombol Show More

  // Fetch Data dari Sanity
  useEffect(() => {
    const getCertificates = async () => {
      try {
        // Query: Ambil sertifikat, urutkan dari yang terbaru (date desc)
        const query = `*[_type == "certificate"] | order(date desc) {
          _id,
          title,
          issuer,
          date,
          "imageUrl": image.asset->url,
          link
        }`;
        
        const data = await client.fetch(query);
        setCertData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data sertifikat:", error);
        setIsLoading(false);
      }
    };

    getCertificates();
  }, []);

  // Logika Tampilan: Tampilkan semua atau cuma 3?
  const displayedData = showAll ? certData : certData.slice(0, 3);

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sertifikasi & Lisensi</h2>
          <div className="w-24 h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Bukti kompetensi dan pengembangan diri yang telah saya selesaikan.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Skeleton Loading */}
          {isLoading && [1, 2, 3].map((n) => (
            <div key={n} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow h-80 animate-pulse">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            </div>
          ))}

          {/* Data Cards */}
          {!isLoading && displayedData.map((item, index) => (
            <div 
              key={item._id} 
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              {/* Gambar Sertifikat */}
              <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden group">
                {item.imageUrl ? (
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                {/* Overlay Hover (Opsional: Efek gelap saat dihover) */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Konten Text */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-auto">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
                    {item.issuer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Diterbitkan: {item.date}
                  </p>
                </div>

                {/* Tombol Link */}
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-6 block w-full text-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 dark:hover:bg-purple-600 dark:hover:border-purple-600 transition-all duration-300"
                  >
                    Lihat Kredensial
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Show More / Less */}
        {!isLoading && certData.length > 3 && (
          <div className="mt-12 text-center" data-aos="fade-up">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-white dark:bg-gray-900 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 font-semibold shadow-sm hover:shadow-md hover:bg-purple-50 dark:hover:bg-gray-800 transition-all duration-300 group"
            >
              {showAll ? (
                <span className="flex items-center gap-2">
                  Tampilkan Lebih Sedikit
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Lihat Semua Sertifikat ({certData.length})
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              )}
            </button>
          </div>
        )}

        {/* Pesan Kosong */}
        {!isLoading && certData.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            Belum ada sertifikat yang diupload.
          </div>
        )}

      </div>
    </section>
  );
};

export default Certificates;