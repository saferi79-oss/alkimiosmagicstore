import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

/* Hécate emblem: medialuna, antorcha, triple luna */
function HecateEmblem() {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-emblem"
    >
      {/* Triple moon — left crescent */}
      <g opacity="0.65">
        <path
          d="M52 108 A42 42 0 0 1 52 28 A30 30 0 0 0 52 108 Z"
          fill="var(--color-gold)"
        />
      </g>
      {/* Center full moon */}
      <circle cx="102" cy="68" r="15" fill="var(--color-gold)" opacity="0.25" />
      {/* Right crescent */}
      <g opacity="0.65">
        <path
          d="M152 28 A42 42 0 0 1 152 108 A30 30 0 0 0 152 28 Z"
          fill="var(--color-gold)"
        />
      </g>
      {/* Central torch & flame */}
      <g transform="translate(100, 170)">
        {/* Outer flame */}
        <path
          d="M0 -45 C-10 -34 -16 -16 -14 0 C-12 14 -5 24 0 32 C5 24 12 14 14 0 C16 -16 10 -34 0 -45Z"
          fill="var(--color-gold)"
          opacity="0.7"
        />
        {/* Inner flame — bottle green glow instead of terracotta */}
        <path
          d="M0 -30 C-6 -22 -9 -11 -8 0 C-7 9 -3 16 0 22 C3 16 7 9 8 0 C9 -11 6 -22 0 -30Z"
          fill="var(--color-bottle-green)"
          opacity="0.3"
        />
        {/* Torch shaft */}
        <rect
          x="-4"
          y="32"
          width="8"
          height="22"
          rx="2"
          fill="var(--color-gold)"
          opacity="0.45"
        />
        {/* Torch base */}
        <rect
          x="-8"
          y="50"
          width="16"
          height="5"
          rx="2"
          fill="var(--color-gold)"
          opacity="0.4"
        />
        <rect
          x="-5"
          y="55"
          width="10"
          height="3"
          rx="1.5"
          fill="var(--color-gold)"
          opacity="0.3"
        />
      </g>
      {/* Sacred geometry ring */}
      <circle
        cx="100"
        cy="105"
        r="88"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="0.4"
        opacity="0.1"
      />
      <circle
        cx="100"
        cy="105"
        r="98"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="0.25"
        opacity="0.05"
      />
    </svg>
  );
}

function PillarIcon({ children }: { children: React.ReactNode }) {
  return <div className="pillar-icon">{children}</div>;
}

function Home() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero-vignette" />
        <div className="hero-content animate-fade-up">
          <HecateEmblem />
          <h1 className="hero-title">
            Donde la llama ilumina
            <br />
            el <em>camino interior</em>
          </h1>
          <div className="hero-ornament" />
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/servicios" className="btn btn--primary">
              Ver servicios
            </Link>
            <Link to="/linaje" className="btn btn--outline">
              El Linaje
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Los 4 Pilares ─── */}
      <section className="section sacred-bg">
        <div className="section-header">
          <h2 className="section-title">Los Cuatro Pilares</h2>
          <p className="section-subtitle">
            La práctica alquímica se sostiene sobre un fundamento que une
            tradición, conocimiento vivo y transformación personal.
          </p>
          <div className="section-ornament">
            <div className="section-ornament-dot" />
          </div>
        </div>

        <div className="pillars-grid">
          {/* I — El Linaje */}
          <div className="pillar-card">
            <PillarIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 2v20M12 6l-4 4M12 6l4 4M8 12l-3 3M16 12l3 3" />
                <circle cx="12" cy="4" r="2" />
              </svg>
            </PillarIcon>
            <h3 className="pillar-title">El Linaje</h3>
            <p className="pillar-text">
              Una investigación sobre 43 mujeres a través de 8 eras históricas,
              leídas desde el arquetipo junguiano, el patrón transgeneracional y
              la historia feminista. Un mapa de lo que se hereda y al nombrarse
              se transforma.
            </p>
          </div>

          {/* II — Práctica Viva */}
          <div className="pillar-card">
            <PillarIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M8 14V7a2 2 0 0 1 4 0v4M12 11V5a2 2 0 0 1 4 0v8" />
                <path d="M8 14c-2 0-4 2-4 4v1h16v-1c0-2-2-4-4-4" />
              </svg>
            </PillarIcon>
            <h3 className="pillar-title">Práctica Viva</h3>
            <p className="pillar-text">
              Aritmomancia, Cartomancía y PCT, Sinastría, Tránsitos, Carta astral
              y Oráculos rúnicos. Cada sesión es un encuentro con lo que ya habita
              en ti, esperando ser nombrado. Método, no adivinación.
            </p>
          </div>

          {/* III — El Grimorio */}
          <div className="pillar-card">
            <PillarIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M4 4h16v16H4z" />
                <path d="M8 8h8M8 12h8M8 16h5" />
                <path d="M12 4v16" />
              </svg>
            </PillarIcon>
            <h3 className="pillar-title">El Grimorio</h3>
            <p className="pillar-text">
              Bitácora de práctica viva: rituales, cartomancía y trabajo alquímico
              documentados con el rigor de quien estudia y la intuición de quien
              escucha. Un compendio que crece con cada luna.
            </p>
          </div>

          {/* IV — Psicomagia */}
          <div className="pillar-card">
            <PillarIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
                <path d="M8 12h8" opacity="0.4" />
              </svg>
            </PillarIcon>
            <h3 className="pillar-title">Psicomagia</h3>
            <p className="pillar-text">
              Trabajo ritual por invitación, reservado para quienes ya sostienen
              una práctica espiritual propia. No es un servicio abierto: es un
              acompañamiento en el umbral, donde el símbolo se vuelve acto.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-banner">
        <h2 className="cta-banner__title">
          El grimorio aguarda tu mirada
        </h2>
        <p className="cta-banner__text">
          Explora los servicios, conoce El Linaje, o descarga los productos
          digitales que extienden la práctica más allá de la sesión.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/servicios" className="btn btn--primary">
            Ver servicios
          </Link>
          <Link to="/tienda" className="btn btn--outline">
            Tienda
          </Link>
        </div>
      </section>
    </main>
  );
}
