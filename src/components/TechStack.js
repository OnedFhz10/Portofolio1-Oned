// src/components/TechStack.js
import Marquee from "react-fast-marquee";

const TechStack = () => {
  const skills = [
    // --- FRONTEND ---
    {
      name: "HTML5",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-16 h-16" alt="HTML5" />
    },
    {
      name: "CSS3",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-16 h-16" alt="CSS3" />
    },
    {
      name: "JavaScript",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-16 h-16" alt="JavaScript" />
    },
    {
      name: "TypeScript",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-16 h-16" alt="TypeScript" />
    },
    {
      name: "React",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-16 h-16" alt="React" />
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 fill-white">
           <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm25.5 98.6l-36.9-47.6V91H42V36h10.3l37.2 48.1V36h10.5v62.6h-10.5z"/>
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-16 h-16" alt="Tailwind" />
    },
    {
      name: "Bootstrap",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className="w-16 h-16" alt="Bootstrap" />
    },

    // --- BACKEND ---
    {
      name: "Node.js",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className="w-16 h-16" alt="NodeJS" />
    },
    {
      name: "PHP",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" className="w-16 h-16" alt="PHP" />
    },
    {
      name: "Laravel",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" className="w-16 h-16" alt="Laravel" />
    },
    {
      name: "Python",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-16 h-16" alt="Python" />
    },
    {
      name: "Java",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-16 h-16" alt="Java" />
    },

    // --- DATABASE ---
    {
      name: "MySQL",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" className="w-16 h-16 filter invert bg-white rounded-lg p-1" alt="MySQL" />
    },
    {
      name: "PostgreSQL",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-16 h-16" alt="PostgreSQL" />
    },
    {
      name: "MongoDB",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-16 h-16" alt="MongoDB" />
    },

    // --- TOOLS ---
    {
      name: "Git",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-16 h-16" alt="Git" />
    },
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 fill-white">
          <path d="M64 0C28.7 0 0 28.7 0 64c0 28.3 18.3 52.3 43.8 60.8 3.2.6 4.4-1.4 4.4-3.1v-10.9c-17.8 3.9-21.6-8.6-21.6-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.7 5.3 1.6-4.1 2.2-7 4-8.6-14.2-1.6-29.1-7.1-29.1-31.6 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.1.6-16.9 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.1 16-2.1s10.9.7 16 2.1c12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.8 1.3 15.4.6 16.9 4.1 4.5 6.6 10.2 6.6 17.2 0 24.6-15 30-29.2 31.5 2.3 2 4.3 5.9 4.3 11.9v17.7c0 1.7 1.2 3.7 4.4 3.1 25.5-8.5 43.8-32.5 43.8-60.8C128 28.7 99.3 0 64 0z"/>
        </svg>
      )
    },
    {
      name: "Docker",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-16 h-16" alt="Docker" />
    },
    {
      name: "Postman",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className="w-16 h-16" alt="Postman" />
    },
    {
      name: "VS Code",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" className="w-16 h-16" alt="VS Code" />
    },
  ];

  return (
    <section className="py-10 bg-gray-900 border-t border-b border-gray-800">
      <div className="text-center mb-8" data-aos="fade-down">
         <p className="text-gray-400 text-sm tracking-widest uppercase">Teknologi & Tools</p>
      </div>
      
      <Marquee 
        gradient={true} 
        gradientColor={[17, 24, 39]} // Warna bg-gray-900 agar transisi halus
        speed={40} // Sedikit diperlambat agar lebih mudah dilihat
        pauseOnHover={true}
      >
        <div className="flex items-center gap-12 px-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer min-w-[80px]">
              {/* Icon */}
              <div className="transition-transform transform group-hover:scale-110 duration-300">
                {skill.icon}
              </div>
              {/* Nama (Muncul saat hover) */}
              <span className="mt-2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default TechStack;