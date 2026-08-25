// ─────────────────────────────────────────────────────────────────────────
// BLOG POST DATA
// Per site notes: "Organize content around buyer questions for each product."
// Each post: answers a specific question, links to the relevant product page,
// ends with a contextual CTA.
//
// ⚠️ PLACEHOLDER CONTENT — replace `body` with real written content when
// ready. Title, slug, cluster, and relatedProduct are already set from notes.
// ─────────────────────────────────────────────────────────────────────────

export const clusters = [
  {
    id: 'school-college-management',
    label: 'School / College Management',
    icon: '🎓',
    relatedProduct: { name: 'RudhiCore', href: '/products/rudhicore-school-college-management' },
  },
  {
    id: 'construction-erp',
    label: 'Construction ERP',
    icon: '🏗️',
    relatedProduct: { name: 'RudhiArch', href: '/products/rudhiarch-construction-site-erp' },
  },
  {
    id: 'hospital-management',
    label: 'Hospital Management',
    icon: '🏥',
    relatedProduct: { name: 'Hospital Management System', href: '/products/hospital-management-system' },
  },
  {
    id: 'industrial-security',
    label: 'Industrial Security',
    icon: '🔐',
    relatedProduct: { name: 'Industry Security System', href: '/products/industry-security-system' },
  },
];

export const blogPosts = [
  // ── School / College Management ──────────────────────────────────────
  {
    slug: 'how-to-choose-school-management-software-in-india',
    title: 'How to Choose School Management Software in India',
    cluster: 'school-college-management',
    excerpt: 'A buyer\'s checklist for evaluating school management software — what to look for before you commit.',
    body: 'Full content coming soon.',
    cta: 'See RudhiCore demo',
  },
  {
    slug: 'online-fee-collection-best-practices-for-schools',
    title: 'Online Fee Collection: Best Practices for Schools',
    cluster: 'school-college-management',
    excerpt: 'How to cut fee defaulters and reduce collection overhead with an online payment workflow.',
    body: 'Full content coming soon.',
    cta: 'Book a demo of RudhiCore',
  },
  {
    slug: 'paperless-admission-process-step-by-step',
    title: 'Paperless Admission Process: Step-by-Step',
    cluster: 'school-college-management',
    excerpt: 'A step-by-step breakdown of moving your admission and inquiry process fully online.',
    body: 'Full content coming soon.',
    cta: 'See RudhiCore demo',
  },

  // ── Construction ERP ──────────────────────────────────────────────────
  {
    slug: 'how-contractors-can-track-material-wastage',
    title: 'How Contractors Can Track Material Wastage',
    cluster: 'construction-erp',
    excerpt: 'Practical ways contractors can identify and reduce material pilferage and wastage on site.',
    body: 'Full content coming soon.',
    cta: 'Book a demo of RudhiArch',
  },
  {
    slug: 'digital-labour-attendance-benefits-and-implementation',
    title: 'Digital Labour Attendance: Benefits & Implementation',
    cluster: 'construction-erp',
    excerpt: 'Why digital labour attendance beats manual registers, and how to roll it out across sites.',
    body: 'Full content coming soon.',
    cta: 'Book a demo of RudhiArch',
  },
  {
    slug: 'site-wise-profitability-what-to-track',
    title: 'Site-Wise Profitability: What to Track',
    cluster: 'construction-erp',
    excerpt: 'The key metrics contractors should track per site to understand true profitability.',
    body: 'Full content coming soon.',
    cta: 'Get a site workflow blueprint',
  },

  // ── Hospital Management ───────────────────────────────────────────────
  {
    slug: 'opd-digitization-checklist-for-clinics',
    title: 'OPD Digitization Checklist for Clinics',
    cluster: 'hospital-management',
    excerpt: 'A practical checklist for clinics moving from manual OPD registers to a digital workflow.',
    body: 'Full content coming soon.',
    cta: 'Get hospital workflow checklist',
  },
  {
    slug: 'emr-basics-for-small-hospitals',
    title: 'EMR Basics for Small Hospitals',
    cluster: 'hospital-management',
    excerpt: 'What small hospitals and nursing homes need to know before adopting electronic medical records.',
    body: 'Full content coming soon.',
    cta: 'Book a demo of our Hospital Management System',
  },
  {
    slug: 'reducing-billing-errors-in-hospitals',
    title: 'Reducing Billing Errors in Hospitals',
    cluster: 'hospital-management',
    excerpt: 'Common causes of hospital billing errors and how integrated billing systems fix them.',
    body: 'Full content coming soon.',
    cta: 'Book a demo of our Hospital Management System',
  },

  // ── Industrial Security ───────────────────────────────────────────────
  {
    slug: 'digital-gate-entry-roi-for-factories',
    title: 'Digital Gate Entry: ROI for Factories',
    cluster: 'industrial-security',
    excerpt: 'How to calculate the return on investment of moving from manual to digital gate entry.',
    body: 'Full content coming soon.',
    cta: 'Get a security audit checklist',
  },
  {
    slug: 'visitor-management-best-practices-for-industrial-plants',
    title: 'Visitor Management Best Practices for Industrial Plants',
    cluster: 'industrial-security',
    excerpt: 'Best practices for tracking visitors and vehicles at industrial facilities securely and efficiently.',
    body: 'Full content coming soon.',
    cta: 'Book a demo of Industry Security System',
  },
];

export function getPostsByCluster(clusterId) {
  return blogPosts.filter((p) => p.cluster === clusterId);
}

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getClusterById(clusterId) {
  return clusters.find((c) => c.id === clusterId);
}