import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../products.css';
import SEO, { organizationSchema, breadcrumbSchema, softwareApplicationSchema } from '../../Components/SEO';
import { FaCloud } from 'react-icons/fa';

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

const PATH = '/services/cloud-devops';

const whenToChoose = [
  'Releases that are slow or risky',
  'No monitoring, backups, or disaster recovery',
  'Infrastructure costs that are hard to control',
  'Planning a move to the cloud',
];

const approachSteps = ['Discovery', 'Architecture', 'Build', 'Test', 'Deploy', 'Support'];

const capabilities = ['AWS, Azure, and GCP', 'Cloud migration', 'Docker and Kubernetes', 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring and logging', 'Backup and disaster recovery'];

const typicalProjects = ['Cloud migrations', 'CI/CD pipeline setup', 'Container orchestration', 'Monitoring and disaster recovery setup'];

export default function CloudDevOps() {
  useScrollReveal();
  return (
    <div className="product-page">
      <SEO
        title="Cloud & DevOps Services"
        description="Deploy and operate software on reliable cloud infrastructure with automated releases, monitoring, backups, security, and cost control."
        path={PATH}
        keywords="cloud DevOps services India, AWS Azure GCP migration, CI/CD pipeline setup, Kubernetes Docker deployment, cloud infrastructure management"
        jsonLd={[
          organizationSchema,
          softwareApplicationSchema({
            name: 'Cloud & DevOps',
            description: 'Cloud infrastructure, migration, CI/CD, monitoring, and disaster recovery services.',
            path: PATH,
            category: 'BusinessApplication',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Cloud & DevOps', path: PATH },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge"><FaCloud /> Cloud & DevOps</span>
          <h1>Reliable infrastructure that scales with you.</h1>
          <p className="pp-hero-subhead">
            We deploy and operate software on reliable cloud infrastructure with automated releases,
            monitoring, backups, security, and cost control.
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
            <h2 className="section-title">Is <span>Cloud & DevOps</span> Right for You?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Cloud and DevOps support makes sense when you have:
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
            <span className="section-badge">What We Manage</span>
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
          <h3 className="ip-reveal">See how we've scaled infrastructure for real businesses</h3>
          <p className="ip-reveal" style={{ color: 'var(--gray-500)', marginTop: '8px' }}>
            Visit our <Link to="/case-studies" style={{ color: 'var(--primary)', fontWeight: 600 }}>Case Studies</Link> page for real project outcomes.
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>Worried about reliability, security, or cost?</h2>
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