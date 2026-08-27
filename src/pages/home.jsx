import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import heroBg from '../assets/images/hero-bg.jpg';
import about from '../assets/images/about-us.jpg';
import SEO, { organizationSchema } from '../Components/SEO';
import {
  FaBolt, FaBullseye, FaCalendarAlt, FaCommentDots, FaGraduationCap, FaHandshake,
  FaHardHat, FaHospital, FaLightbulb, FaLock, FaRocket, FaTools, FaTrophy,
  FaCheckCircle, FaSlidersH, FaClipboardList, FaHeadset, FaSearch, FaCogs,
  FaLifeRing, FaChevronDown,
} from 'react-icons/fa';

// ─── Data ────────────────────────────────────────────────────────────────────
const products = [
  {
    icon: <FaGraduationCap />,
    name: "RudhiCore",
    tag: "School & College Management",
    desc: "Admissions, attendance, fees, exams, transport & hostel — on one platform.",
    features: ["Admissions", "Fees & Attendance", "Exams & Transport"],
    url: "/products/rudhicore-school-college-management",
  },
  {
    icon: <FaHardHat />,
    name: "RudhiArch",
    tag: "Construction Project & Site Management",
    desc: "Track sites, materials, labour, billing & compliance from one dashboard.",
    features: ["Multi-site Tracking", "Billing", "Compliance"],
    url: "/products/rudhiarch-construction-site-erp",
  },
  {
    icon: <FaHospital />,
    name: "Hospital Management System",
    tag: "Hospital & Clinic Management Software",
    desc: "OPD, IPD, EMR, billing & pharmacy for clinics and hospitals.",
    features: ["OPD & IPD", "EMR", "Billing & Pharmacy"],
    url: "/products/hospital-management-system",
  },
  {
    icon: <FaLock />,
    name: "Industry Security System",
    tag: "Industrial Gate Entry & Security Management",
    desc: "Digital visitor & vehicle management with a full audit trail.",
    features: ["Visitor Management", "Gate In-Out", "Access Control"],
    url: "/products/industry-security-system",
  },
];

const aboutFeatures = [
  { icon: <FaBullseye />, title: "Outcome-focused", desc: "We begin with your operational problem, not just a technology choice." },
  { icon: <FaLightbulb />, title: "Industry-aware", desc: "Our products are designed around real workflows in education, construction, healthcare, and industry." },
  { icon: <FaHandshake />, title: "Transparent delivery", desc: "You receive clear milestones, regular demonstrations, and practical documentation." },
  { icon: <FaBolt />, title: "Long-term support", desc: "We continue helping with training, improvements, maintenance, and scaling." },
];

const testimonials = [
  {
    icon: <FaGraduationCap />,
    role: "School Administrator",
    org: "Multi-branch school group, Maharashtra",
    product: "RudhiCore customer",
    quote: "RudhiCore significantly reduced our admission paperwork and gave us one place to manage fees, attendance, and reporting across every branch. Our front-office team spends far less time on manual entry now.",
    caseStudyLabel: "Read the RudhiCore story",
    caseStudyUrl: "/case-studies/rudhicore-school-case-study",
  },
  {
    icon: <FaHardHat />,
    role: "Site Manager",
    org: "Construction firm, Maharashtra",
    product: "RudhiArch customer",
    quote: "We get real-time visibility across all our sites with RudhiArch, and our billing cycle has shortened from 10 days to just 2. Tracking materials and labour is finally organised instead of scattered across spreadsheets.",
    caseStudyLabel: "See the RudhiArch results",
    caseStudyUrl: "/case-studies/rudhiarch-contractor-case-study",
  },
  {
    icon: <FaHospital />,
    role: "Hospital Administrator",
    org: "Multi-speciality hospital, Maharashtra",
    product: "Hospital Management System customer",
    quote: "Since going live, patient waiting time in OPD has come down and billing errors have reduced noticeably. Having EMR, billing, and pharmacy connected has made day-to-day operations much smoother for our staff.",
    caseStudyLabel: "Read the hospital implementation story",
    caseStudyUrl: "/case-studies/hospital-ms-case-study",
  },
];

const howItWorks = [
  { icon: <FaSearch />, step: "01", title: "Understand", desc: "We learn your workflows, roles, and operational challenges." },
  { icon: <FaLightbulb />, step: "02", title: "Recommend", desc: "We identify the right product or define a custom solution." },
  { icon: <FaCogs />, step: "03", title: "Configure or build", desc: "We adapt, integrate, or develop the system." },
  { icon: <FaRocket />, step: "04", title: "Deploy and train", desc: "We help your team go live confidently." },
  { icon: <FaLifeRing />, step: "05", title: "Support and improve", desc: "We provide ongoing maintenance and enhancements." },
];

const whyChoose = [
  { icon: <FaCheckCircle />, title: "Industry-ready products" },
  { icon: <FaSlidersH />, title: "Customizable workflows" },
  { icon: <FaClipboardList />, title: "Clear implementation process" },
  { icon: <FaHeadset />, title: "Training and ongoing support" },
];

const faqs = [
  { q: "How long does implementation take?", a: "Most ready-made products go live within days once your data and workflows are shared with us. Custom solutions have a project timeline agreed upfront." },
  { q: "Can the software be customized?", a: "Yes. Our ready-made products can be configured to your workflow, and we also build fully custom ERP, CRM, and automation solutions." },
  { q: "Do you provide training?", a: "Yes. We train your team as part of every deployment and provide reference documentation for ongoing use." },
  { q: "Can we use the software for multiple branches or sites?", a: "Yes. RudhiCore, RudhiArch, and our other products support multi-branch and multi-site operations from a single dashboard." },
  { q: "Is data hosted in the cloud?", a: "Yes, our products are cloud-hosted, so your data is accessible securely from anywhere. On-premise options can be discussed for specific requirements." },
  { q: "Can you migrate our existing Excel or paper records?", a: "Yes. We help migrate existing spreadsheets and paper-based records into your new system as part of onboarding." },
  { q: "Do you provide ongoing support?", a: "Yes. Every deployment includes ongoing support, maintenance, and enhancements as your business grows." },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const handler = () => {
      document.querySelectorAll(".rs-reveal, .rs-reveal-left, .rs-reveal-right, .rs-stagger").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 150) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function HomePage() {
  const [backVisible, setBackVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const heroRef = useRef(null);

  useScrollReveal();

  // Back-to-top visibility only
  useEffect(() => {
    const handleScroll = () => {
      setBackVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax shapes on mouse
  useEffect(() => {
    const handler = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      document.querySelectorAll(".rs-shape").forEach((shape, i) => {
        const speed = (i + 1) * 20;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  // Card tilt
  useEffect(() => {
    const cards = document.querySelectorAll(".rs-service-card, .rs-tech-card, .rs-why-card");
    const handleMove = (card) => (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.transform = `perspective(1000px) rotateX(${(y - r.height / 2) / 20}deg) rotateY(${(r.width / 2 - x) / 20}deg) translateY(-8px)`;
    };
    const handleLeave = (card) => () => { card.style.transform = ""; };
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMove(card));
      card.addEventListener("mouseleave", handleLeave(card));
    });
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMove(card));
        card.removeEventListener("mouseleave", handleLeave(card));
      });
    };
  });

  return (
    <div className="rs-body">

      <SEO
        title="Software Solutions for Schools, Contractors, Hospitals & Industrial Security | Rudhisoft"
        description="Rudhisoft provides ready-to-deploy school, construction, hospital, and industrial security software, plus custom ERP, CRM, automation, and integration solutions."
        path="/"
        keywords="school management software India, construction site management software, hospital management software India, industrial security system for factories, RudhiCore, RudhiArch"
        jsonLd={organizationSchema}
      />

      {/* HERO */}
      <section className="rs-hero" id="home" ref={heroRef}>
        <div className="rs-hero-bg">
          <div
            className="rs-hero-bg-image"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
        </div>
        <div className="rs-floating-shapes">
          <div className="rs-shape rs-shape-1" />
          <div className="rs-shape rs-shape-2" />
          <div className="rs-shape rs-shape-3" />
          <div className="rs-shape rs-shape-4" />
        </div>
        <div className="rs-hero-grid" />
        <div className="rs-hero-content">
          <div className="rs-hero-badge">
            <span className="rs-hero-badge-dot" />
            Trusted by Schools, Contractors, Hospitals & Factories
          </div>
          <h1 className="rs-hero-title">
            Ready-made software for schools, construction sites, hospitals,{" "}
            <span className="rs-hero-title-gradient">and industrial security</span>
            {" "}— plus custom software development.
          </h1>
          <p className="rs-hero-subtitle">
            Deploy faster than starting from scratch—with software built for Indian businesses.
          </p>
          <div className="rs-hero-buttons">
            <Link to="/contact" className="rs-btn rs-btn-primary">
              <span className="rs-btn-icon"><FaCalendarAlt /></span>
              <span>Book a product demo</span>
            </Link>
            <a href="#products" className="rs-btn rs-btn-secondary">
              <span>Explore our products</span>
              <span className="rs-btn-icon">→</span>
            </a>
          </div>
          <div className="rs-hero-stats">
            {[["15+", "Projects Delivered"], ["98%", "Trusted by businesses across Maharashtra"], ["10+", "Software Professionals and Specialists"]].map(([num, label]) => (
              <div className="rs-hero-stat" key={label}>
                <div className="rs-hero-stat-number">{num}</div>
                <div className="rs-hero-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rs-scroll-indicator">
          <a href="#about">
            <div className="rs-scroll-indicator-icon"><div className="rs-scroll-dot" /></div>
            <span>Scroll to explore</span>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="rs-about" id="about">
        <div className="rs-container">
          <div className="rs-about-grid">
            <div className="rs-about-content rs-reveal-left">
              <span className="rs-section-badge"><span><FaRocket /></span> About Us</span>
              <h2 className="rs-section-title">We're Redefining What's <span>Possible</span> in Technology</h2>
              <p className="rs-about-description">Rudhisoft helps schools, contractors, hospitals, and factories replace paper-based processes and disconnected spreadsheets with reliable business software.</p>
              <p className="rs-about-description">We offer ready-to-deploy products for education, construction, healthcare, and industrial security. When your workflow is unique, our team builds custom ERP, CRM, automation, and integration solutions around your business.</p>
              <div className="rs-about-features">
                {aboutFeatures.map((f) => (
                  <div className="rs-about-feature" key={f.title}>
                    <div className="rs-about-feature-icon">{f.icon}</div>
                    <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="rs-btn rs-btn-primary" style={{ background: "var(--primary-gradient)", color: "var(--white)" }}>
                Learn More About Us <span className="rs-btn-icon">→</span>
              </a>
            </div>
            <div className="rs-about-visual rs-reveal-right">
              <div className="rs-about-image-wrapper">
                <img
                  src={about}
                  alt="RUDHISOFT Team"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop"; }}
                />
              </div>
              <div className="rs-about-float-card">
                <div className="rs-about-float-icon"><FaTrophy /></div>
                <div className="rs-about-float-content">
                  <h4>10+ Years</h4>
                  <p>of Software Development Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="rs-services" id="products">
        <div className="rs-container">
          <div className="rs-services-header rs-reveal">
            <span className="rs-section-badge"><span><FaRocket /></span> Our Products</span>
            <h2 className="rs-section-title">Ready-to-Deploy <span>Software</span> for Your Industry</h2>
            <p className="rs-section-subtitle" style={{ margin: "0 auto" }}>Purpose-built platforms for schools, contractors, hospitals, and factories—configured for your workflow and deployed faster than custom development.</p>
          </div>
          <div className="rs-services-grid rs-stagger">
            {products.map((p) => (
              <div className="rs-service-card" key={p.name}>
                <div className="rs-service-icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <p style={{ fontWeight: 600, color: "var(--gray-900)", marginBottom: "6px", fontSize: "0.9rem" }}>{p.tag}</p>
                <p>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "10px 0" }}>
                  {p.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "var(--primary)",
                        background: "var(--gray-100, #f3f4f6)",
                        padding: "4px 10px",
                        borderRadius: "999px",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="rs-product-ctas">
                  <Link to={p.url} className="rs-link-primary">View features →</Link>
                  <Link to="/contact" className="rs-link-secondary">Book a product demo</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="rs-testimonials" id="testimonials">
        <div className="rs-container">
          <div className="rs-testimonials-header rs-reveal">
            <span className="rs-section-badge"><span><FaCommentDots /></span> Customer Results</span>
            <h2 className="rs-section-title">Trusted by <span>Schools, Contractors & Hospitals</span></h2>
            <p className="rs-section-subtitle" style={{ margin: "0 auto" }}>Real outcomes from schools, contractors, hospitals, and factories using our software.</p>
          </div>
          <div className="rs-testimonials-grid rs-stagger">
            {testimonials.map((t) => (
              <div className="rs-testimonial-card" key={t.role + t.product}>
                <div className="rs-testimonial-rating">{"⭐".repeat(5).split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                <p className="rs-testimonial-text">{t.quote}</p>
                <div className="rs-testimonial-author">
                  <div className="rs-testimonial-avatar">{t.icon}</div>
                  <div className="rs-testimonial-info">
                    <h4>{t.role}</h4>
                    <p>{t.org}</p>
                    <p>{t.product}</p>
                  </div>
                </div>
                <Link to={t.caseStudyUrl} className="rs-link-primary" style={{ display: "inline-block", marginTop: "12px" }}>
                  {t.caseStudyLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW RUDHISOFT WORKS */}
      <section className="rs-services" id="how-it-works">
        <div className="rs-container">
          <div className="rs-services-header rs-reveal">
            <span className="rs-section-badge"><span><FaCogs /></span> Our Process</span>
            <h2 className="rs-section-title">How Rudhisoft Works</h2>
          </div>
          <div className="rs-services-grid rs-stagger">
            {howItWorks.map((s) => (
              <div className="rs-service-card" key={s.step}>
                <div className="rs-service-icon">{s.icon}</div>
                <p style={{ fontWeight: 700, color: "var(--primary)", marginBottom: "4px" }}>Step {s.step}</p>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM SOFTWARE SECTION */}
      <section className="rs-custom-software" id="custom-software">
        <div className="rs-container">
          <div className="rs-custom-software-inner rs-reveal">
            <span className="rs-section-badge"><span><FaTools /></span> Custom Software Development</span>
            <h2 className="rs-section-title">Need Software Built Around Your <span>Workflow?</span></h2>
            <p>When standard products are not enough, we build custom ERP, CRM, workflow automation, portals, and integrations for growing businesses.</p>
            <ul>
              <li>Custom ERP and CRM</li>
              <li>Workflow and AI automation</li>
              <li>Business portals and third-party integrations</li>
            </ul>
            <Link to="/services/custom-software-development" className="rs-btn rs-btn-primary">
              <span>Discuss your project</span>
              <span className="rs-btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE RUDHISOFT */}
      <section className="rs-services" id="why-choose-us">
        <div className="rs-container">
          <div className="rs-services-header rs-reveal">
            <span className="rs-section-badge"><span><FaCheckCircle /></span> Why Rudhisoft</span>
            <h2 className="rs-section-title">Why Choose <span>Rudhisoft</span></h2>
          </div>
          <div className="rs-services-grid rs-stagger">
            {whyChoose.map((w) => (
              <div className="rs-why-card rs-service-card" key={w.title}>
                <div className="rs-service-icon">{w.icon}</div>
                <h3>{w.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rs-about" id="faq">
        <div className="rs-container">
          <div className="rs-services-header rs-reveal">
            <span className="rs-section-badge"><span><FaCommentDots /></span> FAQ</span>
            <h2 className="rs-section-title">Frequently Asked <span>Questions</span></h2>
          </div>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            {faqs.map((f, i) => (
              <div
                key={f.q}
                style={{
                  borderBottom: "1px solid var(--gray-200, #e5e7eb)",
                  padding: "16px 0",
                  cursor: "pointer",
                }}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 600 }}>
                  <span>{f.q}</span>
                  <FaChevronDown
                    style={{
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      flexShrink: 0,
                      marginLeft: "12px",
                    }}
                  />
                </div>
                {openFaq === i && (
                  <p style={{ marginTop: "10px", color: "var(--gray-600, #6b7280)" }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA BAND */}
      <section className="rs-footer-cta-band" id="contact">
        <div className="rs-container">
          <p>Not sure which product fits? Get a free 20-minute consultation.</p>
          <Link to="/contact" className="rs-btn" style={{ background: "var(--white)", color: "var(--primary)" }}>
            <span>Get a free 20-minute consultation</span>
            <span className="rs-btn-icon">→</span>
          </Link>
        </div>
      </section>

      {/* BACK TO TOP */}
      <button
        className={`rs-back-to-top${backVisible ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>

    </div>
  );
}