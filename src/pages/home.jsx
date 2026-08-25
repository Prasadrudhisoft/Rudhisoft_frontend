import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import heroBg from '../assets/images/hero-bg.jpg';
import about from '../assets/images/about-us.jpg';
import SEO, { organizationSchema } from '../Components/SEO';
import { FaBolt, FaBullseye, FaCalendarAlt, FaCommentDots, FaGraduationCap, FaHandshake, FaHardHat, FaHospital, FaLightbulb, FaLock, FaRocket, FaTools, FaTrophy } from 'react-icons/fa';

// ─── Data ────────────────────────────────────────────────────────────────────
const products = [
  {
    icon: <FaGraduationCap />,
    name: "RudhiCore",
    tag: "School / College Management",
    desc: "All-in-one school & college management software — admissions, attendance, fees, exams, transport, hostel, reports on one platform.",
    url: "/products/rudhicore-school-college-management",
  },
  {
    icon: <FaHardHat />,
    name: "RudhiArch",
    tag: "Construction Site ERP",
    desc: "Construction project & site management ERP for contractors — track sites, materials, labour, billing, and compliance from one dashboard.",
    url: "/products/rudhiarch-construction-site-erp",
  },
  {
    icon: <FaHospital />,
    name: "Hospital Management System",
    tag: "Clinics & Multi-Speciality Hospitals",
    desc: "Hospital management software for clinics, nursing homes, and multi-speciality hospitals — OPD, IPD, EMR, billing, pharmacy, and reports.",
    url: "/products/hospital-management-system",
  },
  {
    icon: <FaLock />,
    name: "Industry Security System",
    tag: "Industrial Gate In-Out System",
    desc: "Industrial security & access management for factories and warehouses — digital visitor & vehicle management with a full audit trail.",
    url: "/products/industry-security-system",
  },
];

const testimonials = [
  { initials: "RC", name: "School Administrator", role: "RudhiCore Customer", text: "We cut admission paperwork time by 60% after moving to RudhiCore — fee collection and reporting finally happen on one platform." },
  { initials: "RA", name: "Site Manager", role: "RudhiArch Customer", text: "RudhiArch gave us real-time visibility across sites and cut our billing cycle from 10 days to 2 days." },
  { initials: "HM", name: "Hospital Administrator", role: "Hospital MS Customer", text: "Digital OPD and integrated billing reduced patient waiting time and cut billing errors significantly." },
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
        title="School, Construction, Hospital & Industrial Security Software"
        description="Ready-made software for schools, construction sites, hospitals, and industrial security — plus custom builds. Deploy in days, not months. Built for Indian businesses."
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
            {" "}— plus custom builds.
          </h1>
          <p className="rs-hero-subtitle">
            Deploy in days, not months. Built for Indian businesses.
          </p>
          <div className="rs-hero-buttons">
            <a href="#products" className="rs-btn rs-btn-primary">
              <span>See our products</span>
              <span className="rs-btn-icon">→</span>
            </a>
            <Link to="/contact" className="rs-btn rs-btn-secondary">
              <span className="rs-btn-icon"><FaCalendarAlt /></span>
              <span>Book a demo</span>
            </Link>
          </div>
          <div className="rs-hero-stats">
            {[["15+", "Projects Delivered"], ["98%", "Client Satisfaction"], ["10+", "Tech Experts"]].map(([num, label]) => (
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
              <p className="rs-about-description">At RUDHISOFT, we're more than just a software company — we're your strategic technology partner. Our team of innovators, engineers, and strategists work together to deliver solutions that transform businesses and create lasting impact.</p>
              <p className="rs-about-description">From startups to enterprises, we've helped organizations across the globe leverage cutting-edge technology to solve complex challenges and unlock new opportunities.</p>
              <div className="rs-about-features">
                {[[<FaBullseye />, "Mission-Driven", "Focused on your success"], [<FaLightbulb />, "Innovation First", "Cutting-edge solutions"], [<FaHandshake />, "True Partnership", "Long-term collaboration"], [<FaBolt />, "Agile Delivery", "Fast & efficient"]].map(([icon, h, p]) => (
                  <div className="rs-about-feature" key={h}>
                    <div className="rs-about-feature-icon">{icon}</div>
                    <div><h4>{h}</h4><p>{p}</p></div>
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
                  <p>Industry Experience</p>
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
            <h2 className="rs-section-title">Ready-Made <span>Software</span>, Built for Your Industry</h2>
            <p className="rs-section-subtitle" style={{ margin: "0 auto" }}>Purpose-built platforms for schools, contractors, hospitals, and factories — deploy in days, not months.</p>
          </div>
          <div className="rs-services-grid rs-stagger">
            {products.map((p) => (
              <div className="rs-service-card" key={p.name}>
                <div className="rs-service-icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <p style={{ fontWeight: 600, color: "var(--gray-900)", marginBottom: "8px" }}>{p.tag}</p>
                <p>{p.desc}</p>
                <div className="rs-product-ctas">
                  <Link to={p.url} className="rs-link-primary">View features →</Link>
                  <Link to="/contact" className="rs-link-secondary">Book demo</Link>
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
            <span className="rs-section-badge"><span><FaCommentDots /></span> Social Proof</span>
            <h2 className="rs-section-title">Trusted by <span>Schools, Contractors & Hospitals</span></h2>
            <p className="rs-section-subtitle" style={{ margin: "0 auto" }}>Real outcomes from schools, contractors, hospitals, and factories using our software.</p>
          </div>
          <div className="rs-testimonials-grid rs-stagger">
            {testimonials.map((t) => (
              <div className="rs-testimonial-card" key={t.name}>
                <div className="rs-testimonial-rating">{"⭐".repeat(5).split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                <p className="rs-testimonial-text">"{t.text}"</p>
                <div className="rs-testimonial-author">
                  <div className="rs-testimonial-avatar">{t.initials}</div>
                  <div className="rs-testimonial-info"><h4>{t.name}</h4><p>{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM SOFTWARE SECTION */}
      <section className="rs-custom-software" id="custom-software">
        <div className="rs-container">
          <div className="rs-custom-software-inner rs-reveal">
            <span className="rs-section-badge"><span><FaTools /></span> Custom Software</span>
            <h2 className="rs-section-title">Need Something <span>Specific?</span></h2>
            <ul>
              <li>We build custom ERP/CRM, AI automation, and integrations for B2B companies.</li>
            </ul>
            <Link to="/services/custom-software-development" className="rs-btn rs-btn-primary">
              <span>Talk to our solutions team</span>
              <span className="rs-btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER CTA BAND */}
      <section className="rs-footer-cta-band" id="contact">
        <div className="rs-container">
          <p>Not sure which product fits? Get a free 20-min consultation.</p>
          <Link to="/contact" className="rs-btn" style={{ background: "var(--white)", color: "var(--primary)" }}>
            <span>Book a free consultation</span>
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