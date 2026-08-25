import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
 * Shared template for industry pages, per site notes ("Industry pages mapped
 * to your products"). Each page: top pains for that industry, your product(s)
 * as the solution, 1–2 mini case studies, CTA.
 *
 * Props:
 *  seo: { title, description, path, keywords, jsonLd }
 *  badge, heroTitle, heroSubhead
 *  heroVideo?: string   // path to a video file, e.g. imported from src/assets/videos
 *  heroIcons?: string[] // emoji/icons themed to the industry, used for the
 *                       // animated floating-icon fallback when no video is set
 *  pains: string[]
 *  solutionProduct: { name, blurb, href }
 *  miniCaseStudies: [{ title, text }]
 *  ctaBand: { title, ctas: [{ label, href, primary }] }
 */
export default function IndustryPageTemplate({
  seo,
  badge,
  heroTitle,
  heroSubhead,
  heroVideo,
  heroIcons = [],
  pains,
  solutionProduct,
  miniCaseStudies,
  ctaBand,
}) {
  useScrollReveal();

  return (
    <div className="product-page">
      <SEO {...seo} />

      {/* HERO */}
      <section className="ip-hero">
        {heroVideo ? (
          <div className="ip-hero-media">
            <video autoPlay muted loop playsInline>
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="ip-hero-media-overlay" />
          </div>
        ) : (
          <div className="ip-hero-media ip-hero-media-fallback">
            <div className="ip-hero-icons" aria-hidden="true">
              {heroIcons.map((icon, i) => (
                <span className={`ip-float-icon ip-float-icon-${i % 6}`} key={i}>{icon}</span>
              ))}
            </div>
            <div className="ip-hero-media-overlay" />
          </div>
        )}
        <div className="container ip-hero-content">
          <span className="section-badge ip-hero-badge">{badge}</span>
          <h1 className="ip-hero-title">{heroTitle}</h1>
          <p className="pp-hero-subhead ip-hero-subhead">{heroSubhead}</p>
          <div className="pp-hero-ctas">
            <Link to="/contact" className="btn btn-primary"><span>Book a demo</span></Link>
            <Link to={solutionProduct.href} className="btn btn-secondary ip-hero-btn-secondary"><span>View {solutionProduct.name}</span></Link>
          </div>
        </div>
      </section>

      {/* TOP PAINS */}
      <section className="pp-features">
        <div className="container">
          <div className="pp-features-header ip-reveal">
            <span className="section-badge">Top Challenges</span>
            <h2 className="section-title">What Makes This <span>Hard</span></h2>
          </div>
          <ul className="pp-features-flat ip-reveal-stagger">
            {pains.map((pain) => <li key={pain} className="ip-reveal">{pain}</li>)}
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="pp-pain-solution">
        <div className="container">
          <div className="pp-pain-solution-header ip-reveal">
            <span className="section-badge">The Solution</span>
            <h2 className="section-title">{solutionProduct.name}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{solutionProduct.blurb}</p>
          </div>
          <div style={{ textAlign: 'center' }} className="ip-reveal">
            <Link to={solutionProduct.href} className="btn btn-primary"><span>View {solutionProduct.name} features →</span></Link>
          </div>
        </div>
      </section>

      {/* MINI CASE STUDIES */}
      {miniCaseStudies && miniCaseStudies.length > 0 && (
        <section className="pp-note-section">
          <div className="container">
            <h3 style={{ marginBottom: '24px' }} className="ip-reveal">Mini Case Studies</h3>
            <div style={{ display: 'grid', gap: '16px', textAlign: 'left' }}>
              {miniCaseStudies.map((cs) => (
                <div key={cs.title} className="pp-faq-item ip-reveal">
                  <h4>{cs.title}</h4>
                  <p>{cs.text}</p>
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