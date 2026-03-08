import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Por quién votar? — Elecciones 2026",
  description: "Guía rápida para votar en las elecciones al Congreso 2026",
};

const salvacionCandidatos = [
  {
    numero: "01",
    nombre: "Enrique Gómez Martínez",
    cargo: "Senado",
    descripcion: "Abogado, líder y cabeza del Movimiento Salvación Nacional. Candidato presidencial 2022.",
    region: "Bogotá · Nacional",
  },
  {
    numero: "02",
    nombre: "Carlos Felipe Mejía Mejía",
    cargo: "Senado",
    descripcion: "Agrónomo, ex Senador (2014–2018). Experto en sector agropecuario.",
    region: "Caldas",
  },
  {
    numero: "08",
    nombre: "John Alejandro Bermeo Rodríguez",
    cargo: "Senado",
    descripcion: "Abogado, filósofo político y activista digital. Especialista en Derechos Humanos.",
    region: "Nacional",
  },
  {
    numero: "18",
    nombre: "Candidato #18",
    cargo: "Senado",
    descripcion: "Movimiento Salvación Nacional.",
    region: "Nacional",
  },
];

const verdeCandidatos = [
  {
    numero: "100",
    nombre: "JTP Hernández",
    cargo: "Senado",
    descripcion: "Candidato Partido Verde — voto de lista.",
    region: "Nacional",
  },
];

function CandidatoCard({
  numero,
  nombre,
  cargo,
  descripcion,
  region,
  color,
}: {
  numero: string;
  nombre: string;
  cargo: string;
  descripcion: string;
  region: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex items-start gap-4">
      <div
        className={`min-w-[52px] h-[52px] rounded-xl flex items-center justify-center text-white font-bold text-lg ${color}`}
      >
        {numero}
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-base leading-tight">{nombre}</p>
        <p className="text-xs text-gray-500 mt-0.5 mb-1">{cargo} · {region}</p>
        <p className="text-sm text-gray-600">{descripcion}</p>
      </div>
    </div>
  );
}

function TarjetonBox({
  partido,
  numero,
  candidatos,
  color,
  bg,
}: {
  partido: string;
  numero: string;
  candidatos: string[];
  color: string;
  bg: string;
}) {
  return (
    <div className={`rounded-2xl border-2 ${color} ${bg} p-4`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Así se vota</p>
      <p className="font-bold text-gray-900 text-lg mb-3">{partido}</p>
      <div className="flex flex-wrap gap-2">
        <span className="bg-white border border-gray-200 rounded-xl px-4 py-2 font-bold text-gray-800 text-base shadow-sm">
          Partido: <span className="text-blue-600">{numero}</span>
        </span>
        {candidatos.map((c) => (
          <span
            key={c}
            className="bg-white border border-gray-200 rounded-xl px-4 py-2 font-bold text-gray-800 text-base shadow-sm"
          >
            Candidato: <span className="text-blue-600">{c}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-6 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Elecciones Colombia 2026</p>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">¿Por quién votar?</h1>
        <p className="text-sm text-gray-500 mt-1">Guía para votar al Senado · Hoy</p>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-8">

        {/* Nota importante */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <p className="text-sm font-semibold text-amber-800 mb-1">💡 ¿No sabes exactamente por quién votar?</p>
          <p className="text-sm text-amber-700">
            Vota por <strong>Salvación Nacional</strong>. Puedes marcar solo el número del partido (100) o elegir uno de los candidatos de la lista abajo.
          </p>
        </div>

        {/* Salvación Nacional */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
            <h2 className="text-lg font-bold text-gray-900">Movimiento Salvación Nacional</h2>
          </div>

          <TarjetonBox
            partido="Salvación Nacional"
            numero="100"
            candidatos={["01", "02", "08", "18"]}
            color="border-blue-200"
            bg="bg-blue-50"
          />

          <div className="mt-4 space-y-3">
            {salvacionCandidatos.map((c) => (
              <CandidatoCard key={c.numero} {...c} color="bg-blue-600" />
            ))}
          </div>
        </section>

        {/* Partido Verde */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-green-600 rounded-full"></div>
            <h2 className="text-lg font-bold text-gray-900">Partido Verde</h2>
          </div>

          <TarjetonBox
            partido="Partido Verde"
            numero="100"
            candidatos={[]}
            color="border-green-200"
            bg="bg-green-50"
          />

          <div className="mt-4 space-y-3">
            {verdeCandidatos.map((c) => (
              <CandidatoCard key={c.numero} {...c} color="bg-green-600" />
            ))}
          </div>
        </section>

        {/* Cómo votar */}
        <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <h3 className="font-bold text-gray-900 mb-3">📋 ¿Cómo votar?</h3>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="font-bold text-blue-600 min-w-[20px]">1.</span> Presenta tu cédula en el puesto de votación.</li>
            <li className="flex gap-2"><span className="font-bold text-blue-600 min-w-[20px]">2.</span> Recibirás tarjetones para Senado y Cámara por separado.</li>
            <li className="flex gap-2"><span className="font-bold text-blue-600 min-w-[20px]">3.</span> En el tarjetón busca el partido y marca el número del candidato (o solo el partido).</li>
            <li className="flex gap-2"><span className="font-bold text-blue-600 min-w-[20px]">4.</span> Introduce el tarjetón en el sobre y deposítalo en la urna.</li>
          </ol>
        </section>

        {/* Mensaje final */}
        <div className="bg-gray-900 rounded-2xl p-5 text-center">
          <p className="text-2xl mb-2">🗳️</p>
          <p className="text-white font-bold text-base mb-1">Tu voto es tu voz</p>
          <p className="text-gray-400 text-sm">
            Votar es el acto más importante de la democracia. Cada voto cuenta para definir el futuro del país. No dejes pasar esta oportunidad.
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 pb-4">
          Información basada en listas oficiales · Elecciones Congreso Colombia 2026
        </p>
      </div>
    </main>
  );
}
