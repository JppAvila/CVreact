import { useState } from "react";
import { motion } from "framer-motion";
import ProyectosDestacados from "./ProyectosDestacados";
import { FaProjectDiagram, FaEgg, FaTimes, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { cvData } from "../data/cvData";

export default function ExperienceTimeline() {
  const [showProjects, setShowProjects] = useState(false);
  const [showEgg, setShowEgg] = useState(false);
  const experiences = cvData.experience;

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-6 overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent text-center md:text-left drop-shadow-lg">
            Experiencia Profesional
          </h2>
          <button
            onClick={() => setShowProjects(true)}
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-indigo-500/40 hover:scale-105 self-center md:self-auto backdrop-blur-md border border-indigo-400/30"
          >
            <FaProjectDiagram className="text-purple-200 group-hover:text-white transition-colors" />
            <span className="tracking-wide">Proyectos Destacados</span>
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Hidden on very small screens if needed, otherwise centralized */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full md:transform md:-translate-x-1/2 opacity-30"></div>

          <div className="space-y-16"> 
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot - Positioned on the line */}
                <div className="absolute left-6 md:left-1/2 top-0 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900 z-20 md:transform md:-translate-x-1/2 transform -translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 flex flex-col w-full ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                }`}> 
                   {/* Added ml-16 to offset from the left line on mobile */}
                   <div className="w-full p-8 rounded-2xl bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:border-gray-600 group relative overflow-hidden">
                      {/* Gradient Border Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="flex flex-wrap items-center gap-3 mb-2 text-cyan-400 font-bold text-sm tracking-widest uppercase">
                         <FaCalendarAlt />
                         {exp.date}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 mb-6 text-purple-300 font-medium text-lg">
                         <FaBriefcase />
                         <span>{exp.company}</span>
                      </div>

                      <ul className="space-y-4 text-gray-300 relative z-10">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-base leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
                
                {/* Empty Half for Desktop Layout Balanced */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Easter Egg Button */}
      <button
        onClick={() => setShowEgg(true)}
        className="absolute bottom-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-4 py-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-30"
        title="Easter Egg"
      >
        <FaEgg className="text-lg" />
      </button>

      {/* Modal de proyectos */}
      {showProjects && (
        <ProyectosDestacados onClose={() => setShowProjects(false)} />
      )}

      {/* Easter Egg Modal - ACTUALIZADO */}
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
                <div><strong className="text-blue-400">React & Framer Motion:</strong> Animaciones 'scroll-triggered'</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-purple-400">Layout Timeline:</strong> Línea temporal vertical con tarjetas alternadas en desktop y alineadas a la izquierda en móvil.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-pink-400">Estilos:</strong> Glassmorphism avanzado para las tarjetas.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-yellow-400">Datos Dinámicos:</strong> Renderizado desde `cvData.js`, mostrando Rol y Empresa correctamente.</div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}