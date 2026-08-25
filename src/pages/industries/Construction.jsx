import React from 'react';
import IndustryPageTemplate from '../../Components/IndustryPageTemplate';
import { organizationSchema, breadcrumbSchema } from '../../Components/SEO';

import constructionBgVideo from '../../assets/videos/constructions.mp4';
import { FaBuilding, FaExclamationTriangle, FaHammer, FaHardHat, FaRulerCombined, FaTruck } from 'react-icons/fa';

const PATH = '/industries/construction-site-management';

export default function Construction() {
  return (
    <IndustryPageTemplate
      seo={{
        title: 'Software for Construction & Infrastructure Companies',
        description: 'Purpose-built software for contractors: real-time site dashboards, material tracking, and digital labour attendance — powered by RudhiArch.',
        path: PATH,
        keywords: 'construction site management software, contractor ERP India, infrastructure project management software, RudhiArch',
        jsonLd: [organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Industries', path: '/' }, { name: 'Construction & Infrastructure', path: PATH }])],
      }}
      badge="Construction & Infrastructure"
      heroTitle="Software Built for Contractors & Site Teams"
      heroSubhead="Know what's happening at every site, every day — without 10 WhatsApp groups and manual sheets."
      heroVideo={constructionBgVideo}
      heroIcons={[<FaHardHat />, <FaExclamationTriangle />, <FaBuilding />, <FaRulerCombined />, <FaHammer />, <FaTruck />]}
      pains={[
        'Multiple sites with no real-time visibility',
        'Material pilferage and delays',
        'Labour attendance and billing issues',
        'Slow, error-prone billing cycles',
      ]}
      solutionProduct={{
        name: 'RudhiArch',
        blurb: 'Construction project & site management ERP for contractors — track sites, materials, labour, billing, and compliance from one dashboard.',
        href: '/products/rudhiarch-construction-site-erp',
      }}
      miniCaseStudies={[
        { title: 'Billing cycle cut from 10 days to 2 days', text: 'A civil contractor consolidated material tracking and labour billing onto RudhiArch, cutting their billing cycle dramatically and improving site visibility for owners and their CA.' },
      ]}
      ctaBand={{
        title: 'See how RudhiArch fits your sites.',
        ctas: [
          { label: 'Book a demo', href: '/contact', primary: true },
          { label: 'View RudhiArch', href: '/products/rudhiarch-construction-site-erp', primary: false },
        ],
      }}
    />
  );
}