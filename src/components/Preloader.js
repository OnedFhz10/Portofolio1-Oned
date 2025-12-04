// src/components/Preloader.js
import { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
  const [fadeClass, setFadeClass] = useState("opacity-100");

  useEffect(() => {
    // Timer: Preloader akan muncul selama 2 detik (2000ms)
    const timer = setTimeout(() => {
      setFadeClass("opacity-0 pointer-events-none"); // Efek memudar
      
      // Memberitahu induk (index.js) bahwa loading selesai setelah efek pudar (500ms)
      setTimeout(() => {
        onFinish(); 
      }, 500);
      
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-gray-900 flex items-center justify-center transition-opacity duration-500 ${fadeClass}`}>
      <div className="text-center">
        {/* Logo atau Nama Anda Berdenyut */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse mb-4">
          Wandy Fahryzal.
        </h1>
        
        {/* Bar Loading */}
        <div className="w-48 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-blue-500 animate-loading-bar"></div>
        </div>
        
        <p className="text-gray-500 text-sm mt-4 tracking-widest uppercase animate-pulse">
          Memuat Portfolio...
        </p>
      </div>

      {/* Tambahkan style untuk animasi loading bar khusus di sini */}
      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 50%; }
          100% { width: 100%; transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Preloader;