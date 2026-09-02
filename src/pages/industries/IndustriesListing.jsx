import React from 'react';
import { Link } from 'react-router-dom';
import '../products.css';
import '../home.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../../Components/SEO';
import {
  FaGraduationCap, FaHardHat, FaHospital, FaIndustry, FaLayerGroup,
} from 'react-icons/fa';

const PATH = '/industries';

const industries = [
  {
    icon: <FaGraduationCap />,
    name: 'Education',
    tag: 'Schools & Colleges',
    desc: "Go from paper registers and Excel chaos to a single system for admissions, fees, and academics — powered by RudhiCore.",
    features: ['Admissions', 'Fees', 'Academics'],
    url: '/industries/education-school-college-management',
  },
  {
    icon: <FaHardHat />,
    name: 'Construction & Infrastructure',
    tag: 'Contractors & Site Teams',
    desc: 'Know what\u2019s happening at every site, every day — without WhatsApp groups and manual sheets, powered by RudhiArch.',
    features: ['Site Tracking', 'Materials', 'Billing'],
    url: '/industries/construction-site-management',
  },
  {
    icon: <FaHospital />,
    name: 'Healthcare',
    tag: 'Hospitals & Clinics',
    desc: 'Shorten patient queues, reduce billing errors, and get real-time visibility into OPD, IPD, and inventory.',
    features: ['OPD & IPD', 'EMR', 'Billing'],
    url: '/industries/hospital-clinic-management',
  },
  {
    icon: <FaIndustry />,
    name: 'Manufacturing & Industrial',
    tag: 'Factories & Warehouses',
    desc: 'Turn your gate from a bottleneck into a controlled, auditable checkpoint — plus custom ERP for the rest of your plant.',
    features: ['Gate Entry', 'Access Control', 'Audit Trail'],
    url: '/industries/manufacturing-industrial-security',
  },
];

export default function IndustriesListing() {
  return (
    <div className="product-page">
      <SEO
        title="Industries We Serve — Education, Construction, Healthcare & Manufacturing"
        description="Rudhisoft builds industry-specific software for schools & colleges, construction sites, hospitals & clinics, and factories & warehouses."
        path={PATH}
        keywords="school management software India, construction site management software, hospital management software India, industrial security system"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Industries', path: PATH }])]}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge"><span><FaLayerGroup /></span> Industries We Serve</span>
          <h1>Software Built Around Your Industry</h1>
          <p className="pp-hero-subhead">
            We map real-world workflows in education, construction, healthcare, and
            manufacturing to purpose-built products — not generic, one-size-fits-all software.
          </p>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="pp-features">
        <div className="container">
          <div className="rs-services-grid">
            {industries.map((ind) => (
              <Link to={ind.url} className="rs-service-card" style={{ display: 'block' }} key={ind.name}>
                <div className="rs-service-icon">{ind.icon}</div>
                <h3>{ind.name}</h3>
                <p style={{ fontWeight: 600, color: 'var(--gray-900)', marginBottom: '6px', fontSize: '0.9rem' }}>{ind.tag}</p>
                <p>{ind.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '10px 0 18px' }}>
                  {ind.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: 'var(--primary)',
                        background: 'var(--gray-100, #f3f4f6)',
                        padding: '4px 10px',
                        borderRadius: '999px',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <span className="rs-service-link">Explore solutions →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>Don't see your industry listed?</h2>
          <div className="pp-cta-band-buttons">
            <Link to="/contact" className="btn btn-primary"><span>Book a free consultation</span></Link>
            <Link
              to="/services/custom-software-development"
              className="btn btn-secondary"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
            >
              <span>Talk about a custom build</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
