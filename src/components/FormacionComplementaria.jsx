import { FaTimes, FaBook } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cvData } from "../data/cvData";

export default function FormacionComplementaria({ onClose }) {
  const cursos = cvData.complementaryEducation;
  
  const cursoPairs = [];
  for (let i = 0; i < cursos.length; i += 2) {
    cursoPairs.push(cursos.slice(i, i + 2));
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" role="dialog">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 max-w-2xl w-full rounded-2xl px-8 py-10 shadow-2xl animate-fadeInScale">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-xl transition-colors hover:scale-110 duration-200"
        >
          <FaTimes />
        </button>
        
        <div className="flex items-center gap-3 mb-8 border-b border-gray-700 pb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <FaBook className="text-white text-xl" />
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Formación Complementaria
          </h3>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="pb-8"
        >
          {cursoPairs.map((pair, idx) => (
            <SwiperSlide key={idx}>
              <div className="space-y-6">
                {pair.map((curso, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-gray-800/50 border border-gray-600/30 shadow-xl hover:shadow-blue-500/10 hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200 text-base leading-relaxed">{curso}</p>
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