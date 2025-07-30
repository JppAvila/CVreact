import React from 'react';
import { ArrowLeft, Users, BarChart3, Calendar, Shield, Database, Zap, CheckCircle, Star, Award } from 'lucide-react';

// Importar imágenes correctamente desde src/assets/images/
import login from "../assets/images/login.png";
import gestionusuarios from "../assets/images/gestionusuarios.png";
import dashboardadmin1 from "../assets/images/dashboardadmin1.png";
import dashboardadmin2 from "../assets/images/dashboardadmin2.png";
import dashboardjunior from "../assets/images/dashboardjunior.png";
import dashboardjuniorestados from "../assets/images/dashboardjuniorestados.png";
import planificacion1 from "../assets/images/planificacion1.png";
import planificacion2 from "../assets/images/planificacion2.png";
import miplanificacion from "../assets/images/miplanificacion.png";
import estadisticasjunior from "../assets/images/estadisticasjunior.png";
import incidenciaequipo from "../assets/images/incidenciaequipo.png";
import detalleticket from "../assets/images/detalleticket.png";

const images = {
  login,
  gestionusuarios,
  dashboardadmin1,
  dashboardadmin2,
  dashboardjunior,
  dashboardjuniorestados,
  planificacion1,
  planificacion2,
  miplanificacion,
  estadisticasjunior,
  incidenciaequipo,
  detalleticket
};

const TechBadge = ({ children, icon: Icon }) => (
  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 border border-indigo-400/20">
    {Icon && <Icon size={16} />}
    {children}
  </div>
);

const FeatureSection = ({ title, description, image, reverse = false }) => (
  <div className={`grid md:grid-cols-2 gap-8 items-center mb-12 ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
    <div className={reverse ? 'md:col-start-2' : ''}>
      <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">{title}</h3>
      <p className="text-gray-300 text-base leading-relaxed font-medium bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-xl border border-gray-600/20 rounded-xl p-4 shadow-lg">{description}</p>
    </div>
    <div className={`${reverse ? 'md:col-start-1' : ''} relative group`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
      <img 
        src={image} 
        alt={title}
        className="relative rounded-xl shadow-xl w-full h-64 object-cover transition-all duration-300 group-hover:scale-105 border border-white/10"
      />
    </div>
  </div>
);

export default function FlowTask() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Elementos de fondo animados - igual que tu portfolio */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Header con botón de vuelta */}
      <div className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button 
            onClick={handleGoBack}
            className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 backdrop-blur-xl border border-purple-400/20"
          >
            <ArrowLeft size={20} className="text-purple-200 group-hover:text-white transition-colors" />
            <span>Volver al CV</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 flex items-center gap-2 justify-center">
            <Award size={16} className="text-yellow-200" />
            Proyecto Profesional en Producción
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              FlowTask
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
            Gestión inteligente de tareas
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            FlowTask es una plataforma de gestión de tareas y productividad para equipos técnicos, desarrollada íntegramente por Juampi. 
            Combina React, Firebase y Oracle para ofrecer una solución completa de planificación, control y análisis semanal del trabajo 
            de juniors y administradores.
          </p>
        </div>
      </section>

      {/* Problema y Solución */}
      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              El Problema Real
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-xl border border-gray-600/20 rounded-xl p-6 shadow-lg">
              En mi trabajo actual no disponíamos de una herramienta eficaz para distribuir, auditar y visualizar el trabajo semanal 
              de los técnicos. El sistema antiguo era completamente ineficiente, sin transparencia en la planificación, 
              seguimiento de tareas, ni análisis de productividad.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 mb-8 shadow-xl">
            <h3 className="text-2xl font-black bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent mb-6">Problemas Identificados:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-red-300 text-base mb-1">Sin visibilidad del trabajo</h4>
                  <p className="text-gray-300 text-sm">No había forma de ver qué estaba haciendo cada técnico</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-red-300 text-base mb-1">Planificación caótica</h4>
                  <p className="text-gray-300 text-sm">Asignación de tareas sin criterio ni seguimiento</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-red-300 text-base mb-1">Sin métricas</h4>
                  <p className="text-gray-300 text-sm">Imposible medir productividad o rendimiento del equipo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-red-300 text-base mb-1">Sistema obsoleto</h4>
                  <p className="text-gray-300 text-sm">Herramientas antiguas e inadecuadas para el trabajo moderno</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">La Solución: FlowTask</h3>
            <p className="text-lg text-gray-300 mb-8 font-medium leading-relaxed">
              Como programador, decidí desarrollar FlowTask, una aplicación web propia que permitiera a cada miembro del equipo 
              tener total transparencia y control sobre su trabajo diario.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-xl border border-gray-600/20 rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4 flex items-center gap-3">
                  <Users size={24} className="text-blue-400" />
                  Para Administradores
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Ver todos los dashboards y estadísticas</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Gestionar usuarios y permisos</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Organizar tareas y planificaciones</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Auditar cambios y fichajes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-xl border border-gray-600/20 rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 flex items-center gap-3">
                  <BarChart3 size={24} className="text-purple-400" />
                  Para Técnicos Junior
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Dashboard personal con sus tareas</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Registrar avances y comentarios</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Ver estadísticas de productividad</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Marcar tareas como completadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Funcionalidades */}
      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Funcionalidades Principales
            </h2>
            <p className="text-lg text-gray-300 font-medium">Un vistazo a todas las capacidades de FlowTask</p>
          </div>

          {/* Login e Identidad */}
          <FeatureSection
            title="Inicio de sesión seguro"
            description="Pantalla de acceso al sistema con autenticación vía Firebase. Cada usuario se identifica con su cuenta para acceder a sus vistas y permisos personalizados. Sistema de roles que determina qué funcionalidades puede usar cada persona."
            image={images.login}
          />

          <FeatureSection
            title="Gestión de usuarios"
            description="Solo los administradores pueden ver esta vista. Aquí se gestionan los usuarios activos/inactivos y sus roles. También permite activar, desactivar o editar perfiles. Control total sobre quién puede acceder al sistema y con qué permisos."
            image={images.gestionusuarios}
            reverse
          />

          {/* Dashboard Administrador */}
          <FeatureSection
            title="Dashboard Admin - Vista general"
            description="Muestra el número total de tareas, su estado (activas, vencidas, bloqueadas), y permite filtrar por semana y estados. Este panel ayuda a tener una visión general del equipo y detectar cuellos de botella o sobrecarga de trabajo."
            image={images.dashboardadmin1}
          />

          <FeatureSection
            title="Dashboard Admin - Vista por usuario"
            description="Permite ver el rendimiento individual por técnico, estadísticas de productividad, número de tareas por persona, progreso general y filtros avanzados. Perfecto para evaluaciones de desempeño y distribución equitativa del trabajo."
            image={images.dashboardadmin2}
            reverse
          />

          {/* Dashboard Junior */}
          <FeatureSection
            title="Dashboard Junior - Vista personalizada"
            description="Los juniors ven solo sus propias tareas activas. Este dashboard incluye tarjetas de progreso, estado de tareas, y acceso rápido a acciones como comentarios, edición y cambio de estado. Interfaz limpia y enfocada en la productividad."
            image={images.dashboardjunior}
          />

          <FeatureSection
            title="Dashboard Junior - Estados y métricas"
            description="Incluye agrupación por estado (pendientes, proceso, pausadas, etc.), con recuento y colores visuales. Progreso general y productividad diaria incluida. Los técnicos pueden ver su rendimiento en tiempo real."
            image={images.dashboardjuniorestados}
            reverse
          />

          {/* Planificación */}
          <FeatureSection
            title="Planificación semanal - Tareas por técnico"
            description="Vista completa de todas las tareas de la semana agrupadas por usuario. El admin puede asignar, reagendar, cambiar estados y añadir comentarios por tarea. Herramienta fundamental para la organización del equipo."
            image={images.planificacion1}
          />

          <FeatureSection
            title="Detalle de planificación por día"
            description="Permite ver y editar tareas por día, con indicador de fecha, estado y comentarios. Se accede también al historial y estadísticas desde esta vista. Granularidad máxima en la planificación diaria."
            image={images.planificacion2}
            reverse
          />

          <FeatureSection
            title="Mi planificación"
            description="El administrador también tiene su propia vista donde organiza su semana. Aquí puede marcar tareas, ver interrupciones, añadir notas personales y revisar su carga. Predicar con el ejemplo es fundamental."
            image={images.miplanificacion}
          />

          {/* Estadísticas */}
          <FeatureSection
            title="Estadísticas del Junior"
            description="Vista enfocada a cada técnico donde puede ver su porcentaje de tareas terminadas, productividad media diaria, y desgloses por estado y día. Gamificación sutil para motivar la mejora continua."
            image={images.estadisticasjunior}
            reverse
          />

          {/* Incidencias */}
          <FeatureSection
            title="Incidencias por equipo"
            description="Vista de incidencias filtradas por técnico, críticas y pendientes. Muestra ranking de mayor carga y permite ver el historial de comentarios y cambios por persona. Control total sobre la resolución de problemas."
            image={images.incidenciaequipo}
          />

          <FeatureSection
            title="Detalle de ticket"
            description="Al abrir cualquier ticket, se muestra su descripción, cliente, categoría, fecha planificada y actividades realizadas. Cada cambio queda registrado con nombre y fecha. Trazabilidad completa de todas las acciones."
            image={images.detalleticket}
            reverse
          />
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              🧱 Stack Tecnológico
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
              FlowTask ha sido construido desde cero como una solución empresarial moderna para gestionar equipos, tareas y productividad en tiempo real. 
              El stack tecnológico combina herramientas frontend punteras con servicios backend escalables y conexión directa con entornos de producción reales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Zap className="text-yellow-400 w-8 h-8" />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Frontend & UI</span>
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li><strong className="text-yellow-400">React + Vite:</strong> <span className="font-medium text-sm">SPA ultrarrápida con carga instantánea y arquitectura basada en componentes.</span></li>
                <li><strong className="text-yellow-400">TypeScript:</strong> <span className="font-medium text-sm">Tipado fuerte para máxima seguridad y autocompletado en todo el proyecto.</span></li>
                <li><strong className="text-yellow-400">Tailwind CSS:</strong> <span className="font-medium text-sm">Sistema de estilos utilitarios para UI coherente, responsive y profesional.</span></li>
                <li><strong className="text-yellow-400">Lucide-react:</strong> <span className="font-medium text-sm">Sistema de iconos minimalista SVG, totalmente integrable y accesible.</span></li>
                <li><strong className="text-yellow-400">React Router:</strong> <span className="font-medium text-sm">Navegación cliente robusta con rutas privadas por rol de usuario (admin/junior).</span></li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Database className="text-green-400 w-8 h-8" />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Backend & Datos</span>
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li><strong className="text-green-400">Firebase:</strong> <span className="font-medium text-sm">Autenticación, roles, permisos, base de datos NoSQL y control de acceso en tiempo real.</span></li>
                <li><strong className="text-green-400">Node.js + Express:</strong> <span className="font-medium text-sm">Backend personalizado con lógica de negocio conectada a producción.</span></li>
                <li><strong className="text-green-400">Oracle Database:</strong> <span className="font-medium text-sm">Acceso a la base de datos de fichajes real de la empresa mediante SQL y procedimientos seguros.</span></li>
                <li><strong className="text-green-400">Custom Hooks + Zustand:</strong> <span className="font-medium text-sm">Gestión de estado global limpia y escalable, sin boilerplate.</span></li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Shield className="text-purple-400 w-8 h-8" />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Validación & Estado</span>
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li><strong className="text-purple-400">React Hook Form + Zod:</strong> <span className="font-medium text-sm">Validaciones reactivas y tipadas en formularios (alta, edición, filtros...)</span></li>
                <li><strong className="text-purple-400">Zustand:</strong> <span className="font-medium text-sm">Gestión de estado global limpia y escalable, sin boilerplate.</span></li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Calendar className="text-orange-400 w-8 h-8" />
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">DevOps & Tools</span>
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li><strong className="text-orange-400">Docker + WSL + Ubuntu:</strong> <span className="font-medium text-sm">Entorno de desarrollo profesional con servicios locales y redireccionamiento a producción.</span></li>
                <li><strong className="text-orange-400">pnpm + Vitest + Eslint:</strong> <span className="font-medium text-sm">Tooling moderno para testing, linting, y dependencias ultraligeras.</span></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <TechBadge icon={React.Fragment}>React</TechBadge>
            <TechBadge icon={React.Fragment}>TypeScript</TechBadge>
            <TechBadge icon={React.Fragment}>Tailwind</TechBadge>
            <TechBadge icon={React.Fragment}>Firebase</TechBadge>
            <TechBadge icon={React.Fragment}>Vite</TechBadge>
            <TechBadge icon={React.Fragment}>Node.js</TechBadge>
            <TechBadge icon={React.Fragment}>Oracle</TechBadge>
            <TechBadge icon={React.Fragment}>Zustand</TechBadge>
            <TechBadge icon={React.Fragment}>Lucide</TechBadge>
            <TechBadge icon={React.Fragment}>Zod</TechBadge>
            <TechBadge icon={React.Fragment}>React Router</TechBadge>
            <TechBadge icon={React.Fragment}>pnpm</TechBadge>
            <TechBadge icon={React.Fragment}>Vitest</TechBadge>
            <TechBadge icon={React.Fragment}>Docker</TechBadge>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 font-medium leading-relaxed">
              Toda la solución está pensada para ser escalable, eficiente, y completamente integrada al flujo de trabajo real de una empresa en producción, 
              incluyendo dashboards diferenciados por rol, fichajes conectados a Oracle, y control total de tareas semanales.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-gray-300 py-12 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4 shadow-xl">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Proyecto en Producción Real
            </h3>
          </div>
          
          <p className="text-lg max-w-4xl mx-auto leading-relaxed font-medium text-gray-200">
            FlowTask es una aplicación web de uso profesional desarrollada por Juampi para resolver los problemas reales de planificación, 
            control y auditoría del trabajo en entornos técnicos. Todo el sistema, desde la autenticación hasta la persistencia y visualización, 
            ha sido creado desde cero.
          </p>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 font-medium">
              Desarrollado por Juan Pablo • FlowTask
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}