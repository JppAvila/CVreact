import React, { useEffect } from 'react';
import { ArrowLeft, Smartphone, ShoppingCart, Camera, Calendar, Database, Cloud, Wifi, Lock, Activity, CheckCircle, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Importar imágenes
import dashboard from "../assets/images/nutriplan/dashboard.png";
import editor from "../assets/images/nutriplan/editor.png";
import shopping from "../assets/images/nutriplan/shopping.png";

const TechBadge = ({ children, icon: Icon }) => (
  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 border border-green-400/20">
    {Icon && <Icon size={16} />}
    {children}
  </div>
);

const FeatureSection = ({ title, description, image, reverse = false }) => (
  <div className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="flex-1 w-full">
      <h3 className="text-2xl font-black bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">{title}</h3>
      <p className="text-gray-300 text-base leading-relaxed font-medium bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-xl border border-gray-600/20 rounded-xl p-6 shadow-lg">{description}</p>
    </div>
    
    <div className="flex-1 w-full flex justify-center perspective-1000">
      <div className="relative group max-w-[300px] w-full transform hover:scale-105 transition-transform duration-500">
        <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
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

export default function NutriPlan() {
  const navigate = useNavigate();
  
  // Scroll al top al montar el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-lime-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button 
            onClick={handleGoBack}
            className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 backdrop-blur-xl border border-green-400/20"
          >
            <ArrowLeft size={20} className="text-green-200 group-hover:text-white transition-colors" />
            <span>Volver</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="bg-gradient-to-r from-lime-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 flex items-center gap-2 justify-center w-fit mx-auto">
            <Leaf size={16} className="text-white" />
            Proyecto Mobile (Flutter)
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Mi Dieta (NutriPlan)
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-300 via-green-400 to-lime-400 bg-clip-text text-transparent mb-4">
            Gestión Inteligente de Nutrición Semanal
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            Una solución móvil integral desarrollada en Flutter para la gestión de planificaciones dietéticas. 
            Permite visualizar dietas semanales, gestionar listas de compra inteligentes y digitalizar documentos físicos, 
            todo sincronizado en tiempo real con un backend PocketBase.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-black bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent mb-6">El Desafío</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Dependencia de dietas en papel difíciles de consultar fuera de casa.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Desconexión entre la planificación de comidas y la lista de la compra.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Falta de seguimiento histórico de planes anteriores.</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">La Solución</h3>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                  <Activity size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm"><strong>Planificación Digital:</strong> Visualización clara de comidas por día y semana.</p>
                </li>
                <li className="flex items-start gap-3">
                  <ShoppingCart size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm"><strong>Compra Automatizada:</strong> Generación de listas de compra basadas en la dieta visualizada.</p>
                </li>
                <li className="flex items-start gap-3">
                  <Cloud size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm"><strong>Smart Connect:</strong> Sincronización híbrida (Local/VPN) con PocketBase.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Gallery */}
      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <FeatureSection
            title="Dashboard Semanal"
            description="Vista principal con tarjetas de planificación. Permite navegar entre semanas, ver el estado actual y crear nuevas planificaciones con un solo toque. Incluye feedback visual de conectividad y citas próximas."
            image={dashboard}
          />
          <FeatureSection
            title="Edición y Digitalización"
            description="Detalle diario editable. Integra funcionalidad de cámara para escanear y subir fotos de las dietas físicas (Caras A y B), manteniendo el respaldo original siempre disponible junto a la versión digital."
            image={editor}
            reverse
          />
          <FeatureSection
            title="Lista de la Compra Inteligente"
            description="Genera ítems organizados por categorías (Carnicería, Frutería, etc.) directamente desde la planificación. Permite marcar productos comprados y visualizar la dieta original en una ventana flotante de referencia."
            image={shopping}
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 relative">
         <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-8 text-center">Tecnologías</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <TechBadge icon={Smartphone}>Flutter</TechBadge>
              <TechBadge icon={Database}>PocketBase</TechBadge>
              <TechBadge icon={Wifi}>Smart Connect</TechBadge>
              <TechBadge icon={Camera}>Image Picker</TechBadge>
              <TechBadge icon={Lock}>Auth Secure</TechBadge>
              <TechBadge icon={Cloud}>Tailscale VPN</TechBadge>
            </div>
         </div>
      </section>

    </div>
  );
}
