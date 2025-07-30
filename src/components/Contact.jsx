export default function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16 px-6 overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-10">
          Contacto
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-base font-bold text-white mb-2">Email:</p>
            <p className="text-cyan-300 text-base">juan.pablo.palomares@gmail.com</p>
          </div>

          {/* Teléfono */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-base font-bold text-white mb-2">Teléfono:</p>
            <p className="text-purple-300 text-base">+34 678 999 000</p>
          </div>

          {/* Ubicación */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-base font-bold text-white mb-2">Ubicación:</p>
            <p className="text-green-300 text-base">Sevilla, España</p>
          </div>
        </div>
      </div>
    </section>
  );
}