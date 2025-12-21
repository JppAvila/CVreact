import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaLinkedin, FaEgg, FaTimes } from "react-icons/fa";
import ContactoFlotante from "./ContactoFlotante";
import { cvData } from "../data/cvData";

export default function Header() {
  const [showContact, setShowContact] = useState(false);
  const [showEgg, setShowEgg] = useState(false);
  const { hero } = cvData;

  return (
    <>
      {showContact && <ContactoFlotante onClose={() => setShowContact(false)} />}

      {/* Floating Buttons - Más modernos */}
      <div className="absolute top-6 right-6 z-20 flex flex-row gap-3 items-center">
        <a
          href={hero.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl text-sm font-bold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 backdrop-blur-xl border border-blue-400/20"
        >
          <FaLinkedin className="text-blue-200 group-hover:text-white transition-colors" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>

        <button
          onClick={() => setShowContact(true)}
          className="group flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl text-sm font-bold transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 backdrop-blur-xl border border-purple-400/20"
        >
          <FaEnvelope className="text-purple-200 group-hover:text-white transition-colors" />
          <span className="hidden sm:inline">Contactar</span>
        </button>

        <a
          href={`${import.meta.env.BASE_URL}${hero.contact.cvFile}`}
          download
          className="group flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-sm font-bold transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 backdrop-blur-xl border border-emerald-400/20"
        >
          <FaDownload className="text-emerald-200 group-hover:text-white transition-colors" />
          <span className="hidden sm:inline">Descargar CV</span>
        </a>
      </div>

      {/* Hero Section - Diseño moderno */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-32 px-6 overflow-hidden">
        {/* Elementos de fondo animados */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              {hero.name}
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {hero.title}
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
             {hero.subtitles.map((sub, index) => (
                <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/20">
                  {sub}
                </span>
             ))}
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {hero.bio}
          </motion.p>
        </div>

        {/* Easter Egg Button */}
        <button
          onClick={() => setShowEgg(true)}
          className="absolute bottom-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-4 py-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-yellow-500/25"
          title="Easter Egg"
        >
          <FaEgg className="text-lg" />
        </button>

        {/* Easter Egg Modal */}
        {showEgg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 text-white p-8 rounded-2xl max-w-lg shadow-2xl relative">
              <button
                onClick={() => setShowEgg(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-xl transition-colors"
              >
                <FaTimes />
              </button>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                🥚 ¿Cómo está hecho este componente?
              </h3>
              <ul className="text-sm space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div><strong className="text-blue-400">React:</strong> Componente funcional con `useState`</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div><strong className="text-purple-400">Tailwind CSS:</strong> Botones flotantes con posición y transición</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div><strong className="text-pink-400">Framer Motion:</strong> Animaciones suaves en título, subtítulo y texto</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div><strong className="text-green-400">Integración externa:</strong> Formulario de contacto dinámico (formsubmit) y descarga de CV</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div><strong className="text-cyan-400">Redes:</strong> Botones personalizados para LinkedIn y correo directo</div>
                </li>
                 <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div><strong className="text-yellow-400">Datos Dinámicos:</strong> Contenido cargado desde `cvData.js`</div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </>
  );
}