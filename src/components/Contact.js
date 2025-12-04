// src/components/Contact.js
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mqarlkqg"); 

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">Pesan Terkirim! 🚀</h2>
          <p className="text-gray-600 dark:text-gray-300">Terima kasih sudah menghubungi saya.</p>
          <button onClick={() => window.location.reload()} className="mt-6 px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full hover:bg-gray-300 transition-colors">
            Kembali
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6" data-aos="zoom-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nama</label>
                <input type="text" name="name" required className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white" placeholder="email@contoh.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pesan</label>
              <textarea name="message" rows="4" required className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white" placeholder="Tulis pesan..."></textarea>
            </div>
            <div className="text-center">
              <button type="submit" disabled={state.submitting} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-lg">Kirim Pesan</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;