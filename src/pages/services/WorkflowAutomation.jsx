import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../products.css';
import SEO, { organizationSchema, breadcrumbSchema, softwareApplicationSchema } from '../../Components/SEO';
import { FaRobot } from 'react-icons/fa';

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

const PATH = '/services/workflow-automation';

const whenToChoose = [
  'Staff manually re-typing data between systems',
  'Repetitive approvals, alerts, or follow-ups',
  'Documents or forms processed by hand',
  'Reports that take hours to compile',
];

const approachSteps = ['Discovery', 'Architecture', 'Build', 'Test', 'Deploy', 'Support'];

const capabilities = ['AI assistants', 'Document processing', 'LLM integrations', 'Predictive reporting', 'Approval automation', 'Automated notifications and follow-ups'];

const typicalProjects = ['Invoice and form data extraction', 'Internal knowledge assistants', 'Automated approval workflows', 'Predictive reporting dashboards'];

export default function WorkflowAutomation() {
  useScrollReveal();
  return (
    <div className="product-page">
      <SEO
        title="AI & Workflow Automation Services"
        description="Automate repetitive work, extract information from business data, and connect AI capabilities to the workflows your team already uses."
        path={PATH}
        keywords="AI automation services, workflow automation India, document processing AI, LLM integration, business process automation"
        jsonLd={[
          organizationSchema,
          softwareApplicationSchema({
            name: 'AI & Workflow Automation',
            description: 'AI assistants, document processing, LLM integrations, and workflow automation for businesses.',
            path: PATH,
            category: 'BusinessApplication',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'AI & Workflow Automation', path: PATH },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge"><FaRobot /> AI & Workflow Automation</span>
          <h1>Automate the work that slows your business down.</h1>
          <p className="pp-hero-subhead">
            We help businesses use AI to process documents, answer routine questions, generate reports,
            predict trends, and automate repetitive workflows.
          </p>
          <div className="pp-hero-ctas">
            <Link to="/contact" className="btn btn-primary"><span>Discuss an AI use case</span></Link>
            <Link to="/case-studies" className="btn btn-secondary"><span>View Case Studies</span></Link>
          </div>
        </div>
      </section>

      {/* WHEN TO CHOOSE */}
      <section className="pp-pain-solution">
        <div className="container">
          <div className="pp-pain-solution-header ip-reveal">
            <span className="section-badge">When You Need This</span>
            <h2 className="section-title">Is <span>AI & Automation</span> Right for You?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              AI and workflow automation make sense when you have:
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
          <h3 className="ip-reveal">See how businesses use AI to cut manual work</h3>
          <p className="ip-reveal" style={{ color: 'var(--gray-500)', marginTop: '8px' }}>
            Visit our <Link to="/case-studies" style={{ color: 'var(--primary)', fontWeight: 600 }}>Case Studies</Link> page for real project outcomes.
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>Have a repetitive process that could run itself?</h2>
          <div className="pp-cta-band-buttons">
            <Link to="/contact" className="btn btn-primary"><span>Discuss an AI use case</span></Link>
            <Link to="/services" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              <span>Explore all services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}