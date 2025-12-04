// src/components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper untuk menutup menu mobile saat link diklik
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Wandi.
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Tentang</a>
              <a href="#education" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Pendidikan</a>
              <a href="#techstack" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Teknologi</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Project</a>
              <a href="#certificates" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Sertifikat</a>
              
              {/* Tombol Download CV */}
              <a 
                href="/cv-wandi.pdf"  // Pastikan nama file ini sesuai dengan yang ada di folder public
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Download CV
              </a>

              {/* Tombol Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
          
          {/* Tombol Hamburger Mobile */}
          <div className="-mr-2 flex md:hidden items-center gap-4">
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

      {/* Menu Mobile Dropdown (LENGKAP) */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <a href="#" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Beranda</a>
            <a href="#about" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Tentang</a>
            <a href="#education" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Pendidikan</a>
            <a href="#techstack" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Teknologi</a>
            <a href="#projects" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Project</a>
            <a href="#certificates" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Sertifikat</a>
            
            <a 
              href="/cv-wandi.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-full text-base font-medium mx-3"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;