import { useNavigate } from "react-router-dom";
import { FaTimes, FaProjectDiagram, FaMobileAlt, FaDatabase, FaTasks, FaGamepad, FaLeaf } from "react-icons/fa";
import { cvData } from "../data/cvData";

export default function ProyectosDestacados({ onClose }) {
  const navigate = useNavigate();
  const proyectos = cvData.projects;

  const handleNavigate = (path) => {
    navigate(path);
    onClose(); // Good practice to close modal even if unmounting
  };

  const apps = [
    {
      title: "FlowTask",
      description: "Plataforma de gestión de tareas y productividad para equipos técnicos.",
      icon: FaTasks,
      path: "/flowtask",
      gradient: "from-cyan-500 to-blue-500",
      textGradient: "from-cyan-300 to-blue-300"
    },
    {
      title: "NutriPlan",
      description: "App móvil para gestión de dietas, lista de compra y digitalización.",
      icon: FaLeaf,
      path: "/nutriplan",
      gradient: "from-green-500 to-emerald-500",
      textGradient: "from-green-300 to-emerald-300"
    },
    {
      title: "Nemesis 2K",
      description: "Herramienta social y de gestión para jugadores de NBA 2K.",
      icon: FaGamepad,
      path: "/nemesis2k",
      gradient: "from-red-500 to-orange-500",
      textGradient: "from-red-300 to-orange-300"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 max-w-6xl w-full rounded-2xl px-6 py-8 shadow-2xl animate-fadeInScale max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-2xl transition-all hover:scale-110 duration-200 z-50 p-2 bg-black/20 rounded-full"
        >
          <FaTimes />
        </button>
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-10 border-b border-gray-700/50 pb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
            <FaProjectDiagram className="text-white text-2xl" />
          </div>
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio de Aplicaciones
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Colección de desarrollos propios en producción y proyectos destacados
            </p>
          </div>
        </div>
        
        {/* Apps Selector Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FaMobileAlt className="text-purple-400" />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Mis Aplicaciones (Productos Completos)
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {apps.map((app, i) => (
              <div 
                key={i}
                onClick={() => handleNavigate(app.path)}
                className="group relative cursor-pointer bg-gray-800/40 border border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-gray-500 hover:bg-gray-800/80 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`w-14 h-14 bg-gradient-to-br ${app.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <app.icon className="text-white text-2xl" />
                </div>
                
                <h4 className={`text-xl font-black bg-gradient-to-r ${app.textGradient} bg-clip-text text-transparent mb-3`}>
                  {app.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {app.description}
                </p>
                
                <div className="flex items-center text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                  <span>Ver Detalle Completo</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects List */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FaDatabase className="text-blue-400" />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Otros Proyectos & Experiencia
            </span>
          </h3>
          
          <ul className="grid md:grid-cols-2 gap-4">
            {proyectos.map((p, i) => (
              <li
                key={i}
                className="bg-gray-800/30 border border-gray-600/20 rounded-xl p-5 hover:bg-gray-700/30 transition-colors duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-1 h-full min-h-[40px] bg-gradient-to-b from-gray-600 to-gray-400 rounded-full flex-shrink-0 opacity-50"></div>
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-bold text-gray-200 text-base">{p.title}</p>
                    </div>
                     {p.company && <p className="text-purple-400/80 text-xs mb-2 font-semibold uppercase tracking-wider">{p.company}</p>}
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{p.description}</p>
                     {p.tags && (
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-[10px] font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded border border-gray-600/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                     )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
}