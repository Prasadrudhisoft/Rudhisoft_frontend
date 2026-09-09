// src/pages/AboutUs.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../Components/SEO';
import {
  FaBullseye, FaCheck, FaClipboardList, FaCompass, FaGem, FaHandshake,
  FaLightbulb, FaRocket, FaShieldAlt, FaStar, FaTrophy, FaUsers,
  FaIndustry, FaCogs, FaLifeRing, FaQuoteLeft,
} from 'react-icons/fa';

// Sub-components
const SectionBadge = ({ icon, text }) => (
  <span className="section-badge">
    <span>{icon}</span>
    {text}
  </span>
);

const IntroStat = ({ number, label }) => (
  <div className="intro-stat">
    <div className="intro-stat-number">{number}</div>284\
    <div className="intro-stat-label">{label}</div>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="value-card">
    <div className="value-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const AchievementItem = ({ icon, number, label }) => (
  <div className="achievement-item">
    <div className="achievement-icon">{icon}</div>
    {number && <div className="achievement-number">{number}</div>}
    <div className="achievement-label">{label}</div>
  </div>
);

const CultureFeature = ({ icon, title, description }) => (
  <div className="culture-feature">
    <div className="culture-feature-icon">{icon}</div>
    <div className="culture-feature-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const WhyWorkCard = ({ number, title, description }) => (
  <div className="why-work-card">
    <div className="why-work-number">{number}</div>
    <div className="why-work-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

// Main Component
const AboutUs = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // ─── Data ──────────────────────────────────────────────────────────────
  const introStats = [
    { number: '15+', label: 'Projects Delivered' },
    { number: '98%', label: 'Trusted by businesses across Maharashtra' },
    { number: '10+', label: 'Software Professionals and Specialists' },
  ];

  const operatingPrinciples = [
    'Solve a real business problem.',
    'Make implementation practical.',
    'Build for daily adoption.',
    'Communicate clearly.',
    'Improve continuously.',
    'Earn trust through outcomes.',
  ];

  const values = [
    { icon: <FaLightbulb />, title: 'Practical Innovation', description: 'We use technology to solve real operational problems, not to add complexity.' },
    { icon: <FaHandshake />, title: 'Customer Partnership', description: "We work as an extension of the customer's team and measure success by adoption and business impact." },
    { icon: <FaShieldAlt />, title: 'Transparency and Integrity', description: 'We communicate honestly about scope, timelines, risks, and costs.' },
    { icon: <FaGem />, title: 'Quality and Continuous Improvement', description: 'We build reliable systems, learn from feedback, and improve them over time.' },
    { icon: <FaUsers />, title: 'Collaboration', description: 'We bring together business users, designers, developers, and domain experts to create better outcomes.' },
  ];

  const achievements = [
    { icon: <FaTrophy />, number: '15+', label: 'Projects Delivered' },
    { icon: <FaIndustry />,  label: 'Products built for four Operational Industries Served' },
    { icon: <FaCogs />, label: 'Custom Software, ERP, CRM & Automation Capabilities' },
    { icon: <FaLifeRing />, label: 'Ongoing Support for Deployed Systems' },
  ];

  const cultureBullets = [
    'Learning and certification support.',
    'Flexible work arrangements, if applicable.',
    'Mentorship and code reviews.',
    'Team activities.',
    'Clear ownership and growth opportunities.',
  ];

  const cultureImages = [
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop', alt: 'Team Meeting', large: false },
    { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=200&fit=crop', alt: 'Team Fun', large: false },
    { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=250&fit=crop', alt: 'Office Space', large: true },
  ];

  const whyCustomersWorkWithUs = [
    { number: '01', title: 'Start with a Working Product', description: 'Choose from ready-to-deploy products instead of starting every project from zero.' },
    { number: '02', title: 'Adapt to Your Workflow', description: 'Configure the product or extend it when your process needs additional functionality.' },
    { number: '03', title: 'Practical Implementation', description: 'We help with setup, data migration, training, and go-live.' },
    { number: '04', title: 'One Technology Partner', description: 'Continue with us for enhancements, integrations, support, and custom development.' },
    { number: '05', title: 'Direct Communication', description: 'Work with a focused team that understands your business context.' },
  ];

  // Scroll Effects
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reveal Animation
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children');
      const windowHeight = window.innerHeight;
      const revealPoint = 100;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    setTimeout(revealElements, 100);
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="about-page" style={{ paddingTop: '92px' }}>

      <SEO
        title="About Us"
        description="RUDHISOFT is a Nashik-based technology company building ready-to-deploy software for schools, construction sites, hospitals, and industrial security — plus custom software builds."
        path="/about"
        keywords="about RUDHISOFT, software company Nashik, technology team India"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }])]}
      />

      {/* Company Intro Section */}
      <section className="company-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content reveal-left">
              <span className="intro-label">Who We Are</span>
              <h1 className="intro-title">
                Ready-to-Deploy Software for <span>Real Industries</span>, Built by a Team That Delivers
              </h1>
              <p className="intro-text">
                Rudhisoft is a Nashik-based software company building practical technology for real
                businesses. Our ready-to-deploy products help schools and colleges manage academic
                and administrative operations, contractors coordinate construction sites, hospitals
                digitize patient and billing workflows, and factories control gate entry and
                industrial security.
              </p>
              <p className="intro-text">
                When an existing product is not enough, we design and build custom ERP, CRM,
                automation, portals, and integrations around the customer's actual workflow.
              </p>
              <p className="intro-text">
                We believe software should not merely be installed. It should be adopted, used
                every day, and improved over time.
              </p>

              <blockquote className="intro-text highlight" style={{ borderLeft: '3px solid var(--primary, #6366f1)', paddingLeft: '16px', fontStyle: 'italic' }}>
                <FaQuoteLeft style={{ opacity: 0.5, marginBottom: '8px' }} />
                <p style={{ margin: 0 }}>
                  We do not build vague "innovative solutions." We solve specific operational
                  problems — admissions chaos, poor site visibility, patient queues, and
                  gate-security gaps — with practical software.
                </p>
                <footer style={{ marginTop: '10px', fontStyle: 'normal', fontWeight: 600, fontSize: '0.9rem' }}>
                  — Prasad Jadhav, Founder & Director, Rudhisoft
                </footer>
              </blockquote>

              <div className="intro-stats">
                {introStats.map((stat, index) => (
                  <IntroStat key={index} {...stat} />
                ))}
              </div>

              <Link to="/#products" className="btn btn-secondary" style={{ marginTop: '24px', display: 'inline-flex' }}>
                <span>Explore our products</span>
                <span className="btn-icon">→</span>
              </Link>
            </div>

            <div className="intro-visual reveal-right">
              <div className="intro-image-main">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop"
                  alt="RUDHISOFT Office"
                  loading="lazy"
                />
                <div className="intro-image-overlay">
                  <p className="intro-image-text">
                    Our state-of-the-art office where innovation meets collaboration
                  </p>
                </div>
              </div>

              <div className="intro-float-card">
                <div className="intro-float-icon">🇮🇳</div>
                <div className="intro-float-content">
                  <h4>Nashik, India</h4>
                  <p>Built for Indian Businesses</p>
                </div>
              </div>

              <div className="intro-badge-card">
                <h4>98%</h4>
                <p>Trusted Across Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-header reveal">
            <SectionBadge icon={<FaBullseye />} text="Our Purpose" />
            <h2 className="section-title">Mission & <span>Vision</span></h2>
            <p className="section-subtitle">
              Guided by purpose, driven by practicality — the principles that shape
              everything we do at RUDHISOFT.
            </p>
          </div>

          <div className="mv-grid stagger-children">
            <div className="mv-card mission-card">
              <div className="mv-icon"><FaRocket /></div>
              <h3>Our Mission</h3>
              <p>
                To help schools, contractors, hospitals, and factories solve everyday operational
                problems with practical software — and to build custom systems for businesses
                whose needs go beyond standard products.
              </p>
            </div>

            <div className="mv-card vision-card">
              <div className="mv-icon"><FaCompass /></div>
              <h3>Our Vision</h3>
              <p>
                To become a trusted software partner for Indian businesses by delivering products
                that are fast to deploy, simple to use, and valuable enough to become part of
                everyday operations.
              </p>
            </div>
          </div>

          <div className="mv-principles reveal">
            <h3 className="mv-principles-title">Our Operating Principles</h3>
            <ul className="mv-principles-list">
              {operatingPrinciples.map((point, index) => (
                <li key={index}><span><FaCheck /></span> {point}</li>
              ))}
            </ul>
            <div className="mv-principles-cta">
              <Link to="/#how-it-works" className="btn btn-secondary">
                <span>See how we work</span>
                <span className="btn-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <div className="container">
          <div className="values-header reveal">
            <SectionBadge icon={<FaGem />} text="What We Stand For" />
            <h2 className="section-title">Our Core <span>Values</span></h2>
            <p className="section-subtitle">
              These principles guide our decisions, shape our culture, and define
              how we work with our clients and each other.
            </p>
          </div>

          <div className="values-grid stagger-children">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team — moved to its own page, see /leadership */}
      <section className="leadership" style={{ paddingBottom: '20px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="leadership-header reveal">
            <SectionBadge icon={<FaUsers />} text="Meet Our Leaders" />
            <h2 className="section-title">Leadership <span>Team</span></h2>
            <p className="section-subtitle">
              Meet the founders and core team driving RUDHISOFT forward.
            </p>
          </div>
          <Link to="/leadership" className="btn btn-primary">
            <span>Meet the team</span>
            <span className="btn-icon">→</span>
          </Link>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="achievements">

        <div className="container">
          <div className="achievements-header reveal">
            <h2 className="section-title">Our Work in <span>Numbers</span></h2>
          </div>
          <div className="achievements-grid stagger-children">
            {achievements.map((achievement, index) => (
              <AchievementItem key={index} {...achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture">
        <div className="container">
          <div className="culture-grid">
            <div className="culture-content reveal-left">
              <SectionBadge icon={<FaStar />} text="Life at RUDHISOFT" />
              <h2 className="section-title">We Build Products and Careers with <span>Ownership</span></h2>
              <p className="culture-text">
                At Rudhisoft, team members work on real software used by schools, contractors,
                hospitals, and industrial businesses. We value ownership, open communication,
                continuous learning, and practical problem-solving.
              </p>
              <p className="culture-text">
                Our team members have opportunities to work across product discovery, development,
                testing, deployment, customer feedback, and ongoing improvement.
              </p>

              <ul className="mv-points culture-bullets">
                {cultureBullets.map((point, index) => (
                  <li key={index}><span><FaCheck /></span> {point}</li>
                ))}
              </ul>
            </div>

            <div className="culture-images reveal-right">
              {cultureImages.map((image, index) => (
                <div key={index} className={`culture-image ${image.large ? 'large' : ''}`}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Work With Rudhisoft Section */}
      <section className="why-work-with-us">
        <div className="container">
          <div className="why-work-header reveal">
            <SectionBadge icon={<FaHandshake />} text="Partner With Us" />
            <h2 className="section-title">Why Customers Work With <span>Rudhisoft</span></h2>
          </div>

          <div className="why-work-grid stagger-children">
            {whyCustomersWorkWithUs.map((item, index) => (
              <WhyWorkCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content reveal">
            <h2 className="cta-title">Have an Operational Problem You Want to Solve?</h2>
            <p className="cta-text">
              Tell us what your team is managing manually. We'll help you identify whether one of
              our products fits or whether a custom solution is the better option.
            </p>
            <div className="cta-buttons">
              <Link to="/#products" className="btn btn-primary">
                <span>Explore our products</span>
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Book a consultation</span>
                <span className="btn-icon"><FaClipboardList /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default AboutUs;