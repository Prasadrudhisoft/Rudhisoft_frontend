import React from 'react';
import ProductPageTemplate from '../../Components/Productpagetemplate';
import { organizationSchema, breadcrumbSchema, softwareApplicationSchema } from '../../Components/SEO';
import { FaHospital } from 'react-icons/fa';

const PATH = '/products/hospital-management-system';

export default function HospitalMS() {
  return (
    <ProductPageTemplate
      seo={{
        title: 'Hospital Management System — Clinics & Multi-Speciality Hospitals',
        description: 'Hospital management software for clinics, nursing homes, and multi-speciality hospitals. Digital OPD, EMR, billing, pharmacy & inventory. Book a demo.',
        path: PATH,
        keywords: 'hospital management software India, clinic management system, EMR software India, OPD digitization, hospital billing software',
        jsonLd: [
          organizationSchema,
          softwareApplicationSchema({
            name: 'Hospital Management System',
            description: 'Hospital management software for clinics, nursing homes, and multi-speciality hospitals — OPD, IPD, EMR, billing, pharmacy, and inventory.',
            path: PATH,
            category: 'HealthApplication',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/#products' },
            { name: 'Hospital Management System', path: PATH },
          ]),
        ],
      }}
      badge="Hospital Management System"
      heroTitle="Hospital management software for clinics, nursing homes, and multi-speciality hospitals."
      heroSubhead="Shorten patient queues, reduce billing errors, and get real-time visibility into OPD, IPD, and inventory."
      heroCtas={[
        { label: 'Book a demo', href: '/contact', primary: true },
        { label: 'Get hospital workflow checklist', href: '/contact', primary: false },
      ]}
      painSolutions={[
        { pain: 'OPD queues & manual registers', solution: 'Digital OPD, appointments, EMR' },
        { pain: 'Billing errors & delays', solution: 'Integrated billing & insurance' },
        { pain: 'Inventory leakage', solution: 'Pharmacy & inventory tracking' },
      ]}
      features={{
        type: 'flat',
        items: ['OPD / IPD', 'Appointments', 'EMR', 'Billing', 'Pharmacy', 'Inventory', 'Lab integration', 'Reports'],
      }}
      outcomes={[
        'Reduce patient waiting time by X%',
        'Cut billing errors by Y%',
        'Improve bed occupancy visibility',
      ]}
      noteSection={{
        title: 'Compliance & Security',
        items: ['Data privacy', 'Role-based access'],
      }}
      faq={[
        { q: 'How long does deployment take?', a: 'Most clinics and hospitals go live within weeks — we handle setup, staff training, and data migration.' },
        { q: 'Is patient data secure?', a: 'Yes — role-based access control and data privacy safeguards are built in from day one.' },
        { q: 'Can it scale from a clinic to a multi-speciality hospital?', a: 'Yes — the system is designed for clinics, nursing homes, and multi-speciality hospitals alike.' },
        { q: 'Can it be customized to our hospital\'s workflow?', a: 'Yes — for hospital-specific workflows or third-party integrations, our custom software team can extend it.' },
      ]}
      ctaBand={{
        title: 'Reduce queues and billing errors. Book a demo of our Hospital Management System.',
        ctas: [
          { label: 'Book a demo', href: '/contact', primary: true },
          { label: 'Get hospital workflow checklist', href: '/contact', primary: false },
        ],
      }}
    />
  );
}