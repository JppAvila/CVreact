import { FaTimes, FaProjectDiagram } from "react-icons/fa";

const proyectos = [
  {
    cliente: "Eroski",
    descripcion: "Migración del sistema a Tier1: Adaptación a múltiples tiendas y procesos.",
  },
  {
    cliente: "Bricodepot",
    descripcion: "Gestión y herramientas para almacenes y retail.",
  },
  {
    cliente: "IskayPet",
    descripcion: "Gestión de tiendas y campañas con analítica avanzada.",
  },
  {
    cliente: "E.Leclerc",
    descripcion: "Herramientas para promociones y mejora en pedidos.",
  },
  {
    cliente: "Bimba y Lola",
    descripcion: "Retail unificado con promociones y fidelización.",
  },
];

export default function ProyectosDestacados({ onClose }) {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 max-w-3xl w-full rounded-2xl px-6 py-8 shadow-2xl animate-fadeInScale">
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
                  <p className="font-bold text-white text-base mb-1">{p.cliente}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{p.descripcion}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}