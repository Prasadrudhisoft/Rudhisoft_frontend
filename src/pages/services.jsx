import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import aiServiceImg from "../assets/images/custom-software.jpg";
import "./services.css";
import SEO, { organizationSchema, breadcrumbSchema } from "../Components/SEO";
import {
  FaBrain, FaChartBar, FaChartLine, FaChevronDown, FaClipboardList, FaCloud,
  FaCommentDots, FaExchangeAlt, FaFileAlt, FaGraduationCap, FaHardHat, FaHospital,
  FaIndustry, FaLaptopCode, FaMobileAlt, FaQuestionCircle, FaRobot, FaRocket,
  FaStar, FaSyncAlt, FaWrench,
} from "react-icons/fa";

const PATH = "/services";

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, active];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Software Development",
    desc: "Replace disconnected spreadsheets, manual processes, and unsuitable off-the-shelf tools with software designed around your business.",
    features: ["Enterprise applications", "SaaS products", "Internal business platforms", "Legacy modernization", "Custom dashboards and portals"],
    cta: "Explore Custom Software",
    to: "/services/custom-software-development",
  },
  {
    icon: <FaChartBar />,
    title: "ERP & CRM Solutions",
    desc: "Centralize operations, customer information, approvals, reporting, and business data in systems your teams can use every day.",
    features: ["Custom ERP", "CRM systems", "Sales pipeline management", "Inventory and operations", "Multi-branch reporting", "Finance and billing workflows"],
    cta: "Explore ERP & CRM",
    to: "/services/erp-crm-solutions",
  },
  {
    icon: <FaMobileAlt />,
    title: "Web & Mobile Applications",
    desc: "Build responsive web applications, customer portals, dashboards, and mobile apps that make your business accessible anywhere.",
    features: ["Progressive web applications", "Customer and partner portals", "iOS and Android apps", "Flutter and React Native", "API-backed applications", "Admin dashboards"],
    cta: "Explore Web & Mobile",
    to: "/services/web-mobile-applications",
  },
  {
    icon: <FaRobot />,
    title: "AI & Workflow Automation",
    desc: "Automate repetitive work, extract information from business data, and connect AI capabilities to the workflows your team already uses.",
    features: ["AI assistants", "Document processing", "LLM integrations", "Predictive reporting", "Approval automation", "Automated notifications and follow-ups"],
    cta: "Explore AI & Automation",
    to: "/services/workflow-automation",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Software Integration",
    desc: "Connect your existing systems so information moves reliably between applications instead of being copied manually.",
    features: ["REST and GraphQL APIs", "Payment gateways", "SMS, WhatsApp, and email", "Accounting and ERP integrations", "Biometric and RFID devices", "CCTV and access-control integrations"],
    cta: "Explore Integrations",
    to: "/services/software-integration",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    desc: "Deploy and operate software on reliable cloud infrastructure with automated releases, monitoring, backups, security, and cost control.",
    features: ["AWS, Azure, and GCP", "Cloud migration", "Docker and Kubernetes", "CI/CD pipelines", "Infrastructure as code", "Monitoring and logging", "Backup and disaster recovery"],
    cta: "Explore Cloud & DevOps",
    to: "/services/cloud-devops",
  },
];

const aiPoints = [
  { icon: <FaFileAlt />, title: "Document automation", desc: "Extract information from invoices, forms, and reports." },
  { icon: <FaCommentDots />, title: "Conversational AI", desc: "Help employees and customers find information faster." },
  { icon: <FaChartLine />, title: "Predictive insights", desc: "Identify patterns, trends, and operational risks." },
  { icon: <FaSyncAlt />, title: "Workflow automation", desc: "Automate approvals, alerts, notifications, and follow-ups." },
];

const industries = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    desc: "Admissions, attendance, fees, examinations, portals, integrations, and custom academic workflows.",
    product: "RudhiCore",
    to: "/products/rudhicore-school-college-management",
  },
  {
    icon: <FaHardHat />,
    title: "Construction & Infrastructure",
    desc: "Site reporting, materials, labour, billing, project workflows, dashboards, and mobile access.",
    product: "RudhiArch",
    to: "/products/rudhiarch-construction-site-erp",
  },
  {
    icon: <FaHospital />,
    title: "Healthcare",
    desc: "OPD, IPD, appointments, billing, pharmacy, inventory, records, and hospital integrations.",
    product: "Hospital Management System",
    to: "/products/hospital-management-system",
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing & Industrial",
    desc: "Gate entry, visitor management, vehicle tracking, access control, security logs, and custom ERP.",
    product: "Industrial Gate Entry & Security System",
    to: "/products/industry-security-system",
  },
];

const processSteps = [
  { num: "01", title: "Discover", desc: "We understand your business goals, users, current workflows, constraints, and success criteria." },
  { num: "02", title: "Plan", desc: "We define the scope, architecture, integrations, milestones, and implementation approach." },
  { num: "03", title: "Design and Build", desc: "We design the experience and develop the solution through focused delivery cycles." },
  { num: "04", title: "Test and Validate", desc: "We test functionality, security, performance, integrations, and real user workflows." },
  { num: "05", title: "Deploy and Train", desc: "We launch the system, migrate approved data, and train your team." },
  { num: "06", title: "Support and Improve", desc: "We provide maintenance, monitoring, issue resolution, and future enhancements." },
];

const results = [
  { icon: <FaGraduationCap />, title: "Education", desc: "Reduced admission paperwork and centralized fees, attendance, and academic records with RudhiCore." },
  { icon: <FaHardHat />, title: "Construction", desc: "Improved visibility across project sites and reduced the billing cycle with RudhiArch." },
  { icon: <FaHospital />, title: "Healthcare", desc: "Digitized OPD and billing workflows to help reduce waiting time and billing errors." },
  { icon: <FaIndustry />, title: "Industrial", desc: "Replaced manual gate registers with digital entry records and audit trails." },
];

const techGroups = [
  { group: "Applications", items: ["React", "Node.js", "Python"] },
  { group: "Cloud and infrastructure", items: ["AWS", "Docker", "Kubernetes"] },
  { group: "AI and data", items: ["TensorFlow", "AI/ML tools"] },
  { group: "Databases and APIs", items: ["PostgreSQL", "REST APIs", "Third-party integrations"] },
];

const faqs = [
  { q: "How do you estimate a custom software project?", a: "We first understand your goals, users, workflows, integrations, and expected deliverables. We then provide a proposed scope, implementation approach, timeline, and commercial estimate." },
  { q: "Can you integrate with our current ERP or accounting system?", a: "Yes. We can assess and integrate suitable systems such as accounting software, payment gateways, communication tools, biometric devices, RFID systems, and other business applications." },
  { q: "Can your ready-to-deploy products be customized?", a: "Yes. Depending on the requirement, we can configure workflows, reports, roles, branding, integrations, and selected features. If the requirement is outside the product's scope, we can recommend a custom solution." },
  { q: "How long does a software project take?", a: "The timeline depends on the scope, number of users, integrations, data migration, testing, and customization required. After the discovery discussion, we provide a realistic project timeline." },
  { q: "Do you provide support after launch?", a: "Yes. We can provide deployment support, user training, troubleshooting, maintenance, monitoring, and future enhancements according to the agreed support plan." },
  { q: "Which technologies do you use?", a: "We work with technologies such as React, Node.js, Python, PostgreSQL, AWS, Docker, Kubernetes, and AI/ML tools. The final technology stack depends on the project's requirements and long-term needs." },
  { q: "Can you work with our existing technology team?", a: "Yes. We can deliver the complete project or collaborate with your internal team for development, integrations, modernization, testing, cloud deployment, or specialized technical work." },
];

// ─── ServiceCard ──────────────────────────────────────────────────────────────
function ServiceCard({ icon, title, desc, features, cta, to }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul className="service-features">
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <Link to={to} className="service-link">{cta} →</Link>
    </div>
  );
}

// ─── ProcessStep ─────────────────────────────────────────────────────────────
function ProcessStep({ num, title, desc }) {
  return (
    <div className="process-step">
      <div className="process-number">{num}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

// ─── FaqItem ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="svc-faq-item" onClick={onToggle}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
        <h4>{q}</h4>
        <FaChevronDown
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            flexShrink: 0,
            color: "var(--primary)",
          }}
        />
      </div>
      {isOpen && <p>{a}</p>}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ServicesPage() {
  // Scroll reveal refs
  const [heroRef, heroActive] = useScrollReveal();
  const [introRef, introActive] = useScrollReveal();
  const [gridRef, gridActive] = useScrollReveal();
  const [featLeftRef, featLeftActive] = useScrollReveal();
  const [featRightRef, featRightActive] = useScrollReveal();
  const [indRef, indActive] = useScrollReveal();
  const [indGridRef, indGridActive] = useScrollReveal();
  const [procRef, procActive] = useScrollReveal();
  const [procStepsRef, procStepsActive] = useScrollReveal();
  const [resRef, resActive] = useScrollReveal();
  const [resGridRef, resGridActive] = useScrollReveal();
  const [techRef, techActive] = useScrollReveal();
  const [techGroupsRef, techGroupsActive] = useScrollReveal();
  const [faqRef, faqActive] = useScrollReveal();
  const [ctaRef, ctaActive] = useScrollReveal();

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={{ paddingTop: "0" }}>
      <SEO
        title="Custom Software Development Services | ERP, AI & Cloud"
        description="Rudhisoft provides custom software, ERP and CRM development, web and mobile applications, AI automation, system integration, and cloud services for growing businesses."
        path={PATH}
        keywords="custom software development, ERP CRM development, AI automation, cloud DevOps, software integration"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: PATH }])]}
      />

      {/* ── HERO ── */}
      <section className="svc-hero">
        <div className="container">
          <div ref={heroRef} className={`reveal${heroActive ? " active" : ""}`}>
            <span className="section-badge"><span><FaRocket /></span> Custom Software Services</span>
            <h1>Build, integrate, and scale software around your business workflow.</h1>
            <p className="svc-hero-subhead">
              Rudhisoft helps growing businesses modernize operations with custom ERP, CRM, web and mobile
              applications, AI automation, cloud infrastructure, and integrations. We also extend our
              ready-to-deploy products when your workflow needs more.
            </p>
            <div className="svc-hero-ctas">
              <Link to="/contact" className="btn btn-primary">Discuss your project →</Link>
              <Link to="/case-studies" className="btn btn-ghost">View Case Studies</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS VS SERVICES BAND ── */}
      <section className="svc-intro-band">
        <div className="container">
          <div ref={introRef} className={`svc-intro-band-inner reveal${introActive ? " active" : ""}`}>
            <h2>Products for common workflows. Custom services for unique needs.</h2>
            <p>
              Choose RudhiCore, RudhiArch, Hospital Management System, or Industrial Gate Entry &amp; Security
              when you need a ready-to-deploy platform. Choose our custom services when your processes,
              integrations, reporting, or business model require a tailored solution.
            </p>
            <div className="svc-intro-band-buttons">
              <Link to="/products" className="btn btn-primary">Explore Our Products →</Link>
              <Link to="/contact" className="btn btn-ghost">Request a Custom Solution</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="services-overview">
        <div className="container">
          <div ref={gridRef} className={`services-grid stagger-children${gridActive ? " active" : ""}`}>
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED: AI ── */}
      <section className="featured-service">
        <div className="container">
          <div className="featured-grid">
            <div ref={featLeftRef} className={`featured-content reveal-left${featLeftActive ? " active" : ""}`}>
              <span className="section-badge"><span><FaStar /></span> Featured Service</span>
              <h2>Automate the work that <span>slows your business down</span></h2>
              <p>
                We help businesses use AI to process documents, answer routine questions, generate reports,
                predict trends, and automate repetitive workflows.
              </p>

              <div className="featured-points">
                {aiPoints.map((pt) => (
                  <div className="featured-point" key={pt.title}>
                    <div className="featured-point-icon">{pt.icon}</div>
                    <div>
                      <h4>{pt.title}</h4>
                      <p>{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn btn-primary">Discuss an AI Use Case →</Link>
            </div>

            <div ref={featRightRef} className={`featured-visual reveal-right${featRightActive ? " active" : ""}`}>
              <div className="featured-image">
                <img
                  src={aiServiceImg}
                  alt="AI-powered automation for business workflows"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"; }}
                />
              </div>
              <div className="featured-float">
                <div className="featured-float-icon"><FaRobot /></div>
                <div>
                  <h4>AI</h4>
                  <p>Workflow Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="svc-industries">
        <div className="container">
          <div ref={indRef} className={`svc-industries-header reveal${indActive ? " active" : ""}`}>
            <span className="section-badge"><span><FaClipboardList /></span> Industries We Serve</span>
            <h2 className="section-title">Services for real <span>operational environments</span></h2>
          </div>

          <div ref={indGridRef} className={`svc-industries-grid stagger-children${indGridActive ? " active" : ""}`}>
            {industries.map((ind) => (
              <div className="svc-industry-card" key={ind.title}>
                <div className="svc-industry-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
                <Link to={ind.to}>{ind.product} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section">
        <div className="container">
          <div ref={procRef} className={`process-header reveal${procActive ? " active" : ""}`}>
            <span className="section-badge"><span><FaSyncAlt /></span> How We Work</span>
            <h2 className="section-title">From business problem to <span>working software</span></h2>
            <p className="section-subtitle">
              A transparent delivery process designed to reduce risk and help your team adopt the solution successfully.
            </p>
          </div>

          <div ref={procStepsRef} className={`svc-process-steps stagger-children${procStepsActive ? " active" : ""}`}>
            {processSteps.map((s) => (
              <ProcessStep key={s.num} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="svc-results">
        <div className="container">
          <div ref={resRef} className={`svc-results-header reveal${resActive ? " active" : ""}`}>
            <span className="section-badge"><span><FaChartBar /></span> Outcomes</span>
            <h2 className="section-title">Results from practical <span>software delivery</span></h2>
          </div>

          <div ref={resGridRef} className={`svc-results-grid stagger-children${resGridActive ? " active" : ""}`}>
            {results.map((r) => (
              <div className="svc-result-card" key={r.title}>
                <div className="svc-industry-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <Link to="/case-studies">Read the case study →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY ── */}
      <section className="technologies">
        <div className="container">
          <div ref={techRef} className={`tech-header reveal${techActive ? " active" : ""}`}>
            <span className="section-badge"><span><FaWrench /></span> Technology</span>
            <h2 className="section-title">Technology selected for <span>performance and maintainability</span></h2>
            <p className="svc-tech-desc">
              We select technologies according to your requirements, expected scale, integrations, security
              needs, and long-term maintenance — not simply because a tool is popular.
            </p>
          </div>

          <div ref={techGroupsRef} className={`svc-tech-groups stagger-children${techGroupsActive ? " active" : ""}`}>
            {techGroups.map((g) => (
              <div className="svc-tech-group" key={g.group}>
                <h4>{g.group}</h4>
                <ul>
                  {g.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="svc-tech-cta">
            <Link to="/technology" className="btn btn-primary">Explore Our Technology Approach →</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="svc-faq">
        <div className="container">
          <div ref={faqRef} className={`svc-faq-header reveal${faqActive ? " active" : ""}`}>
            <span className="section-badge"><span><FaQuestionCircle /></span> FAQs</span>
            <h2 className="section-title">Questions about our <span>services</span></h2>
          </div>

          <div className="svc-faq-list">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <div className="container">
          <div ref={ctaRef} className={`cta-content reveal${ctaActive ? " active" : ""}`}>
            <h2 className="cta-title">Have a business process that needs better software?</h2>
            <p className="cta-text">
              Tell us what your team is managing manually. We'll help you determine whether a ready-to-deploy
              product, integration, or custom solution is the right fit.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Discuss Your Project →</Link>
              <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}