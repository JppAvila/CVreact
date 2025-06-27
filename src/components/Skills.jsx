import { useState } from "react";
import { FaGraduationCap, FaEgg, FaTimes } from "react-icons/fa";
import FormacionComplementaria from "./FormacionComplementaria";

export default function SkillsSection() {
  const [showEgg, setShowEgg] = useState(false);
  const [showFormacion, setShowFormacion] = useState(false);

  return (
    <section className="relative bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 inline-block">
            HABILIDADES TÉCNICAS
          </h2>
          <button
            onClick={() => setShowFormacion(true)}
            className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition self-center md:self-auto"
          >
            <FaGraduationCap />
            Formación Complementaria 📚
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
          <div>
            <h3 className="font-bold text-lg mb-2">Lenguajes de programación</h3>
            <ul className="space-y-1">
              <li>🧡 Java (Spring Boot, JavaFX, JSP)</li>
              <li>💛 JavaScript (Node.js, jQuery)</li>
              <li>💚 Node.js</li>
            </ul>

            <h3 className="font-bold text-lg mt-6 mb-2">Microservicios y APIs</h3>
            <ul className="space-y-1">
              <li>🌱 Spring Cloud, OpenFeign, API REST</li>
            </ul>

            <h3 className="font-bold text-lg mt-6 mb-2">Frontend y UI</h3>
            <ul className="space-y-1">
              <li>🧡 JavaFX, JSP, HTML5, CSS3, jQuery, AJAX</li>
              <li>💙 Tailwind CSS</li>
              <li>🔵 React</li>
            </ul>

            <h3 className="font-bold text-lg mt-6 mb-2">Metodologías y herramientas</h3>
            <ul className="space-y-1">
              <li>🌀 Scrum, Jira, GitLab</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Bases de datos</h3>
            <ul className="space-y-1">
              <li>🟣 Oracle, SQL Server, MySQL</li>
              <li>🔵 PostgreSQL, MariaDB, MongoDB</li>
            </ul>

            <h3 className="font-bold text-lg mt-6 mb-2">Testing y Calidad de código</h3>
            <ul className="space-y-1">
              <li>✅ JUnit 5, Selenium, Clean Code, Refactoring</li>
            </ul>

            <h3 className="font-bold text-lg mt-6 mb-2">Despliegue y automatización</h3>
            <ul className="space-y-1">
              <li>📦 Docker, Git, CI/CD, Jenkins</li>
            </ul>

            <h3 className="font-bold text-lg mt-6 mb-2">Seguridad y gestión de accesos</h3>
            <ul className="space-y-1">
              <li>🔐 Spring Security, OAuth2</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Formacion Complementaria Modal */}
      {showFormacion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white text-gray-800 p-6 rounded-xl max-w-md shadow-lg relative">
            <FormacionComplementaria onClose={() => setShowFormacion(false)} />
          </div>
        </div>
      )}

      {/* Easter Egg Button */}
      <button
        onClick={() => setShowEgg(true)}
        className="absolute bottom-4 right-4 bg-yellow-300 text-black px-3 py-2 rounded-full shadow hover:scale-105 transition-all"
        title="Easter Egg"
      >
        <FaEgg />
      </button>

      {/* Easter Egg Modal */}
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
              <li><strong>React:</strong> Componente funcional simple con `useState`</li>
              <li><strong>Tailwind CSS:</strong> Sistema de diseño utilitario para layout, espaciado, colores</li>
              <li><strong>Diseño:</strong> Grid responsiva y clases semánticas para dividir columnas</li>
              <li><strong>Iconos:</strong> `react-icons` para representar tecnologías</li>
              <li><strong>Easter Egg:</strong> Botón absoluto, modal informativo sobre construcción técnica</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
