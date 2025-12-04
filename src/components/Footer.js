// src/components/Footer.js

const Footer = () => {
  // DAFTAR SOSIAL MEDIA LENGKAP
  // Silakan isi link-nya. Jika tidak punya, hapus satu blok objek-nya atau biarkan '#'
  const socialMedia = [
    {
      name: "GitHub",
      href: "https://github.com/OnedFhz10", // Sudah diisi
      color: "hover:text-white",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/wandi-fahrizal/", // Masukkan Link LinkedIn
      color: "hover:text-blue-500",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/one_dfahryzal10/", // Masukkan Link Instagram
      color: "hover:text-pink-500",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.488 2h-.173zM12.315 3.803c-2.384 0-2.68.01-3.619.051-.875.04-1.35.186-1.666.309-.418.162-.716.356-1.03.67-.314.314-.508.612-.67 1.03-.123.316-.27.79-.31 1.666-.041.939-.051 1.235-.051 3.619s.01 2.68.051 3.619c.04.875.186 1.35.31 1.666.162.418.356.716.67 1.03.314.314.612.508 1.03.67.316.123.79.27 1.666.31.939.041 1.235.051 3.619.051s2.68-.01 3.619-.051c.875-.04 1.35-.186 1.666-.309.418-.162.716-.356 1.03-.67.314-.314.508-.612.67-1.03.123-.316.27-.79.31-1.666.041-.939.051-1.235.051-3.619s-.01-2.68-.051-3.619c-.04-.875-.186-1.35-.31-1.666-.418-.162-.716-.356-1.03-.67-.314-.314-.612-.508-.67-1.03-.123-.316-.27-.79-.31-1.666-.041-.939-.051-1.235-.051-3.619zm0 4.609a3.585 3.585 0 110 7.17 3.585 3.585 0 010-7.17zm0 1.803a1.782 1.782 0 100 3.564 1.782 1.782 0 000-3.564zm5.33-4.135a1.201 1.201 0 110 2.402 1.201 1.201 0 010-2.402z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Twitter / X",
      href: "#", // Masukkan Link Twitter/X
      color: "hover:text-gray-100",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://web.facebook.com/Onefahryzal.10", // Masukkan Link Facebook
      color: "hover:text-blue-600",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#", // Masukkan Link YouTube
      color: "hover:text-red-600",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@triforge_tech", // Masukkan Link TikTok
      color: "hover:text-pink-400",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
          <path fillRule="evenodd" d="M12.545 12.151A4.456 4.456 0 0 1 12 11.435v7.261a4.8 4.8 0 1 1-5.118-5.744.757.757 0 0 1 .458.156v2.665a2.128 2.128 0 1 0 2.227 2.285v-9.673a8.913 8.913 0 0 0 3.868 2.37l.21.054v-2.81a6.223 6.223 0 0 1-3.1-1.848Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/6281564636621", // Ganti dengan nomor WA Anda (format: 628...)
      color: "hover:text-green-500",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 2.163c5.43 0 9.836 4.406 9.836 9.835 0 1.76-.457 3.456-1.328 4.966L22 22l-5.184-1.46c-1.466.83-3.12 1.272-4.816 1.272C6.57 21.812 2.164 17.406 2.164 11.998 2.164 6.569 6.57 2.163 12 2.163zm0 1.637c-4.526 0-8.2 3.673-8.2 8.198 0 1.83.593 3.59 1.71 5.03L4.417 19.58l2.677-1.057A8.153 8.153 0 0 0 12 20.163c4.526 0 8.2-3.674 8.2-8.2s-3.674-8.198-8.2-8.198zM8.88 7.42c.163-.365.41-.365.735-.365h.76c.245 0 .57.082.816.572l1.09 2.614c.123.286.04.572-.122.857l-.612.735c-.164.204-.368.245-.205.53.164.327.735 1.266 1.552 1.993 1.062.94 1.96 1.258 2.246 1.389.286.122.45.081.613-.123l.857-1.102c.245-.286.53-.367.857-.245l2.695 1.266c.327.163.53.285.53.57 0 .205-.122 1.103-.49 1.512-.367.408-.857.53-1.633.45-2.287-.246-5.185-2.043-7.226-5.882-.245-.49-.04-.857.082-1.143l.898-1.02z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:one.dfahryzal10@gmail.com", // Masukkan Email
      color: "hover:text-red-400",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Bagian Kiri: Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">Wandi Fahryzal.</h3>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Software Engineer
          </p>
        </div>

        {/* Bagian Kanan: Looping Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {socialMedia.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${item.color} transition-colors transform hover:scale-110`}
              aria-label={item.name}
              title={item.name} // Tooltip saat hover
            >
              {item.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;