import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import teamCultureImg from '../assets/images/team-culture.jpg';
import './technology.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../Components/SEO';
import {
  SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter,
  SiNodedotjs, SiPython, SiOpenjdk, SiDotnet, SiDjango, SiFastapi, SiSpringboot, SiExpress,
  SiGraphql, SiGooglecloud, SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGitlab,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiElasticsearch, SiFirebase,
  SiTensorflow, SiPytorch, SiScikitlearn, SiHuggingface, SiOpencv, SiApple, SiAndroid,
} from 'react-icons/si';
import {
  FaAws, FaMicrosoft, FaPalette, FaMobileAlt, FaCogs, FaCloud, FaDatabase, FaRobot,
  FaBolt, FaChartLine, FaShieldAlt, FaWrench, FaHistory, FaCoins, FaHandshake,
  FaLaptopCode, FaStar, FaBullseye, FaCompass, FaCheckCircle, FaGraduationCap, FaHardHat,
  FaHospital, FaLock, FaVial, FaChevronDown, FaQuestionCircle,
} from 'react-icons/fa';

// ── Data ────────────────────────────────────────────────────────────────────

const principles = [
  { icon: <FaBullseye />, title: 'Fit for purpose', text: 'We select tools that suit the product and business workflow.' },
  { icon: <FaBolt />, title: 'Performance', text: 'We design applications for speed, reliability, and efficient resource usage.' },
  { icon: <FaChartLine />, title: 'Scalability', text: 'We prepare the system to grow with users, data, branches, and transactions.' },
  { icon: <FaShieldAlt />, title: 'Security', text: 'We build with appropriate access control, secure development, backups, and monitoring.' },
  { icon: <FaWrench />, title: 'Maintainability', text: 'We use clean architecture, documentation, testing, and dependable technologies.' },
];

const techCategories = [
  {
    icon: <FaPalette />,
    title: 'Frontend and Application Development',
    desc: 'Responsive interfaces and business applications designed for clarity, speed, accessibility, and everyday usability.',
    items: [
      { icon: <SiReact />, label: 'React' },
      { icon: <SiVuedotjs />, label: 'Vue.js' },
      { icon: <SiAngular />, label: 'Angular' },
      { icon: <SiNextdotjs />, label: 'Next.js' },
      { icon: <SiTypescript />, label: 'TypeScript' },
      { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Application Development',
    desc: 'Native-quality mobile experiences with deployment, notifications, and analytics built in.',
    items: [
      { icon: <SiReact />, label: 'React Native' },
      { icon: <SiFlutter />, label: 'Flutter' },
      { icon: <SiApple />, label: 'iOS Development' },
      { icon: <SiAndroid />, label: 'Android Development' },
      { icon: <FaBolt />, label: 'Push Notifications' },
      { icon: <FaChartLine />, label: 'Mobile Analytics' },
    ],
  },
  {
    icon: <FaCogs />,
    title: 'Backend and APIs',
    desc: 'Secure, scalable server-side systems, APIs, integrations, and business logic for modern applications.',
    items: [
      { icon: <SiNodedotjs />, label: 'Node.js' },
      { icon: <SiPython />, label: 'Python' },
      { icon: <SiDjango />, label: 'Django' },
      { icon: <SiFastapi />, label: 'FastAPI' },
      { icon: <SiOpenjdk />, label: 'Java' },
      { icon: <SiSpringboot />, label: 'Spring Boot' },
      { icon: <SiDotnet />, label: '.NET Core' },
      { icon: <SiExpress />, label: 'Express.js' },
      { icon: <FaCogs />, label: 'REST APIs' },
      { icon: <SiGraphql />, label: 'GraphQL' },
    ],
  },
  {
    icon: <FaCloud />,
    title: 'Cloud and DevOps',
    desc: 'Reliable deployment environments with automation, monitoring, backups, and controlled release processes.',
    items: [
      { icon: <FaAws />, label: 'AWS' },
      { icon: <FaMicrosoft />, label: 'Microsoft Azure' },
      { icon: <SiGooglecloud />, label: 'Google Cloud' },
      { icon: <SiDocker />, label: 'Docker' },
      { icon: <SiKubernetes />, label: 'Kubernetes' },
      { icon: <SiTerraform />, label: 'Terraform' },
      { icon: <SiJenkins />, label: 'Jenkins' },
      { icon: <SiGitlab />, label: 'GitLab CI' },
    ],
    note: 'The final cloud platform depends on the project\u2019s security, hosting, integration, compliance, and budget requirements.',
  },
  {
    icon: <FaDatabase />,
    title: 'Databases and Data',
    desc: 'Data systems selected for reliability, performance, reporting, search, and application requirements.',
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
    title: 'AI and Machine Learning',
    desc: 'Intelligent systems for automation, document processing, conversational experiences, prediction, and data-driven decision-making.',
    items: [
      { icon: <SiTensorflow />, label: 'TensorFlow' },
      { icon: <SiPytorch />, label: 'PyTorch' },
      { icon: <SiScikitlearn />, label: 'Scikit-learn' },
      { icon: <SiHuggingface />, label: 'Hugging Face' },
      { icon: <FaRobot />, label: 'OpenAI APIs' },
      { icon: <SiOpencv />, label: 'OpenCV' },
    ],
  },
  {
    icon: <FaVial />,
    title: 'Testing and Quality Engineering',
    desc: 'Quality practices that help ensure software is reliable, secure, and ready for real users.',
    items: [
      { icon: <FaVial />, label: 'Functional Testing' },
      { icon: <FaCogs />, label: 'API Testing' },
      { icon: <FaChartLine />, label: 'Regression Testing' },
      { icon: <FaBolt />, label: 'Performance Testing' },
      { icon: <FaShieldAlt />, label: 'Security Testing' },
      { icon: <FaCheckCircle />, label: 'User Acceptance Testing' },
    ],
  },
];

const projectTypes = [
  {
    icon: <FaGraduationCap />,
    title: 'School and College Software',
    desc: 'Web applications, role-based access, reporting, APIs, databases, notifications, and cloud deployment for education workflows.',
    product: { name: 'RudhiCore', href: '/products/rudhicore-school-college-management' },
  },
  {
    icon: <FaHardHat />,
    title: 'Construction Software',
    desc: 'Dashboards, mobile access, site reporting, project workflows, document management, and multi-site data.',
    product: { name: 'RudhiArch', href: '/products/rudhiarch-construction-site-erp' },
  },
  {
    icon: <FaHospital />,
    title: 'Hospital Software',
    desc: 'Secure patient workflows, appointments, billing, pharmacy, reporting, role-based access, and integrations.',
    product: { name: 'Hospital Management System', href: '/products/hospital-management-system' },
  },
  {
    icon: <FaLock />,
    title: 'Industrial Security Systems',
    desc: 'Gate-entry applications, visitor and vehicle records, audit trails, device integrations, dashboards, and access controls.',
    product: { name: 'Industrial Gate Entry & Security System', href: '/products/industry-security-system' },
  },
];

const securityPractices = [
  'Role-based access control',
  'Secure authentication',
  'Data encryption where appropriate',
  'Database backups',
  'Logging and monitoring',
  'Environment separation',
  'Code reviews',
  'Automated testing',
  'Deployment controls',
  'Data migration planning',
];

const whyCards = [
  { icon: <FaBolt />, title: 'Performance', text: 'We optimize application architecture, queries, APIs, and infrastructure for responsive user experiences.' },
  { icon: <FaChartLine />, title: 'Scalability', text: 'We design systems that can grow with users, data, branches, sites, and transaction volumes.' },
  { icon: <FaShieldAlt />, title: 'Security', text: 'We use appropriate authentication, authorization, access controls, secure coding practices, backups, and monitoring.' },
  { icon: <FaWrench />, title: 'Maintainability', text: 'Clean structure, documentation, testing, and consistent coding practices help teams maintain and extend the software.' },
  { icon: <FaHistory />, title: 'Technology Longevity', text: 'We prefer mature tools with active communities, reliable documentation, and long-term support.' },
  { icon: <FaCoins />, title: 'Practical Cost Control', text: 'We balance performance and future growth with infrastructure and maintenance costs.' },
];

const partners = ['AWS', 'Microsoft Azure', 'Google Cloud', 'MongoDB', 'Docker'];

const faqs = [
  { q: 'How do you choose the technology stack?', a: 'We consider business goals, users, workflows, performance, security, integrations, budget, and long-term maintenance before selecting the stack.' },
  { q: 'Can you work with our existing technology?', a: 'Yes. We can assess, integrate, modernize, or extend an existing application when the codebase and systems are suitable.' },
  { q: 'Can you migrate our application to the cloud?', a: 'Yes. We can evaluate the application, data, infrastructure, security requirements, and downtime constraints before recommending a migration plan.' },
  { q: 'Do you provide system integrations?', a: 'Yes. We can develop APIs and connect systems such as accounting software, payment gateways, communication tools, biometric devices, RFID systems, and other business platforms.' },
  { q: 'How do you protect application and customer data?', a: 'We use appropriate access controls, secure development practices, backups, monitoring, and deployment controls based on the project\u2019s needs.' },
  { q: 'Can the system scale as our business grows?', a: 'We design the architecture according to expected users, data, branches, sites, transaction volume, and future integration requirements.' },
];

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

function Hero() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-content">
          <span className="page-hero-badge"><FaLaptopCode /> Technology at Rudhisoft</span>
          <h1 className="page-hero-title">The right technology for reliable business software.</h1>
          <p className="page-hero-subtitle">
            We select proven technologies based on your business goals, security requirements,
            integration needs, expected scale, and long-term maintenance.
          </p>
          <div className="cta-buttons" style={{ marginTop: '32px' }}>
            <Link to="/contact" className="btn btn-primary">Discuss Your Project</Link>
            <Link to="/services" className="btn btn-secondary">View Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeChoose() {
  return (
    <section className="how-choose">
      <div className="container">
        <div className="how-choose-header reveal">
          <span className="section-badge"><span><FaCompass /></span> Our Approach</span>
          <h2 className="section-title">Technology Selected for <span>Your Business</span> — Not Just for Trends</h2>
          <p className="section-subtitle">
            Every project has different requirements. We choose the architecture and tools
            according to performance, security, scalability, integrations, budget, delivery
            timeline, and the skills needed to maintain the system over time.
          </p>
        </div>

        <div className="principles-grid stagger-children">
          {principles.map(p => (
            <div className="why-stack-card" key={p.title}>
              <div className="why-stack-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
              {cat.note && <p className="tech-category-note">*{cat.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectTypes() {
  return (
    <section className="project-types">
      <div className="container">
        <div className="project-types-header reveal">
          <span className="section-badge"><span><FaBullseye /></span> Applied to Real Products</span>
          <h2 className="section-title">Technology by <span>Project Type</span></h2>
          <p className="section-subtitle">
            The stack connects directly to the products and industries we build for.
          </p>
        </div>

        <div className="project-types-grid stagger-children">
          {projectTypes.map(pt => (
            <div className="project-type-card" key={pt.title}>
              <div className="project-type-icon">{pt.icon}</div>
              <h3>{pt.title}</h3>
              <p>{pt.desc}</p>
              <Link to={pt.product.href} className="project-type-link">
                Related product: {pt.product.name} →
              </Link>
            </div>
          ))}
        </div>

        <div className="project-types-cta reveal">
          <p>Have a workflow that doesn't match a ready-made product?</p>
          <Link to="/services/custom-software-development" className="btn btn-outline">
            Explore Custom Software Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

function SecurityQuality() {
  return (
    <section className="security-quality">
      <div className="container">
        <div className="security-quality-header reveal">
          <span className="section-badge"><span><FaShieldAlt /></span> Security &amp; Quality</span>
          <h2 className="section-title">Built for Secure, <span>Dependable Delivery</span></h2>
        </div>

        <div className="security-grid stagger-children">
          {securityPractices.map(item => (
            <div className="security-item" key={item}>
              <FaCheckCircle className="security-item-icon" />
              <span>{item}</span>
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
              Our team combines experience in application development, cloud infrastructure,
              databases, AI, DevOps, testing, and user experience. We continue learning and
              select the right specialists based on each project's requirements.
            </p>
            <div className="expertise-stats">
              {[
                { num: '10+', label: 'Technology Capabilities' },
                { num: '', label: 'Cross-functional software team' },
                { num: '', label: 'Projects across four industries' },
                { num: '', label: 'Ongoing product and custom software delivery' },
              ].map(stat => (
                <div className="expertise-stat" key={stat.label}>
                  {stat.num && <div className="expertise-stat-number">{stat.num}</div>}
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
              <p>Years Combined Team Experience</p>
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
          <h2 className="section-title">Platforms and <span>Technologies</span> We Work With</h2>
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

function TechFaqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="tech-faq">
      <div className="container">
        <div className="tech-faq-header reveal">
          <span className="section-badge"><span><FaQuestionCircle /></span> FAQs</span>
          <h2 className="section-title">Common <span>Questions</span></h2>
        </div>

        <div className="tech-faq-list stagger-children">
          {faqs.map((item, i) => (
            <div className="tech-faq-item" key={item.q} onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
              <div className="tech-faq-question">
                <h4>{item.q}</h4>
                <FaChevronDown className={`tech-faq-caret${openIndex === i ? ' open' : ''}`} />
              </div>
              {openIndex === i && <p className="tech-faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>

        <div className="tech-faq-footer reveal">
          <Link to="/resources/faqs">View all FAQs →</Link>
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
          <h2 className="cta-title">Need the right technology approach for your project?</h2>
          <p className="cta-text">
            Tell us about your product, workflow, existing systems, and growth plans. We'll help
            you evaluate the right architecture, technologies, and delivery approach.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Discuss Your Project →</Link>
            <Link to="/services" className="btn btn-secondary">View Our Services</Link>
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
      <SEO
        title="Technology Stack & Software Architecture Services"
        description="Explore the technologies Rudhisoft uses to build secure, scalable web, mobile, AI, cloud, ERP, CRM, and industry software solutions."
        path="/technology"
        keywords="software technology stack, React Node.js developers, AWS Azure cloud development, custom software architecture India"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Technology', path: '/technology' }])]}
      />

      <main>
        <Hero />
        <HowWeChoose />
        <TechStack />
        <ProjectTypes />
        <SecurityQuality />
        <WhyStack />
        <Expertise />
        <Partners />
        <TechFaqs />
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