import React from 'react';
import { Link } from 'react-router-dom';
import '../products.css';
import '../home.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../../Components/SEO';
import {
  FaGraduationCap, FaHardHat, FaHospital, FaLock, FaRocket,
} from 'react-icons/fa';

const PATH = '/products';

const products = [
  {
    icon: <FaGraduationCap />,
    name: 'RudhiCore',
    tag: 'School & College Management',
    desc: 'Admissions, attendance, fees, exams, transport & hostel — on one platform.',
    features: ['Admissions', 'Fees & Attendance', 'Exams & Transport'],
    url: '/products/rudhicore-school-college-management',
  },
  {
    icon: <FaHardHat />,
    name: 'RudhiArch',
    tag: 'Construction Project & Site Management',
    desc: 'Track sites, materials, labour, billing & compliance from one dashboard.',
    features: ['Multi-site Tracking', 'Billing', 'Compliance'],
    url: '/products/rudhiarch-construction-site-erp',
  },
  {
    icon: <FaHospital />,
    name: 'Hospital Management System',
    tag: 'Hospital & Clinic Management Software',
    desc: 'OPD, IPD, EMR, billing & pharmacy for clinics and hospitals.',
    features: ['OPD & IPD', 'EMR', 'Billing & Pharmacy'],
    url: '/products/hospital-management-system',
  },
  {
    icon: <FaLock />,
    name: 'Industry Security System',
    tag: 'Industrial Gate Entry & Security Management',
    desc: 'Digital visitor & vehicle management with a full audit trail.',
    features: ['Visitor Management', 'Gate In-Out', 'Access Control'],
    url: '/products/industry-security-system',
  },
];

export default function ProductsListing() {
  return (
    <div className="product-page">
      <SEO
        title="Our Products — School, Construction, Hospital & Industrial Security Software"
        description="Explore Rudhisoft's ready-to-deploy products: RudhiCore for schools & colleges, RudhiArch for construction sites, Hospital Management System, and Industry Security System."
        path={PATH}
        keywords="RudhiCore, RudhiArch, hospital management system, industry security system, school management software, construction ERP"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Products', path: PATH }])]}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge"><span><FaRocket /></span> Our Products</span>
          <h1>Ready-to-Deploy Software for Your Industry</h1>
          <p className="pp-hero-subhead">
            Purpose-built platforms for schools, contractors, hospitals, and factories —
            configured for your workflow and deployed faster than custom development.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="pp-features">
        <div className="container">
          <div className="rs-services-grid">
            {products.map((p) => (
              <Link to={p.url} className="rs-service-card" style={{ display: 'block' }} key={p.name}>
                <div className="rs-service-icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <p style={{ fontWeight: 600, color: 'var(--gray-900)', marginBottom: '6px', fontSize: '0.9rem' }}>{p.tag}</p>
                <p>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '10px 0 18px' }}>
                  {p.features.map((f) => (
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
                <span className="rs-service-link">View features →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>Not sure which product fits your business?</h2>
          <div className="pp-cta-band-buttons">
            <Link to="/contact" className="btn btn-primary"><span>Book a free demo</span></Link>
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
