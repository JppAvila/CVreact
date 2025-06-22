export default function Education() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Formación</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Ciclo Formativo de Grado Superior en DAM</h3>
          <p className="text-gray-700 italic">IES Heliópolis – 2019-2021</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Formación complementaria</h3>
          <ul className="list-disc list-inside mt-2 text-gray-800">
            <li>Certificaciones de cursos técnicos en Udemy (Spring, JavaScript...)</li>
            <li>Formación continua en proyectos reales dentro de TIER1</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
