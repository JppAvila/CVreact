import { useState } from "react";
import { FaEgg, FaGraduationCap, FaTimes, FaRocket } from "react-icons/fa";
import PropTypes from "prop-types";
import Modal from "./Modal";
import diploma from "../assets/images/diploma.png";
import profile from "../assets/images/profile.png";

export default function About() {
  const [showDiploma, setShowDiploma] = useState(false);
  const [showEgg, setShowEgg] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 py-16 px-6 animate-fadeIn overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Columna izquierda - Imagen y botones */}
        <div className="flex flex-col items-center space-y-6">
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
              className="group relative overflow-hidden flex items-center justify-center gap-3 px-5 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-indigo-500/30 hover:scale-105 border border-indigo-400/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <FaGraduationCap className="text-yellow-300 text-lg group-hover:text-yellow-200 transition-colors relative z-10" />
              <span className="relative z-10">Formación Académica</span>
            </button>
            
            <a
              href={`${import.meta.env.BASE_URL}flowtask`}
              className="group relative overflow-hidden flex items-center justify-center gap-3 px-5 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-orange-500/30 hover:scale-105 border border-orange-400/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <FaRocket className="text-orange-200 text-lg group-hover:text-white transition-colors relative z-10" />
              <span className="relative z-10">Aplicaciones Propias</span>
            </a>
          </div>
        </div>

        {/* Columna derecha - Texto */}
        <div className="text-left space-y-6">
          <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Sobre mí
          </h2>
          
          <div className="space-y-5 text-gray-300 text-base leading-relaxed">
            <p className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-xl border border-gray-600/20 rounded-2xl p-5 shadow-xl">
              Soy programador con experiencia en desarrollo de software, análisis y resolución de incidencias en producción. Me dedico a personalizar soluciones para clientes, optimizar procesos internos y revisar código para mejorar la calidad y eficiencia del equipo. Además de programar, superviso y guío a programadores junior, ayudándolos a mejorar técnicamente. Me gusta encontrar soluciones rápidas y efectivas a problemas complejos, evitando complicaciones innecesarias.
            </p>
            
            <p className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-xl border border-gray-600/20 rounded-2xl p-5 shadow-xl">
              Fuera del ámbito tecnológico, llevo más de quince años entrenando equipos de baloncesto, en su mayoría femeninos, desde categorías base hasta senior. Actualmente soy entrenador principal de un equipo de Primera Nacional Femenina, donde combino desarrollo técnico, gestión de grupo y preparación competitiva. A lo largo de mi trayectoria he participado en numerosos Campeonatos de Andalucía y he logrado varios títulos de liga, formando jugadoras que no solo han crecido deportivamente, sino también como personas. Mi experiencia en pista refuerza mi capacidad para liderar, comunicar y mantener la calma bajo presión.
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
                <div><strong className="text-blue-400">React:</strong> Componente funcional con estado (`useState`, `useEffect`)</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-purple-400">Tailwind CSS:</strong> Layout con `grid`, estilos responsive y animaciones</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-pink-400">Modal:</strong> Diploma en modal con fondo oscuro y botón de cierre</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-green-400">Animaciones:</strong> fadeIn en sección y modal (`fadeInScale`)</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-cyan-400">Iconos:</strong> `FaGraduationCap`, `FaTimes`, `FaEgg` desde `react-icons`</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-yellow-400">Imágenes usadas:</strong> `profile.png`, `diploma-dam-camara.png`</div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}