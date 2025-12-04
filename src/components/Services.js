// src/components/Services.js

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Membangun website responsif dan cepat menggunakan teknologi modern seperti React, Next.js, dan Tailwind CSS.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "UI/UX Implementation",
      description: "Mengubah desain dari Figma/Adobe XD menjadi kode yang presisi (Pixel Perfect) dan interaktif.",
      icon: (
        <svg className="w-12 h-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Backend Integration",
      description: "Menghubungkan tampilan depan (Frontend) dengan database dan API server agar website berfungsi dinamis.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Website Optimization",
      description: "Meningkatkan kecepatan loading website dan performa SEO agar mudah ditemukan di Google.",
      icon: (
        <svg className="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Saya</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Solusi digital yang bisa saya berikan untuk bisnis Anda.</p>
        </div>

        {/* Grid Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon Container */}
              <div className="mb-4 p-3 bg-gray-800 rounded-lg w-fit group-hover:bg-gray-700 transition-colors">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;