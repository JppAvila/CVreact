import { useState } from "react";
import { FaEgg, FaGraduationCap, FaTimes, FaTasks, FaLeaf, FaGamepad, FaChevronRight } from "react-icons/fa";
import Modal from "./Modal";
import diploma from "../assets/images/diploma.png";
import profile from "../assets/images/profile.png";

import { Link } from "react-router-dom";
import { cvData } from "../data/cvData";

export default function About() {
  const [showDiploma, setShowDiploma] = useState(false);
  const [showEgg, setShowEgg] = useState(false);
  const { hero } = cvData;

  return (
    <section className="relative bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 py-16 px-6 animate-fadeIn overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center z-10">
        
        {/* Columna 1 (Izquierda) - Showcase de Apps */}
        <div className="order-2 lg:order-1 w-full">
           <div className="w-full bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-5 shadow-xl">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 text-center">
                Aplicaciones Propias
              </h3>
              <div className="space-y-3">
                <Link 
                  to="/flowtask"
                  className="group flex items-center justify-between p-3 bg-gradient-to-r from-gray-800 to-gray-800 hover:from-cyan-900/40 hover:to-blue-900/40 border border-gray-700 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] group relative overflow-hidden"
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaTasks size={18} />
                    </div>
                    <div>
                      <span className="block font-bold text-gray-200 group-hover:text-cyan-300 transition-colors">FlowTask</span>
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wide">Web App</span>
                    </div>
                  </div>
                  <FaChevronRight className="text-gray-600 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all" size={12} />
                </Link>

                <Link 
                  to="/nutriplan"
                  className="group flex items-center justify-between p-3 bg-gradient-to-r from-gray-800 to-gray-800 hover:from-green-900/40 hover:to-emerald-900/40 border border-gray-700 hover:border-green-500/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] relative overflow-hidden"
                >
                   <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaLeaf size={18} />
                    </div>
                    <div>
                      <span className="block font-bold text-gray-200 group-hover:text-green-300 transition-colors">NutriPlan</span>
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wide">Mobile / Flutter</span>
                    </div>
                  </div>
                  <FaChevronRight className="text-gray-600 group-hover:text-green-400 transform group-hover:translate-x-1 transition-all" size={12} />
                </Link>

                <Link 
                  to="/nemesis2k"
                  className="group flex items-center justify-between p-3 bg-gradient-to-r from-gray-800 to-gray-800 hover:from-red-900/40 hover:to-orange-900/40 border border-gray-700 hover:border-red-500/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] relative overflow-hidden"
                >
                   <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaGamepad size={18} />
                    </div>
                    <div>
                      <span className="block font-bold text-gray-200 group-hover:text-red-300 transition-colors">Nemesis 2K</span>
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wide">Gaming Utility</span>
                    </div>
                  </div>
                  <FaChevronRight className="text-gray-600 group-hover:text-red-400 transform group-hover:translate-x-1 transition-all" size={12} />
                </Link>
              </div>
            </div>
        </div>

        {/* Columna 2 (Centro) - Foto y Formación */}
        <div className="order-1 lg:order-2 flex flex-col items-center space-y-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <img
              src={profile}
              alt="Foto de perfil"
              className="relative w-56 h-56 rounded-2xl shadow-2xl object-cover border-2 border-white/10"
            />
          </div>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={() => setShowDiploma(true)}
              className="w-full group relative overflow-hidden flex items-center justify-center gap-3 px-5 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.02] border border-indigo-400/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <FaGraduationCap className="text-yellow-300 text-xl group-hover:text-yellow-200 transition-colors relative z-10" />
              <span className="relative z-10 text-lg">Formación Académica</span>
            </button>
          </div>
        </div>

        {/* Columna 3 (Derecha) - Texto Sobre mí */}
        <div className="order-3 lg:order-3 text-left space-y-6">
          <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Sobre mí
          </h2>

          <div className="space-y-5 text-gray-300 text-base leading-relaxed">
            <p className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-xl border border-gray-600/20 rounded-2xl p-5 shadow-xl">
              {hero.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Modal del diploma - mismo contenido */}
      {showDiploma && (
        <Modal onClose={() => setShowDiploma(false)}>
          <img
            src={diploma}
            alt="Diploma DAM Cámara de Comercio"
            className="rounded-lg w-full max-w-[400px] mx-auto shadow-xl border border-gray-200"
          />
        </Modal>
      )}

      {/* Easter Egg Button */}
      <button
        onClick={() => setShowEgg(true)}
        className="absolute bottom-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-4 py-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        title="Easter Egg"
      >
        <FaEgg className="text-lg" />
      </button>

      {/* Easter Egg Modal - contenido original */}
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
                <div>
                  <strong className="text-blue-400">React:</strong> Componente
                  funcional con estado (`useState`)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-purple-400">Tailwind CSS:</strong>{" "}
                  Layout con `grid`, estilos responsive y animaciones
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-pink-400">Modal:</strong> Diploma en
                  modal con fondo oscuro y botón de cierre
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-green-400">Animaciones:</strong>{" "}
                  fadeIn en sección y modal (`fadeInScale`)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-cyan-400">Iconos:</strong>{" "}
                  `FaGraduationCap`, `FaTimes`, `FaEgg` desde `react-icons`
                </div>
              </li>
               <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-yellow-400">Datos Dinámicos:</strong>{" "}
                  Bio cargada desde `cvData.js`
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
