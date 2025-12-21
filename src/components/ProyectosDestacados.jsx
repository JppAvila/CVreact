import { FaTimes, FaProjectDiagram } from "react-icons/fa";
import { cvData } from "../data/cvData";

export default function ProyectosDestacados({ onClose }) {
  const proyectos = cvData.projects;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 max-w-4xl w-full rounded-2xl px-6 py-8 shadow-2xl animate-fadeInScale max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-xl transition-colors hover:scale-110 duration-200"
        >
          <FaTimes />
        </button>
        
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <FaProjectDiagram className="text-white text-lg" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
        </div>
        
        <ul className="grid md:grid-cols-2 gap-4">
          {proyectos.map((p, i) => (
            <li
              key={i}
              className="bg-gray-800/50 border border-gray-600/30 rounded-2xl p-5 shadow-xl hover:shadow-purple-500/10 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-3">
                <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-white text-base mb-1">{p.title}</p>
                   {p.company && <p className="text-purple-300 text-xs mb-1 font-semibold">{p.company}</p>}
                  <p className="text-gray-300 text-sm leading-relaxed">{p.description}</p>
                   {p.tags && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {p.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs bg-purple-500/20 text-purple-200 px-2 py-1 rounded-md">{tag}</span>
                        ))}
                      </div>
                   )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}