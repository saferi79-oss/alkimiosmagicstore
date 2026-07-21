import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contacto")({
  component: Contacto,
});

function Contacto() {
  return (
    <main>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <h1 className="page-hero__title">Contacto</h1>
        <p className="page-hero__subtitle">
          El primer paso es una conversación. Sin compromiso, sin prisa, con
          toda la intención.
        </p>
        <div className="section-ornament">
          <div className="section-ornament-dot" />
        </div>
      </section>

      {/* ─── Contact Grid ─── */}
      <section className="section">
        <div className="contact-grid">
          {/* Info column */}
          <div className="contact-info">
            <h3>Hablemos</h3>
            <p>
              Cada sesión comienza con un mensaje. Cuéntame qué te trae hasta
              aquí: una pregunta, una inquietud, un momento de transición, una
              búsqueda. Leo cada mensaje personalmente y respondo en un plazo
              de 24 a 48 horas.
            </p>
            <p>
              Si prefieres un primer contacto más directo, sígueme en
              Instagram. Allí comparto reflexiones, arquetipos de la semana,
              fragmentos del grimorio y avisos de nuevas aperturas de agenda.
            </p>

            <div className="contact-social">
              <a
                href="https://instagram.com/alkimiosmagicstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
                @alkimiosmagicstore
              </a>
            </div>
          </div>

          {/* Form column */}
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Gracias por tu mensaje. Te responderé pronto. — Alkimios"
              );
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="tu@correo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Cuéntame qué te trae hasta aquí..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="btn btn--primary">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
