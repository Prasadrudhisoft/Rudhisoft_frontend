// ─────────────────────────────────────────────────────────────────────────
// CASE STUDIES DATA
// Per site notes: 1 case study per product + 2–3 custom software case studies.
// Structure per notes: Client profile (industry, size) → Challenge →
// Solution (product used + customizations) → Outcomes with numbers → Quote
// → CTA ("Get similar results").
//
// ⚠️ PLACEHOLDER CONTENT — every field below needs real client data.
// Replace clientProfile, challenge, solution, outcomes, and quote with
// actual details once available. Do NOT publish this page live with
// placeholder numbers/quotes — they are not real.
// ─────────────────────────────────────────────────────────────────────────

export const caseStudies = [
  // ── Product case studies (1 per product) ────────────────────────────────
  {
    slug: 'rudhicore-school-case-study',
    type: 'product',
    product: { name: 'RudhiCore', href: '/products/rudhicore-school-college-management' },
    title: '[School Name] — RudhiCore Case Study',
    clientProfile: { industry: 'Education — School', size: '[e.g. 800 students, K-12]' },
    challenge: '[Describe the school\'s specific problem before RudhiCore — e.g. manual admissions, fee collection chaos, scattered records.]',
    solution: '[Describe how RudhiCore was deployed, and any customizations made for this client.]',
    outcomes: [
      '[Reduced admin workload by X%]',
      '[Cut fee defaulters by Y%]',
      '[Went paperless in Z weeks]',
    ],
    quote: { text: '[Client quote about the results, in their own words.]', author: '[Name, Title, School Name]' },
  },
  {
    slug: 'rudhiarch-contractor-case-study',
    type: 'product',
    product: { name: 'RudhiArch', href: '/products/rudhiarch-construction-site-erp' },
    title: '[Contractor Name] — RudhiArch Case Study',
    clientProfile: { industry: 'Construction — Civil Contractor', size: '[e.g. 5 active sites]' },
    challenge: '[Describe the contractor\'s specific problem before RudhiArch — e.g. no site visibility, material pilferage, slow billing.]',
    solution: '[Describe how RudhiArch was deployed, and any customizations made for this client.]',
    outcomes: [
      '[Reduced material wastage by X%]',
      '[Cut billing cycle from 10 days to 2 days]',
      '[Improved site visibility for owners & CA]',
    ],
    quote: { text: '[Client quote about the results, in their own words.]', author: '[Name, Title, Company Name]' },
  },
  {
    slug: 'hospital-ms-case-study',
    type: 'product',
    product: { name: 'Hospital Management System', href: '/products/hospital-management-system' },
    title: '[Hospital Name] — Hospital Management System Case Study',
    clientProfile: { industry: 'Healthcare — Multi-Speciality Hospital', size: '[e.g. 120-bed hospital]' },
    challenge: '[Describe the hospital\'s specific problem before adoption — e.g. OPD queues, manual registers, billing errors.]',
    solution: '[Describe how the Hospital Management System was deployed, and any customizations made for this client.]',
    outcomes: [
      '[Reduced patient waiting time by X%]',
      '[Cut billing errors by Y%]',
      '[Improved bed occupancy visibility]',
    ],
    quote: { text: '[Client quote about the results, in their own words.]', author: '[Name, Title, Hospital Name]' },
  },
  {
    slug: 'industry-security-factory-case-study',
    type: 'product',
    product: { name: 'Industry Security System', href: '/products/industry-security-system' },
    title: '[Factory Name] — Industry Security System Case Study',
    clientProfile: { industry: 'Manufacturing — Factory / Warehouse', size: '[e.g. 3 gates, 200+ daily visitors]' },
    challenge: '[Describe the facility\'s specific problem before adoption — e.g. manual gate entry, no audit trail, unauthorized access.]',
    solution: '[Describe how the Industry Security System was deployed, and any customizations made for this client.]',
    outcomes: [
      '[Reduced gate processing time by X%]',
      '[100% digital audit trail]',
      '[Fewer security incidents]',
    ],
    quote: { text: '[Client quote about the results, in their own words.]', author: '[Name, Title, Company Name]' },
  },

  // ── Custom software case studies (2–3) ──────────────────────────────────
  {
    slug: 'custom-software-case-study-1',
    type: 'custom',
    product: { name: 'Custom Software Development', href: '/services/custom-software-development' },
    title: '[Company Name / Anonymized] — Custom [ERP/CRM/Automation] Case Study',
    clientProfile: { industry: '[Industry]', size: '[Company size]' },
    challenge: '[Describe the unique workflow, integration, or scale problem that made an off-the-shelf product insufficient.]',
    solution: '[Describe the custom solution built — tech stack, architecture, timeline.]',
    outcomes: [
      '[Outcome 1 with a number]',
      '[Outcome 2 with a number]',
      '[Outcome 3 with a number]',
    ],
    quote: { text: '[Client quote about the results, in their own words.]', author: '[Name, Title, Company Name]' },
  },
  {
    slug: 'custom-software-case-study-2',
    type: 'custom',
    product: { name: 'Custom Software Development', href: '/services/custom-software-development' },
    title: '[Company Name / Anonymized] — Custom [ERP/CRM/Automation] Case Study',
    clientProfile: { industry: '[Industry]', size: '[Company size]' },
    challenge: '[Describe the unique workflow, integration, or scale problem that made an off-the-shelf product insufficient.]',
    solution: '[Describe the custom solution built — tech stack, architecture, timeline.]',
    outcomes: [
      '[Outcome 1 with a number]',
      '[Outcome 2 with a number]',
      '[Outcome 3 with a number]',
    ],
    quote: { text: '[Client quote about the results, in their own words.]', author: '[Name, Title, Company Name]' },
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudiesByType(type) {
  return caseStudies.filter((c) => c.type === type);
}