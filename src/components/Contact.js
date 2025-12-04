// src/components/Contact.js
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // ID Formspree Anda
  const [state, handleSubmit] = useForm("mqarlkqg"); 

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4 text-green-400">Pesan Terkirim! 🚀</h2>
          <p className="text-gray-300">Terima kasih sudah menghubungi saya. Saya akan membalas secepatnya.</p>
          <button onClick={() => window.location.reload()} className="mt-6 px-6 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
            Kembali ke Form
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul - Fade Down */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Tertarik bekerja sama? Silakan kirim pesan di bawah ini.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Form - Zoom In */}
          <form onSubmit={handleSubmit} className="space-y-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nama</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white" placeholder="Nama Anda" />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white" placeholder="email@contoh.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Pesan</label>
              <textarea id="message" name="message" rows="4" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white" placeholder="Tulis pesan Anda di sini..."></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="text-center">
              <button type="submit" disabled={state.submitting} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
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