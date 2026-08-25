import React from 'react';
import ProductPageTemplate from '../../Components/Productpagetemplate';
import { organizationSchema, breadcrumbSchema, softwareApplicationSchema } from '../../Components/SEO';
import { FaLock } from 'react-icons/fa';

const PATH = '/products/industry-security-system';

export default function IndustrySecurity() {
  return (
    <ProductPageTemplate
      seo={{
        title: 'Industrial Gate In-Out System — Security & Access Management',
        description: 'Industrial security & access management for factories and warehouses. Digital visitor & vehicle management, RFID/biometric access, full audit trail. Book a demo.',
        path: PATH,
        keywords: 'industrial security system for factories, gate entry management software, visitor management system, factory access control India',
        jsonLd: [
          organizationSchema,
          softwareApplicationSchema({
            name: 'Industrial Gate In-Out System',
            description: 'Industrial security & access management for factories and warehouses — digital visitor & vehicle management, access control, and audit trails.',
            path: PATH,
            category: 'SecurityApplication',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/#products' },
            { name: 'Industry Security System', path: PATH },
          ]),
        ],
      }}
      badge="Industrial Gate In-Out System"
      heroTitle="Industrial security & access management for factories and warehouses."
      heroSubhead="Turn your gate from a bottleneck into a controlled, auditable checkpoint."
      heroCtas={[
        { label: 'Book a demo', href: '/contact', primary: true },
        { label: 'Get a security audit checklist', href: '/contact', primary: false },
      ]}
      painSolutions={[
        { pain: 'Manual gate entry', solution: 'Digital visitor & vehicle management' },
        { pain: 'No audit trail', solution: 'Time-stamped logs & reports' },
        { pain: 'Unauthorized access', solution: 'RFID / biometric + rule-based access' },
      ]}
      features={{
        type: 'flat',
        items: ['Gate entry', 'Visitor management', 'Vehicle tracking', 'Access control', 'Incident logging', 'Reports', 'CCTV / biometric integrations'],
      }}
      outcomes={[
        'Reduce gate processing time by X%',
        '100% digital audit trail',
        'Fewer security incidents',
      ]}
      faq={[
        { q: 'How long does deployment take?', a: 'Most factories and warehouses go live within days to weeks, including hardware integration.' },
        { q: 'Does it work with our existing CCTV or biometric hardware?', a: 'Yes — the system integrates with CCTV and biometric devices for a unified security setup.' },
        { q: 'Can we set rule-based access for different zones?', a: 'Yes — access rules can be configured by zone, time, and visitor/vehicle type.' },
        { q: 'Can it be customized for our facility\'s layout?', a: 'Yes — for multi-gate or multi-facility setups, our custom software team can tailor the system to your layout.' },
      ]}
      ctaBand={{
        title: 'Get a 100% digital audit trail at every gate. Book a demo.',
        ctas: [
          { label: 'Book a demo', href: '/contact', primary: true },
          { label: 'Get a security audit checklist', href: '/contact', primary: false },
        ],
      }}
    />
  );
}