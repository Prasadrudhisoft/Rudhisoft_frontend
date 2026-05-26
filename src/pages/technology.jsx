import React, { useEffect, useRef, useState } from 'react';
import './technology.css';

// ── Data ────────────────────────────────────────────────────────────────────

const techCategories = [
  {
    icon: '🎨',
    title: 'Frontend Development',
    desc: 'Building beautiful, responsive user interfaces',
    items: [
      { icon: '⚛️', label: 'React' },
      { icon: '💚', label: 'Vue.js' },
      { icon: '🅰️', label: 'Angular' },
      { icon: '▲', label: 'Next.js' },
      { icon: '🟦', label: 'TypeScript' },
      { icon: '🌊', label: 'Tailwind' },
      { icon: '📱', label: 'React Native' },
      { icon: '🦋', label: 'Flutter' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    desc: 'Robust, scalable server-side solutions',
    items: [
      { icon: '🟢', label: 'Node.js' },
      { icon: '🐍', label: 'Python' },
      { icon: '☕', label: 'Java' },
      { icon: '🔷', label: '.NET Core' },
      { icon: '🚀', label: 'Django' },
      { icon: '⚡', label: 'FastAPI' },
      { icon: '🍃', label: 'Spring Boot' },
      { icon: '🔺', label: 'Express.js' },
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure and automation',
    items: [
      { icon: '🟠', label: 'AWS' },
      { icon: '🔵', label: 'Azure' },
      { icon: '🌈', label: 'Google Cloud' },
      { icon: '🐳', label: 'Docker' },
      { icon: '☸️', label: 'Kubernetes' },
      { icon: '🏗️', label: 'Terraform' },
      { icon: '🔄', label: 'Jenkins' },
      { icon: '🦊', label: 'GitLab CI' },
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    desc: 'Reliable data storage and management',
    items: [
      { icon: '🐘', label: 'PostgreSQL' },
      { icon: '🐬', label: 'MySQL' },
      { icon: '🍃', label: 'MongoDB' },
      { icon: '🔴', label: 'Redis' },
      { icon: '🔍', label: 'Elasticsearch' },
      { icon: '🔥', label: 'Firebase' },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    desc: 'Intelligent solutions and automation',
    items: [
      { icon: '🧠', label: 'TensorFlow' },
      { icon: '🔥', label: 'PyTorch' },
      { icon: '📊', label: 'Scikit-learn' },
      { icon: '🤗', label: 'Hugging Face' },
      { icon: '💬', label: 'OpenAI' },
      { icon: '👁️', label: 'OpenCV' },
    ],
  },
];

const whyCards = [
  { icon: '⚡', title: 'Performance', text: 'Optimized for speed and efficiency, ensuring your applications run smoothly at scale.' },
  { icon: '📈', title: 'Scalability', text: 'Built to grow with your business, from startup to enterprise-level demands.' },
  { icon: '🛡️', title: 'Security', text: 'Industry-standard security practices and tools to protect your data.' },
  { icon: '🔧', title: 'Maintainability', text: "Clean, well-documented code that's easy to maintain and extend." },
  { icon: '🚀', title: 'Modern Standards', text: 'Following best practices and latest industry standards.' },
  { icon: '🤝', title: 'Community Support', text: 'Technologies backed by strong communities and regular updates.' },
];

const partners = ['AWS Partner', 'Google Cloud', 'Microsoft Azure', 'MongoDB', 'Docker'];

// ── Hooks ────────────────────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .stagger-children'
      ).forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 150) {
          el.classList.add('active');
        }
      });
    };
    reveal();
    window.addEventListener('scroll', reveal);
    return () => window.removeEventListener('scroll', reveal);
  }, []);
}

// ── Sub-components ───────────────────────────────────────────────────────────

function TechStack() {
  return (
    <section className="tech-stack">
      <div className="container">
        <div className="tech-header reveal">
          <span className="section-badge"><span>💻</span> Technologies We Use</span>
          <h2 className="section-title">Our Tech <span>Stack</span></h2>
          <p className="section-subtitle">
            Modern, proven technologies that power our solutions across all domains.
          </p>
        </div>

        <div className="tech-categories">
          {techCategories.map(cat => (
            <div className="tech-category reveal" key={cat.title}>
              <div className="tech-category-header">
                <div className="tech-category-icon">{cat.icon}</div>
                <div>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              </div>
              <div className="tech-items stagger-children">
                {cat.items.map(item => (
                  <div className="tech-item" key={item.label}>
                    <div className="tech-item-icon">{item.icon}</div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStack() {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, idx) => {
    if (window.innerWidth <= 768) return;
    const card = cardRefs.current[idx];
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.transform = `
      perspective(1000px)
      rotateX(${(y - r.height / 2) / 20}deg)
      rotateY(${(r.width / 2 - x) / 20}deg)
      translateY(-8px)
    `;
  };

  const handleMouseLeave = idx => {
    if (cardRefs.current[idx]) cardRefs.current[idx].style.transform = '';
  };

  return (
    <section className="why-stack">
      <div className="container">
        <div className="why-stack-header reveal">
          <span className="section-badge"><span>✨</span> Why It Matters</span>
          <h2 className="section-title">Why Our <span>Tech Stack</span></h2>
          <p className="section-subtitle">
            We carefully select technologies that deliver the best results for your project.
          </p>
        </div>

        <div className="why-stack-grid stagger-children">
          {whyCards.map((card, idx) => (
            <div
              className="why-stack-card"
              key={card.title}
              ref={el => (cardRefs.current[idx] = el)}
              onMouseMove={e => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <div className="why-stack-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="expertise">
      <div className="container">
        <div className="expertise-grid">
          <div className="expertise-content reveal-left">
            <span className="section-badge"><span>🎯</span> Our Expertise</span>
            <h2>Deep Technical <span>Knowledge</span></h2>
            <p>
              Our team consists of certified experts with years of experience
              across various technology domains. We stay updated with the latest
              trends and continuously improve our skills.
            </p>
            <div className="expertise-stats">
              {[
                { num: '50+', label: 'Tech Experts' },
                { num: '25+', label: 'Technologies' },
                { num: '100+', label: 'Certifications' },
              ].map(stat => (
                <div className="expertise-stat" key={stat.label}>
                  <div className="expertise-stat-number">{stat.num}</div>
                  <div className="expertise-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="expertise-visual reveal-right">
            <div className="expertise-image">
              <img
                src="/static/images/tech-team.jpg"
                alt="Tech Team"
                onError={e => {
                  e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop';
                }}
              />
            </div>
            <div className="expertise-badge">
              <h4>10+</h4>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <div className="partners-header reveal">
          <span className="section-badge"><span>🤝</span> Partnerships</span>
          <h2 className="section-title">Technology <span>Partners</span></h2>
        </div>
        <div className="partners-logos stagger-children">
          {partners.map(p => (
            <div className="partner-logo" key={p}>{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content reveal">
          <h2 className="cta-title">Let's Build Something Great</h2>
          <p className="cta-text">
            Ready to leverage our technology expertise for your next project?
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Start a Project →</a>
            <a href="/services" className="btn btn-secondary">View Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TechnologyPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <main style={{ paddingTop: '92px' }}>
        <TechStack />
        <WhyStack />
        <Expertise />
        <Partners />
        <CTA />
      </main>

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}