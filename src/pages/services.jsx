import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import aiServiceImg from "../assets/images/custom-software.jpg";
import "./services.css";
import { FaBrain, FaChartBar, FaClipboardList, FaCloud, FaCommentDots, FaGlobe, FaLaptopCode, FaMobileAlt, FaRobot, FaRocket, FaStar, FaSyncAlt, FaWrench } from 'react-icons/fa';

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
    desc: "Tailored software solutions built to address your unique business challenges and requirements.",
    features: ["Enterprise Applications", "SaaS Products", "System Integration", "Legacy Modernization"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android Apps", "React Native / Flutter", "App Store Optimization", "Maintenance & Support"],
  },
  {
    icon: <FaGlobe />,
    title: "Web Development",
    desc: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: ["Progressive Web Apps", "E-commerce Solutions", "CMS Development", "API Development"],
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: ["AWS / Azure / GCP", "Cloud Migration", "Serverless Architecture", "Cost Optimization"],
  },
  {
    icon: <FaRobot />,
    title: "AI & Machine Learning",
    desc: "Intelligent solutions that automate processes and unlock data-driven insights.",
    features: ["Predictive Analytics", "NLP & Chatbots", "Computer Vision", "LLM Integration"],
  },
  {
    icon: <FaWrench />,
    title: "DevOps & Automation",
    desc: "Streamlined development pipelines and infrastructure automation.",
    features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"],
  },
];

const aiPoints = [
  { icon: <FaBrain />, title: "Machine Learning", desc: "Custom ML models trained on your data" },
  { icon: <FaCommentDots />, title: "Conversational AI", desc: "Intelligent chatbots & virtual assistants" },
  { icon: <FaChartBar />, title: "Predictive Analytics", desc: "Data-driven forecasting & insights" },
  { icon: <FaSyncAlt />, title: "Process Automation", desc: "Intelligent workflow automation" },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "Understanding your business goals, challenges, and requirements." },
  { num: "02", title: "Design", desc: "Creating architecture, UI/UX designs, and detailed specifications." },
  { num: "03", title: "Develop", desc: "Agile development with regular sprints and continuous feedback." },
  { num: "04", title: "Deploy", desc: "Launch with ongoing support, monitoring, and optimization." },
];

const techStack = ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "TensorFlow", "PostgreSQL"];

// ─── ServiceCard ──────────────────────────────────────────────────────────────
function ServiceCard({ icon, title, desc, features }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul className="service-features">
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <span className="service-link">Learn More →</span>
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

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ServicesPage() {
  // Scroll reveal refs
  const [heroRef, heroActive] = useScrollReveal();
  const [gridRef, gridActive] = useScrollReveal();
  const [featLeftRef, featLeftActive] = useScrollReveal();
  const [featRightRef, featRightActive] = useScrollReveal();
  const [procRef, procActive] = useScrollReveal();
  const [procStepsRef, procStepsActive] = useScrollReveal();
  const [techRef, techActive] = useScrollReveal();
  const [techLogosRef, techLogosActive] = useScrollReveal();
  const [ctaRef, ctaActive] = useScrollReveal();

  return (
    <div style={{ paddingTop: '92px' }}>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="services-overview">
        <div className="container">
          <div ref={heroRef} className={`services-intro reveal${heroActive ? " active" : ""}`}>
            <span className="section-badge"><span><FaRocket /></span> Our Expertise</span>
            <h2 className="section-title">Comprehensive <span>Solutions</span></h2>
            <p className="section-subtitle">
              From ideation to deployment, we provide full-stack development services
              that cover every aspect of your digital journey.
            </p>
          </div>

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
              <h2>AI-Powered <span>Innovation</span></h2>
              <p>
                Harness the power of artificial intelligence to transform your business operations.
                Our AI solutions help you automate workflows, gain insights from data, and create
                intelligent experiences for your customers.
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

              <Link to="/contact" className="btn btn-primary">Explore AI Solutions →</Link>
            </div>

            <div ref={featRightRef} className={`featured-visual reveal-right${featRightActive ? " active" : ""}`}>
              <div className="featured-image">
                <img
                  src={aiServiceImg}
                  alt="AI Solutions"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"; }}
                />
              </div>
              <div className="featured-float">
                <div className="featured-float-icon"><FaRobot /></div>
                <div>
                  <h4>50+</h4>
                  <p>AI Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section">
        <div className="container">
          <div ref={procRef} className={`process-header reveal${procActive ? " active" : ""}`}>
            <span className="section-badge"><span><FaClipboardList /></span> How We Work</span>
            <h2 className="section-title">Our <span>Process</span></h2>
            <p className="section-subtitle">
              A proven methodology that ensures quality, transparency, and successful delivery.
            </p>
          </div>

          <div ref={procStepsRef} className={`process-steps stagger-children${procStepsActive ? " active" : ""}`}>
            {processSteps.map((s) => (
              <ProcessStep key={s.num} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="technologies">
        <div className="container">
          <div ref={techRef} className={`tech-header reveal${techActive ? " active" : ""}`}>
            <span className="section-badge"><span><FaWrench /></span> Tech Stack</span>
            <h2 className="section-title">Technologies We <span>Use</span></h2>
          </div>

          <div ref={techLogosRef} className={`tech-logos stagger-children${techLogosActive ? " active" : ""}`}>
            {techStack.map((t) => (
              <div className="tech-logo" key={t}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <div className="container">
          <div ref={ctaRef} className={`cta-content reveal${ctaActive ? " active" : ""}`}>
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-text">
              Let's discuss how we can help bring your vision to life with our expertise.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Free Quote →</Link>
              <Link to="/case-studies" className="btn btn-secondary">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
  
    </div>
  );
}