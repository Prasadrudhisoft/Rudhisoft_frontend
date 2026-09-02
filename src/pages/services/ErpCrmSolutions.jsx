import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../products.css';
import SEO, { organizationSchema, breadcrumbSchema, softwareApplicationSchema } from '../../Components/SEO';
import { FaChartBar } from 'react-icons/fa';

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

const PATH = '/services/erp-crm-solutions';

const whenToChoose = [
  'Data scattered across spreadsheets',
  'Multiple branches or sites to track',
  'Manual approvals and reporting',
  'Sales, finance, and operations disconnected',
];

const approachSteps = ['Discovery', 'Architecture', 'Build', 'Test', 'Deploy', 'Support'];

const capabilities = ['Custom ERP', 'CRM systems', 'Sales pipeline management', 'Inventory and operations', 'Multi-branch reporting', 'Finance and billing workflows'];

const typicalProjects = ['Multi-branch ERP rollouts', 'Sales & lead management CRM', 'Inventory and procurement systems', 'Finance and billing dashboards'];

export default function ErpCrmSolutions() {
  useScrollReveal();
  return (
    <div className="product-page">
      <SEO
        title="ERP & CRM Development Services"
        description="Custom ERP and CRM development to centralize operations, customer information, approvals, reporting, and business data in systems your teams can use every day."
        path={PATH}
        keywords="custom ERP development, CRM development India, sales pipeline software, inventory management system, multi-branch reporting software"
        jsonLd={[
          organizationSchema,
          softwareApplicationSchema({
            name: 'ERP & CRM Solutions',
            description: 'Custom ERP and CRM systems for sales, inventory, finance, and multi-branch operations.',
            path: PATH,
            category: 'BusinessApplication',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'ERP & CRM Solutions', path: PATH },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge"><FaChartBar /> ERP & CRM Solutions</span>
          <h1>Run your business from one system, not ten spreadsheets.</h1>
          <p className="pp-hero-subhead">
            We build custom ERP and CRM systems that centralize operations, customer information,
            approvals, reporting, and business data in a system your team actually uses every day.
          </p>
          <div className="pp-hero-ctas">
            <Link to="/contact" className="btn btn-primary"><span>Discuss your project</span></Link>
            <Link to="/case-studies" className="btn btn-secondary"><span>View Case Studies</span></Link>
          </div>
        </div>
      </section>

      {/* WHEN TO CHOOSE */}
      <section className="pp-pain-solution">
        <div className="container">
          <div className="pp-pain-solution-header ip-reveal">
            <span className="section-badge">When You Need This</span>
            <h2 className="section-title">Is a <span>Custom ERP or CRM</span> Right for You?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A custom ERP or CRM makes sense when your operations have outgrown spreadsheets and
              generic tools, and you have:
            </p>
          </div>
          <ul className="pp-features-flat ip-reveal-stagger">
            {whenToChoose.map((item) => <li className="ip-reveal" key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      {/* CAPABILITIES / APPROACH */}
      <section className="pp-features">
        <div className="container">
          <div className="pp-features-header ip-reveal">
            <span className="section-badge">What We Build</span>
            <h2 className="section-title">Discovery to <span>Support</span></h2>
          </div>
          <div className="pp-features-groups">
            <div className="pp-features-group ip-reveal">
              <h3>What's Included</h3>
              <ul>
                {capabilities.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="pp-features-group ip-reveal">
              <h3>Our Process</h3>
              <ul>
                {approachSteps.map((step, i) => (
                  <li key={step}>{i + 1}. {step}</li>
                ))}
              </ul>
            </div>
            <div className="pp-features-group ip-reveal">
              <h3>Typical Projects</h3>
              <ul>
                {typicalProjects.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES NOTE */}
      <section className="pp-note-section">
        <div className="container">
          <h3 className="ip-reveal">See how we've built ERP and CRM systems for real businesses</h3>
          <p className="ip-reveal" style={{ color: 'var(--gray-500)', marginTop: '8px' }}>
            Visit our <Link to="/case-studies" style={{ color: 'var(--primary)', fontWeight: 600 }}>Case Studies</Link> page for real project outcomes.
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>Managing sales, inventory, or finance manually?</h2>
          <div className="pp-cta-band-buttons">
            <Link to="/contact" className="btn btn-primary"><span>Discuss your project</span></Link>
            <Link to="/services" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              <span>Explore all services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}