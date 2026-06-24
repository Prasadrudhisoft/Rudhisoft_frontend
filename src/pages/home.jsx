import React, { useRef, useState, useEffect } from 'react';
import './home.css';
import heroBg from '../assets/images/hero-bg.jpg';
import about from '../assets/images/about-us.jpg';
import techBgVideo from '../assets/videos/Tech-bg.mp4';

// ─── Data ────────────────────────────────────────────────────────────────────
const services = [
  { icon: "💻", title: "Custom Software Development", desc: "Tailored software solutions built from the ground up to address your unique business challenges and drive operational excellence." },
  { icon: "📱", title: "Web & Mobile Apps", desc: "High-performance, intuitive applications that deliver exceptional user experiences across all devices and platforms." },
  { icon: "☁️", title: "Cloud & DevOps", desc: "Scalable cloud infrastructure and automated DevOps pipelines that ensure reliability, security, and faster time-to-market." },
  { icon: "🤖", title: "AI & Machine Learning", desc: "Intelligent automation and data-driven insights that unlock new possibilities and transform decision-making processes." },
];

const whyCards = [
  { icon: "🎯", title: "Business-First Approach", desc: "Every solution we build starts with understanding your business objectives and ends with measurable outcomes." },
  { icon: "🔧", title: "Technical Excellence", desc: "Our team leverages modern architectures, clean code practices, and industry best standards for lasting quality." },
  { icon: "🧠", title: "AI-Powered Innovation", desc: "We integrate artificial intelligence and automation to give your business a sustainable competitive edge." },
  { icon: "⚡", title: "Agile Methodology", desc: "Flexible, iterative development ensures faster delivery, continuous feedback, and adaptive improvement." },
  { icon: "🔒", title: "Security by Design", desc: "Enterprise-grade security practices embedded from day one to protect your data and maintain compliance." },
  { icon: "🤝", title: "Dedicated Partnership", desc: "We're invested in your long-term success with ongoing support, maintenance, and strategic guidance." },
];

const processSteps = [
  { num: "01", title: "Discovery & Strategy", desc: "Deep dive into your business goals, challenges, and requirements to define a clear roadmap and success metrics." },
  { num: "02", title: "Design & Architecture", desc: "Create intuitive user experiences and robust system architectures that scale with your business growth." },
  { num: "03", title: "Development & Testing", desc: "Agile sprints with continuous integration, automated testing, and regular demos to ensure quality delivery." },
  { num: "04", title: "Launch & Support", desc: "Seamless deployment with monitoring, maintenance, and continuous optimization for peak performance." },
];

const techCards = [
  { icon: "🎨", title: "Frontend Engineering", desc: "Crafting responsive, accessible, and performant user interfaces that delight users across all devices.", list: ["React, Vue.js, Angular", "Next.js, Nuxt.js", "TypeScript, Tailwind CSS", "Progressive Web Apps"] },
  { icon: "⚙️", title: "Backend Systems", desc: "Building robust, scalable server-side architectures designed for high performance and reliability.", list: ["Node.js, Python, Java", "Django, FastAPI, Spring Boot", "GraphQL, REST APIs", "Microservices Architecture"] },
  { icon: "☁️", title: "Cloud & Infrastructure", desc: "Deploying scalable, secure cloud solutions with automated DevOps pipelines.", list: ["AWS, Azure, Google Cloud", "Docker, Kubernetes", "Terraform, Ansible", "CI/CD Automation"] },
  { icon: "🗄️", title: "Data & Analytics", desc: "Designing data architectures that power insights and intelligent decision-making.", list: ["PostgreSQL, MySQL, MongoDB", "Redis, Elasticsearch", "Data Warehousing", "Real-time Analytics"] },
  { icon: "🤖", title: "AI & Machine Learning", desc: "Implementing intelligent systems that automate, predict, and transform business operations.", list: ["TensorFlow, PyTorch", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "LLM Integration"] },
];

const testimonials = [
  { initials: "RM", name: "Rahul Mehta", role: "CTO, FinTech Innovations", text: "RUDHISOFT delivered a scalable platform that exceeded our expectations. Their AI-driven approach helped us automate critical processes and reduce operational costs by 40%." },
  { initials: "AS", name: "Ananya Sharma", role: "Product Director, SaaS Platform", text: "The team's technical expertise and attention to detail are exceptional. From UI/UX to backend architecture, everything was executed with precision and professionalism." },
  { initials: "MJ", name: "Michael Johnson", role: "VP Operations, Enterprise Corp", text: "RUDHISOFT modernized our legacy systems using cloud and AI technologies. The performance improvements were remarkable — 3x faster processing and 99.9% uptime." },
];

const industries = [
  { icon: "🏥", title: "Healthcare", desc: "AI diagnostics, telemedicine, patient management" },
  { icon: "💰", title: "Finance", desc: "FinTech solutions, blockchain, risk analytics" },
  { icon: "🛒", title: "E-Commerce", desc: "Scalable platforms, recommendation engines" },
  { icon: "🏭", title: "Manufacturing", desc: "IoT integration, predictive maintenance" },
  { icon: "🚗", title: "Automotive", desc: "Connected vehicles, smart systems" },
  { icon: "📚", title: "Education", desc: "LMS platforms, AI tutoring systems" },
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
  const [heroTitleText, setHeroTitleText] = useState("");
  const heroRef = useRef(null);
  const fullTitle = "Intelligent Technology";

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

  // Typing effect
  useEffect(() => {
    let i = 0;
    const timer = setTimeout(function type() {
      if (i <= fullTitle.length) {
        setHeroTitleText(fullTitle.slice(0, i));
        i++;
        setTimeout(type, 50);
      }
    }, 2200);
    return () => clearTimeout(timer);
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
            Now Available for Projects 2026
          </div>
          <h1 className="rs-hero-title">
            Transform Your Business with{" "}
            <span className="rs-hero-title-gradient">{heroTitleText}</span>
          </h1>
          <p className="rs-hero-subtitle">
            We build scalable, secure, and AI-powered software solutions that drive innovation,
            accelerate growth, and create lasting competitive advantages for businesses worldwide.
          </p>
          <div className="rs-hero-buttons">
            <a href="#contact" className="rs-btn rs-btn-primary">
              <span>Start Your Project</span>
              <span className="rs-btn-icon">→</span>
            </a>
            <a href="#services" className="rs-btn rs-btn-secondary">
              <span className="rs-btn-icon">▶</span>
              <span>Watch Demo</span>
            </a>
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
              <span className="rs-section-badge"><span>🚀</span> About Us</span>
              <h2 className="rs-section-title">We're Redefining What's <span>Possible</span> in Technology</h2>
              <p className="rs-about-description">At RUDHISOFT, we're more than just a software company — we're your strategic technology partner. Our team of innovators, engineers, and strategists work together to deliver solutions that transform businesses and create lasting impact.</p>
              <p className="rs-about-description">From startups to enterprises, we've helped organizations across the globe leverage cutting-edge technology to solve complex challenges and unlock new opportunities.</p>
              <div className="rs-about-features">
                {[["🎯", "Mission-Driven", "Focused on your success"], ["💡", "Innovation First", "Cutting-edge solutions"], ["🤝", "True Partnership", "Long-term collaboration"], ["⚡", "Agile Delivery", "Fast & efficient"]].map(([icon, h, p]) => (
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
                <div className="rs-about-float-icon">🏆</div>
                <div className="rs-about-float-content">
                  <h4>10+ Years</h4>
                  <p>Industry Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="rs-services" id="services">
        <div className="rs-container">
          <div className="rs-services-header rs-reveal">
            <span className="rs-section-badge"><span>⚙️</span> Our Services</span>
            <h2 className="rs-section-title">Comprehensive <span>Solutions</span> for Modern Businesses</h2>
            <p className="rs-section-subtitle" style={{ margin: "0 auto" }}>From ideation to deployment, we provide end-to-end technology services designed to accelerate your digital transformation journey.</p>
          </div>
          <div className="rs-services-grid rs-stagger">
            {services.map((s) => (
              <div className="rs-service-card" key={s.title}>
                <div className="rs-service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#" className="rs-service-link">Learn More <span>→</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="rs-why-us" id="why-us">
        <div className="rs-container">
          <div className="rs-why-us-header rs-reveal">
            <span className="rs-section-badge"><span>✨</span> Why Choose Us</span>
            <h2 className="rs-section-title">The <span>RUDHISOFT</span> Advantage</h2>
            <p className="rs-section-subtitle" style={{ margin: "0 auto" }}>We combine deep technical expertise with business acumen to deliver solutions that create real, measurable value.</p>
          </div>
          <div className="rs-why-us-grid rs-stagger">
            {whyCards.map((c) => (
              <div className="rs-why-card" key={c.title}>
                <div className="rs-why-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="rs-process" id="process">
        <div className="rs-container">
          <div className="rs-process-header rs-reveal">
            <span className="rs-section-badge"><span>📋</span> Our Process</span>
            <h2 className="rs-section-title">A Proven Path to <span>Success</span></h2>
            <p className="rs-section-subtitle" style={{ margin: "0 auto" }}>Our structured methodology ensures transparency, quality, and predictable outcomes at every stage of your project.</p>
          </div>
          <div className="rs-process-timeline rs-stagger">
            {processSteps.map((s) => (
              <div className="rs-process-step" key={s.num}>
                <div className="rs-process-number">{s.num}</div>
                <div className="rs-process-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="rs-technology" id="technology">
        <div className="rs-tech-bg">
          <video autoPlay muted loop playsInline>
            <source src={techBgVideo} type="video/mp4" />
          </video>
        </div>
        <div className="rs-tech-overlay" />
        <div className="rs-container rs-tech-content">
          <div className="rs-tech-header rs-reveal">
            <span className="rs-section-badge"><span>🔬</span> Technology Stack</span>
            <h2 className="rs-section-title">Powered by <span>Cutting-Edge</span> Technology</h2>
            <p className="rs-section-subtitle" style={{ margin: "0 auto" }}>We leverage the latest technologies and frameworks to build future-proof solutions that drive innovation.</p>
          </div>
          <div className="rs-tech-grid rs-stagger">
            {techCards.map((c) => (
              <div className="rs-tech-card" key={c.title}>
                <div className="rs-tech-card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <ul className="rs-tech-list">
                  {c.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="rs-testimonials" id="testimonials">
        <div className="rs-container">
          <div className="rs-testimonials-header rs-reveal">
            <span className="rs-section-badge"><span>💬</span> Testimonials</span>
            <h2 className="rs-section-title">What Our <span>Clients</span> Say</h2>
            <p className="rs-section-subtitle" style={{ margin: "0 auto" }}>Don't just take our word for it — hear from the businesses we've helped transform.</p>
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

      {/* INDUSTRIES */}
      <section className="rs-industries" id="industries">
        <div className="rs-container">
          <div className="rs-industries-header rs-reveal">
            <span className="rs-section-badge"><span>🏢</span> Industries</span>
            <h2 className="rs-section-title">Industries We <span>Serve</span></h2>
            <p className="rs-section-subtitle" style={{ margin: "0 auto" }}>Deep domain expertise across diverse sectors enables us to deliver solutions that truly understand your business.</p>
          </div>
          <div className="rs-industries-grid rs-stagger">
            {industries.map((ind) => (
              <div className="rs-industry-card" key={ind.title}>
                <span className="rs-industry-icon">{ind.icon}</span>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rs-cta" id="contact">
        <div className="rs-container">
          <div className="rs-cta-content rs-reveal">
            <h2 className="rs-cta-title">Ready to Transform Your Business?</h2>
            <p className="rs-cta-text">Let's discuss how RUDHISOFT can help you leverage technology to achieve your business goals. Get a free consultation today.</p>
            <div className="rs-cta-buttons">
              <a href="mailto:info@rudhisoft.com" className="rs-btn rs-btn-primary"><span>Schedule a Call</span><span className="rs-btn-icon">📞</span></a>
              <a href="#services" className="rs-btn rs-btn-secondary"><span>View Our Work</span><span className="rs-btn-icon">→</span></a>
            </div>
          </div>
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