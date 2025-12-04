// src/components/Education.js

const Education = () => {
  const educationList = [
    {
      id: 1,
      school: "Universitas Teknologi Indonesia",
      degree: "Sarjana Teknik Informatika",
      year: "2019 - 2023",
      description: "Lulus dengan predikat Cum Laude. Fokus pada pengembangan perangkat lunak dan algoritma."
    },
    {
      id: 2,
      school: "Coding Bootcamp Indonesia",
      degree: "Fullstack Web Development",
      year: "2023",
      description: "Program intensif 3 bulan mempelajari MERN Stack (MongoDB, Express, React, Node.js)."
    },
    {
      id: 3,
      school: "SMA Negeri 1 Jakarta",
      degree: "Jurusan IPA",
      year: "2016 - 2019",
      description: "Ketua klub komputer sekolah. Sering mengikuti kompetisi matematika dan fisika tingkat daerah."
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul - Fade Down */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Riwayat Pendidikan</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-blue-600 ml-3 md:ml-6 space-y-12">
          
          {educationList.map((item, index) => (
            <div 
              key={item.id} 
              className="relative pl-8 md:pl-12"
              // Animasi Fade Up dengan delay bertingkat
              data-aos="fade-up"
              data-aos-delay={index * 200} // Item 1: 0ms, Item 2: 200ms, dst
            >
              {/* Dot */}
              <div className="absolute -left-3.5 top-1 bg-gray-900 border-4 border-blue-600 w-6 h-6 rounded-full"></div>
              
              {/* Card */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-400 transition-colors">
                <span className="text-sm text-blue-300 font-semibold tracking-wide uppercase">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold mt-1 mb-1">{item.school}</h3>
                <p className="text-md text-gray-300 font-medium mb-3">{item.degree}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;