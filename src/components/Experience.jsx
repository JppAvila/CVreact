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
    <section className="bg-gray-100 py-16 px-6 relative">
      <div className="max-w-5xl mx-auto relative">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-center w-full">Experiencia Profesional</h2>
          <button
            onClick={() => setShowProjects(true)}
            className="absolute right-0 top-0 bg-black text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-gray-800 transition"
          >
            <FaProjectDiagram />
            Proyectos Destacados
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {experiences.map((exp, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-2xl border-4 border-blue-400/30 shadow-xl max-w-2xl mx-auto text-center">
                <h3 className="text-xl font-bold mb-2">{exp.date}</h3>
                <h4 className="text-md font-semibold text-gray-800">{exp.role}</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 text-left mt-4">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        onClick={() => setShowEgg(true)}
        className="absolute bottom-4 right-4 bg-yellow-300 text-black px-3 py-2 rounded-full shadow hover:scale-105 transition-all"
        title="Easter Egg"
      >
        <FaEgg />
      </button>

      {showProjects && (
        <ProyectosDestacados onClose={() => setShowProjects(false)} />
      )}

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
              <li><strong>React:</strong> Componente funcional con estado `useState`</li>
              <li><strong>Tailwind CSS:</strong> Estilos utilitarios para estructura y diseño responsive</li>
              <li><strong>Swiper:</strong> Slider animado con navegación, paginación y loop</li>
              <li><strong>Modularización:</strong> Proyectos destacados está separado en su propio componente</li>
              <li><strong>Easter Egg:</strong> Botón escondido que muestra info técnica como esta 😉</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
