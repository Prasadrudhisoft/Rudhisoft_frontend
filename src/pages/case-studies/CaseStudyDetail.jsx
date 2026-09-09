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

  const industryLabel = cs.customer.industry.split('—')[0].trim();

  return (
    <div className="cs-page">
      <SEO
        title={cs.title}
        description={`${cs.customer.industry} — ${cs.mainResult}`}
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

          {/* HERO */}
          <div className="cs-detail-hero ip-reveal">
            <div className="cs-card-tags">
              <span className="cs-card-tag">{cs.product.name}</span>
              <span className="cs-card-tag cs-card-tag-industry">{cs.industryTag}</span>
            </div>
            <h1>{cs.title}</h1>
            <p className="cs-detail-main-result">{cs.mainResult}</p>
            <Link to="/contact" className="cs-detail-hero-cta">Talk to us about a similar project →</Link>
          </div>

          {/* CUSTOMER OVERVIEW */}
          <div className="cs-block ip-reveal">
            <h3>Customer Overview</h3>
            <div className="cs-profile-row">
              <div className="cs-profile-item">
                <div className="label">Industry</div>
                <div className="value">{cs.customer.industry}</div>
              </div>
              <div className="cs-profile-item">
                <div className="label">Organization Type</div>
                <div className="value">{cs.customer.orgType}</div>
              </div>
              {cs.customer.location && (
                <div className="cs-profile-item">
                  <div className="label">Location</div>
                  <div className="value">{cs.customer.location}</div>
                </div>
              )}
              <div className="cs-profile-item">
                <div className="label">Scale</div>
                <div className="value">{cs.customer.scale}</div>
              </div>
              <div className="cs-profile-item">
                <div className="label">Project Duration</div>
                <div className="value">{cs.customer.duration}</div>
              </div>
              <div className="cs-profile-item">
                <div className="label">Product Used</div>
                <div className="value">{cs.product.name}</div>
              </div>
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

          {/* RESULTS */}
          <div className="cs-block ip-reveal">
            <h3>Results</h3>

            {cs.beforeAfter && cs.beforeAfter.length > 0 && (
              <div className="cs-before-after-wrap">
                <table className="cs-before-after">
                  <thead>
                    <tr>
                      <th>Area</th>
                      <th>Before</th>
                      <th>After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cs.beforeAfter.map((row) => (
                      <tr key={row.area}>
                        <td data-label="Area">{row.area}</td>
                        <td data-label="Before">{row.before}</td>
                        <td data-label="After">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

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
            <h3>Need a similar solution for your business?</h3>
            <p>Want results like this for your {industryLabel.toLowerCase()}?</p>
            <div className="cs-cta-buttons">
              <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
              <Link to={cs.product.href} className="btn btn-secondary">Explore the Product</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}