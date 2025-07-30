import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

export default function ContactoFlotante({ onClose }) {
  const [formSent, setFormSent] = useState(false);
  const formAction =
    import.meta.env.VITE_FORM_ENDPOINT ||
    "https://formsubmit.co/juanppa86@gmail.com";

  useEffect(() => {
    if (formSent) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // 3 segundos
      return () => clearTimeout(timer);
    }
  }, [formSent, onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 text-white max-w-lg w-full rounded-2xl p-8 shadow-2xl animate-fadeInScale">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-xl transition-colors hover:scale-110 duration-200"
        >
          <FaTimes />
        </button>

        {!formSent ? (
          <>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ¿Hablamos?
            </h2>
            <div className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173"
              />
              
              <div className="space-y-4">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
                <input
                  type="text"
                  name="_subject"
                  placeholder="Asunto"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
                <textarea
                  name="mensaje"
                  placeholder="Escribe tu mensaje..."
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                ></textarea>
              </div>
              
              <button
                onClick={() => setFormSent(true)}
                className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
              >
                Enviar mensaje
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              ¡Gracias por tu mensaje!
            </h3>
            <p className="text-gray-300 text-lg">Te responderé lo antes posible.</p>
          </div>
        )}
      </div>
    </div>
  );
}

ContactoFlotante.propTypes = {
  onClose: PropTypes.func.isRequired,
};