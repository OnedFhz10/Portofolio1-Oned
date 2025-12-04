// src/components/Stats.js
import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    {
      id: 1,
      number: 10, // Ganti dengan angka asli Anda
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
      label: "Commit di GitHub", // Cek profil GitHub Anda untuk angka kasar
    },
  ];

  return (
    <section className="bg-blue-600 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {stats.map((item) => (
            <div key={item.id} className="flex flex-col items-center p-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                {/* Komponen CountUp: enableScrollSpy agar animasi jalan saat di-scroll */}
                <CountUp 
                  end={item.number} 
                  duration={2.5} 
                  enableScrollSpy 
                  scrollSpyOnce 
                />
                <span className="text-blue-200">{item.suffix}</span>
              </h3>
              <p className="text-blue-100 text-sm md:text-base font-medium uppercase tracking-wider">
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