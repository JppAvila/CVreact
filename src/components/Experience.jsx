import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProyectosDestacados from "./ProyectosDestacados";
import { FaProjectDiagram, FaEgg, FaTimes } from "react-icons/fa";

export default function ExperienceSlider() {
  const [showProjects, setShowProjects] = useState(false);
  const [showEgg, setShowEgg] = useState(false);

  const experiences = [
    {
      date: "JUNIO 2024 - ACTUALIDAD",
      role: "Programador Senior - Tier1 S.A.",
      responsibilities: [
        "Planificación semanal de tareas y prioridades para el equipo de desarrollo.",
        "Análisis de incidencias críticas en producción y resolución eficiente bajo presión.",
        "Revisión y fusión de código en GitLab asegurando calidad, estándares y buenas prácticas.",
        "Mentoría constante a programadores juniors: revisión de código, orientación técnica y apoyo formativo.",
        "Coordinación con equipos funcionales y técnicos para gestionar entregas y tiempos de desarrollo.",
        "Despliegue y validación de actualizaciones en entornos de producción (releases, hotfixes, emergencias).",
        "Automatización de tareas repetitivas para mejorar los procesos internos del equipo.",
        "Seguimiento y reporte del estado de incidencias y tareas directamente con responsables funcionales.",
        "Colaboración en la definición de mejoras sobre el software base para clientes estratégicos."
      ]
    },
    {
      date: "JUNIO 2022 - JUNIO 2024",
      role: "Programador Junior – Personalizaciones Comerzzia en Tier1 S.A.",
      responsibilities: [
        "Desarrollo de personalizaciones sobre la plataforma Comerzzia (v4.6, v4.8.1 y v5.0).",
        "Implementación de módulos: Mule ESB, POS, Backoffice/OMS, tienda online, ISE y APIs REST.",
        "Adopción de arquitectura headless, microservicios contenedorizados con Docker y Kubernetes.",
        "Creación de adaptadores Mule para integración entre POS y sistemas centrales.",
        "Personalización del motor de promociones, fidelización y CRM Involve CRM.",
        "Integración con ERP y sistemas externos mediante APIs y colas de mensajería.",
        "Automatización de pipelines CI/CD y despliegue continuo.",
        "Ejecución de pruebas unitarias y soporte en homologación."
      ]
    },
    {
      date: "MARZO 2022 - JUNIO 2022",
      role: "Programador Junior (Prácticas) - Tier1 S.A.",
      responsibilities: [
        "Participación en el desarrollo de la nueva versión 22 de Atractor Web Online (portal B2B vinculado a Atractor ERP).",
        "Implementación de funcionalidades frontend con HTML, JavaScript, JavaFX y Vaadin",
        "Soporte en integración de servicios REST y validación funcional del portal.",
        "Aplicación de buenas prácticas en Java y JavaScript.",
        "Colaboración con el equipo senior en pruebas, documentación técnica y despliegues internos."
      ]
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16 px-6 overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10">
          <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent text-center md:text-left">
            Experiencia Profesional
          </h2>
          <button
            onClick={() => setShowProjects(true)}
            className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 self-center md:self-auto"
          >
            <FaProjectDiagram className="text-purple-200 group-hover:text-white transition-colors" />
            Proyectos Destacados ✨
          </button>
        </div>

        {/* Swiper con diseño moderno */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom'
            }}
            loop={true}
            className="pb-16"
          >
            {experiences.map((exp, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/30 p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
                  {/* Header de la tarjeta */}
                  <div className="text-center mb-6">
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-3">
                      {exp.date}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                  </div>
                  
                  {/* Lista de responsabilidades */}
                  <ul className="space-y-3 text-gray-300">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de navegación personalizados */}
          <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 shadow-2xl">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 shadow-2xl">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
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

      {/* Modal de proyectos */}
      {showProjects && (
        <ProyectosDestacados onClose={() => setShowProjects(false)} />
      )}

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
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              🥚 ¿Cómo está hecho este componente?
            </h3>
            <ul className="text-sm space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-blue-400">React:</strong> Componente funcional con estado `useState`</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-purple-400">Tailwind CSS:</strong> Gradientes, glassmorphism, backdrop-blur y animaciones</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-pink-400">Swiper:</strong> Slider animado con navegación customizada, paginación y loop</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-green-400">Elementos de fondo:</strong> Círculos blur animados con animate-pulse y delays</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-cyan-400">Modularización:</strong> Proyectos destacados está separado en su propio componente</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-yellow-400">Easter Egg:</strong> Botón escondido que muestra info técnica como esta 😉</div>
              </li>
            </ul>
          </div>
        </div>
      )}

      <style jsx>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(59, 130, 246, 0.5);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(45deg, #06b6d4, #3b82f6);
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}