import { useState, useMemo } from "react";
import { FaTimes, FaSearch, FaExternalLinkAlt, FaCertificate, FaCode } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { cvData } from "../data/cvData";

export default function FormacionComplementaria({ onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showTechInfo, setShowTechInfo] = useState(false);
  const cursos = cvData.complementaryEducation;

  const filteredCursos = useMemo(() => {
    return cursos.filter((curso) =>
      curso.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      curso.issuer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [cursos, searchTerm]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md" role="dialog">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-gradient-to-br from-gray-900 to-slate-800 border border-gray-700 w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-8 border-b border-gray-700/50 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gray-900/50">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
              <FaCertificate className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white tracking-tight">
                Formación Continua
              </h3>
              <p className="text-gray-400 text-sm">
                 {cursos.length} Certificaciones y Cursos
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-72">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
            <input
              type="text"
              placeholder="Buscar curso, tecnología..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-gray-500"
            />
          </div>

          <div className="flex gap-2 absolute top-4 right-4 md:static">
             <button
              onClick={() => setShowTechInfo(!showTechInfo)}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all"
              title="Easter Egg? Tech Info"
            >
              <FaCode size={20} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
            >
              <FaTimes size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar relative">
          
           <AnimatePresence>
            {showTechInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8 overflow-hidden"
              >
                <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6 text-cyan-200">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <FaCode /> Component Tech Stack
                  </h4>
                  <p className="text-sm opacity-80">
                    Este componente utiliza <strong>Framer Motion</strong> para las animaciones de entrada y lista, 
                    <strong> Tailwind CSS</strong> para el diseño de rejilla adaptativa y 
                    <strong> Glassmorphism</strong> para las tarjetas. 
                    El estado de búsqueda se gestiona con <strong>React Hooks (useState, useMemo)</strong> para un filtrado instantáneo.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCursos.map((curso, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-gray-800/40 hover:bg-gray-800/80 border border-gray-700/50 hover:border-cyan-500/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${curso.issuer === 'Udemy' ? 'bg-purple-500/10 text-purple-400' : 'bg-orange-500/10 text-orange-400'}`}>
                    {curso.issuer === 'Udemy' ? <SiUdemy size={24} /> : <FaCertificate size={24} />}
                  </div>
                  <span className="text-xs font-mono text-gray-500 border border-gray-700 rounded px-2 py-1">
                    {curso.date}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-100 mb-2 leading-tight line-clamp-3 group-hover:text-cyan-400 transition-colors">
                  {curso.title}
                </h4>
                
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-700/50">
                  <span className="text-xs text-gray-500 font-medium">
                    {curso.issuer}
                  </span>
                  <a 
                    href={curso.url !== "#" ? curso.url : undefined}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                      curso.url !== "#" 
                        ? "text-cyan-400 hover:text-cyan-300 cursor-pointer" 
                        : "text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    {curso.url !== "#" ? "Ver Credencial" : "Sin enlace"}
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredCursos.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <FaSearch className="mx-auto text-4xl mb-4 opacity-30" />
              <p>No se encontraron cursos que coincidan con "{searchTerm}"</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}