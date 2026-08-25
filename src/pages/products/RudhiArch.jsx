import React from 'react';
import ProductPageTemplate from '../../Components/Productpagetemplate';
import { organizationSchema, breadcrumbSchema, softwareApplicationSchema } from '../../Components/SEO';
import { FaHardHat } from 'react-icons/fa';

const PATH = '/products/rudhiarch-construction-site-erp';

export default function RudhiArch() {
  return (
    <ProductPageTemplate
      seo={{
        title: 'RudhiArch — Construction Site Management ERP',
        description: 'Construction project & site management ERP for contractors. Track sites, materials, labour, billing, and compliance from one dashboard. Book a demo.',
        path: PATH,
        keywords: 'construction site management software, contractor ERP India, RudhiArch, material tracking software, digital labour attendance construction',
        jsonLd: [
          organizationSchema,
          softwareApplicationSchema({
            name: 'RudhiArch',
            description: 'Construction project & site management ERP for contractors — project tracking, material management, labour management, and billing.',
            path: PATH,
            category: 'BusinessApplication',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/#products' },
            { name: 'RudhiArch', path: PATH },
          ]),
        ],
      }}
      badge="RudhiArch"
      heroTitle="Construction project & site management ERP for contractors."
      heroSubhead="Track sites, materials, labour, billing, and compliance from one dashboard."
      heroCtas={[
        { label: 'Book a demo', href: '/contact', primary: true },
        { label: 'Get a site workflow blueprint', href: '/contact', primary: false },
      ]}
      painSolutions={[
        { pain: 'Multiple sites, no visibility', solution: 'Real-time site dashboards' },
        { pain: 'Material pilferage & delays', solution: 'Material tracking & reconciliation' },
        { pain: 'Labour attendance & billing issues', solution: 'Digital attendance & automated bills' },
      ]}
      features={{
        type: 'flat',
        items: ['Project tracking', 'BOQ', 'Material management', 'Labour management', 'Billing', 'Compliance', 'Reports'],
      }}
      outcomes={[
        'Reduce material wastage by X%',
        'Cut billing cycle from 10 days to 2 days',
        'Improve site visibility for owners & CA',
      ]}
      faq={[
        { q: 'How long does deployment take?', a: 'RudhiArch is designed for fast rollout across sites — typically deployed in weeks, not months.' },
        { q: 'Can it handle multiple sites at once?', a: 'Yes — RudhiArch is built for contractors managing multiple sites, with a real-time dashboard across all of them.' },
        { q: 'Does it integrate with our existing billing/accounting?', a: 'RudhiArch supports standard integrations; for anything specific to your accounting stack, our custom software team can build it.' },
      ]}
      ctaBand={{
        title: 'Get real-time visibility across every site. Book a demo of RudhiArch.',
        ctas: [
          { label: 'Book a demo', href: '/contact', primary: true },
          { label: 'Get a site workflow blueprint', href: '/contact', primary: false },
        ],
      }}
    />
  );
}