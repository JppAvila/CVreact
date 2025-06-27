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
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white text-gray-800 max-w-lg w-full rounded-xl p-6 shadow-2xl animate-fadeInScale">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          <FaTimes />
        </button>

        {!formSent ? (
          <>
            <h2 className="text-2xl font-bold mb-4">¿Hablamos?</h2>
            <form
              action={formAction}
              method="POST"
              onSubmit={() => setFormSent(true)}
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173"
              />
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu correo"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                name="_subject"
                placeholder="Asunto"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <textarea
                name="mensaje"
                placeholder="Escribe tu mensaje..."
                required
                rows="4"
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Enviar mensaje
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2 text-green-600">¡Gracias por tu mensaje!</h3>
            <p className="text-gray-600">Te responderé lo antes posible.</p>
          </div>
        )}
      </div>
    </div>
  );
}

ContactoFlotante.propTypes = {
  onClose: PropTypes.func.isRequired,
};
