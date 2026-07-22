import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/linaje")({
  component: Linaje,
});

/* ─── Era data ─── */
interface EraData {
  num: string;
  title: string;
  period: string;
  women: string;
  desc: string;
}

const eras: EraData[] = [
  {
    num: "I",
    title: "Antigüedad clásica",
    period: "Siglo V a.C. — V d.C.",
    women: "6 mujeres",
    desc: "Filósofas, médicas y poetisas del mundo grecorromano que sostuvieron escuelas, escribieron tratados y desafiaron los límites impuestos a su género. Hipatia de Alejandría y Aspasia de Mileto abren el linaje.",
  },
  {
    num: "II",
    title: "Edad Media temprana",
    period: "Siglo V — X",
    women: "5 mujeres",
    desc: "Abadesas, místicas y sanadoras en una Europa que apenas empezaba a nombrarse. Hildegarda de Bingen, que escribió de medicina, música y teología con una autoridad que ningún hombre de su tiempo discutió.",
  },
  {
    num: "III",
    title: "Al-Ándalus y mundo islámico",
    period: "Siglo VIII — XV",
    women: "4 mujeres",
    desc: "Poetisas, copistas y sabias en las cortes de Córdoba, Granada y Bagdad. Mujeres que heredaron y transmitieron el conocimiento clásico mientras Europa lo olvidaba.",
  },
  {
    num: "IV",
    title: "Renacimiento",
    period: "Siglo XIV — XVI",
    women: "5 mujeres",
    desc: "Pintoras, mecenas y alquimistas en una época que redescubrió a Hermes Trismegisto pero seguía quemando a las que sabían demasiado. Artemisia Gentileschi pintó a Judit decapitando a Holofernes —y a su propio agresor.",
  },
  {
    num: "V",
    title: "Siglo de las brujas",
    period: "Siglo XVI — XVII",
    women: "8 mujeres",
    desc: "La era más oscura del linaje: la caza de brujas europea y colonial. Curanderas, parteras y mujeres sabias fueron perseguidas, torturadas y ejecutadas. Pero también hubo quien sobrevivió, quien escribió, quien transmitió en secreto.",
  },
  {
    num: "VI",
    title: "Ilustración y revolución",
    period: "Siglo XVIII",
    women: "5 mujeres",
    desc: "Salonnières, científicas y revolucionarias que usaron la razón como antorcha. Olympe de Gouges escribió la Declaración de los Derechos de la Mujer y la Ciudadana; la guillotina la esperaba.",
  },
  {
    num: "VII",
    title: "Siglo XIX: ocultismo y sufragio",
    period: "Siglo XIX",
    women: "6 mujeres",
    desc: "Teósofas, espiritistas y sufragistas. Madame Blavatsky, Annie Besant, las hermanas Fox. El siglo en que el esoterismo y la lucha política se encontraron en los mismos cuerpos. Las mujeres que hablaban con los muertos también hablaban en las plazas.",
  },
  {
    num: "VIII",
    title: "Siglo XX y contemporáneas",
    period: "Siglo XX — XXI",
    women: "4 mujeres",
    desc: "Psicólogas junguianas, astrólogas humanísticas, escritoras del inconsciente. Marie-Louise von Franz, Liz Greene, Clarissa Pinkola Estés. Mujeres que tradujeron el símbolo al lenguaje de nuestro tiempo.",
  },
];

function Linaje() {
  return (
    <main>
      {/* ─── Page Hero ─── */}
      <section className="linaje-hero">
        <h1 className="page-hero__title">El Linaje</h1>
        <p className="page-hero__subtitle">
          Cuarenta y tres mujeres. Ocho eras históricas. Un solo hilo.
        </p>
        <div className="section-ornament">
          <div className="section-ornament-dot" />
        </div>
      </section>

      {/* ─── Editorial prose ─── */}
      <section className="section">
        <div className="linaje-prose">
          <p className="dropcap">
            El Linaje es una investigación de largo aliento sobre 43 mujeres a través de 8 eras
            históricas, leídas desde tres claves simultáneas: el arquetipo junguiano, el patrón
            transgeneracional y la historia feminista. No es un catálogo de biografías: es un mapa
            de los patrones que se heredan, que se repiten sin permiso y que —al nombrarse— por fin
            pueden transformarse.
          </p>
          <p>
            Cada mujer fue leída dos veces. Primero, en su contexto histórico: qué hizo, qué escribió,
            qué legó. Segundo, desde el símbolo: qué arquetipo la sostenía, qué patrón repitió sin
            saberlo, qué nudo transgeneracional vino a desatar. La pregunta no es «¿fueron feministas?»
            —un anacronismo— sino «¿qué encarnaron?».
          </p>
          <p>
            El resultado es una genealogía de saberes que no avanza en línea recta, sino en espiral.
            Mujeres que sostuvieron antorchas en la oscuridad, que escribieron con seudónimo, que
            fueron borradas de los índices y vueltas a inscribir por otras, siglos después. El Linaje
            es un acto de restitución simbólica: nombrarlas para heredarlas.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Biblioteca de Eras ─── */}
      <section className="section sacred-bg">
        <div className="section-header">
          <h2 className="section-title">Biblioteca de Eras</h2>
          <p className="section-subtitle">
            Ocho épocas, ocho PDFs descargables. Cada era contiene los perfiles
            completos de las mujeres que la habitaron, con lectura arquetípica,
            contexto histórico y referencias.
          </p>
          <div className="section-ornament">
            <div className="section-ornament-dot" />
          </div>
        </div>

        <div className="eras-grid">
          {eras.map((era) => (
            <div key={era.num} className="era-card">
              <div className="era-card__num">{era.num}</div>
              <h3 className="era-card__title">{era.title}</h3>
              <p className="era-card__meta">
                {era.period} &middot; {era.women}
              </p>
              <p className="era-card__desc">{era.desc}</p>
              <div className="era-card__footer">
                <Link to="/tienda" className="btn btn--outline">
                  Adquirir PDF
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-banner">
        <h2 className="cta-banner__title">
          Un linaje no se hereda: se elige
        </h2>
        <p className="cta-banner__text">
          Cada PDF de El Linaje es una invitación a sentarte con las mujeres que
          vinieron antes. A leerlas despacio, con vela y cuaderno.
        </p>
        <Link to="/tienda" className="btn btn--primary">
          Ver en la tienda
        </Link>
      </section>
    </main>
  );
}
