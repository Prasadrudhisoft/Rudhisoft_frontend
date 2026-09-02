import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../products.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../../Components/SEO';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const PATH = '/resources/faqs';

const faqGroups = [
  {
    group: 'Getting Started',
    items: [
      { q: 'How long does implementation take?', a: 'Most ready-made products go live within days once your data and workflows are shared with us. Custom solutions have a project timeline agreed upfront.' },
      { q: 'Can the software be customized?', a: 'Yes. Our ready-made products can be configured to your workflow, and we also build fully custom ERP, CRM, and automation solutions when a standard product is not enough.' },
      { q: 'Do you provide training?', a: 'Yes. We train your team as part of every deployment and provide reference documentation for ongoing use.' },
      { q: 'Can you migrate our existing Excel or paper records?', a: 'Yes. We help migrate existing spreadsheets and paper-based records into your new system as part of onboarding.' },
    ],
  },
  {
    group: 'Products & Deployment',
    items: [
      { q: 'Can we use the software for multiple branches or sites?', a: 'Yes. RudhiCore, RudhiArch, and our other products support multi-branch and multi-site operations from a single dashboard.' },
      { q: 'Is data hosted in the cloud?', a: 'Yes, our products are cloud-hosted, so your data is accessible securely from anywhere. On-premise options can be discussed for specific requirements.' },
      { q: 'Which industries do your products cover?', a: 'We build for education (RudhiCore), construction (RudhiArch), healthcare (Hospital Management System), and manufacturing / industrial security (Industry Security System).' },
      { q: "What if my business doesn't fit any of your existing products?", a: 'We design and build custom ERP, CRM, workflow automation, and integrations around your exact operational workflow — talk to our team about a custom build.' },
    ],
  },
  {
    group: 'Support & Pricing',
    items: [
      { q: 'Do you provide ongoing support?', a: 'Yes. Every deployment includes ongoing support, maintenance, and enhancements as your business grows.' },
      { q: 'How is pricing structured?', a: 'Pricing depends on the product, number of users/branches, and any customization required. Book a free consultation and we\u2019ll share a clear quote based on your needs.' },
      { q: 'Who do I contact for support after go-live?', a: 'Every customer gets a direct support channel. You can also reach our support team at support@rudhisoft.com.' },
    ],
  },
];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="pp-faq-item" style={{ cursor: 'pointer' }} onClick={onToggle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        <h4 style={{ margin: 0 }}>{q}</h4>
        <FaChevronDown
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            flexShrink: 0,
            color: 'var(--primary)',
          }}
        />
      </div>
      {isOpen && <p style={{ marginTop: '10px', marginBottom: 0 }}>{a}</p>}
    </div>
  );
}

export default function Faqs() {
  const [openKey, setOpenKey] = useState('0-0');

  return (
    <div className="product-page">
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about Rudhisoft's products, implementation timelines, customization, pricing, and ongoing support."
        path={PATH}
        keywords="RUDHISOFT FAQ, school software questions, construction ERP questions, hospital software questions"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Resources', path: PATH }, { name: 'FAQs', path: PATH }])]}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge"><span><FaQuestionCircle /></span> FAQs</span>
          <h1>Frequently Asked Questions</h1>
          <p className="pp-hero-subhead">
            Common questions about our products, implementation, customization, and support —
            answered. Still have a question? Just ask us directly.
          </p>
        </div>
      </section>

      {/* FAQ GROUPS */}
      <section className="pp-faq">
        <div className="container">
          {faqGroups.map((group, gi) => (
            <div key={group.group} style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '20px' }}>
                {group.group}
              </h3>
              <div className="pp-faq-list">
                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`;
                  return (
                    <FaqItem
                      key={key}
                      q={item.q}
                      a={item.a}
                      isOpen={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? '' : key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>Didn't find your answer?</h2>
          <div className="pp-cta-band-buttons">
            <Link to="/contact" className="btn btn-primary"><span>Ask us directly</span></Link>
            <Link
              to="/resources/guides-checklists"
              className="btn btn-secondary"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
            >
              <span>Browse guides & checklists</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
