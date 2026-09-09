import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './case-studies.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../../Components/SEO';
import { getCaseStudiesByType } from '../../data/caseStudies';
import { FaExclamationTriangle } from 'react-icons/fa';

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

function CaseStudyCard({ cs, i }) {
  return (
    <Link to={`/case-studies/${cs.slug}`} className="cs-card ip-reveal" style={{ '--i': i }}>
      <div className="cs-card-tags">
        <span className="cs-card-tag">{cs.product.name}</span>
        <span className="cs-card-tag cs-card-tag-industry">{cs.industryTag}</span>
      </div>

      <h3>{cs.title}</h3>

      <div className="cs-card-summary">
        <p><strong>Challenge:</strong> {cs.challengeSummary}</p>
        <p><strong>Solution:</strong> {cs.solutionSummary}</p>
      </div>

      <div className="cs-card-results">
        <strong>Results:</strong>
        {cs.outcomes.slice(0, 3).map((o) => (
          <p className="cs-outcome-preview" key={o}>{o}</p>
        ))}
      </div>

      <span className="read-more">Read the case study →</span>
    </Link>
  );
}

export default function CaseStudiesListing() {
  const productStudies = getCaseStudiesByType('product');
  const customStudies = getCaseStudiesByType('custom');

  useScrollReveal();

  return (
    <div className="cs-page">
      <SEO
        title="Case Studies"
        description="Real outcomes from schools, contractors, hospitals, factories, and custom software clients using RUDHISOFT products."
        path="/case-studies"
        keywords="RUDHISOFT case studies, school management software results, construction ERP results, hospital management software results"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/case-studies' }])]}
        noindex={true} /* <FaExclamationTriangle /> Remove once real client data replaces placeholders in caseStudies.js */
      />

      {/* HERO */}
      <section className="cs-hero">
        <div className="container">
          <span className="cs-hero-eyebrow ip-reveal">Customer Stories</span>
          <h1 className="ip-reveal">How businesses use Rudhisoft to improve everyday operations</h1>
          <p className="ip-reveal">
            Explore real implementations across education, construction, healthcare, manufacturing, and custom software.
          </p>
          <p className="cs-hero-secondary ip-reveal">
            We focus on practical outcomes: less manual work, better visibility, faster processing, and software that
            teams use every day.
          </p>
        </div>
      </section>

      <div className="container">
    

        {/* PRODUCT CASE STUDIES */}
        <div className="cs-section">
          <div className="cs-section-header ip-reveal">
            <h2>By Product</h2>
          </div>
          <div className="cs-grid ip-reveal-stagger">
            {productStudies.map((cs, i) => (
              <CaseStudyCard cs={cs} i={i} key={cs.slug} />
            ))}
          </div>
        </div>

        {/* CUSTOM SOFTWARE CASE STUDIES */}
        <div className="cs-section">
          <div className="cs-section-header ip-reveal">
            <h2>Custom Software</h2>
          </div>
          <div className="cs-grid ip-reveal-stagger">
            {customStudies.map((cs, i) => (
              <CaseStudyCard cs={cs} i={i} key={cs.slug} />
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="cs-final-cta ip-reveal">
          <h2>Want similar results in your business?</h2>
          <p>
            Tell us about your workflow, current challenges, and goals. We'll help you identify the right Rudhisoft
            product or custom software approach.
          </p>
          <div className="cs-final-cta-buttons">
            <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
            <Link to="/products" className="btn btn-secondary">Explore Our Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}