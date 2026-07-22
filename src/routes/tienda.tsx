import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tienda")({
  component: Tienda,
});

/* ── Product data (scalable — add objects to grow the store) ── */
const GRIMORIO = {
  title: "Grimorio de Práctica Viva",
  format: "PDF descargable",
  desc: "Rituales, cartomancía y bitácora de trabajo alquímico. Mi grimorio personal, puesto por escrito para quien esté listo para leerlo.",
  price: "$250 MXN",
} as const;

const GUIAS: { title: string; desc: string; price: string; comingSoon?: boolean }[] = [
  {
    title: "Astrocartografía: una guía práctica",
    desc: "Guía monográfica en PDF sobre astrocartografía: cómo leer tu mapa astral proyectado sobre el mundo, líneas planetarias, y su influencia en los lugares que habitas o visitas.",
    price: "$180 MXN",
  },
  {
    title: "Más guías próximamente",
    desc: "Nuevas guías temáticas en preparación: los arcanos mayores como camino iniciático, fases lunares y rituales de siembra, los tránsitos de Saturno, y más.",
    price: "",
    comingSoon: true,
  },
];

function Tienda() {
  return (
    <main>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <h1 className="page-hero__title">Tienda</h1>
        <p className="page-hero__subtitle">
          Productos digitales descargables que extienden la práctica más allá de la
          sesión. Cada uno es una herramienta para profundizar en soledad lo que se ha
          sembrado en compañía.
        </p>
        <div className="section-ornament">
          <div className="section-ornament-dot" />
        </div>
      </section>

      {/* ─── Grimorio ─── */}
      <section className="section sacred-bg">
        <h3
          className="store-section-title"
          style={{ maxWidth: "var(--max-width)", margin: "0 auto 2rem" }}
        >
          El Grimorio
        </h3>
        <div className="store-grid">
          <div className="product-card">
            <div className="product-card__cover">
              <div className="product-card__cover-placeholder">
                <svg
                  viewBox="0 0 120 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "45%", maxWidth: 90 }}
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
                    fill="var(--color-bottle-green)"
                    opacity="0.35"
                  />
                  {/* Crescent */}
                  <circle cx="60" cy="55" r="22" fill="var(--color-gold)" opacity="0.75" />
                  <circle cx="68" cy="50" r="18" fill="var(--color-bottle-green)" opacity="0.7" />
                  {/* Stars */}
                  <circle cx="40" cy="40" r="1.2" fill="var(--color-gold)" />
                  <circle cx="78" cy="36" r="1" fill="var(--color-gold)" />
                  {/* Title */}
                  <text
                    x="60"
                    y="98"
                    textAnchor="middle"
                    fontSize="12"
                    fontFamily="serif"
                    fill="var(--color-gold)"
                    letterSpacing="3"
                  >
                    GRIMORIO
                  </text>
                  <text
                    x="60"
                    y="116"
                    textAnchor="middle"
                    fontSize="7"
                    fontFamily="serif"
                    fill="var(--color-parchment-muted)"
                    letterSpacing="1.5"
                  >
                    DE PRÁCTICA VIVA
                  </text>
                </svg>
              </div>
            </div>
            <div className="product-card__body">
              <h3 className="product-card__title">{GRIMORIO.title}</h3>
              <span className="product-card__format">{GRIMORIO.format}</span>
              <p className="product-card__desc">{GRIMORIO.desc}</p>
              <p className="product-card__price">{GRIMORIO.price}</p>
            </div>
            <div className="product-card__footer">
              <a href="/contacto" className="btn btn--primary">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Guías Temáticas ─── */}
      <section className="section">
        <h3
          className="store-section-title"
          style={{ maxWidth: "var(--max-width)", margin: "0 auto 2rem" }}
        >
          Guías temáticas
        </h3>
        <div className="store-grid">
          {GUIAS.map((guia, i) => (
            <div key={i} className="product-card">
              <div className="product-card__cover">
                <div className="product-card__cover-placeholder">
                  <svg
                    viewBox="0 0 120 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "45%", maxWidth: 90 }}
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
                      fill="var(--color-night-blue)"
                      opacity="0.4"
                    />
                    {/* Astrological chart */}
                    <circle
                      cx="60"
                      cy="60"
                      r="30"
                      fill="none"
                      stroke="var(--color-gold)"
                      strokeWidth="0.8"
                      opacity="0.5"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="18"
                      fill="none"
                      stroke="var(--color-gold)"
                      strokeWidth="0.6"
                      opacity="0.35"
                    />
                    <line
                      x1="30"
                      y1="60"
                      x2="90"
                      y2="60"
                      stroke="var(--color-gold)"
                      strokeWidth="0.4"
                      opacity="0.3"
                    />
                    <line
                      x1="60"
                      y1="30"
                      x2="60"
                      y2="90"
                      stroke="var(--color-gold)"
                      strokeWidth="0.4"
                      opacity="0.3"
                    />
                    <circle cx="72" cy="48" r="2.5" fill="var(--color-gold)" opacity="0.7" />
                    {guia.comingSoon ? (
                      <>
                        <text
                          x="60"
                          y="110"
                          textAnchor="middle"
                          fontSize="10"
                          fontFamily="serif"
                          fill="var(--color-gold-muted)"
                          letterSpacing="2"
                        >
                          PRÓXIMAMENTE
                        </text>
                      </>
                    ) : (
                      <>
                        <text
                          x="60"
                          y="110"
                          textAnchor="middle"
                          fontSize="10"
                          fontFamily="serif"
                          fill="var(--color-gold)"
                          letterSpacing="2"
                        >
                          GUÍA
                        </text>
                        <text
                          x="60"
                          y="126"
                          textAnchor="middle"
                          fontSize="7"
                          fontFamily="serif"
                          fill="var(--color-parchment-muted)"
                          letterSpacing="1.5"
                        >
                          TEMÁTICA
                        </text>
                      </>
                    )}
                  </svg>
                </div>
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">{guia.title}</h3>
                <span className="product-card__format">PDF descargable</span>
                <p className="product-card__desc">{guia.desc}</p>
                {guia.comingSoon ? (
                  <p
                    className="product-card__price"
                    style={{ color: "var(--color-parchment-dark)", fontSize: "1.1rem" }}
                  >
                    Próximamente
                  </p>
                ) : (
                  <p className="product-card__price">{guia.price}</p>
                )}
              </div>
              <div className="product-card__footer">
                {guia.comingSoon ? (
                  <span
                    className="btn"
                    style={{
                      opacity: 0.5,
                      cursor: "default",
                      borderColor: "var(--color-parchment-dark)",
                      color: "var(--color-parchment-dark)",
                    }}
                  >
                    Próximamente
                  </span>
                ) : (
                  <a href="/contacto" className="btn btn--primary">
                    Comprar
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-banner">
        <h2 className="cta-banner__title">Cada compra es una semilla</h2>
        <p className="cta-banner__text">
          Los productos digitales se entregan por descarga automática tras el pago. Si
          tienes dudas, escríbeme.
        </p>
        <Link to="/contacto" className="btn btn--outline">
          Contacto
        </Link>
      </section>
    </main>
  );
}
