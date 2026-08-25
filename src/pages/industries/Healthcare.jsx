import React from 'react';
import IndustryPageTemplate from '../../Components/IndustryPageTemplate';
import { organizationSchema, breadcrumbSchema } from '../../Components/SEO';

import healthcareBgVideo from '../../assets/videos/Healthcare.mp4';
import { FaClipboardList, FaHospital, FaPills, FaStethoscope, FaUser } from 'react-icons/fa';

const PATH = '/industries/hospital-clinic-management';

export default function Healthcare() {
  return (
    <IndustryPageTemplate
      seo={{
        title: 'Software for Hospitals & Clinics',
        description: 'Purpose-built software for healthcare: digital OPD, EMR, integrated billing, and pharmacy tracking — powered by our Hospital Management System.',
        path: PATH,
        keywords: 'hospital management software India, clinic management system, healthcare software India, EMR software',
        jsonLd: [organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Industries', path: '/' }, { name: 'Healthcare', path: PATH }])],
      }}
      badge="Healthcare"
      heroTitle="Software Built for Clinics & Hospitals"
      heroSubhead="Shorten patient queues, reduce billing errors, and get real-time visibility into OPD, IPD, and inventory."
      heroVideo={healthcareBgVideo}
      heroIcons={[<FaHospital />, <FaStethoscope />, <FaPills />, <FaStethoscope />, <FaUser />, <FaClipboardList />]}
      pains={[
        'OPD queues and manual registers',
        'Billing errors and insurance delays',
        'Inventory and pharmacy leakage',
        'No visibility into bed occupancy',
      ]}
      solutionProduct={{
        name: 'Hospital Management System',
        blurb: 'Hospital management software for clinics, nursing homes, and multi-speciality hospitals — OPD, IPD, EMR, billing, pharmacy, inventory, and lab integration.',
        href: '/products/hospital-management-system',
      }}
      miniCaseStudies={[
        { title: 'Faster OPD, fewer billing errors', text: 'A multi-speciality hospital digitized its OPD and billing workflow, reducing patient waiting time and cutting billing errors.' },
      ]}
      ctaBand={{
        title: 'See how our Hospital Management System fits your facility.',
        ctas: [
          { label: 'Book a demo', href: '/contact', primary: true },
          { label: 'View Hospital Management System', href: '/products/hospital-management-system', primary: false },
        ],
      }}
    />
  );
}