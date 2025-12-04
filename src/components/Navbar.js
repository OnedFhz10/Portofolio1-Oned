import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Nama */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Wandi.
            </Link>
          </div>

          {/* Menu Desktop (Layar Besar) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Beranda</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Tentang</a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Project</a>
              <a href="#contact" className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">Kontak</a>
            </div>
          </div>
          
          {/* Tombol Menu Mobile (Sementara Placeholder) */}
          <div className="-mr-2 flex md:hidden">
            <button className="text-gray-400 hover:text-white p-2">
              <span className="sr-only">Buka menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;