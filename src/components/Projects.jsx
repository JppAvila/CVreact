export default function Projects() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Aplicación de baloncesto personal</h3>
          <p className="text-gray-700 mt-2">
            Desarrollo de una app para gestión de entrenamientos, estadísticas y planificación de
            temporada para equipos de baloncesto. Proyecto en curso.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Automatización de tareas en soporte (TIER1)</h3>
          <p className="text-gray-700 mt-2">
            Scripts y herramientas internas para facilitar el análisis de logs, trazas y asignación
            de incidencias en producción.
          </p>
        </div>
      </div>
    </section>
  );
}
