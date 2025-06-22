import { useState } from "react";
import { FaEgg, FaTimes } from "react-icons/fa";

export default function Footer() {
  const [showEgg, setShowEgg] = useState(false);

  return (
    <footer className="bg-gray-800 text-gray-300 py-6 text-center text-sm relative">
      © {new Date().getFullYear()} Juan Pablo Palomares Ávila. Todos los derechos reservados.

      <button
        onClick={() => setShowEgg(true)}
        className="absolute bottom-4 right-4 bg-yellow-300 text-black px-3 py-2 rounded-full shadow hover:scale-105 transition-all"
        title="Easter Egg"
      >
        <FaEgg />
      </button>

      {showEgg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white text-gray-800 p-6 rounded-xl max-w-md shadow-lg relative">
            <button
              onClick={() => setShowEgg(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              <FaTimes />
            </button>
            <h3 className="text-xl font-bold mb-2 text-center">
              🥚 ¿Cómo está hecho este componente?
            </h3>
            <ul className="text-sm text-left space-y-2 mt-4">
              <li>
                <span className="inline-block w-4">•</span>
                <strong>React:</strong> Componente funcional simple
              </li>
              <li>
                <span className="inline-block w-4">•</span>
                <strong>Tailwind CSS:</strong> Estilizado con clases utilitarias para fondo, texto y espaciado
              </li>
              <li>
                <span className="inline-block w-4">•</span>
                <strong>JavaScript:</strong> Año dinámico generado con <code>new Date().getFullYear()</code>
              </li>
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
}