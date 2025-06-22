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
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/10 backdrop-blur-sm">
      <div className="relative bg-white max-w-3xl w-full rounded-xl shadow-2xl border border-gray-300 px-6 py-8 animate-fadeInScale">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          <FaTimes />
        </button>
        <div className="flex items-center gap-2 mb-6">
          <FaProjectDiagram className="text-blue-600 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800">Proyectos Destacados</h2>
        </div>
        <ul className="space-y-4">
          {proyectos.map((p, i) => (
            <li
              key={i}
              className="border-l-4 border-blue-500 pl-4 text-gray-700 hover:bg-gray-50 rounded-md transition"
            >
              <p className="font-semibold">{p.cliente}</p>
              <p className="text-sm">{p.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
