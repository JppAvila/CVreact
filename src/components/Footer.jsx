import { useState } from "react";
import { FaEgg, FaTimes } from "react-icons/fa";

export default function Footer() {
  const [showEgg, setShowEgg] = useState(false);

  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-gray-300 py-8 text-center text-sm overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-base text-gray-200 font-medium">
            © {new Date().getFullYear()} Juan Pablo Palomares Ávila. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Easter Egg Button */}
      <button
        onClick={() => setShowEgg(true)}
        className="absolute bottom-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-4 py-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        title="Easter Egg"
      >
        <FaEgg className="text-lg" />
      </button>

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
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center">
              🥚 ¿Cómo está hecho este componente?
            </h3>
            <ul className="text-sm space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-blue-400">React:</strong> Componente funcional simple</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-purple-400">Tailwind CSS:</strong> Gradiente de fondo, glassmorphism y elementos blur</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-green-400">JavaScript:</strong> Año dinámico generado con <code className="bg-gray-700 px-1 rounded">new Date().getFullYear()</code></div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
}