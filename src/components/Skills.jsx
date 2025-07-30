import { useState } from "react";
import {
  FaGraduationCap,
  FaEgg,
  FaTimes,
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaServer,
  FaGitAlt,
  FaProjectDiagram,
  FaRobot,
  FaUserShield,
  FaTachometerAlt,
  FaCode,
  FaTools,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiSpring,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiMongodb,
  SiJunit5,
  SiCypress,
  SiEslint,
  SiDocker,
  SiGithubactions,
  SiVite,
  SiNginx,
  SiJira,
  SiNotion,
  SiOpenai,
} from "react-icons/si";
import { TbBrandGithubCopilot } from "react-icons/tb";
import FormacionComplementaria from "./FormacionComplementaria";

export default function SkillsSection() {
  const [showEgg, setShowEgg] = useState(false);
  const [showFormacion, setShowFormacion] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 py-18 px-6 overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent border-b-4 border-gradient-to-r from-cyan-500 to-purple-500 inline-block pb-2">
            HABILIDADES TÉCNICAS
          </h2>
          <button
            onClick={() => setShowFormacion(true)}
            className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 self-center md:self-auto"
          >
            <FaGraduationCap className="text-purple-200 group-hover:text-white transition-colors" />
            Formación Complementaria 📚
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white">
          {/* Columna izquierda */}
          <div className="space-y-6">
          {/* Lenguajes y frameworks */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Lenguajes y frameworks
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-base">
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaJava className="text-xl" />
                  <span>Java (Spring Boot, JavaFX)</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiTypescript className="text-xl" />
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiJavascript className="text-xl" />
                  <span>JavaScript</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaHtml5 className="text-xl" />
                  <span>HTML5 / CSS3</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaReact className="text-xl" />
                  <span>React</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaNodeJs className="text-xl" />
                  <span>Node.js</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiTailwindcss className="text-xl" />
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </div>

            {/* Backend y APIs */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Backend y APIs
              </h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaServer className="text-xl" />
                  <span>REST APIs</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiExpress className="text-xl" />
                  <span>Express</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiSpring className="text-xl" />
                  <span>Spring MVC</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiFirebase className="text-xl" />
                  <span>Firebase (Auth, Firestore, Hosting)</span>
                </li>
              </ul>
            </div>

            {/* Bases de datos */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Bases de datos
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-base">
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiPostgresql className="text-xl" />
                  <span>PostgreSQL</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiMysql className="text-xl" />
                  <span>MySQL</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiOracle className="text-xl" />
                  <span>Oracle</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiFirebase className="text-xl" />
                  <span>Firebase Realtime/Firestore</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiMongodb className="text-xl" />
                  <span>MongoDB</span>
                </li>
              </ul>
            </div>

            {/* Testing y calidad */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Testing y Calidad
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-base">
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiJunit5 className="text-xl" />
                  <span>JUnit 5</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiCypress className="text-xl" />
                  <span>Cypress</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaCode className="text-xl" />
                  <span>Clean Code</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaTools className="text-xl" />
                  <span>Refactoring</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiEslint className="text-xl" />
                  <span>ESLint / Prettier</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            {/* DevOps y despliegue */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                DevOps y Despliegue
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-base">
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiDocker className="text-xl" />
                  <span>Docker</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaGitAlt className="text-xl" />
                  <span>Git & GitHub</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiGithubactions className="text-xl" />
                  <span>CI/CD</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiVite className="text-xl" />
                  <span>Vite</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiNginx className="text-xl" />
                  <span>Nginx</span>
                </li>
              </ul>
            </div>

            {/* Metodologías y gestión */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Metodologías y Gestión
              </h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaProjectDiagram className="text-xl" />
                  <span>Scrum / Agile</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiJira className="text-xl" />
                  <span>Jira</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiNotion className="text-xl" />
                  <span>Notion / Trello</span>
                </li>
              </ul>
            </div>

            {/* IA y asistencia */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                IA &amp; Asistencia
              </h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <TbBrandGithubCopilot className="text-xl" />
                  <span>GitHub Copilot</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <SiOpenai className="text-xl" />
                  <span>ChatGPT / Claude / Codex</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaRobot className="text-xl" />
                  <span>Automatización con IA</span>
                </li>
              </ul>
            </div>

            {/* Otros */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-red-500/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Otros
              </h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaTachometerAlt className="text-xl" />
                  <span>Paneles tipo Dashy / Heimdall</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <FaUserShield className="text-xl" />
                  <span>Control de acceso (Spring Security, OAuth2)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Formacion Complementaria Modal */}
      {showFormacion && (
        <FormacionComplementaria onClose={() => setShowFormacion(false)} />
      )}

      {/* Easter Egg Button */}
      <button
        onClick={() => setShowEgg(true)}
        className="absolute bottom-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-4 py-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        title="Easter Egg"
      >
        <FaEgg className="text-lg" />
      </button>

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
                <div><strong className="text-blue-400">React:</strong> Componente funcional con `useState` para gestionar modales</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-purple-400">Tailwind CSS:</strong> Grid responsive, gradientes, glassmorphism y efectos hover</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-pink-400">Elementos de fondo:</strong> Círculos blur animados con diferentes delays</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-green-400">Ventanas modales:</strong> Formación Complementaria se abre con el mismo diseño que Proyectos Destacados</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-cyan-400">Iconos:</strong> `react-icons` para representar tecnologías</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <div><strong className="text-yellow-400">Easter Egg:</strong> Botón flotante que muestra esta explicación</div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}