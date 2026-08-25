import React from 'react';
import ProductPageTemplate from '../../Components/Productpagetemplate';
import { organizationSchema, breadcrumbSchema, softwareApplicationSchema } from '../../Components/SEO';
import { FaGraduationCap } from 'react-icons/fa';

const PATH = '/products/rudhicore-school-college-management';

export default function RudhiCore() {
  return (
    <ProductPageTemplate
      seo={{
        title: 'RudhiCore — School & College Management Software',
        description: 'All-in-one school & college management software. Admissions, attendance, fees, exams, transport, hostel, and reports — on one platform. Book a demo.',
        path: PATH,
        keywords: 'school management software India, college ERP, RudhiCore, online fee collection software, paperless admission software',
        jsonLd: [
          organizationSchema,
          softwareApplicationSchema({
            name: 'RudhiCore',
            description: 'All-in-one school & college management software covering admissions, attendance, fees, exams, transport, hostel, and reports.',
            path: PATH,
            category: 'EducationalApplication',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/#products' },
            { name: 'RudhiCore', path: PATH },
          ]),
        ],
      }}
      badge="RudhiCore"
      heroTitle="All-in-one school & college management software."
      heroSubhead="Admissions, attendance, fees, exams, transport, hostel, reports — on one platform."
      heroCtas={[
        { label: 'Book a demo', href: '/contact', primary: true },
        { label: 'Get pricing', href: '/contact', primary: false },
      ]}
      painSolutions={[
        { pain: 'Manual admission forms', solution: 'Online admission & inquiry tracking' },
        { pain: 'Fee collection chaos', solution: 'Online fee payment + reminders' },
        { pain: 'Scattered data', solution: 'Centralized student, staff, and academic records' },
      ]}
      features={{
        type: 'grouped',
        groups: [
          { label: 'Admin', items: ['Admissions', 'Fee management', 'Reports', 'Compliance'] },
          { label: 'Teachers', items: ['Attendance', 'Marks', 'Lesson plans', 'Communication'] },
          { label: 'Parents / Students', items: ['Parent portal', 'Fee receipts', 'Notices', 'Results'] },
        ],
      }}
      outcomes={[
        'Reduce admin workload by X%',
        'Cut fee defaulters by Y%',
        'Go paperless in Z weeks',
      ]}
      noteSection={{
        title: 'Integrations',
        items: ['Payment gateways', 'SMS / WhatsApp', 'Biometric attendance'],
      }}
      faq={[
        { q: 'How long does deployment take?', a: 'Most schools and colleges go live in weeks, not months — we handle setup, data migration, and training.' },
        { q: 'Is our data secure?', a: 'Yes — role-based access, encrypted storage, and regular backups keep student and staff data protected.' },
        { q: 'Can RudhiCore handle multiple branches?', a: 'Yes, RudhiCore supports multi-branch institutions with centralized reporting across campuses.' },
        { q: 'Can it be customized to our institution\'s workflow?', a: 'Yes — RudhiCore can be configured to match your admission, fee, and academic processes. For deeper customization, our custom software team can help.' },
      ]}
      ctaBand={{
        title: 'Ready to go paperless? Book a demo or get pricing for RudhiCore.',
        ctas: [
          { label: 'Book a demo', href: '/contact', primary: true },
          { label: 'Get pricing', href: '/contact', primary: false },
        ],
      }}
    />
  );
}