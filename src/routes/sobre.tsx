import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
});

function Sobre() {
  return (
    <main>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <h1 className="page-hero__title">Sobre mí</h1>
        <p className="page-hero__subtitle">
          "Llegué rota a la encrucijada, con las manos vacías. Hécate no me tendió
          consuelo: me tendió una antorcha para seguir caminando a oscuras."
        </p>
        <div className="section-ornament">
          <div className="section-ornament-dot" />
        </div>
      </section>

      {/* ─── Texto completo de Sabrina ─── */}
      <section className="section">
        <div className="about-content">
          <div className="about-prose">
            <p className="dropcap">
              Vengo de un linaje de mujeres que nombraron lo que otras preferían callar.
              Soy Sabrina Fernández, abogada e investigadora — pero antes de eso, y debajo
              de eso, soy alguien que nació en el umbral: esa hora que no termina de
              pertenecer a un día ni al otro. Ahí, sin saberlo todavía, ya estaba Hécate,
              esperando a que yo tuviera edad para reconocerla.
            </p>
            <p>
              Pasé años sin nombrarla. Construí una vida de método, de expedientes, de
              precisión — y funcionó, hasta que dejó de bastar. La reconocí de adulta,
              cuando la vida me quebró y no busqué consuelo, sino algo más parecido a un
              mapa. Ese quiebre no fue un accidente: se sintió como una iniciación. Cada
              herida fue un umbral más, y cada umbral, una puerta que ella ya sostenía
              abierta, esperando que yo cruzara.
            </p>
            <p>
              Pero la memoria del cuerpo llegó mucho antes que el nombre. Crecí cerca de
              una práctica simbólica estructurada — grimorios, correspondencias planetarias,
              el rigor de Saturno, las mieles de Venus, el poder de Júpiter — palabras que
              aprendí antes de entender del todo lo que significaban. Mi abuelo fue el hombre
              que primero me enseñó a leer el cielo, mucho antes de que yo supiera que eso
              también era un linaje, y mucho antes de que yo tuviera lenguaje propio para
              nombrar lo que estaba heredando.
            </p>
            <p>
              Hoy combino la lectura arquetípica junguiana, el trabajo transgeneracional y
              la historia feminista con una mente entrenada en la ley: el mismo rigor que
              uso para leer un contrato lo aplico para leer un símbolo. No hay contradicción
              ahí, aunque a primera vista lo parezca. Ambos oficios exigen lo mismo — mirar
              de cerca lo que otros pasan por alto, y no conformarse con la lectura fácil.
              Nada de esto es intuición sin método. Es método puesto, finalmente, al
              servicio de lo simbólico.
            </p>
            <p>
              Esta forma de acompañar nace también de El Linaje, mi investigación de largo
              aliento sobre 43 mujeres a través de 8 eras históricas: un mapa de los patrones
              que se heredan, que se repiten sin permiso, y que — al nombrarse — por fin
              pueden transformarse. Cada mujer que estudié me devolvió algo de mí misma que
              no sabía que estaba buscando.
            </p>
            <p>
              Y de esos mismos grimorios que hojeé de niña, sin entender todavía su peso,
              nace el mío propio: la bitácora donde hoy documento rituales, cartomancía y
              trabajo alquímico. Lo que antes era solo mío, un lenguaje privado entre mi
              abuelo y yo, ahora también lo comparto — no como consejo genérico, sino como
              el mismo método heredado, puesto por escrito para quien esté listo para leerlo.
            </p>
            <p>
              Así nacieron las formas en que hoy acompaño: la lectura de tarot, la carta
              astral, los oráculos, y la magia ritual — este último, un trabajo por
              invitación, reservado solo para quienes ya sostienen una práctica espiritual
              propia. No ofrezco respuestas cerradas. Ofrezco el mismo cruce de caminos
              donde una vez me encontré a mí misma: un lugar para mirar de frente lo que ya
              sabes, aunque todavía no tenga nombre.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Formación ─── */}
      <section className="section sacred-bg">
        <div className="section-header">
          <h2 className="section-title">Formación</h2>
          <p className="section-subtitle">
            El método detrás del símbolo.
          </p>
          <div className="section-ornament">
            <div className="section-ornament-dot" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-prose" style={{ textAlign: "center" }}>
            <p>
              Abogada de formación. Investigadora por vocación. Lectora de arquetipos
              junguianos, patrones transgeneracionales e historia feminista. Formación
              continua en astrología humanística, tarot terapéutico PCT y simbolismo
              hermético. El mismo rigor que uso para leer un contrato lo aplico para
              leer un símbolo.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-banner">
        <h2 className="cta-banner__title">
          ¿Resuena esta forma de mirar?
        </h2>
        <p className="cta-banner__text">
          Conversemos. Sin compromiso, con toda la intención.
        </p>
        <Link to="/contacto" className="btn btn--outline">
          Escríbeme
        </Link>
      </section>
    </main>
  );
}
