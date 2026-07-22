import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/servicios")({
  component: Servicios,
});

/* ─── Service icons ─── */
function NumbersIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="service-card__icon">
      <rect x="8" y="8" width="14" height="14" rx="2" stroke="var(--color-gold)" />
      <rect x="26" y="8" width="14" height="14" rx="2" stroke="var(--color-gold)" />
      <rect x="8" y="26" width="14" height="14" rx="2" stroke="var(--color-gold)" />
      <rect x="26" y="26" width="14" height="14" rx="2" stroke="var(--color-gold)" />
      <text x="15" y="18" textAnchor="middle" fontSize="8" fill="var(--color-gold)" opacity="0.7">7</text>
      <text x="33" y="18" textAnchor="middle" fontSize="8" fill="var(--color-gold)" opacity="0.7">3</text>
      <text x="15" y="36" textAnchor="middle" fontSize="8" fill="var(--color-gold)" opacity="0.7">1</text>
      <text x="33" y="36" textAnchor="middle" fontSize="8" fill="var(--color-gold)" opacity="0.7">9</text>
    </svg>
  );
}

function TarotIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="service-card__icon">
      <rect x="6" y="24" width="16" height="22" rx="2" stroke="var(--color-gold)" />
      <rect x="24" y="20" width="16" height="22" rx="2" stroke="var(--color-gold)" />
      <rect x="15" y="4" width="16" height="22" rx="2" stroke="var(--color-gold)" />
      <text x="23" y="18" textAnchor="middle" fontSize="9" fill="var(--color-gold)" opacity="0.7">★</text>
    </svg>
  );
}

function SynastryIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="service-card__icon">
      <circle cx="16" cy="18" r="10" stroke="var(--color-gold)" />
      <circle cx="16" cy="18" r="5" stroke="var(--color-gold)" opacity="0.4" />
      <circle cx="34" cy="16" r="8" stroke="var(--color-gold)" />
      <circle cx="34" cy="16" r="4" stroke="var(--color-gold)" opacity="0.4" />
      <line x1="16" y1="28" x2="34" y2="24" stroke="var(--color-gold)" opacity="0.5" strokeDasharray="3 2" />
    </svg>
  );
}

function TransitIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="service-card__icon">
      <circle cx="24" cy="24" r="20" stroke="var(--color-gold)" />
      <ellipse cx="24" cy="24" rx="14" ry="6" stroke="var(--color-gold)" opacity="0.5" transform="rotate(-20 24 24)" />
      <circle cx="24" cy="24" r="4" fill="var(--color-gold)" opacity="0.4" />
      <circle cx="38" cy="14" r="2.5" fill="var(--color-gold)" />
      <line x1="24" y1="24" x2="38" y2="14" stroke="var(--color-gold)" opacity="0.3" strokeDasharray="2 2" />
    </svg>
  );
}

function AstroIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="service-card__icon">
      <circle cx="24" cy="24" r="20" stroke="var(--color-gold)" />
      <circle cx="24" cy="24" r="13" stroke="var(--color-gold)" opacity="0.4" />
      <circle cx="24" cy="24" r="6" stroke="var(--color-gold)" opacity="0.25" />
      <line x1="24" y1="4" x2="24" y2="44" stroke="var(--color-gold)" opacity="0.3" />
      <line x1="4" y1="24" x2="44" y2="24" stroke="var(--color-gold)" opacity="0.3" />
      <line x1="10" y1="10" x2="38" y2="38" stroke="var(--color-gold)" opacity="0.2" />
      <line x1="38" y1="10" x2="10" y2="38" stroke="var(--color-gold)" opacity="0.2" />
      <circle cx="33" cy="16" r="2.5" fill="var(--color-gold)" />
    </svg>
  );
}

function RuneIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="service-card__icon">
      <rect x="14" y="6" width="8" height="14" rx="2" stroke="var(--color-gold)" />
      <rect x="26" y="14" width="8" height="14" rx="2" stroke="var(--color-gold)" />
      <rect x="18" y="28" width="8" height="14" rx="2" stroke="var(--color-gold)" />
      {/* Rune-like marks */}
      <path d="M18 10l4 6M22 10l-4 6" stroke="var(--color-gold)" strokeWidth="1" opacity="0.5" />
      <path d="M30 20v4M28 22h4" stroke="var(--color-gold)" strokeWidth="1" opacity="0.5" />
      <path d="M20 34l4 4M24 34l-4 4" stroke="var(--color-gold)" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function PsychomagicIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="service-card__icon">
      {/* Ritual circle with veil */}
      <circle cx="24" cy="22" r="16" stroke="#8b5a5a" />
      <circle cx="24" cy="22" r="10" stroke="#8b5a5a" opacity="0.4" />
      {/* Veil / draped fabric */}
      <path d="M10 28 Q24 8 38 28" stroke="#8b5a5a" opacity="0.6" fill="none" />
      <path d="M14 32 Q24 16 34 32" stroke="#8b5a5a" opacity="0.35" fill="none" />
      {/* Flame at center */}
      <path d="M24 12 C22 16 20 20 22 24 C23 26 25 26 26 24 C28 20 26 16 24 12Z" fill="#8b5a5a" opacity="0.5" />
    </svg>
  );
}

/* ─── Psicomagia modal ─── */
function PsicomagiaModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">×</button>
        <h3 className="modal__title">Solicitar acceso — Psicomagia</h3>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Gracias por tu solicitud. Revisaré tu práctica y te responderé personalmente. — Sabrina");
            onClose();
          }}
        >
          <div className="form-group">
            <label htmlFor="psico-name" className="form-label">Nombre</label>
            <input type="text" id="psico-name" name="name" className="form-input" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="psico-email" className="form-label">Correo electrónico</label>
            <input type="email" id="psico-email" name="email" className="form-input" placeholder="tu@correo.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="psico-practice" className="form-label">Describe tu práctica espiritual</label>
            <textarea
              id="psico-practice"
              name="practice"
              className="form-textarea"
              placeholder="Cuéntame sobre la práctica viva que sostienes: tradición, tiempo, maestras o maestros, rituales…"
              rows={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="psico-intention" className="form-label">¿Qué buscas en este proceso ritual?</label>
            <textarea
              id="psico-intention"
              name="intention"
              className="form-textarea"
              placeholder="Comparte tu intención, el umbral que estás cruzando…"
              rows={4}
              required
            />
          </div>
          <button type="submit" className="btn btn--oxblood">
            Enviar solicitud
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─── Service data ─── */
interface ServiceData {
name: string;
price: string;
duration: string;
desc: string;
requisite: string;
icon: React.ReactNode;
restricted?: boolean;
link?: string;
}

const services: ServiceData[] = [
  {
    name: "Aritmomancia",
    price: "$500 MXN",
    duration: "30 minutos",
    desc: "La aritmomancia lee los números que te constituyen —tu nombre completo— como un mapa vibracional. No es numerología de horóscopo: es la ciencia simbólica de Pitágoras aplicada a tu firma, revelando patrones, talentos y desafíos que ya te pertenecen.",
    requisite: "Requisito: Nombre completo de la persona.",
    icon: <NumbersIcon />,
    link: "https://calendly.com/saferi79/aritmomancia",
  },
  {
    name: "Cartomancía y PCT",
    price: "$800 MXN",
    duration: "60 minutos",
    desc: "El Tarot Terapéutico con enfoque PCT (Psicoterapia Centrada en el Tarot) no predice el futuro: revela lo que ya está presente en tu psique. Trabajamos con los arquetipos como espejos del inconsciente, guiando una conversación que ilumina patrones, bloqueos y potencias dormidas.",
    requisite: "Sin requisitos previos.",
    icon: <TarotIcon />,
    link: "https://calendly.com/saferi79/cartomancia-y-pct",
  },
  {
    name: "Sinastría de cartas astrales",
    price: "$700 MXN",
    duration: "45 minutos",
    desc: "La sinastría es el arte de leer dos cartas astrales en relación. Revela las dinámicas planetarias entre dos personas —pareja, amistad, vínculo familiar o laboral— mostrando dónde fluye la energía, dónde se tensa, y qué lección mutua está operando bajo la superficie.",
    requisite: "Requisito: Datos de ambas cartas (iniciales, fecha, hora y lugar de nacimiento de cada persona).",
    icon: <SynastryIcon />,
    link: "https://calendly.com/saferi79/sinastria-de-cartas-astrales",
  },
  {
    name: "Tránsitos planetarios",
    price: "$700 MXN",
    duration: "45 minutos",
    desc: "Los tránsitos muestran cómo los planetas en su movimiento actual dialogan con tu carta natal. Una herramienta de timing sagrado para entender los momentos de crisis, expansión o cierre que estás viviendo —no como accidentes, sino como fases de un proceso mayor.",
    requisite: "Requisito: Iniciales, fecha de nacimiento, hora de nacimiento, lugar de nacimiento.",
    icon: <TransitIcon />,
    link: "https://calendly.com/saferi79/transitos-planetarios",
  },
  {
    name: "Carta astral",
    price: "$700 MXN",
    duration: "45 minutos",
    desc: "Tu carta astral es la huella del cosmos en el instante de tu nacimiento. Leo la posición de los planetas, las casas y los aspectos como un mapa simbólico de tu psique: tu Sol, tu Luna, tu ascendente y las tensiones que te constituyen.",
    requisite: "Requisito: Iniciales, fecha de nacimiento, hora de nacimiento, lugar de nacimiento.",
    icon: <AstroIcon />,
    link: "https://calendly.com/saferi79/carta-astral",
  },
  {
    name: "Oráculos rúnicos",
    price: "$500 MXN",
    duration: "45 minutos",
    desc: "Lectura general con el alfabeto rúnico del Futhark antiguo. Cada runa es un portal simbólico que habla el lenguaje de lo germinal. La tirada ofrece orientación y consejo para quien busca claridad sin intermediarios: las runas no endulzan, pero siempre dicen lo necesario.",
    requisite: "Sin requisitos previos.",
    icon: <RuneIcon />,
    link: "https://calendly.com/saferi79/oraculos-runicos",
  },
  {
    name: "Psicomagia",
    price: "$1,500 MXN",
    duration: "Acompañamiento en proceso ritual",
    desc: "La psicomagia es un acto ritual diseñado para transformar un nudo psíquico en símbolo y el símbolo en acción. No es terapia ni coaching: es un acompañamiento en el umbral donde lo simbólico se vuelve acto poético. Cada proceso es único, irrepetible, y se construye en diálogo con tu práctica espiritual propia.",
    requisite: "Requisito: Práctica espiritual viva y establecida. Formulario de aplicación previo.",
    icon: <PsychomagicIcon />,
    restricted: true,
  },
];

function Servicios() {
  const [psicomagiaOpen, setPsicomagiaOpen] = useState(false);

  return (
    <main>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <h1 className="page-hero__title">Servicios</h1>
        <p className="page-hero__subtitle">
          Siete formas de acompañamiento. Seis de acceso abierto, una por invitación.
          Todas sostenidas por el mismo rigor: el de quien lee un símbolo como quien
          lee un contrato —sin conformarse con la lectura fácil.
        </p>
        <div className="section-ornament">
          <div className="section-ornament-dot" />
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="section">
        <div className="services-grid">
          {services.map((svc) => (
            <div
              key={svc.name}
              className={`service-card${svc.restricted ? " service-card--restricted" : ""}`}
            >
              <div className="service-card__body">
                {svc.icon}
                <h3 className="service-card__title">{svc.name}</h3>
                <div className="service-card__meta">
                  <span className="service-card__duration">{svc.duration}</span>
                  <span className="service-card__price">{svc.price}</span>
                </div>
                <p className="service-card__desc">{svc.desc}</p>
                <p className="service-card__requisite">{svc.requisite}</p>
              </div>
              <div className="service-card__footer">
                {svc.restricted ? (
                  <>
                    <p className="restricted-notice">
                      Por invitación. Si sostienes una práctica espiritual propia, solicita acceso.
                    </p>
                    <button
                      className="btn btn--oxblood"
                      onClick={() => setPsicomagiaOpen(true)}
                    >
                      Solicitar acceso
                    </button>
                  </>
                ) : (
                  <a href={svc.link ?? "/contacto"} className="btn btn--primary" target={svc.link?.startsWith("http") ? "_blank" : undefined} rel={svc.link?.startsWith("http") ? "noopener noreferrer" : undefined}>
                    Agendar
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Psicomagia modal ─── */}
      {psicomagiaOpen && <PsicomagiaModal onClose={() => setPsicomagiaOpen(false)} />}

      {/* ─── CTA ─── */}
      <section className="cta-banner">
        <h2 className="cta-banner__title">
          ¿No sabes por dónde empezar?
        </h2>
        <p className="cta-banner__text">
          Escríbeme. Conversamos sin compromiso y encontramos juntas el servicio
          que mejor se ajusta a tu momento.
        </p>
        <a href="/contacto" className="btn btn--outline">
          Escríbeme
        </a>
      </section>
    </main>
  );
}
