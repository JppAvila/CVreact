import React from 'react';
import { ArrowLeft, Users, BarChart3, Calendar, Shield, Database, Zap, CheckCircle, Star, Award } from 'lucide-react';

// Importar imágenes desde src/assets/images/
const images = {
  login: "/src/assets/images/login.png",
  gestionusuarios: "/src/assets/images/gestionusuarios.png",
  dashboardadmin1: "/src/assets/images/dashboardadmin1.png",
  dashboardadmin2: "/src/assets/images/dashboardadmin2.png",
  dashboardjunior: "/src/assets/images/dashboardjunior.png",
  dashboardjuniorestados: "/src/assets/images/dashboardjuniorestados.png",
  planificacion1: "/src/assets/images/planificacion1.png",
  planificacion2: "/src/assets/images/planificacion2.png",
  miplanificacion: "/src/assets/images/miplanificacion.png",
  estadisticasjunior: "/src/assets/images/estadisticasjunior.png",
  incidenciaequipo: "/src/assets/images/incidenciaequipo.png",
  detalleticket: "/src/assets/images/detalleticket.png"
};

type TechBadgeProps = {
  children: React.ReactNode;
  icon: React.ElementType;
};

const TechBadge = ({ children, icon: Icon }: TechBadgeProps) => (
  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border border-white/20 backdrop-blur-xl">
    {Icon && <Icon size={16} />}
    {children}
  </div>
);

const FeatureSection = ({ title, description, image, reverse = false }) => (
  <div className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
    <div className={reverse ? 'md:col-start-2' : ''}>
      <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">{title}</h3>
      <p className="text-gray-200 text-lg leading-relaxed font-medium">{description}</p>
    </div>
    <div className={`${reverse ? 'md:col-start-1' : ''} relative group`}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700 delay-200"></div>
      <img 
        src={image} 
        alt={title}
        className="relative rounded-3xl shadow-2xl w-full h-80 object-cover transition-all duration-500 group-hover:scale-105 border border-white/10"
      />
    </div>
  </div>
);

export default function FlowTask() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      {/* Header con botón de vuelta */}
      <div className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button 
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors font-bold text-lg hover:scale-105 transform transition-transform"
          >
            <ArrowLeft size={24} className="animate-bounce" />
            Volver al CV
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-300/30 text-cyan-100 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl">
            <Award size={18} className="text-yellow-400" />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Proyecto Profesional en Producción
            </span>
          </div>
          
          <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 tracking-tight leading-none drop-shadow-2xl">
            FlowTask
          </h1>
          
          <div className="relative mb-8">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent mb-4 tracking-wide">
              Gestión inteligente de tareas
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-cyan-600 rounded-lg blur opacity-20"></div>
          </div>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
            FlowTask es una plataforma de gestión de tareas y productividad para equipos técnicos, desarrollada íntegramente por Juampi. 
            Combina React, Firebase y Oracle para ofrecer una solución completa de planificación, control y análisis semanal del trabajo 
            de juniors y administradores.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl border border-cyan-300/20 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform">
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">100%</div>
              <div className="text-cyan-200 font-semibold">Desarrollo Propio</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-xl border border-purple-300/20 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">2</div>
              <div className="text-purple-200 font-semibold">Roles de Usuario</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl border border-green-300/20 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform">
              <div className="text-4xl font-black bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">Real</div>
              <div className="text-green-200 font-semibold">Entorno Producción</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-xl border border-orange-300/20 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform">
              <div className="text-4xl font-black bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">15+</div>
              <div className="text-orange-200 font-semibold">Funcionalidades</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema y Solución */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-8 tracking-tight">
              El Problema Real
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed">
              En mi trabajo actual no disponíamos de una herramienta eficaz para distribuir, auditar y visualizar el trabajo semanal 
              de los técnicos. El sistema antiguo era completamente ineficiente, sin transparencia en la planificación, 
              seguimiento de tareas, ni análisis de productividad.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-red-300/20 rounded-3xl p-12 mb-12 shadow-2xl">
            <h3 className="text-3xl font-black bg-gradient-to-r from-red-300 to-orange-400 bg-clip-text text-transparent mb-8">Problemas Identificados:</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mt-3 shadow-lg"></div>
                <div>
                  <h4 className="font-bold text-red-200 text-lg mb-2">Sin visibilidad del trabajo</h4>
                  <p className="text-gray-300">No había forma de ver qué estaba haciendo cada técnico</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mt-3 shadow-lg"></div>
                <div>
                  <h4 className="font-bold text-red-200 text-lg mb-2">Planificación caótica</h4>
                  <p className="text-gray-300">Asignación de tareas sin criterio ni seguimiento</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mt-3 shadow-lg"></div>
                <div>
                  <h4 className="font-bold text-red-200 text-lg mb-2">Sin métricas</h4>
                  <p className="text-gray-300">Imposible medir productividad o rendimiento del equipo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mt-3 shadow-lg"></div>
                <div>
                  <h4 className="font-bold text-red-200 text-lg mb-2">Sistema obsoleto</h4>
                  <p className="text-gray-300">Herramientas antiguas e inadecuadas para el trabajo moderno</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-xl border border-green-300/20 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-black bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent mb-8">La Solución: FlowTask</h3>
            <p className="text-xl text-gray-200 mb-10 font-medium leading-relaxed">
              Como programador, decidí desarrollar FlowTask, una aplicación web propia que permitiera a cada miembro del equipo 
              tener total transparencia y control sobre su trabajo diario.
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-300/20 rounded-2xl p-8 shadow-xl">
                <h4 className="text-2xl font-black bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                  <Users size={28} className="text-blue-400" />
                  Para Administradores
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Ver todos los dashboards y estadísticas</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Gestionar usuarios y permisos</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Organizar tareas y planificaciones</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Auditar cambios y fichajes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-300/20 rounded-2xl p-8 shadow-xl">
                <h4 className="text-2xl font-black bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                  <BarChart3 size={28} className="text-purple-400" />
                  Para Técnicos Junior
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Dashboard personal con sus tareas</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Registrar avances y comentarios</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Ver estadísticas de productividad</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">Marcar tareas como completadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Funcionalidades */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent mb-8 tracking-tight">
              Funcionalidades Principales
            </h2>
            <p className="text-xl text-gray-200 font-medium">Un vistazo a todas las capacidades de FlowTask</p>
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
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-indigo-900/50 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 tracking-tight">
              🧱 Stack Tecnológico
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed">
              FlowTask ha sido construido desde cero como una solución empresarial moderna para gestionar equipos, tareas y productividad en tiempo real. 
              El stack tecnológico combina herramientas frontend punteras con servicios backend escalables y conexión directa con entornos de producción reales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-300/20 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
                <Zap className="text-yellow-400 w-10 h-10" />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Frontend & UI</span>
              </h3>
              <ul className="space-y-6 text-gray-200">
                <li><strong className="text-yellow-300 text-lg">React + Vite:</strong> <span className="font-medium">SPA ultrarrápida con carga instantánea y arquitectura basada en componentes.</span></li>
                <li><strong className="text-yellow-300 text-lg">TypeScript:</strong> <span className="font-medium">Tipado fuerte para máxima seguridad y autocompletado en todo el proyecto.</span></li>
                <li><strong className="text-yellow-300 text-lg">Tailwind CSS:</strong> <span className="font-medium">Sistema de estilos utilitarios para UI coherente, responsive y profesional.</span></li>
                <li><strong className="text-yellow-300 text-lg">Lucide-react:</strong> <span className="font-medium">Sistema de iconos minimalista SVG, totalmente integrable y accesible.</span></li>
                <li><strong className="text-yellow-300 text-lg">React Router:</strong> <span className="font-medium">Navegación cliente robusta con rutas privadas por rol de usuario (admin/junior).</span></li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-300/20 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
                <Database className="text-green-400 w-10 h-10" />
                <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">Backend & Datos</span>
              </h3>
              <ul className="space-y-6 text-gray-200">
                <li><strong className="text-green-300 text-lg">Firebase:</strong> <span className="font-medium">Autenticación, roles, permisos, base de datos NoSQL y control de acceso en tiempo real.</span></li>
                <li><strong className="text-green-300 text-lg">Node.js + Express:</strong> <span className="font-medium">Backend personalizado con lógica de negocio conectada a producción.</span></li>
                <li><strong className="text-green-300 text-lg">Oracle Database:</strong> <span className="font-medium">Acceso a la base de datos de fichajes real de la empresa mediante SQL y procedimientos seguros.</span></li>
                <li><strong className="text-green-300 text-lg">Custom Hooks + Zustand:</strong> <span className="font-medium">Gestión de estado global limpia y escalable, sin boilerplate.</span></li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-300/20 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
                <Shield className="text-purple-400 w-10 h-10" />
                <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">Validación & Estado</span>
              </h3>
              <ul className="space-y-6 text-gray-200">
                <li><strong className="text-purple-300 text-lg">React Hook Form + Zod:</strong> <span className="font-medium">Validaciones reactivas y tipadas en formularios (alta, edición, filtros...)</span></li>
                <li><strong className="text-purple-300 text-lg">Zustand:</strong> <span className="font-medium">Gestión de estado global limpia y escalable, sin boilerplate.</span></li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-300/20 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
                <Calendar className="text-orange-400 w-10 h-10" />
                <span className="bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">DevOps & Tools</span>
              </h3>
              <ul className="space-y-6 text-gray-200">
                <li><strong className="text-orange-300 text-lg">Docker + WSL + Ubuntu:</strong> <span className="font-medium">Entorno de desarrollo profesional con servicios locales y redireccionamiento a producción.</span></li>
                <li><strong className="text-orange-300 text-lg">pnpm + Vitest + Eslint:</strong> <span className="font-medium">Tooling moderno para testing, linting, y dependencias ultraligeras.</span></li>
              </ul>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
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
              <TechBadge icon={React.Fragment}>React Router</TechBadge>
              <TechBadge icon={React.Fragment}>pnpm</TechBadge>
              <TechBadge icon={React.Fragment}>Vitest</TechBadge>
              <TechBadge icon={React.Fragment}>Docker</TechBadge>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-200 font-medium leading-relaxed">
              Toda la solución está pensada para ser escalable, eficiente, y completamente integrada al flujo de trabajo real de una empresa en producción, 
              incluyendo dashboards diferenciados por rol, fichajes conectados a Oracle, y control total de tareas semanales.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-black text-gray-300 py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 shadow-2xl">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-black bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-6">
              Proyecto en Producción Real
            </h3>
          </div>
          
          <p className="text-xl max-w-4xl mx-auto leading-relaxed font-medium text-gray-200">
            FlowTask es una aplicación web de uso profesional desarrollada por Juampi para resolver los problemas reales de planificación, 
            control y auditoría del trabajo en entornos técnicos. Todo el sistema, desde la autenticación hasta la persistencia y visualización, 
            ha sido creado desde cero.
          </p>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 font-medium">
              Desarrollado por Juan Pablo • FlowTask
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}