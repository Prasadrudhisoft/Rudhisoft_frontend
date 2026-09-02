import React from 'react';
import { Link } from 'react-router-dom';
import '../products.css';
import '../home.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../../Components/SEO';
import {
  FaBook, FaGraduationCap, FaHardHat, FaHospital, FaIndustry,
} from 'react-icons/fa';

const PATH = '/resources/guides-checklists';

const guideGroups = [
  {
    industry: 'Education',
    icon: <FaGraduationCap />,
    product: { name: 'RudhiCore', href: '/products/rudhicore-school-college-management' },
    guides: [
      { title: 'Paperless Admission Process: Step-by-Step', desc: 'A practical walkthrough for moving your admission and inquiry process online.', href: '/blog/paperless-admission-process-step-by-step' },
      { title: 'Online Fee Collection: Best Practices for Schools', desc: 'How to reduce defaulters and collection overhead with digital fee collection.', href: '/blog/online-fee-collection-best-practices-for-schools' },
      { title: 'How to Choose School Management Software in India', desc: 'A checklist for evaluating school management software before you buy.', href: '/blog/how-to-choose-school-management-software-in-india' },
    ],
  },
  {
    industry: 'Construction & Infrastructure',
    icon: <FaHardHat />,
    product: { name: 'RudhiArch', href: '/products/rudhiarch-construction-site-erp' },
    guides: [
      { title: 'How Contractors Can Track Material Wastage', desc: 'A checklist for spotting and reducing material pilferage across sites.', href: '/blog/how-contractors-can-track-material-wastage' },
      { title: 'Digital Labour Attendance: Benefits & Implementation', desc: 'What to plan for when moving from manual to digital attendance.', href: '/blog/digital-labour-attendance-benefits-and-implementation' },
      { title: 'Site-Wise Profitability: What to Track', desc: 'The key numbers every contractor should track per site.', href: '/blog/site-wise-profitability-what-to-track' },
    ],
  },
  {
    industry: 'Healthcare',
    icon: <FaHospital />,
    product: { name: 'Hospital Management System', href: '/products/hospital-management-system' },
    guides: [
      { title: 'OPD Digitization Checklist for Clinics', desc: 'A step-by-step checklist for digitizing OPD registration and queues.', href: '/blog/opd-digitization-checklist-for-clinics' },
      { title: 'EMR Basics for Small Hospitals', desc: 'What to know before adopting electronic medical records.', href: '/blog/emr-basics-for-small-hospitals' },
      { title: 'Reducing Billing Errors in Hospitals', desc: 'Common causes of billing errors and how to eliminate them.', href: '/blog/reducing-billing-errors-in-hospitals' },
    ],
  },
  {
    industry: 'Manufacturing & Industrial',
    icon: <FaIndustry />,
    product: { name: 'Industry Security System', href: '/products/industry-security-system' },
    guides: [
      { title: 'Digital Gate Entry: ROI for Factories', desc: 'How to calculate the return on digitizing your gate entry process.', href: '/blog/digital-gate-entry-roi-for-factories' },
      { title: 'Visitor Management Best Practices for Industrial Plants', desc: 'A checklist for controlled, auditable visitor and vehicle management.', href: '/blog/visitor-management-best-practices-for-industrial-plants' },
    ],
  },
];

export default function GuidesChecklists() {
  return (
    <div className="product-page">
      <SEO
        title="Guides & Checklists"
        description="Practical how-to guides and checklists for schools, contractors, hospitals, and factories — from admissions to gate security."
        path={PATH}
        keywords="school management checklist, construction site management guide, hospital digitization checklist, industrial gate entry guide"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Resources', path: PATH }, { name: 'Guides & Checklists', path: PATH }])]}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge"><span><FaBook /></span> Guides & Checklists</span>
          <h1>Practical How-Tos for Your Industry</h1>
          <p className="pp-hero-subhead">
            Step-by-step guides and checklists drawn from real implementations — grouped by
            industry, so you can jump straight to what's relevant to you.
          </p>
        </div>
      </section>

      {/* GUIDE GROUPS */}
      <section className="pp-features">
        <div className="container">
          {guideGroups.map((group) => (
            <div key={group.industry} style={{ marginBottom: '56px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span
                  style={{
                    width: '40px', height: '40px', borderRadius: 'var(--radius-md)',
                    background: 'var(--primary-gradient)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
                  }}
                >
                  {group.icon}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
                  {group.industry}
                </h3>
              </div>

              <div className="rs-services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {group.guides.map((g) => (
                  <Link to={g.href} className="rs-service-card" style={{ display: 'block', padding: '28px 24px' }} key={g.title}>
                    <h3 style={{ fontSize: '1.05rem' }}>{g.title}</h3>
                    <p>{g.desc}</p>
                    <span className="rs-service-link">Read the guide →</span>
                  </Link>
                ))}
              </div>

              <p style={{ marginTop: '18px', color: 'var(--gray-500)', fontSize: '0.9rem' }}>
                Powered by <Link to={group.product.href} style={{ color: 'var(--primary)', fontWeight: 600 }}>{group.product.name}</Link>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>Want a checklist tailored to your business?</h2>
          <div className="pp-cta-band-buttons">
            <Link to="/contact" className="btn btn-primary"><span>Book a free consultation</span></Link>
            <Link
              to="/resources/faqs"
              className="btn btn-secondary"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
            >
              <span>Browse FAQs</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
