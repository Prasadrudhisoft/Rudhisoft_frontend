import React, { useEffect } from 'react';
import '../pages/products.css';
import SEO from './SEO';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.ip-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ip-revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/**
 * Shared template for all product pages (RudhiCore, RudhiArch, Hospital MS,
 * Industry Security System) — keeps every product page structurally
 * consistent, which matters for SEO and for conversions per the site notes.
 *
 * Props:
 *  seo: { title, description, path, keywords, jsonLd }
 *  badge: string
 *  heroTitle: string
 *  heroSubhead: string
 *  heroCtas: [{ label, href, primary }]
 *  painSolutions: [{ pain, solution }]
 *  features: { type: 'grouped', groups: [{ label, items }] } | { type: 'flat', items }
 *  outcomes: string[]
 *  noteSection?: { title, items }   // integrations OR compliance notes
 *  faq?: [{ q, a }]
 *  ctaBand: { title, ctas: [{ label, href, primary }] }
 */
export default function ProductPageTemplate({
  seo,
  badge,
  heroTitle,
  heroSubhead,
  heroCtas,
  painSolutions,
  features,
  outcomes,
  noteSection,
  faq,
  ctaBand,
}) {
  useScrollReveal();

  return (
    <div className="product-page">
      <SEO {...seo} />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge">{badge}</span>
          <h1>{heroTitle}</h1>
          <p className="pp-hero-subhead">{heroSubhead}</p>
          <div className="pp-hero-ctas">
            {heroCtas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`btn ${cta.primary ? 'btn-primary' : 'btn-secondary'}`}
              >
                <span>{cta.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN → SOLUTION */}
      <section className="pp-pain-solution">
        <div className="container">
          <div className="pp-pain-solution-header ip-reveal">
            <span className="section-badge">Problems We Solve</span>
            <h2 className="section-title">From <span>Pain Point</span> to Solution</h2>
          </div>
          <div className="pp-pain-grid">
            {painSolutions.map((ps) => (
              <div className="pp-pain-row ip-reveal" key={ps.pain}>
                <span className="pp-pain-text">{ps.pain}</span>
                <span className="pp-pain-arrow">→</span>
                <span className="pp-solution-text">{ps.solution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pp-features">
        <div className="container">
          <div className="pp-features-header ip-reveal">
            <span className="section-badge">Key Features</span>
            <h2 className="section-title">Everything You Need, <span>Built In</span></h2>
          </div>

          {features.type === 'grouped' ? (
            <div className="pp-features-groups">
              {features.groups.map((g) => (
                <div className="pp-features-group ip-reveal" key={g.label}>
                  <h3>{g.label}</h3>
                  <ul>
                    {g.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="pp-features-flat ip-reveal-stagger">
              {features.items.map((item) => <li className="ip-reveal" key={item}>{item}</li>)}
            </ul>
          )}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="pp-outcomes">
        <div className="container">
          <span className="section-badge ip-reveal">Outcomes</span>
          <h2 className="section-title ip-reveal">Real <span>Results</span></h2>
          <div className="pp-outcomes-grid">
            {outcomes.map((o) => (
              <div className="pp-outcome-card ip-reveal" key={o}>{o}</div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS / COMPLIANCE NOTE */}
      {noteSection && (
        <section className="pp-note-section">
          <div className="container">
            <h3 className="ip-reveal">{noteSection.title}</h3>
            <ul className="pp-note-list ip-reveal-stagger">
              {noteSection.items.map((item) => <li className="ip-reveal" key={item}>{item}</li>)}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq && (
        <section className="pp-faq">
          <div className="container">
            <div className="pp-faq-header ip-reveal">
              <span className="section-badge">FAQ</span>
              <h2 className="section-title">Common <span>Questions</span></h2>
            </div>
            <div className="pp-faq-list">
              {faq.map((f) => (
                <div className="pp-faq-item ip-reveal" key={f.q}>
                  <h4>{f.q}</h4>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>{ctaBand.title}</h2>
          <div className="pp-cta-band-buttons">
            {ctaBand.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`btn ${cta.primary ? 'btn-primary' : 'btn-secondary'}`}
                style={!cta.primary ? { borderColor: 'rgba(255,255,255,0.3)', color: '#fff' } : undefined}
              >
                <span>{cta.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}