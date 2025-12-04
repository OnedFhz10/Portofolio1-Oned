// src/components/Stats.js
import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    {
      id: 1,
      number: 10,
      suffix: "+",
      label: "Project Selesai",
    },
    {
      id: 2,
      number: 5,
      suffix: "+",
      label: "Sertifikat & Lisensi",
    },
    {
      id: 3,
      number: 1, 
      suffix: " Tahun",
      label: "Pengalaman Coding",
    },
    {
      id: 4,
      number: 500,
      suffix: "+",
      label: "Commit di GitHub",
    },
  ];

  return (
    // Background Dinamis: Biru (Light) / Abu Gelap (Dark)
    <section className="py-12 bg-blue-600 dark:bg-gray-800 transition-colors duration-300 border-t border-b border-blue-500 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {stats.map((item) => (
            <div key={item.id} className="flex flex-col items-center p-4">
              {/* Angka: Putih (Light) / Biru Neon (Dark) */}
              <h3 className="text-4xl md:text-5xl font-bold text-white dark:text-blue-400 mb-2 font-mono">
                <CountUp 
                  end={item.number} 
                  duration={2.5} 
                  enableScrollSpy 
                  scrollSpyOnce 
                />
                <span className="text-blue-200 dark:text-white">{item.suffix}</span>
              </h3>
              
              {/* Label: Biru Muda (Light) / Abu Terang (Dark) */}
              <p className="text-blue-100 dark:text-gray-300 text-sm md:text-base font-medium uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;