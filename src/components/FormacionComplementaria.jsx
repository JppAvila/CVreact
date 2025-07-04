import { FaTimes, FaBook } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  const cursoPairs = [];
  for (let i = 0; i < cursos.length; i += 2) {
    cursoPairs.push(cursos.slice(i, i + 2));
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/10 backdrop-blur-sm">
      <div className="relative bg-white max-w-md w-full rounded-xl shadow-2xl border border-gray-300 px-6 py-8 animate-fadeInScale text-gray-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          <FaTimes />
        </button>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <FaBook className="text-blue-600 text-2xl" />
          <h3 className="text-2xl font-bold">Formación Complementaria</h3>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="pb-6"
        >
          {cursoPairs.map((pair, idx) => (
            <SwiperSlide key={idx}>
              <div className="space-y-4">
                {pair.map((curso, i) => (
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
