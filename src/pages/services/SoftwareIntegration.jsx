import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../products.css';
import SEO, { organizationSchema, breadcrumbSchema, softwareApplicationSchema } from '../../Components/SEO';
import { FaExchangeAlt } from 'react-icons/fa';

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

const PATH = '/services/software-integration';

const whenToChoose = [
  'Data copied manually between systems',
  'Disconnected accounting, CRM, or ERP tools',
  'Devices (biometric, RFID, CCTV) not talking to your software',
  'Customer notifications sent manually',
];

const approachSteps = ['Discovery', 'Architecture', 'Build', 'Test', 'Deploy', 'Support'];

const capabilities = ['REST and GraphQL APIs', 'Payment gateways', 'SMS, WhatsApp, and email', 'Accounting and ERP integrations', 'Biometric and RFID devices', 'CCTV and access-control integrations'];

const typicalProjects = ['Payment gateway integrations', 'Accounting software sync', 'Biometric attendance integration', 'CCTV and access-control connections'];

export default function SoftwareIntegration() {
  useScrollReveal();
  return (
    <div className="product-page">
      <SEO
        title="Software Integration Services"
        description="Connect your existing systems so information moves reliably between applications instead of being copied manually — APIs, payment gateways, ERP, and device integrations."
        path={PATH}
        keywords="software integration services, API integration India, payment gateway integration, ERP integration, biometric RFID integration"
        jsonLd={[
          organizationSchema,
          softwareApplicationSchema({
            name: 'Software Integration',
            description: 'API, payment gateway, ERP, biometric, and CCTV integrations connecting your existing systems.',
            path: PATH,
            category: 'BusinessApplication',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Software Integration', path: PATH },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge"><FaExchangeAlt /> Software Integration</span>
          <h1>Stop copying data by hand between systems.</h1>
          <p className="pp-hero-subhead">
            We connect your existing systems so information moves reliably between applications —
            APIs, payment gateways, accounting tools, and hardware devices, all working together.
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
            <h2 className="section-title">Is <span>Integration</span> Right for You?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Software integration makes sense when you have:
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
            <span className="section-badge">What We Connect</span>
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
          <h3 className="ip-reveal">See how we've connected systems for real businesses</h3>
          <p className="ip-reveal" style={{ color: 'var(--gray-500)', marginTop: '8px' }}>
            Visit our <Link to="/case-studies" style={{ color: 'var(--primary)', fontWeight: 600 }}>Case Studies</Link> page for real project outcomes.
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>Have systems that don't talk to each other?</h2>
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