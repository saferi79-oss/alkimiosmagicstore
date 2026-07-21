import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
});

function Sobre() {
  return (
    <main>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <h1 className="page-hero__title">Sobre Alkimios</h1>
        <p className="page-hero__subtitle">
          Una práctica viva entre la alquimia renacentista y la psicología de
          lo profundo.
        </p>
        <div className="section-ornament">
          <div className="section-ornament-dot" />
        </div>
      </section>

      {/* ─── Historia ─── */}
      <section className="section">
        <div className="about-content">
          <div className="about-prose">
            <p className="dropcap">
              Alkimios nace en la intersección del studiolo renacentista y el
              aquelarre contemporáneo. No somos una marca de bienestar
              instantáneo ni un oráculo de respuestas rápidas: somos un espacio
              donde la alquimia —entendida como transformación profunda de la
              materia anímica— se practica con el rigor de quien estudia y la
              intuición de quien escucha.
            </p>
            <p>
              Nuestra fundadora llegó a estas artes a través del estudio de la
              psicología junguiana y la tradición hermética. El tarot no fue un
              pasatiempo: fue la puerta a una comprensión del alma humana que
              ninguna otra herramienta le había ofrecido. La astrología no fue
              un horóscopo: fue la cartografía de un cielo interior que
              necesitaba ser explorado con precisión simbólica.
            </p>
            <p>
              Alkimios practica el Tarot Terapéutico con enfoque PCT —una
              metodología que integra la lectura simbólica de los arcanos con
              los principios de la psicoterapia centrada en la persona— porque
              creemos que el tarot no predice: revela. Y lo que revela ya te
              pertenece.
            </p>
            <p>
              Cada sesión, cada lectura, cada producto digital que ofrecemos es
              una invitación a habitar tu propia profundidad con curiosidad,
              valentía y compasión. No hacemos promesas de iluminación rápida.
              Sostenemos el farol para que seas tú quien camine.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Los 4 Pilares Extendidos ─── */}
      <section className="section sacred-bg">
        <div className="section-header">
          <h2 className="section-title">Nuestro fundamento</h2>
          <p className="section-subtitle">
            Cuatro columnas que sostienen la práctica. Cuatro direcciones del
            viaje alquímico.
          </p>
          <div className="section-ornament">
            <div className="section-ornament-dot" />
          </div>
        </div>

        <div className="pillars-extended">
          <div className="pillar-extended">
            <div className="pillar-extended__num">I</div>
            <h3 className="pillar-extended__title">El Linaje</h3>
            <p className="pillar-extended__text">
              Honramos la genealogía de saberes que nos precede: la alquimia
              renacentista, la tradición hermética, la psicología analítica de
              Carl Jung, la astrología humanística. No inventamos de la nada:
              tejemos con hilos que vienen de lejos. Cada sesión es también un
              acto de continuidad con una tradición viva que se remonta a los
              primeros buscadores de la piedra filosofal —entendida no como
              objeto, sino como transformación interior.
            </p>
          </div>

          <div className="pillar-extended">
            <div className="pillar-extended__num">II</div>
            <h3 className="pillar-extended__title">Práctica Viva</h3>
            <p className="pillar-extended__text">
              El tarot terapéutico PCT y la lectura astral no son técnicas
              rígidas: son encuentros vivos entre dos personas habitando el
              misterio. En cada sesión, los arquetipos de los arcanos mayores
              funcionan como espejos del inconsciente, mientras la astrología
              ofrece el mapa de un cielo que es también interior. No hay dos
              sesiones iguales porque no hay dos almas iguales.
            </p>
          </div>

          <div className="pillar-extended">
            <div className="pillar-extended__num">III</div>
            <h3 className="pillar-extended__title">El Grimorio</h3>
            <p className="pillar-extended__text">
              El conocimiento alquímico se transmite, se registra, se
              comparte. Nuestros productos digitales —el grimorio, el libro
              <em> El Linaje</em>— son extensiones de la práctica, diseñados
              para acompañarte entre sesiones. No son sustitutos del encuentro
              humano: son herramientas para profundizar en soledad lo que se
              ha sembrado en compañía. Cada PDF es una linterna para los
              momentos de oscuridad fértil.
            </p>
          </div>

          <div className="pillar-extended">
            <div className="pillar-extended__num">IV</div>
            <h3 className="pillar-extended__title">Comunidad y Arquetipos</h3>
            <p className="pillar-extended__text">
              Creemos en el aquelarre: el espacio colectivo donde los
              arquetipos se reconocen, se honran y se integran. La Sombra, el
              Ánima, el Sabio, la Hechicera, el Loco, la Muerte y la
              Templanza habitan entre nosotras. No les tememos: les ofrecemos
              asiento en la mesa. Este es un espacio para quienes buscan una
              comunidad de profundidad, no de superficie.
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
          Conversemos. La primera impresión es gratuita y sin compromiso.
        </p>
        <Link to="/contacto" className="btn btn--outline">
          Escríbeme
        </Link>
      </section>
    </main>
  );
}
