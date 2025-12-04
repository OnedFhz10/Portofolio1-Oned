// src/components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle'; // 1. Import Tombol tadi

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 2. Perhatikan perubahan warna background di sini:
    // "bg-white/80 dark:bg-gray-900/80" artinya: Putih saat Light, Hitam saat Dark
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              1D.
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {/* Menu Items dengan warna dinamis (text-gray-700 dark:text-gray-300) */}
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Tentang</a>
              <a href="#education" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Pendidikan</a>
              <a href="#techstack" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Teknologi</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Project</a>
              <a href="#certificates" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Sertifikat</a>
              
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Download CV
              </a>

              {/* 3. Pasang Tombol ThemeToggle Di Sini */}
              <ThemeToggle />

            </div>
          </div>
          
          {/* Tombol Hamburger Mobile */}
          <div className="-mr-2 flex md:hidden items-center gap-4">
             {/* Tampilkan juga toggle di mobile */}
            <ThemeToggle />

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white p-2 focus:outline-none"
            >
              <span className="sr-only">Buka menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
             {/* Link-link mobile perlu disesuaikan warnanya juga seperti desktop */}
            <a href="#" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Beranda</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Tentang</a>
            {/* ... tambahkan link lainnya ... */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;