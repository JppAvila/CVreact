import { useState, useEffect } from "react";
import { FaTimes, FaEgg, FaGraduationCap } from "react-icons/fa";
import diploma from "../assets/images/diploma.png";
import profile from "../assets/images/profile.png";

export default function About() {
  const [showDiploma, setShowDiploma] = useState(false);
  const [showEgg, setShowEgg] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowDiploma(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="bg-white py-16 px-6 relative animate-fadeIn">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center">
          <img
            src={profile}
            alt="Foto de perfil"
            className="w-64 h-64 rounded-xl shadow-lg object-cover mb-4"
          />
          <button
            onClick={() => setShowDiploma(true)}
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition flex items-center gap-2"
          >
            <FaGraduationCap className="text-yellow-400" />
            Formación Académica
          </button>
        </div>

        <div className="text-left">
          <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
          <p className="text-gray-700 mb-6">
            Soy programador con experiencia en desarrollo de software, análisis y resolución de incidencias en producción. Me dedico a personalizar soluciones para clientes, optimizar procesos internos y revisar código para mejorar la calidad y eficiencia del equipo. Además de programar, superviso y guío a programadores junior, ayudándolos a mejorar técnicamente. Me gusta encontrar soluciones rápidas y efectivas a problemas complejos, evitando complicaciones innecesarias.
          </p>
          <p className="text-gray-700">
            Fuera del ámbito tecnológico, llevo más de quince años entrenando equipos de baloncesto, en su mayoría femeninos, desde categorías base hasta senior. Actualmente soy entrenador principal de un equipo de Primera Nacional Femenina, donde combino desarrollo técnico, gestión de grupo y preparación competitiva. A lo largo de mi trayectoria he participado en numerosos Campeonatos de Andalucía y he logrado varios títulos de liga, formando jugadoras que no solo han crecido deportivamente, sino también como personas. Mi experiencia en pista refuerza mi capacidad para liderar, comunicar y mantener la calma bajo presión.
          </p>
        </div>
      </div>

      {showDiploma && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg p-4 max-w-2xl w-full flex flex-col items-center animate-fadeInScale">
            <button
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-500"
              onClick={() => setShowDiploma(false)}
            >
              <FaTimes />
            </button>
            <img
              src={diploma}
              alt="Diploma DAM Cámara de Comercio"
              className="rounded-lg w-full max-w-[400px] mx-auto shadow-xl border border-gray-200"
            />
          </div>
        </div>
      )}

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
            <h3 className="text-xl font-bold mb-2">🥚 ¿Cómo está hecho este componente?</h3>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li><strong>React:</strong> Componente funcional con estado (`useState`, `useEffect`)</li>
              <li><strong>Tailwind CSS:</strong> Layout con `grid`, estilos responsive y animaciones</li>
              <li><strong>Modal:</strong> Diploma en modal con fondo oscuro y botón de cierre</li>
              <li><strong>Animaciones:</strong> fadeIn en sección y modal (`fadeInScale`)</li>
              <li><strong>Iconos:</strong> `FaGraduationCap`, `FaTimes`, `FaEgg` desde `react-icons`</li>
              <li><strong>Imágenes usadas:</strong> `profile.png`, `diploma.png`</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
