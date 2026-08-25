import React from 'react';
import IndustryPageTemplate from '../../Components/IndustryPageTemplate';
import { organizationSchema, breadcrumbSchema } from '../../Components/SEO';

import manufacturingBgVideo from '../../assets/videos/Manufacturing.mp4';
import { FaBoxOpen, FaIndustry, FaLock, FaTruck, FaUserShield, FaVideo } from 'react-icons/fa';

const PATH = '/industries/manufacturing-industrial-security';

export default function Manufacturing() {
  return (
    <IndustryPageTemplate
      seo={{
        title: 'Software for Manufacturing & Industrial Facilities',
        description: 'Purpose-built software for factories and warehouses: digital gate entry, visitor & vehicle management, and audit trails — plus custom ERP for unique workflows.',
        path: PATH,
        keywords: 'industrial security system for factories, factory access control India, manufacturing ERP software, gate entry management software',
        jsonLd: [organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Industries', path: '/' }, { name: 'Manufacturing & Industrial', path: PATH }])],
      }}
      badge="Manufacturing & Industrial"
      heroTitle="Security & Operations Software for Factories"
      heroSubhead="Turn your gate from a bottleneck into a controlled, auditable checkpoint — and get custom ERP for whatever else your plant needs."
      heroVideo={manufacturingBgVideo}
      heroIcons={[<FaIndustry />, <FaLock />, <FaTruck />, <FaBoxOpen />, <FaUserShield />, <FaVideo />]}
      pains={[
        'Manual gate entry with no audit trail',
        'Unauthorized access to sensitive areas',
        'No time-stamped visitor or vehicle logs',
        'Operational workflows too specific for off-the-shelf software',
      ]}
      solutionProduct={{
        name: 'Industry Security System',
        blurb: 'Industrial security & access management for factories and warehouses — digital visitor & vehicle management, RFID/biometric access, and a 100% digital audit trail. For anything beyond gate security, our custom ERP team can build to your plant\'s exact workflow.',
        href: '/products/industry-security-system',
      }}
      miniCaseStudies={[
        { title: '100% digital audit trail at the gate', text: 'A factory replaced manual gate registers with digital visitor and vehicle management, reducing gate processing time and creating a full audit trail.' },
      ]}
      ctaBand={{
        title: 'See how we secure and streamline your facility.',
        ctas: [
          { label: 'Book a demo', href: '/contact', primary: true },
          { label: 'Talk to our solutions team', href: '/services/custom-software-development', primary: false },
        ],
      }}
    />
  );
}