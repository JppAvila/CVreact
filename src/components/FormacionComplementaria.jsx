import { FaTimes, FaBook } from "react-icons/fa";

const cursos = [
  "Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL – UDEMY",
  "JavaScript Moderno – Guía Definitiva (Construcción de +20 Proyectos) – UDEMY",
  "Curso de Linux – Todo lo necesario para ser administrador – UDEMY",
  "Spring Boot y Microservicios",
  "Testing en Java con JUnit 5",
  "Docker y CI/CD para desarrolladores",
  "Refactoring y Clean Code",
];

export default function FormacionComplementaria({ onClose }) {
  return (
    <div className="text-gray-800">
      <div className="flex justify-between items-center mb-6 border-b pb-2">
        <h3 className="text-3xl font-bold">🎓 Formación Complementaria</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-red-500 text-2xl transition"
        >
          <FaTimes />
        </button>
      </div>

      <div className="space-y-4">
        {cursos.map((curso, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 rounded-md bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div className="text-blue-600 text-xl mt-1">
              <FaBook />
            </div>
            <p className="text-base">{curso}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
