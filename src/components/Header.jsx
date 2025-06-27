import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaLinkedin, FaEgg, FaTimes } from "react-icons/fa";
import ContactoFlotante from "./ContactoFlotante";

export default function Header() {
  const [showContact, setShowContact] = useState(false);
  const [showEgg, setShowEgg] = useState(false);

  return (
    <>
      {showContact && <ContactoFlotante onClose={() => setShowContact(false)} />}

      <div className="absolute top-4 right-4 z-10 flex flex-row gap-2 sm:gap-3 items-center">
        <a
          href="https://www.linkedin.com/in/juan-pablo-palomares-ávila-07aaab205"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm font-medium transition shadow-lg"
        >
          <FaLinkedin className="text-blue-400" />
          LinkedIn
        </a>

        <button
          onClick={() => setShowContact(true)}
          className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm font-medium transition shadow-lg"
        >
          <FaEnvelope className="text-yellow-300" />
          Contactar
        </button>

        <a
          href={`${import.meta.env.BASE_URL}cv-juanpablo.pdf`}
          download
          className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm font-medium transition shadow-lg"
        >
          <FaDownload className="text-green-400" />
          Descargar CV
        </a>
      </div>

      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Juan Pablo Palomares Ávila
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-medium text-gray-300 mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Desarrollador de Software
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Apasionado por optimizar procesos, resolver problemas complejos con eficiencia y mejorar la calidad del código y del equipo.
          </motion.p>
        </div>

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
                  <strong>React:</strong> Componente funcional con `useState`
                </li>
                <li>
                  <span className="inline-block w-4">•</span>
                  <strong>Tailwind CSS:</strong> Botones flotantes con posición y transición
                </li>
                <li>
                  <span className="inline-block w-4">•</span>
                  <strong>Framer Motion:</strong> Animaciones suaves en título, subtítulo y texto
                </li>
                <li>
                  <span className="inline-block w-4">•</span>
                  <strong>Integración externa:</strong> Formulario de contacto dinámico (formsubmit) y descarga de CV
                </li>
                <li>
                  <span className="inline-block w-4">•</span>
                  <strong>Redes:</strong> Botones personalizados para LinkedIn y correo directo
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
