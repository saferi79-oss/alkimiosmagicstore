import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tienda")({
  component: Tienda,
});

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
        <h3 className="store-section-title" style={{ maxWidth: "var(--max-width)", margin: "0 auto 2rem" }}>
          El Grimorio
        </h3>
        <div className="store-grid">
          {/* Grimorio de práctica viva */}
          <div className="product-card">
            <div className="product-card__cover">
              <div className="product-card__cover-placeholder">
                <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "70%", maxWidth: 140 }}>
                  <rect x="10" y="8" width="100" height="144" rx="3" fill="var(--color-carbon-mid)" stroke="var(--color-gold)" strokeWidth="1" />
                  <rect x="18" y="16" width="84" height="128" rx="2" fill="var(--color-bottle-green)" opacity="0.35" />
                  {/* Crescent */}
                  <circle cx="60" cy="55" r="22" fill="var(--color-gold)" opacity="0.75" />
                  <circle cx="68" cy="50" r="18" fill="var(--color-bottle-green)" opacity="0.7" />
                  {/* Stars */}
                  <circle cx="40" cy="40" r="1.2" fill="var(--color-gold)" />
                  <circle cx="78" cy="36" r="1" fill="var(--color-gold)" />
                  {/* Title */}
                  <text x="60" y="98" textAnchor="middle" fontSize="12" fontFamily="serif" fill="var(--color-gold)" letterSpacing="3">GRIMORIO</text>
                  <text x="60" y="116" textAnchor="middle" fontSize="7" fontFamily="serif" fill="var(--color-parchment-muted)" letterSpacing="1.5">DE PRÁCTICA VIVA</text>
                </svg>
              </div>
            </div>
            <div className="product-card__body">
              <h3 className="product-card__title">Grimorio de Práctica Viva</h3>
              <span className="product-card__format">PDF descargable</span>
              <p className="product-card__desc">
                Bitácora alquímica en evolución: rituales documentados, spreads de
                cartomancía guiados, correspondencias planetarias, calendario lunar
                y ejercicios de escritura introspectiva. El mismo método heredado,
                puesto por escrito para quien esté listo para leerlo.
              </p>
              <p className="product-card__price">$380 MXN</p>
            </div>
            <div className="product-card__footer">
              <a href="/contacto" className="btn btn--primary">
                Comprar
              </a>
            </div>
          </div>

          {/* Guías temáticas */}
          <div className="product-card">
            <div className="product-card__cover">
              <div className="product-card__cover-placeholder">
                <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "70%", maxWidth: 140 }}>
                  <rect x="10" y="8" width="100" height="144" rx="3" fill="var(--color-carbon-mid)" stroke="var(--color-gold)" strokeWidth="1" />
                  <rect x="18" y="16" width="84" height="128" rx="2" fill="var(--color-night-blue)" opacity="0.4" />
                  {/* Astrological chart */}
                  <circle cx="60" cy="60" r="30" fill="none" stroke="var(--color-gold)" strokeWidth="0.8" opacity="0.5" />
                  <circle cx="60" cy="60" r="18" fill="none" stroke="var(--color-gold)" strokeWidth="0.6" opacity="0.35" />
                  <line x1="30" y1="60" x2="90" y2="60" stroke="var(--color-gold)" strokeWidth="0.4" opacity="0.3" />
                  <line x1="60" y1="30" x2="60" y2="90" stroke="var(--color-gold)" strokeWidth="0.4" opacity="0.3" />
                  <circle cx="72" cy="48" r="2.5" fill="var(--color-gold)" opacity="0.7" />
                  <text x="60" y="110" textAnchor="middle" fontSize="10" fontFamily="serif" fill="var(--color-gold)" letterSpacing="2">GUÍAS</text>
                  <text x="60" y="126" textAnchor="middle" fontSize="7" fontFamily="serif" fill="var(--color-parchment-muted)" letterSpacing="1.5">TEMÁTICAS</text>
                </svg>
              </div>
            </div>
            <div className="product-card__body">
              <h3 className="product-card__title">Guías Temáticas</h3>
              <span className="product-card__format">PDF descargable</span>
              <p className="product-card__desc">
                Guías monográficas en PDF sobre temas específicos: astrocartografía,
                los arcanos mayores como camino iniciático, fases lunares y rituales
                de siembra, los tránsitos de Saturno. Cada guía es independiente y
                se adquiere por separado.
              </p>
              <p className="product-card__price">Desde $180 MXN</p>
            </div>
            <div className="product-card__footer">
              <a href="/contacto" className="btn btn--primary">
                Explorar guías
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── PDFs de El Linaje ─── */}
      <section className="section">
        <h3 className="store-section-title" style={{ maxWidth: "var(--max-width)", margin: "0 auto 2rem" }}>
          El Linaje — PDFs por era
        </h3>
        <p style={{
          maxWidth: "var(--max-width)", margin: "0 auto 2.5rem",
          color: "var(--color-parchment-muted)", fontSize: "0.95rem", lineHeight: "1.7"
        }}>
          Cada era de El Linaje está disponible como PDF independiente, con los perfiles
          completos de las mujeres que la habitaron, lectura arquetípica junguiana, contexto
          histórico y referencias. También disponibles desde la{" "}
          <Link to="/linaje">página de El Linaje</Link>.
        </p>
        <div className="store-grid">
          {[
            { era: "I", title: "Antigüedad clásica", price: "$180 MXN" },
            { era: "II", title: "Edad Media temprana", price: "$180 MXN" },
            { era: "III", title: "Al-Ándalus y mundo islámico", price: "$180 MXN" },
            { era: "IV", title: "Renacimiento", price: "$180 MXN" },
            { era: "V", title: "Siglo de las brujas", price: "$220 MXN" },
            { era: "VI", title: "Ilustración y revolución", price: "$180 MXN" },
            { era: "VII", title: "Siglo XIX: ocultismo y sufragio", price: "$220 MXN" },
            { era: "VIII", title: "Siglo XX y contemporáneas", price: "$180 MXN" },
          ].map((item) => (
            <div key={item.era} className="product-card">
              <div className="product-card__cover">
                <div className="product-card__cover-placeholder">
                  <span style={{ fontSize: "3rem", fontFamily: "var(--font-title)", color: "var(--color-gold)", opacity: 0.6 }}>
                    {item.era}
                  </span>
                  <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-body)", color: "var(--color-parchment-muted)", marginTop: "0.5rem" }}>
                    {item.title}
                  </span>
                </div>
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">El Linaje — Era {item.era}</h3>
                <span className="product-card__format">{item.title}</span>
                <p className="product-card__desc">
                  PDF con los perfiles completos de las mujeres de esta era,
                  lectura arquetípica y contexto histórico.
                </p>
                <p className="product-card__price">{item.price}</p>
              </div>
              <div className="product-card__footer">
                <a href="/contacto" className="btn btn--primary">
                  Comprar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-banner">
        <h2 className="cta-banner__title">
          Cada compra es una semilla
        </h2>
        <p className="cta-banner__text">
          Los productos digitales se entregan por descarga automática tras el pago.
          Si tienes dudas, escríbeme.
        </p>
        <Link to="/contacto" className="btn btn--outline">
          Contacto
        </Link>
      </section>
    </main>
  );
}
