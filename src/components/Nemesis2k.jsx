import React, { useEffect } from 'react';
import { ArrowLeft, Users, Shield, List, Search, Scan, Terminal, Flame, Eye, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Importar imágenes
import blacklist from "../assets/images/nemesis/blacklist.png";
import social from "../assets/images/nemesis/social.png";
import ocr from "../assets/images/nemesis/ocr.png";

const TechBadge = ({ children, icon: Icon }) => (
  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 shadow-2xl hover:shadow-red-500/25 hover:scale-105 border border-red-400/20">
    {Icon && <Icon size={16} />}
    {children}
  </div>
);

const FeatureSection = ({ title, description, image, reverse = false }) => (
  <div className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="flex-1 w-full">
      <h3 className="text-2xl font-black bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4">{title}</h3>
      <p className="text-gray-300 text-base leading-relaxed font-medium bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-xl border border-gray-600/20 rounded-xl p-6 shadow-lg">{description}</p>
    </div>
    
    <div className="flex-1 w-full flex justify-center perspective-1000">
      <div className="relative group max-w-[300px] w-full transform hover:scale-105 transition-transform duration-500">
        <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <img 
          src={image} 
          alt={title}
          className="relative rounded-[2rem] shadow-2xl w-full h-auto object-contain border-[8px] border-gray-900/90 ring-1 ring-white/10 bg-black"
        />
        {/* Notch simulation (optional) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl border-x-[1px] border-b-[1px] border-white/5 opacity-80"></div>
      </div>
    </div>
  </div>
);

export default function Nemesis2k() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
      </div>

      <div className="bg-black/40 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button 
            onClick={handleGoBack}
            className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-red-500/25 hover:scale-105 backdrop-blur-xl border border-red-400/20"
          >
            <ArrowLeft size={20} className="text-red-200 group-hover:text-white transition-colors" />
            <span>Volver</span>
          </button>
        </div>
      </div>

      <section className="relative py-16 px-6">
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 flex items-center gap-2 justify-center w-fit mx-auto">
            <Flame size={16} className="text-yellow-300" />
            Gaming Utility
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tighter">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              2K NEMESIS
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 font-medium">
            La herramienta definitiva para la comunidad de NBA 2K. Gestiona listas de reputación (Blacklist/Whitelist),
            comparte reportes con amigos y evita jugadores tóxicos mediante un sistema social integrado y reconocimiento OCR.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <FeatureSection
            title="Gestión de Reputación"
            description="Sistema avanzado de Blacklist (jugadores tóxicos) y Whitelist (compañeros fiables). Cada ficha incluye Gamertag, motivo del reporte, modo de juego y fecha, permitiendo construir una base de datos personal de confianza."
            image={blacklist}
          />
          <FeatureSection
            title="Red Social de Jugadores"
            description="Conecta con amigos para compartir listas. Visualiza reportes combinados (Tus listas + Amigos) o filtra por usuarios específicos. Modo 'Solo Lectura' para proteger la integridad de los datos compartidos."
            image={social}
            reverse
          />
          <FeatureSection
            title="Captura Inteligente OCR"
            description="Olvídate de escribir Gamertags imposibles. Usa la cámara para escanear la pantalla del juego; la IA detecta los nombres autommáticamente y permite reportar jugadores en segundos."
            image={ocr}
          />
        </div>
      </section>

       <section className="py-16 px-6 relative">
         <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-8 text-center">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <TechBadge icon={Terminal}>Flutter</TechBadge>
              <TechBadge icon={Flame}>Firebase Auth</TechBadge>
              <TechBadge icon={Database}>Firestore</TechBadge>
              <TechBadge icon={Scan}>Google ML Kit (OCR)</TechBadge>
              <TechBadge icon={Users}>Social Graph</TechBadge>
              <TechBadge icon={Eye}>UX/UI Gaming</TechBadge>
            </div>
         </div>
      </section>
    </div>
  );
}
