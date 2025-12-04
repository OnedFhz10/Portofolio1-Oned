// src/components/Contact.js
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // ID Formspree Anda
  const [state, handleSubmit] = useForm("mqarlkqg"); 

  if (state.succeeded) {
    return (
      // Background & Text Dinamis untuk Halaman Sukses
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">Pesan Terkirim! 🚀</h2>
          <p className="text-gray-600 dark:text-gray-300">Terima kasih sudah menghubungi saya. Saya akan membalas secepatnya.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Kembali ke Form
          </button>
        </div>
      </section>
    );
  }

  return (
    // Background Section Dinamis
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 shadow-inner transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Tertarik bekerja sama? Silakan kirim pesan di bawah ini.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Input Nama */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nama</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  // Input: Putih di Light, Abu Gelap di Dark
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors" 
                  placeholder="Nama Anda" 
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              
              {/* Input Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors" 
                  placeholder="email@contoh.com" 
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            {/* Input Pesan */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Pesan</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors" 
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="text-center">
              <button 
                type="submit" 
                disabled={state.submitting} 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;