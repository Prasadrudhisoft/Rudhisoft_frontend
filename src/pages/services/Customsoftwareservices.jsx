import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../products.css';
import SEO, { organizationSchema, breadcrumbSchema, softwareApplicationSchema } from '../../Components/SEO';
import { FaTools } from 'react-icons/fa';

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

const PATH = '/services/custom-software-development';

const whenToChooseCustom = [
  'Unique workflows',
  'Complex integrations',
  'Proprietary processes',
  'Scale-specific needs',
];

const approachSteps = ['Discovery', 'Architecture', 'Build', 'Test', 'Deploy', 'Support'];

const techStack = ['Django', 'React', 'Mobile', 'Cloud', 'AI', 'Integrations'];

const typicalProjects = ['Custom ERP / CRM', 'AI automation', 'Industry-specific platforms', 'SaaS products'];

export default function CustomSoftwareServices() {
  useScrollReveal();
  return (
    <div className="product-page">
      <SEO
        title="Custom Software Development Services"
        description="When off-the-shelf isn't enough. Custom ERP/CRM, AI automation, industry-specific platforms, and SaaS products — built end-to-end by RUDHISOFT."
        path={PATH}
        keywords="custom software development India, custom ERP development, custom CRM development, AI automation development, SaaS product development"
        jsonLd={[
          organizationSchema,
          softwareApplicationSchema({
            name: 'Custom Software Development',
            description: "Custom ERP/CRM, AI automation, industry-specific platforms, and SaaS products for B2B companies whose needs go beyond ready-made software.",
            path: PATH,
            category: 'BusinessApplication',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Custom Software Development', path: PATH },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge"><FaTools /> Custom Software Services</span>
          <h1>When off-the-shelf isn't enough.</h1>
          <p className="pp-hero-subhead">
            We build custom ERP/CRM, AI automation, and integrations for B2B companies with
            unique workflows, complex integrations, proprietary processes, or scale-specific needs.
          </p>
          <div className="pp-hero-ctas">
            <Link to="/contact" className="btn btn-primary"><span>Get a free solution blueprint</span></Link>
            <Link to="/contact" className="btn btn-secondary"><span>Book a 20-min architecture call</span></Link>
          </div>
        </div>
      </section>

      {/* WHEN TO CHOOSE CUSTOM */}
      <section className="pp-pain-solution">
        <div className="container">
          <div className="pp-pain-solution-header ip-reveal">
            <span className="section-badge">When to Choose Custom</span>
            <h2 className="section-title">Is <span>Custom Software</span> Right for You?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Our ready-made products (RudhiCore, RudhiArch, Hospital MS, Industry Security) cover most
              schools, contractors, hospitals, and factories. Custom software makes sense when you have:
            </p>
          </div>
          <ul className="pp-features-flat ip-reveal-stagger">
            {whenToChooseCustom.map((item) => <li className="ip-reveal" key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="pp-features">
        <div className="container">
          <div className="pp-features-header ip-reveal">
            <span className="section-badge">Our Approach</span>
            <h2 className="section-title">Discovery to <span>Support</span></h2>
          </div>
          <div className="pp-features-groups">
            <div className="pp-features-group ip-reveal">
              <h3>Process</h3>
              <ul>
                {approachSteps.map((step, i) => (
                  <li key={step}>{i + 1}. {step}</li>
                ))}
              </ul>
            </div>
            <div className="pp-features-group ip-reveal">
              <h3>Tech Stack Highlights</h3>
              <ul>
                {techStack.map((t) => <li key={t}>{t}</li>)}
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
          <h3 className="ip-reveal">2–3 custom software case studies, even if anonymized, with outcomes</h3>
          <p className="ip-reveal" style={{ color: 'var(--gray-500)', marginTop: '8px' }}>
            See our <Link to="/case-studies" style={{ color: 'var(--primary)', fontWeight: 600 }}>Case Studies</Link> page for real project outcomes.
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>Have a workflow no off-the-shelf product covers?</h2>
          <div className="pp-cta-band-buttons">
            <Link to="/contact" className="btn btn-primary"><span>Get a free solution blueprint</span></Link>
            <Link to="/contact" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              <span>Book a 20-min architecture call</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}