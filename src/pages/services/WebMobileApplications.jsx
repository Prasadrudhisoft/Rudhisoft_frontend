import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../products.css';
import SEO, { organizationSchema, breadcrumbSchema, softwareApplicationSchema } from '../../Components/SEO';
import { FaMobileAlt } from 'react-icons/fa';

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

const PATH = '/services/web-mobile-applications';

const whenToChoose = [
  'Customers or staff need access from anywhere',
  'A dashboard or portal to replace manual reporting',
  'An idea for a mobile-first product',
  'Existing apps that need a modern rebuild',
];

const approachSteps = ['Discovery', 'Architecture', 'Build', 'Test', 'Deploy', 'Support'];

const capabilities = ['Progressive web applications', 'Customer and partner portals', 'iOS and Android apps', 'Flutter and React Native', 'API-backed applications', 'Admin dashboards'];

const typicalProjects = ['Customer-facing portals', 'Internal admin dashboards', 'Cross-platform mobile apps', 'API-driven web applications'];

export default function WebMobileApplications() {
  useScrollReveal();
  return (
    <div className="product-page">
      <SEO
        title="Web & Mobile Application Development Services"
        description="Responsive web applications, customer portals, dashboards, and native or cross-platform mobile apps that make your business accessible anywhere."
        path={PATH}
        keywords="web application development, mobile app development India, React Native app development, Flutter app development, customer portal development"
        jsonLd={[
          organizationSchema,
          softwareApplicationSchema({
            name: 'Web & Mobile Applications',
            description: 'Web applications, customer portals, dashboards, and iOS/Android mobile apps.',
            path: PATH,
            category: 'BusinessApplication',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Web & Mobile Applications', path: PATH },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge"><FaMobileAlt /> Web & Mobile Applications</span>
          <h1>Make your business accessible from any device.</h1>
          <p className="pp-hero-subhead">
            We build responsive web applications, customer portals, dashboards, and mobile apps
            that give your team and customers access wherever they are.
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
            <h2 className="section-title">Is a <span>Web or Mobile App</span> Right for You?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A dedicated web or mobile application makes sense when you have:
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
          <h3 className="ip-reveal">See the web and mobile apps we've shipped for real businesses</h3>
          <p className="ip-reveal" style={{ color: 'var(--gray-500)', marginTop: '8px' }}>
            Visit our <Link to="/case-studies" style={{ color: 'var(--primary)', fontWeight: 600 }}>Case Studies</Link> page for real project outcomes.
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>Have an idea for a web or mobile app?</h2>
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