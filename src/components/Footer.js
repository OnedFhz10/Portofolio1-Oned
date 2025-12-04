// src/components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Wandi. Dibuat dengan Next.js & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;