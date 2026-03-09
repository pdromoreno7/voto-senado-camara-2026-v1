import type { Metadata } from "next";
import { FadeIn, StaggerList, StaggerItem, Pulsebadge, ScrollCard } from "./components/AnimatedCard";

export const metadata: Metadata = {
  title: "¿Por quién votar? — Elecciones 2026",
  description: "Guía rápida para votar en las elecciones al Congreso Colombia 2026",
  icons: {
    icon: "/colombia-flag.jpg",
    apple: "/colombia-flag.jpg",
  },
  openGraph: {
    title: "¿Por quién votar? — Elecciones Colombia 2026",
    description: "Guía rápida para votar en las elecciones al Congreso 2026",
    images: [{ url: "/colombia-flag.jpg", width: 800, height: 600 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Por quién votar? — Elecciones Colombia 2026",
    description: "Guía rápida para votar en las elecciones al Congreso 2026",
    images: ["/colombia-flag.jpg"],
  },
};

const salvacionCandidatos = [
  {
    numero: "100",
    nombre: "Sara Castellanos",
    cargo: "Senado",
    descripcion: "Cristiana, defensora de los valores de la familia y la fe. Lucha por proteger a los niños contra la ideología de género en las aulas, defiende los derechos de los padres sobre la educación de sus hijos y propone reducir la carga tributaria para los colombianos.",
    region: "Nacional",
    foto: "/sara-castellanos.jpg",
  },
  {
    numero: "01",
    nombre: "Enrique Gómez Martínez",
    cargo: "Senado",
    descripcion: "Abogado y dirigente del Movimiento de Salvación Nacional. Recuperó la personería jurídica del partido y lideró su relanzamiento; fue candidato presidencial en 2022. Ha ejercido principalmente como vocero y cabeza visible del movimiento en los últimos años.",
    region: "Bogotá · Nacional",
    foto: "/enrique-gomez.jpg",
  },

  {
    numero: "08",
    nombre: "John Alejandro Bermeo Rodríguez",
    cargo: "Senado",
    descripcion: "Abogado de la Universidad del Tolima, especialista en Derechos Humanos y Competencias Ciudadanas. Su campo de investigación es la filosofía política libertaria. Influencer y activista digital con fuerte presencia en redes sociales.",
    region: "Nacional",
    foto: "/john-bermeo.jpg",
  },

  {
    numero: "10",
    nombre: "Germán Andrés Rodríguez Prieto",
    cargo: "Senado",
    descripcion: "Politólogo, especialista en Democracia y Régimen Electoral, cofundador del movimiento FUERA. Ha trabajado en la Registraduría Nacional, el Concejo de Bogotá y el Congreso. Fue Secretario Privado de la Alcaldía de Mosquera. Defenderá el erario, la transparencia y la política sin corrupción.",
    region: "Reservas · Proyección Social",
    foto: "/german-rodriguez.jpg",
  },

  {
    numero: "20",
    nombre: "Wilson Ruiz Orejuela",
    cargo: "Senado",
    descripcion: "Abogado y jurista. Fue Ministro de Justicia y del Derecho (2020–2022) y magistrado y presidente del Consejo Superior de la Judicatura. Formación en Derecho (Universidad Libre, Cali) con posgrado y doctorado en Derecho.",
    region: "Valle del Cauca · Cali · Nacional",
  },
];

const salvacionCamaraCandidatos = [
  {
    numero: "118",
    nombre: "Johnatan Silva",
    cargo: "Cámara",
    descripcion: "Firme en la defensa de la niñez. Proteger la inocencia, fortalecer la familia y devolverle autoridad a los padres no es retroceder: es resistir con carácter. Defender a los niños no es un eslogan, es una línea roja. FIRMES POR LOS NIÑOS.",
    region: "Bogotá",
    foto: "/johnatan-silva.jpg",
  },
];

const camaraCandidatos = [
  {
    numero: "101",
    nombre: "Daniel Briceño",
    cargo: "Cámara",
    descripcion: "Candidato a la Cámara de Representantes por Bogotá — Centro Democrático. Lema: \"Control con Verdad\". Enfocado en transparencia, control político y defensa de los valores tradicionales.",
    region: "Bogotá",
    foto: "/daniel-briceno.jpg",
  },
];

const cambioRadicalCandidatos = [
  {
    numero: "2",
    nombre: "Lorena Ríos",
    cargo: "Senado",
    descripcion: "Cristiana. Abogada especializada en Derecho Ambiental y magíster en Derecho Administrativo (Universidad del Rosario). Estudios en Derechos Humanos en la Universidad Birkbeck (Londres) y en Estrategias Globales para la Protección de la Niñez en Harvard. Asesora del Ministerio del Interior donde creó la Dirección de Asuntos Religiosos (8 años). Logró la primera Política Pública Nacional de Libertad Religiosa y estableció el 4 de julio como Día Nacional de la Libertad Religiosa y de Cultos.",
    region: "Nacional",
    foto: "/lorena-rios.jpg",
  },
];

const verdeCandidatos = [
  {
    numero: "100",
    nombre: "Jota Pe Hernández",
    cargo: "Senado",
    descripcion: "Youtuber, músico cristiano y senador desde 2022. Fue el 3er candidato más votado a nivel nacional. Defensor de la familia, crítico del gobierno Petro y de la ideología de género. Ha impulsado debates sobre libertad de expresión, educación y valores cristianos en el Congreso.",
    region: "Bucaramanga · Nacional",
    foto: "/jtp-hernandez.jpg",
  },
];

function CandidatoCard({
  numero,
  nombre,
  cargo,
  descripcion,
  region,
  color,
  foto,
}: {
  numero: string;
  nombre: string;
  cargo: string;
  descripcion: string;
  region: string;
  color: string;
  foto?: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300">
      {foto ? (
        <img
          src={foto}
          alt={nombre}
          className="min-w-[64px] w-16 h-16 rounded-xl object-cover object-top shadow-sm border border-gray-100"
        />
      ) : (
        <div className={`min-w-[52px] h-[52px] rounded-xl flex items-center justify-center text-white font-bold text-lg ${color}`}>
          {numero}
        </div>
      )}
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-semibold text-gray-900 text-base leading-tight">{nombre}</p>
          <span className={`text-xs text-white font-bold px-2 py-0.5 rounded-full ${color}`}>#{numero}</span>
        </div>
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
          <span key={c} className="bg-white border border-gray-200 rounded-xl px-4 py-2 font-bold text-gray-800 text-base shadow-sm">
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
      <FadeIn>
        <div className="bg-white border-b border-gray-100 px-4 py-6 text-center shadow-sm">
          <img
            src="/colombia-flag.jpg"
            alt="Colombia"
            className="w-16 h-10 object-cover rounded-lg mx-auto mb-3 shadow-sm"
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Elecciones Colombia 2026</p>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">¿Por quién votar?</h1>
          <p className="text-sm text-gray-500 mt-1">Guía para votar al Senado · Hoy</p>
        </div>
      </FadeIn>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-8">

        {/* Descripción */}
        <FadeIn delay={0.05}>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p className="text-sm text-gray-700 leading-relaxed italic">
              Colombia está en un momento decisivo. Defendemos la familia, la fe, la libertad de expresión y la libre empresa. Creemos en un Estado más pequeño y ciudadanos más libres. Hoy más que nunca necesitamos hacer batalla cultural y defender lo que somos como nación — esta también es una guerra espiritual. Aquí encontrarás una guía de candidatos que comparten estos valores. Tu voto es tuyo — úsalo con conciencia y libertad. 🇨🇴
            </p>
            <p className="text-xs text-gray-400 mt-3 italic text-right">— Pedro Moreno</p>
          </div>
        </FadeIn>

        {/* Nota importante */}
        <FadeIn delay={0.1}>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <p className="text-sm font-semibold text-amber-800 mb-2">💡 ¿No sabes exactamente por quién votar?</p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-3">
              <p className="text-sm font-bold text-red-700">⚠️ Solo puedes marcar UN número en el tarjetón.</p>
              <p className="text-sm text-red-600 mt-0.5">Si marcas más de uno, tu voto queda nulo. Elige: el partido (100) o un candidato.</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Movimiento_de_Salvaci%C3%B3n_Nacional_2026.png"
                alt="Salvación Nacional"
                className="w-16 h-16 object-contain rounded-xl bg-white p-1 shadow-sm border border-amber-100"
              />
              <p className="text-sm text-amber-700">
                Vota por <strong>Salvación Nacional</strong>. Puedes marcar solo el número del partido (100) o elegir uno de los candidatos de la lista abajo.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Salvación Nacional */}
        <section>
          <FadeIn delay={0.15}>
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
          </FadeIn>

          <div className="mt-4 space-y-3">
            {salvacionCandidatos.map((c) => (
              <ScrollCard key={c.numero}>
                <CandidatoCard {...c} color="bg-blue-600" />
              </ScrollCard>
            ))}
          </div>
        </section>

        {/* Cámara - Salvación Nacional */}
        <section>
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
              <h2 className="text-lg font-bold text-gray-900">Cámara por Bogotá — Salvación Nacional</h2>
            </div>
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-4 mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Así se vota</p>
              <p className="font-bold text-gray-900 text-lg mb-3">Salvación Nacional · Cámara Bogotá</p>
              <span className="bg-white border border-gray-200 rounded-xl px-4 py-2 font-bold text-gray-800 text-base shadow-sm">
                Candidato: <span className="text-blue-600">118</span>
              </span>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {salvacionCamaraCandidatos.map((c) => (
              <ScrollCard key={c.numero}>
                <CandidatoCard {...c} color="bg-blue-600" />
              </ScrollCard>
            ))}
          </div>
        </section>

        {/* Cambio Radical */}
        <section>
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
              <h2 className="text-lg font-bold text-gray-900">Senado — Cambio Radical / Alma</h2>
            </div>
            <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-4 mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Así se vota</p>
              <p className="font-bold text-gray-900 text-lg mb-3">Cambio Radical · Senado</p>
              <span className="bg-white border border-gray-200 rounded-xl px-4 py-2 font-bold text-gray-800 text-base shadow-sm">
                Candidato: <span className="text-orange-600">2</span>
              </span>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {cambioRadicalCandidatos.map((c) => (
              <ScrollCard key={c.numero}>
                <CandidatoCard {...c} color="bg-orange-500" />
              </ScrollCard>
            ))}
          </div>
        </section>

        {/* Partido Verde */}
        <section>
          <FadeIn delay={0.2}>
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
          </FadeIn>

          <div className="mt-4 space-y-3">
            {verdeCandidatos.map((c) => (
              <ScrollCard key={c.numero}>
                <CandidatoCard {...c} color="bg-green-600" />
              </ScrollCard>
            ))}
          </div>
        </section>

        {/* Cámara - Centro Democrático */}
        <section>
          <FadeIn delay={0.25}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-yellow-500 rounded-full"></div>
              <h2 className="text-lg font-bold text-gray-900">Cámara por Bogotá — Centro Democrático</h2>
            </div>
            <div className="rounded-2xl border-2 border-yellow-200 bg-yellow-50 p-4 mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Así se vota</p>
              <p className="font-bold text-gray-900 text-lg mb-3">Centro Democrático · Cámara Bogotá</p>
              <span className="bg-white border border-gray-200 rounded-xl px-4 py-2 font-bold text-gray-800 text-base shadow-sm">
                Candidato: <span className="text-yellow-600">101</span>
              </span>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {camaraCandidatos.map((c) => (
              <ScrollCard key={c.numero}>
                <CandidatoCard {...c} color="bg-yellow-500" />
              </ScrollCard>
            ))}
          </div>
        </section>

        {/* Cómo votar */}
        <FadeIn delay={0.25}>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <h3 className="font-bold text-gray-900 mb-3">📋 ¿Cómo votar?</h3>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="font-bold text-blue-600 min-w-[20px]">1.</span> Presenta tu cédula en el puesto de votación.</li>
              <li className="flex gap-2"><span className="font-bold text-blue-600 min-w-[20px]">2.</span> Recibirás tarjetones para Senado y Cámara por separado.</li>
              <li className="flex gap-2"><span className="font-bold text-blue-600 min-w-[20px]">3.</span> En el tarjetón busca el partido y marca el número del candidato (o solo el partido).</li>
              <li className="flex gap-2"><span className="font-bold text-blue-600 min-w-[20px]">4.</span> Introduce el tarjetón en el sobre y deposítalo en la urna.</li>
            </ol>
          </div>
        </FadeIn>

        {/* Mensaje final */}
        <FadeIn delay={0.3}>
          <Pulsebadge>
            <div className="bg-gray-900 rounded-2xl p-5 text-center">
              <p className="text-2xl mb-2">🗳️</p>
              <p className="text-white font-bold text-base mb-1">Tu voto es tu voz</p>
              <p className="text-gray-400 text-sm">
                Votar es el acto más importante de la democracia. Cada voto cuenta para definir el futuro del país. No dejes pasar esta oportunidad.
              </p>
            </div>
          </Pulsebadge>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
            <p className="text-sm font-semibold text-gray-700 mb-1">¿Otros candidatos?</p>
            <p className="text-sm text-gray-500 mb-3">Consulta más candidatos y partidos aquí:</p>
            <a
              href="https://lacasa.co/elecciones-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-700 transition-colors duration-200"
            >
              Ver más candidatos →
            </a>
          </div>
        </FadeIn>

        <p className="text-center text-xs text-gray-400 pb-2">
          Información basada en listas oficiales · Elecciones Congreso Colombia 2026
        </p>
        <p className="text-center text-xs text-gray-400 pb-6">
          Autor: <span className="font-semibold text-gray-600">Pedro Moreno</span>
        </p>
      </div>
    </main>
  );
}
