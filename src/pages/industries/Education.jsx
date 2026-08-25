import React from 'react';
import IndustryPageTemplate from '../../Components/IndustryPageTemplate';
import { organizationSchema, breadcrumbSchema } from '../../Components/SEO';

import educationBgVideo from '../../assets/videos/Educations.mp4';
import { FaBook, FaBookReader, FaClipboardList, FaGraduationCap, FaPencilAlt, FaSchool } from 'react-icons/fa';

const PATH = '/industries/education-school-college-management';

export default function Education() {
  return (
    <IndustryPageTemplate
      seo={{
        title: 'Software for Schools & Colleges',
        description: 'Purpose-built software for education: paperless admissions, online fee collection, and centralized academic records — powered by RudhiCore.',
        path: PATH,
        keywords: 'school management software India, college management system, education software India, RudhiCore',
        jsonLd: [organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Industries', path: '/' }, { name: 'Education', path: PATH }])],
      }}
      badge="Education"
      heroTitle="Software Built for Schools & Colleges"
      heroSubhead="Go from paper registers and Excel chaos to a single system for admissions, fees, and academics — in weeks, not months."
      heroVideo={educationBgVideo}
      heroIcons={[<FaGraduationCap />, <FaBook />, <FaPencilAlt />, <FaBookReader />, <FaSchool />, <FaClipboardList />]}
      pains={[
        'Manual admission forms and inquiry tracking',
        'Fee collection chaos and defaulters',
        'Scattered student, staff, and academic records',
        'No visibility across multiple branches',
      ]}
      solutionProduct={{
        name: 'RudhiCore',
        blurb: 'All-in-one school & college management software — admissions, attendance, fees, exams, transport, hostel, and reports on one platform.',
        href: '/products/rudhicore-school-college-management',
      }}
      miniCaseStudies={[
        { title: 'Paperless admissions in under a month', text: 'A mid-size school moved its admission and inquiry process online with RudhiCore, cutting admission paperwork time significantly.' },
      ]}
      ctaBand={{
        title: 'See how RudhiCore fits your institution.',
        ctas: [
          { label: 'Book a demo', href: '/contact', primary: true },
          { label: 'View RudhiCore', href: '/products/rudhicore-school-college-management', primary: false },
        ],
      }}
    />
  );
}