import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicios")({
  component: Servicios,
});

/* Simple icon SVGs for each service */
function TarotIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="service-card__icon"
    >
      {/* Card spread */}
      <rect x="6" y="24" width="16" height="22" rx="2" stroke="var(--color-gold)" />
      <rect x="24" y="20" width="16" height="22" rx="2" stroke="var(--color-gold)" />
      <rect x="15" y="4" width="16" height="22" rx="2" stroke="var(--color-gold)" />
      {/* Star on center card */}
      <text x="23" y="18" textAnchor="middle" fontSize="8" fill="var(--color-gold)" opacity="0.7">
        ★
      </text>
    </svg>
  );
}

function AstroIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="service-card__icon"
    >
      {/* Circular chart */}
      <circle cx="24" cy="24" r="20" stroke="var(--color-gold)" />
      <circle cx="24" cy="24" r="14" stroke="var(--color-gold)" opacity="0.5" />
      <circle cx="24" cy="24" r="8" stroke="var(--color-gold)" opacity="0.3" />
      {/* Cross lines */}
      <line x1="24" y1="4" x2="24" y2="44" stroke="var(--color-gold)" opacity="0.4" />
      <line x1="4" y1="24" x2="44" y2="24" stroke="var(--color-gold)" opacity="0.4" />
      {/* Diagonal lines */}
      <line x1="10" y1="10" x2="38" y2="38" stroke="var(--color-gold)" opacity="0.25" />
      <line x1="38" y1="10" x2="10" y2="38" stroke="var(--color-gold)" opacity="0.25" />
      {/* Planet dot */}
      <circle cx="32" cy="18" r="2.5" fill="var(--color-gold)" />
    </svg>
  );
}

function HolisticIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="service-card__icon"
    >
      {/* Spiral / labyrinth */}
      <path
        d="M24 4C24 4 8 18 8 28a16 16 0 0 0 16 16 16 16 0 0 0 16-16c0-10-16-18-16-24"
        stroke="var(--color-gold)"
        fill="none"
      />
      {/* Center dot */}
      <circle cx="24" cy="8" r="2" fill="var(--color-gold)" />
      {/* Hands at sides */}
      <path d="M8 32a6 6 0 0 1 6-6" stroke="var(--color-gold)" opacity="0.4" />
      <path d="M40 32a6 6 0 0 0-6-6" stroke="var(--color-gold)" opacity="0.4" />
    </svg>
  );
}

function Servicios() {
  return (
    <main>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <h1 className="page-hero__title">Servicios</h1>
        <p className="page-hero__subtitle">
          Cada sesión es un ritual de encuentro con lo profundo. Un espacio
          seguro donde la intuición y el símbolo guían la conversación.
        </p>
        <div className="section-ornament">
          <div className="section-ornament-dot" />
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="section">
        <div className="services-grid">
          {/* Tarot Terapéutico PCT */}
          <div className="service-card">
            <img
              src="/assets/servicios/WhatsApp_Image_2026-05-30_at_6.20.58_PM_1_.jpeg"
              alt="Tarot Terapéutico PCT"
              className="service-card__image"
            />
            <div className="service-card__body">
              <TarotIcon />
              <h3 className="service-card__title">Tarot Terapéutico PCT</h3>
              <span className="service-card__duration">60 minutos</span>
              <p className="service-card__desc">
                El Tarot Terapéutico con enfoque PCT (Psicoterapia Centrada en
                el Tarot) no predice el futuro: revela lo que ya está presente
                en tu psique, esperando ser integrado. Trabajamos con los
                arquetipos del tarot como espejos del inconsciente, guiando una
                conversación que ilumina patrones, bloqueos y potencias
                dormidas. Cada carta es una llave, cada tirada un mapa.
              </p>
            </div>
            <div className="arch-card__footer">
              <Link to="/contacto" className="btn btn--primary">
                Agendar
              </Link>
            </div>
          </div>

          {/* Carta Astral / Astrocartografía */}
          <div className="service-card">
            <img
              src="/assets/servicios/WhatsApp_Image_2026-05-30_at_6.20.58_PM_3_.jpeg"
              alt="Carta Astral y Astrocartografía"
              className="service-card__image"
            />
            <div className="service-card__body">
              <AstroIcon />
              <h3 className="service-card__title">
                Carta Astral &amp; Astrocartografía
              </h3>
              <span className="service-card__duration">90 minutos</span>
              <p className="service-card__desc">
                Tu carta astral es la huella del cosmos en el instante de tu
                nacimiento. La astrocartografía proyecta esa huella sobre el
                mapa del mundo, revelando los lugares donde ciertos planetas
                activan dimensiones específicas de tu vida. Una sesión que
                combina la lectura simbólica del cielo natal con la geografía
                sagrada del alma.
              </p>
            </div>
            <div className="arch-card__footer">
              <Link to="/contacto" className="btn btn--primary">
                Agendar
              </Link>
            </div>
          </div>

          {/* Acompañamiento Holístico */}
          <div className="service-card">
            <img
              src="/assets/servicios/WhatsApp_Image_2026-05-30_at_6.20.58_PM_5_.jpeg"
              alt="Acompañamiento Holístico"
              className="service-card__image"
            />
            <div className="service-card__body">
              <HolisticIcon />
              <h3 className="service-card__title">
                Acompañamiento Holístico
              </h3>
              <span className="service-card__duration">60 minutos</span>
              <p className="service-card__desc">
                Un espacio de escucha profunda y contención donde confluyen
                distintas herramientas —diálogo simbólico, exploración
                arquetípica, ritual personalizado— para acompañarte en
                momentos de transición, crisis o búsqueda de sentido. No es
                terapia, no es coaching: es un encuentro con tu propia verdad
                en presencia de quien sabe sostener el fuego.
              </p>
            </div>
            <div className="arch-card__footer">
              <Link to="/contacto" className="btn btn--primary">
                Agendar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-banner">
        <h2 className="cta-banner__title">
          ¿No sabes por dónde empezar?
        </h2>
        <p className="cta-banner__text">
          Escríbeme. Conversamos sin compromiso sobre lo que necesitas y
          encontramos juntas el servicio que mejor se ajusta a tu momento.
        </p>
        <Link to="/contacto" className="btn btn--outline">
          Escríbeme
        </Link>
      </section>
    </main>
  );
}
