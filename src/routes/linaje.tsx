import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/linaje")({
  component: Linaje,
});

/* ─── Era data ─── */
interface EraData {
  num: string;
  title: string;
  period: string;
  figuras: string[];
  available: boolean;
}

const eras: EraData[] = [
  {
    num: "I",
    title: "Antigüedad: diosas y arquetipos primordiales",
    period: "Mitología, sin fecha fija",
    figuras: [
      "Hécate",
      "Artemisa",
      "Circe",
      "Medea",
      "Lilith",
      "Cybele",
      "Aradia",
      "la Tríada romana",
    ],
    available: true,
  },
  {
    num: "II",
    title: "El mundo bíblico y gnóstico",
    period: "~Siglo XIII a.C. – siglo I d.C.",
    figuras: [
      "María Magdalena",
      "Miriam",
      "Ester",
      "la Bruja de Endor",
      "Salomé",
    ],
    available: false,
  },
  {
    num: "III",
    title: "Las videntes del mundo antiguo",
    period: "~Siglo XII a.C. – siglo IV d.C.",
    figuras: [
      "las Pitias del Oráculo de Delfos",
      "Casandra",
      "Diotima de Mantinea",
    ],
    available: false,
  },
  {
    num: "IV",
    title: "Mitología celta y figuras folklóricas",
    period: "Tradición oral, fechas variables",
    figuras: ["La Morrigan", "Baba Yaga"],
    available: false,
  },
  {
    num: "V",
    title: "Edad Media y Renacimiento",
    period: "Siglos V–XVI",
    figuras: [
      "Hipatia",
      "Hildegarda de Bingen",
      "Juana de Arco",
      "Ana Bolena",
    ],
    available: false,
  },
  {
    num: "VI",
    title: "La Inquisición y los juicios de brujas",
    period: "Siglos XVI–XVII",
    figuras: [
      "Agnes Sampson",
      "Isobel Gowdie",
      "Tituba",
      "Mary Bradbury",
    ],
    available: false,
  },
  {
    num: "VII",
    title: "Tradición viva y ocultismo",
    period: "Siglos XVIII–XIX",
    figuras: [
      "Helena Blavatsky",
      "Mina Mathers",
      "Anna Kingsford",
      "Marie Laveau",
    ],
    available: false,
  },
  {
    num: "VIII",
    title: "Las que reconstruyeron el linaje",
    period: "Siglo XX",
    figuras: [
      "Doreen Valiente",
      "Starhawk",
      "Dion Fortune",
      "Zsuzsanna Budapest",
      "Sybil Leek",
    ],
    available: false,
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
              <p className="era-card__meta">{era.period}</p>
              <div className="era-card__figures">
                <span className="era-card__figures-label">Figuras</span>
                <p className="era-card__figures-list">
                  {era.figuras.join(" · ")}
                </p>
              </div>
              <div className="era-card__footer">
                {era.available ? (
                  <Link to="/tienda" className="btn btn--outline">
                    Adquirir PDF
                  </Link>
                ) : (
                  <span className="era-card__coming-soon">Próximamente</span>
                )}
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
