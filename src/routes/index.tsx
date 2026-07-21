import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

/* Hécate emblem SVG: triple moon + central flame */
function HecateEmblem() {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-emblem"
    >
      {/* Triple moon — crescents */}
      <g opacity="0.7">
        {/* Left crescent */}
        <path
          d="M55 110 A40 40 0 0 1 55 30 A28 28 0 0 0 55 110 Z"
          fill="var(--color-gold)"
        />
        {/* Center full moon (subtle) */}
        <circle cx="105" cy="70" r="16" fill="var(--color-gold)" opacity="0.3" />
        {/* Right crescent */}
        <path
          d="M155 30 A40 40 0 0 1 155 110 A28 28 0 0 0 155 30 Z"
          fill="var(--color-gold)"
        />
      </g>
      {/* Central flame / torch */}
      <g transform="translate(100, 165)">
        {/* Flame */}
        <path
          d="M0 -40 C-8 -30 -14 -15 -12 0 C-10 12 -4 20 0 28 C4 20 10 12 12 0 C14 -15 8 -30 0 -40Z"
          fill="var(--color-gold)"
          opacity="0.8"
        />
        <path
          d="M0 -28 C-5 -20 -8 -10 -7 0 C-6 8 -2 13 0 18 C2 13 6 8 7 0 C8 -10 5 -20 0 -28Z"
          fill="var(--color-terracotta)"
          opacity="0.4"
        />
        {/* Torch base */}
        <rect
          x="-4"
          y="28"
          width="8"
          height="20"
          rx="2"
          fill="var(--color-gold)"
          opacity="0.5"
        />
        <rect
          x="-7"
          y="44"
          width="14"
          height="4"
          rx="2"
          fill="var(--color-gold)"
          opacity="0.5"
        />
      </g>
      {/* Subtle sacred geometry ring */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="0.4"
        opacity="0.12"
      />
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="0.3"
        opacity="0.06"
      />
    </svg>
  );
}

/* Geometric ornament for the four pillars card icons */
function PillarIcon({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <Link to="/servicios" className="btn btn--primary">
            Agendar sesión
          </Link>
        </div>
      </section>

      {/* ─── Los 4 Pilares ─── */}
      <section className="section sacred-bg">
        <div className="section-header">
          <h2 className="section-title">Los Cuatro Pilares</h2>
          <p className="section-subtitle">
            La práctica alquímica se sostiene sobre un fundamento que une la
            tradición, el conocimiento vivo y la transformación personal.
          </p>
          <div className="section-ornament">
            <div className="section-ornament-dot" />
          </div>
        </div>

        <div className="pillars-grid">
          {/* El Linaje */}
          <div className="pillar-card">
            <PillarIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                {/* Tree / lineage */}
                <path d="M12 2v20M12 6l-4 4M12 6l4 4M8 12l-3 3M16 12l3 3" />
                <circle cx="12" cy="4" r="2" />
              </svg>
            </PillarIcon>
            <h3 className="pillar-title">El Linaje</h3>
            <p className="pillar-text">
              Una genealogía de saberes que se remonta a las tradiciones
              herméticas y la alquimia renacentista. No inventamos el fuego:
              lo heredamos, lo custiodamos y lo compartimos.
            </p>
          </div>

          {/* Práctica Viva */}
          <div className="pillar-card">
            <PillarIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                {/* Hands / practice */}
                <path d="M8 14V7a2 2 0 0 1 4 0v4M12 11V5a2 2 0 0 1 4 0v8" />
                <path d="M8 14c-2 0-4 2-4 4v1h16v-1c0-2-2-4-4-4" />
              </svg>
            </PillarIcon>
            <h3 className="pillar-title">Práctica Viva</h3>
            <p className="pillar-text">
              El tarot terapéutico PCT no es adivinación: es una herramienta
              de autoconocimiento. Cada sesión es un encuentro con lo que ya
              habita en ti, esperando ser nombrado.
            </p>
          </div>

          {/* Grimorio */}
          <div className="pillar-card">
            <PillarIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                {/* Book */}
                <path d="M4 4h16v16H4z" />
                <path d="M8 8h8M8 12h8M8 16h5" />
                <path d="M12 4v16" />
              </svg>
            </PillarIcon>
            <h3 className="pillar-title">El Grimorio</h3>
            <p className="pillar-text">
              Más que un diario: un compendio de símbolos, arquetipos y
              prácticas que guían el viaje interior. Un libro de luces y
              sombras para quien se atreve a caminar en ambas direcciones.
            </p>
          </div>

          {/* Comunidad y Arquetipos */}
          <div className="pillar-card">
            <PillarIcon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                {/* Constellation / community */}
                <circle cx="6" cy="6" r="1.5" />
                <circle cx="18" cy="5" r="1.5" />
                <circle cx="12" cy="10" r="1.5" />
                <circle cx="7" cy="17" r="1.5" />
                <circle cx="17" cy="16" r="1.5" />
                <path d="M6 6l6 4M18 5l-6 5M6 6l1 11M18 5l-1 11" opacity="0.4" />
              </svg>
            </PillarIcon>
            <h3 className="pillar-title">Comunidad y Arquetipos</h3>
            <p className="pillar-text">
              El camino alquímico se recorre en aquelarre. Los arquetipos
              junguianos son el lenguaje común que nos une: la Sombra, el
              Ánima, el Sabio, la Hechicera.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA: Explorar el Grimorio ─── */}
      <section className="cta-banner">
        <h2 className="cta-banner__title">
          El grimorio aguarda tu mirada
        </h2>
        <p className="cta-banner__text">
          Explora nuestros productos digitales: libros, guías y compendios
          descargables que extienden la práctica más allá de la sesión.
        </p>
        <Link to="/tienda" className="btn btn--outline">
          Explorar el grimorio
        </Link>
      </section>
    </main>
  );
}
