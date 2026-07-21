import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tienda")({
  component: Tienda,
});

function Tienda() {
  return (
    <main>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <h1 className="page-hero__title">El Grimorio</h1>
        <p className="page-hero__subtitle">
          Productos digitales descargables que extienden la práctica más allá
          de la sesión. Cada uno es una pieza del studiolo: para leer, anotar,
          consultar y atesorar.
        </p>
        <div className="section-ornament">
          <div className="section-ornament-dot" />
        </div>
      </section>

      {/* ─── Store Grid ─── */}
      <section className="section sacred-bg">
        <div className="store-grid">
          {/* Grimorio Digital */}
          <div className="product-card">
            <div className="product-card__cover">
              <div className="product-card__cover-placeholder">
                <svg
                  viewBox="0 0 120 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "80%", maxWidth: 160 }}
                >
                  <rect
                    x="10"
                    y="8"
                    width="100"
                    height="144"
                    rx="3"
                    fill="var(--color-carbon-mid)"
                    stroke="var(--color-gold)"
                    strokeWidth="1"
                  />
                  <rect
                    x="18"
                    y="16"
                    width="84"
                    height="128"
                    rx="2"
                    fill="var(--color-lapis)"
                    opacity="0.5"
                  />
                  {/* Crescent */}
                  <circle cx="60" cy="55" r="22" fill="var(--color-gold)" opacity="0.8" />
                  <circle cx="68" cy="50" r="18" fill="var(--color-lapis)" />
                  {/* Stars */}
                  <circle cx="42" cy="42" r="1.5" fill="var(--color-gold)" />
                  <circle cx="78" cy="38" r="1" fill="var(--color-gold)" />
                  {/* Title */}
                  <text
                    x="60"
                    y="100"
                    textAnchor="middle"
                    fontSize="11"
                    fontFamily="serif"
                    fill="var(--color-gold)"
                    letterSpacing="3"
                  >
                    GRIMORIO
                  </text>
                  <text
                    x="60"
                    y="118"
                    textAnchor="middle"
                    fontSize="7"
                    fontFamily="serif"
                    fill="var(--color-parchment-muted)"
                    letterSpacing="1.5"
                  >
                    DIGITAL
                  </text>
                </svg>
              </div>
            </div>
            <div className="product-card__body">
              <h3 className="product-card__title">Grimorio Digital</h3>
              <span className="product-card__format">PDF descargable</span>
              <p className="product-card__desc">
                Un compendio de símbolos, rituales y arquetipos para la
                práctica personal. Incluye ejercicios de escritura
                introspectiva, spreads de tarot guiados, meditaciones con
                arcanos y un calendario lunar para sincronizar tu trabajo
                interior con los ciclos del cielo.
              </p>
              <p className="product-card__price">$380 MXN</p>
            </div>
            <div className="arch-card__footer">
              <Link to="/contacto" className="btn btn--primary">
                Comprar
              </Link>
            </div>
          </div>

          {/* El Linaje */}
          <div className="product-card">
            <div className="product-card__cover">
              <div className="product-card__cover-placeholder">
                <svg
                  viewBox="0 0 120 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "80%", maxWidth: 160 }}
                >
                  <rect
                    x="10"
                    y="8"
                    width="100"
                    height="144"
                    rx="3"
                    fill="var(--color-carbon-mid)"
                    stroke="var(--color-gold)"
                    strokeWidth="1"
                  />
                  <rect
                    x="18"
                    y="16"
                    width="84"
                    height="128"
                    rx="2"
                    fill="var(--color-terracotta)"
                    opacity="0.3"
                  />
                  {/* Tree / lineage */}
                  <line x1="60" y1="100" x2="60" y2="40" stroke="var(--color-gold)" strokeWidth="1.5" />
                  <path
                    d="M60 55l-15 12M60 55l15 12M60 70l-12 10M60 70l12 10M60 85l-8 7M60 85l8 7"
                    stroke="var(--color-gold)"
                    strokeWidth="1"
                  />
                  <circle cx="60" cy="36" r="4" fill="var(--color-gold)" />
                  {/* Title */}
                  <text
                    x="60"
                    y="130"
                    textAnchor="middle"
                    fontSize="16"
                    fontFamily="serif"
                    fill="var(--color-gold)"
                    fontStyle="italic"
                  >
                    El Linaje
                  </text>
                </svg>
              </div>
            </div>
            <div className="product-card__body">
              <h3 className="product-card__title">El Linaje</h3>
              <span className="product-card__format">Libro digital</span>
              <p className="product-card__desc">
                Una exploración de las tradiciones herméticas que nutren la
                práctica alquímica contemporánea. Desde la alquimia
                renacentista hasta la psicología junguiana, este libro traza
                la genealogía de saberes que informan cada sesión, cada
                lectura, cada ritual. Incluye ensayos, ilustraciones
                originales y un glosario de símbolos.
              </p>
              <p className="product-card__price">$520 MXN</p>
            </div>
            <div className="arch-card__footer">
              <Link to="/contacto" className="btn btn--primary">
                Comprar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-banner">
        <h2 className="cta-banner__title">
          Cada compra es una semilla
        </h2>
        <p className="cta-banner__text">
          Los productos digitales se entregan inmediatamente después del pago.
          Si tienes dudas, escríbeme.
        </p>
        <Link to="/contacto" className="btn btn--outline">
          Contacto
        </Link>
      </section>
    </main>
  );
}
