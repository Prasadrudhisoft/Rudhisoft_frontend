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
          <h1 className="ip-reveal">Real Results, By Product</h1>
          <p className="ip-reveal">See how schools, contractors, hospitals, and factories use our software — and what custom builds looked like for companies that needed more.</p>
        </div>
      </section>

      <div className="container">
        {/* <FaExclamationTriangle /> Remove this banner once real client data replaces placeholders below */}
        <div className="cs-placeholder-banner ip-reveal">
          <FaExclamationTriangle /> Coming soon <code>src/data/caseStudies.js</code> 
        </div>

        {/* PRODUCT CASE STUDIES */}
        <div className="cs-section">
          <div className="cs-section-header ip-reveal">
            <h2>By Product</h2>
          </div>
          <div className="cs-grid ip-reveal-stagger">
            {productStudies.map((cs, i) => (
              <Link to={`/case-studies/${cs.slug}`} className="cs-card ip-reveal" style={{ '--i': i }} key={cs.slug}>
                <span className="cs-card-tag">{cs.product.name}</span>
                <h3>{cs.title}</h3>
                {cs.outcomes.slice(0, 2).map((o) => (
                  <p className="cs-outcome-preview" key={o}>{o}</p>
                ))}
                <span className="read-more">Read case study →</span>
              </Link>
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
              <Link to={`/case-studies/${cs.slug}`} className="cs-card ip-reveal" style={{ '--i': i }} key={cs.slug}>
                <span className="cs-card-tag">Custom Build</span>
                <h3>{cs.title}</h3>
                {cs.outcomes.slice(0, 2).map((o) => (
                  <p className="cs-outcome-preview" key={o}>{o}</p>
                ))}
                <span className="read-more">Read case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}