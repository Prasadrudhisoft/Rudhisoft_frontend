import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import teamCultureImg from '../assets/images/team-culture.jpg';
import './technology.css';
import {
  SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter,
  SiNodedotjs, SiPython, SiOpenjdk, SiDotnet, SiDjango, SiFastapi, SiSpringboot, SiExpress,
  SiGooglecloud, SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGitlab,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiElasticsearch, SiFirebase,
  SiTensorflow, SiPytorch, SiScikitlearn, SiHuggingface, SiOpencv,
} from 'react-icons/si';
import { FaAws, FaMicrosoft, FaPalette, FaCogs, FaCloud, FaDatabase, FaRobot,
  FaBolt, FaChartLine, FaShieldAlt, FaWrench, FaRocket, FaHandshake,
  FaLaptopCode, FaStar, FaBullseye } from 'react-icons/fa';

// ── Data ────────────────────────────────────────────────────────────────────

const techCategories = [
  {
    icon: <FaPalette />,
    title: 'Frontend Development',
    desc: 'Building beautiful, responsive user interfaces',
    items: [
      { icon: <SiReact />, label: 'React' },
      { icon: <SiVuedotjs />, label: 'Vue.js' },
      { icon: <SiAngular />, label: 'Angular' },
      { icon: <SiNextdotjs />, label: 'Next.js' },
      { icon: <SiTypescript />, label: 'TypeScript' },
      { icon: <SiTailwindcss />, label: 'Tailwind' },
      { icon: <SiReact />, label: 'React Native' },
      { icon: <SiFlutter />, label: 'Flutter' },
    ],
  },
  {
    icon: <FaCogs />,
    title: 'Backend Development',
    desc: 'Robust, scalable server-side solutions',
    items: [
      { icon: <SiNodedotjs />, label: 'Node.js' },
      { icon: <SiPython />, label: 'Python' },
      { icon: <SiOpenjdk />, label: 'Java' },
      { icon: <SiDotnet />, label: '.NET Core' },
      { icon: <SiDjango />, label: 'Django' },
      { icon: <SiFastapi />, label: 'FastAPI' },
      { icon: <SiSpringboot />, label: 'Spring Boot' },
      { icon: <SiExpress />, label: 'Express.js' },
    ],
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure and automation',
    items: [
      { icon: <FaAws />, label: 'AWS' },
      { icon: <FaMicrosoft />, label: 'Azure' },
      { icon: <SiGooglecloud />, label: 'Google Cloud' },
      { icon: <SiDocker />, label: 'Docker' },
      { icon: <SiKubernetes />, label: 'Kubernetes' },
      { icon: <SiTerraform />, label: 'Terraform' },
      { icon: <SiJenkins />, label: 'Jenkins' },
      { icon: <SiGitlab />, label: 'GitLab CI' },
    ],
  },
  {
    icon: <FaDatabase />,
    title: 'Databases',
    desc: 'Reliable data storage and management',
    items: [
      { icon: <SiPostgresql />, label: 'PostgreSQL' },
      { icon: <SiMysql />, label: 'MySQL' },
      { icon: <SiMongodb />, label: 'MongoDB' },
      { icon: <SiRedis />, label: 'Redis' },
      { icon: <SiElasticsearch />, label: 'Elasticsearch' },
      { icon: <SiFirebase />, label: 'Firebase' },
    ],
  },
  {
    icon: <FaRobot />,
    title: 'AI & Machine Learning',
    desc: 'Intelligent solutions and automation',
    items: [
      { icon: <SiTensorflow />, label: 'TensorFlow' },
      { icon: <SiPytorch />, label: 'PyTorch' },
      { icon: <SiScikitlearn />, label: 'Scikit-learn' },
      { icon: <SiHuggingface />, label: 'Hugging Face' },
      { icon: <FaRobot />, label: 'OpenAI' },
      { icon: <SiOpencv />, label: 'OpenCV' },
    ],
  },
];

const whyCards = [
  { icon: <FaBolt />, title: 'Performance', text: 'Optimized for speed and efficiency, ensuring your applications run smoothly at scale.' },
  { icon: <FaChartLine />, title: 'Scalability', text: 'Built to grow with your business, from startup to enterprise-level demands.' },
  { icon: <FaShieldAlt />, title: 'Security', text: 'Industry-standard security practices and tools to protect your data.' },
  { icon: <FaWrench />, title: 'Maintainability', text: "Clean, well-documented code that's easy to maintain and extend." },
  { icon: <FaRocket />, title: 'Modern Standards', text: 'Following best practices and latest industry standards.' },
  { icon: <FaHandshake />, title: 'Community Support', text: 'Technologies backed by strong communities and regular updates.' },
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
          <span className="section-badge"><span><FaLaptopCode /></span> Technologies We Use</span>
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
          <span className="section-badge"><span><FaStar /></span> Why It Matters</span>
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
            <span className="section-badge"><span><FaBullseye /></span> Our Expertise</span>
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
                src={teamCultureImg}
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
          <span className="section-badge"><span><FaHandshake /></span> Partnerships</span>
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
            <Link to="/contact" className="btn btn-primary">Start a Project →</Link>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
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