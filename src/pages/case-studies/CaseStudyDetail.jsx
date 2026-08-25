import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './case-studies.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../../Components/SEO';
import { getCaseStudyBySlug } from '../../data/caseStudies';
import { FaExclamationTriangle } from 'react-icons/fa';

function useScrollReveal(deps = []) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = getCaseStudyBySlug(slug);

  useScrollReveal([slug]);

  if (!cs) {
    return (
      <div className="cs-page">
        <div className="cs-not-found">
          <h1>Case study not found</h1>
          <p><Link to="/case-studies" style={{ color: 'var(--primary)', fontWeight: 600 }}>← Back to Case Studies</Link></p>
        </div>
      </div>
    );
  }

  return (
    <div className="cs-page">
      <SEO
        title={cs.title}
        description={`${cs.clientProfile.industry} — ${cs.outcomes[0]}`}
        path={`/case-studies/${cs.slug}`}
        noindex={true} /* <FaExclamationTriangle /> Remove once real client data replaces placeholders in caseStudies.js */
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/case-studies' },
            { name: cs.title, path: `/case-studies/${cs.slug}` },
          ]),
        ]}
      />

      <article className="cs-detail">
        <div className="container">
          <div className="cs-detail-breadcrumb ip-reveal">
            <Link to="/case-studies">Case Studies</Link> / {cs.product.name}
          </div>

          <h1 className="ip-reveal">{cs.title}</h1>

          {/* CLIENT PROFILE */}
          <div className="cs-profile-row ip-reveal">
            <div className="cs-profile-item">
              <div className="label">Industry</div>
              <div className="value">{cs.clientProfile.industry}</div>
            </div>
            <div className="cs-profile-item">
              <div className="label">Size</div>
              <div className="value">{cs.clientProfile.size}</div>
            </div>
            <div className="cs-profile-item">
              <div className="label">Product Used</div>
              <div className="value">{cs.product.name}</div>
            </div>
          </div>

          {/* CHALLENGE */}
          <div className="cs-block ip-reveal">
            <h3>The Challenge</h3>
            <p>{cs.challenge}</p>
          </div>

          {/* SOLUTION */}
          <div className="cs-block ip-reveal">
            <h3>The Solution</h3>
            <p>{cs.solution}</p>
          </div>

          {/* OUTCOMES */}
          <div className="cs-block ip-reveal">
            <h3>Outcomes</h3>
            <div className="cs-outcomes-grid">
              {cs.outcomes.map((o) => (
                <div className="cs-outcome-card" key={o}>{o}</div>
              ))}
            </div>
          </div>

          {/* QUOTE */}
          <div className="cs-quote ip-reveal">
            <p>"{cs.quote.text}"</p>
            <span>— {cs.quote.author}</span>
          </div>

          {/* CTA */}
          <div className="cs-cta ip-reveal">
            <p>Want results like this for your {cs.clientProfile.industry.split('—')[0].trim().toLowerCase()}?</p>
            <Link to="/contact" className="btn">
              <span>Get similar results</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}