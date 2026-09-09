// ─────────────────────────────────────────────────────────────────────────
// CASE STUDIES DATA
//
// Structure (per updated content brief):
//   Hero        → customer, industry, location, product, main result
//   Overview    → industry, org type, scale (branches/sites/users), duration
//   Challenge   → what was manual/inefficient, who was affected, the cost
//   Solution    → what was implemented and how it solved the problem
//                 (not a feature list — the mechanism behind the result)
//   Results     → before/after table + outcome bullets + quote
//   CTA         → "Talk to us about a similar project"
//
// ⚠️ PLACEHOLDER CONTENT — every bracketed field below needs real client
// data. Do NOT publish this page live with placeholder details, numbers,
// or quotes — they are not real. Only add numerical values once verified;
// a qualitative before/after comparison is fine until then.
// ─────────────────────────────────────────────────────────────────────────

export const caseStudies = [
  // ── Product case studies (1 per product) ────────────────────────────────
  {
    slug: 'rudhicore-school-case-study',
    type: 'product',
    product: { name: 'RudhiCore', href: '/products/rudhicore-school-college-management' },
    industryTag: 'Education',
    title: 'How [School Name] reduced admission administration with RudhiCore',

    customer: {
      name: '[School Name]',
      industry: 'Education — School',
      orgType: '[e.g. K-12 School]',
      location: '[City, if approved]',
      scale: '[e.g. 800 students, 3 branches]',
      duration: '[e.g. 6 weeks]',
    },
    mainResult: '[Reduced admission paperwork by 60%]',

    challengeSummary: 'Manual admissions, fee collection, attendance, and reporting.',
    challenge:
      '[Describe what was manual or inefficient — admissions, fee collection, attendance, reporting. Explain who was affected (admin staff, parents, management), what the problem cost in time, errors, or visibility, and why the existing process was no longer sufficient as the school grew.]',

    solutionSummary: 'Implemented RudhiCore to centralize administration and reporting.',
    solution:
      '[Explain what was implemented — which RudhiCore modules (admissions, fees, attendance, exams, parent communication, reports) were used, what integrations were completed, how staff and parents adopted the system, and the key implementation decisions. Connect each choice to the problem it solved rather than just listing features.]',

    beforeAfter: [
      { area: 'Admission processing', before: 'Manual paperwork', after: 'Centralized digital workflow' },
      { area: 'Fee reporting', before: 'Prepared manually', after: 'Available from one dashboard' },
      { area: 'Reporting time', before: '[Measured baseline]', after: '[Measured improvement]' },
      { area: 'Data access', before: 'Separate files', after: 'Role-based system access' },
    ],
    outcomes: [
      'Reduced admission paperwork by 60%',
      'Centralized fee and student records',
      'Improved reporting turnaround',
    ],
    quote: { text: '[Client quote about the results, in their own words.]', author: '[Name, Title, School Name]' },
  },

  {
    slug: 'rudhiarch-contractor-case-study',
    type: 'product',
    product: { name: 'RudhiArch', href: '/products/rudhiarch-construction-site-erp' },
    industryTag: 'Construction',
    title: 'How [Contractor Name] improved multi-site visibility with RudhiArch',

    customer: {
      name: '[Contractor Name]',
      industry: 'Construction — Civil Contractor',
      orgType: '[e.g. Civil Contracting Firm]',
      location: '[City, if approved]',
      scale: '[e.g. 5 active sites]',
      duration: '[e.g. 8 weeks]',
    },
    mainResult: '[Cut billing cycle from 10 days to 2 days]',

    challengeSummary: 'No unified site visibility, slow billing, and manual material tracking.',
    challenge:
      '[Describe what was manual or inefficient across sites — material tracking, labour, progress updates, billing, approvals. Explain who was affected (site engineers, owners, the CA), what the problem cost in delays, errors, or wastage, and why spreadsheets/registers were no longer sufficient across multiple sites.]',

    solutionSummary: 'Implemented RudhiArch to centralize materials, labour, progress, and billing.',
    solution:
      '[Explain what was implemented — which RudhiArch modules (materials, labour, site progress, billing, approvals, project reporting) were used, what integrations were completed, how site staff and management adopted the system, and the key implementation decisions. Connect each choice to the problem it solved rather than just listing features.]',

    beforeAfter: [
      { area: 'Material tracking', before: 'Manual registers per site', after: 'Centralized digital tracking' },
      { area: 'Billing cycle', before: '[Measured baseline]', after: '[Measured improvement]' },
      { area: 'Site progress reporting', before: 'Phone calls & photos', after: 'Structured daily reports' },
      { area: 'Owner/CA visibility', before: 'Site visits required', after: 'Real-time dashboard access' },
    ],
    outcomes: [
      'Reduced material wastage',
      'Cut billing cycle from 10 days to 2 days',
      'Improved site visibility for owners & CA',
    ],
    quote: { text: '[Client quote about the results, in their own words.]', author: '[Name, Title, Company Name]' },
  },

  {
    slug: 'hospital-ms-case-study',
    type: 'product',
    product: { name: 'Hospital Management System', href: '/products/hospital-management-system' },
    industryTag: 'Healthcare',
    title: 'How [Hospital Name] streamlined OPD and billing workflows',

    customer: {
      name: '[Hospital Name]',
      industry: 'Healthcare — Multi-Speciality Hospital',
      orgType: '[e.g. Multi-Speciality Hospital]',
      location: '[City, if approved]',
      scale: '[e.g. 120-bed hospital]',
      duration: '[e.g. 10 weeks]',
    },
    mainResult: '[Reduced patient waiting time by X%]',

    challengeSummary: 'OPD queues, manual registers, and recurring billing errors.',
    challenge:
      '[Describe what was manual or inefficient — appointments, OPD/IPD registration, patient records, billing, pharmacy, inventory. Explain who was affected (patients, front-desk staff, doctors), what the problem cost in waiting time, errors, or coordination, and why paper registers were no longer sufficient at this scale.]',

    solutionSummary: 'Implemented the Hospital Management System to centralize OPD, billing, and records.',
    solution:
      '[Explain what was implemented — which modules (appointments, OPD/IPD, patient records, billing, pharmacy, inventory, reports) were used, what integrations were completed, how staff adopted the system, and the key implementation decisions. Connect each choice to the problem it solved rather than just listing features.]',

    beforeAfter: [
      { area: 'Patient registration', before: 'Manual registers', after: 'Digital registration & records' },
      { area: 'OPD waiting time', before: '[Measured baseline]', after: '[Measured improvement]' },
      { area: 'Billing accuracy', before: 'Manual calculation', after: 'System-generated billing' },
      { area: 'Staff coordination', before: 'Paper handoffs', after: 'Shared digital records' },
    ],
    outcomes: [
      'Reduced patient waiting time',
      'Fewer billing errors',
      'Improved staff coordination',
    ],
    quote: { text: '[Client quote about the results, in their own words.]', author: '[Name, Title, Hospital Name]' },
  },

  {
    slug: 'industry-security-factory-case-study',
    type: 'product',
    product: { name: 'Industry Security System', href: '/products/industry-security-system' },
    industryTag: 'Manufacturing',
    title: 'How [Factory Name] replaced manual gate registers with digital security records',

    customer: {
      name: '[Factory Name]',
      industry: 'Manufacturing — Factory / Warehouse',
      orgType: '[e.g. Manufacturing Facility]',
      location: '[City, if approved]',
      scale: '[e.g. 3 gates, 200+ daily visitors]',
      duration: '[e.g. 4 weeks]',
    },
    mainResult: '[100% digital audit trail across all gates]',

    challengeSummary: 'Manual gate registers with no audit trail or access control.',
    challenge:
      '[Describe what was manual or inefficient — visitor, vehicle, vendor, and employee entry logged on paper registers. Explain who was affected (security staff, management), what the problem cost in processing time or unauthorized access risk, and why paper registers were no longer sufficient across multiple gates.]',

    solutionSummary: 'Implemented the Industry Security System to digitize entry and approvals across gates.',
    solution:
      '[Explain what was implemented — which modules (visitors, vehicles, vendors, employee entry, gate approvals, audit trails, multi-gate management) were used, what device integrations were completed (biometric, RFID, cameras), how security staff adopted the system, and the key implementation decisions. Connect each choice to the problem it solved rather than just listing features.]',

    beforeAfter: [
      { area: 'Entry logging', before: 'Paper registers per gate', after: 'Centralized digital entry system' },
      { area: 'Gate processing time', before: '[Measured baseline]', after: '[Measured improvement]' },
      { area: 'Audit trail', before: 'Incomplete/manual', after: 'Complete digital history' },
      { area: 'Security visibility', before: 'Gate-level only', after: 'Real-time, multi-gate dashboard' },
    ],
    outcomes: [
      'Reduced gate processing time',
      '100% digital audit trail',
      'Fewer security incidents',
    ],
    quote: { text: '[Client quote about the results, in their own words.]', author: '[Name, Title, Company Name]' },
  },

  // ── Custom software case studies (2–3) ──────────────────────────────────
  {
    slug: 'custom-software-case-study-1',
    type: 'custom',
    product: { name: 'Custom Software Development', href: '/services/custom-software-development' },
    industryTag: '[Industry]',
    title: 'How [Company Name / Anonymized] automated [specific workflow] with a custom build',

    customer: {
      name: '[Company Name / Anonymized]',
      industry: '[Industry]',
      orgType: '[Company type]',
      location: '[City, if approved]',
      scale: '[Company size]',
      duration: '[Project duration]',
    },
    mainResult: '[Main measurable or qualitative result]',

    challengeSummary: '[One-line summary of the unique workflow problem.]',
    challenge:
      '[Describe the customer\'s unique workflow, integration, or scale problem — and why off-the-shelf software was insufficient for it.]',

    solutionSummary: '[One-line summary of what was built.]',
    solution:
      '[Describe exactly what was designed and built — architecture, integrations, timeline, and adoption. Do not call something a "custom build" without explaining what was actually built.]',

    beforeAfter: [
      { area: '[Process area 1]', before: '[Before state]', after: '[After state]' },
      { area: '[Process area 2]', before: '[Before state]', after: '[After state]' },
      { area: '[Process area 3]', before: '[Before state]', after: '[After state]' },
    ],
    outcomes: [
      '[Outcome 1 with a number, once verified]',
      '[Outcome 2 with a number, once verified]',
      '[Outcome 3 with a number, once verified]',
    ],
    quote: { text: '[Client quote about the results, in their own words.]', author: '[Name, Title, Company Name]' },
  },
  {
    slug: 'custom-software-case-study-2',
    type: 'custom',
    product: { name: 'Custom Software Development', href: '/services/custom-software-development' },
    industryTag: '[Industry]',
    title: 'How [Company Name / Anonymized] replaced [manual process] with a custom [ERP/CRM/Automation] build',

    customer: {
      name: '[Company Name / Anonymized]',
      industry: '[Industry]',
      orgType: '[Company type]',
      location: '[City, if approved]',
      scale: '[Company size]',
      duration: '[Project duration]',
    },
    mainResult: '[Main measurable or qualitative result]',

    challengeSummary: '[One-line summary of the unique workflow problem.]',
    challenge:
      '[Describe the customer\'s unique workflow, integration, or scale problem — and why off-the-shelf software was insufficient for it.]',

    solutionSummary: '[One-line summary of what was built.]',
    solution:
      '[Describe exactly what was designed and built — architecture, integrations, timeline, and adoption. Do not call something a "custom build" without explaining what was actually built.]',

    beforeAfter: [
      { area: '[Process area 1]', before: '[Before state]', after: '[After state]' },
      { area: '[Process area 2]', before: '[Before state]', after: '[After state]' },
      { area: '[Process area 3]', before: '[Before state]', after: '[After state]' },
    ],
    outcomes: [
      '[Outcome 1 with a number, once verified]',
      '[Outcome 2 with a number, once verified]',
      '[Outcome 3 with a number, once verified]',
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