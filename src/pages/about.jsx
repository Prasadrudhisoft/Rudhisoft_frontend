// src/pages/AboutUs.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../Components/SEO';
import { FaBalanceScale, FaBookOpen, FaBullseye, FaChartBar, FaChartLine, FaCheck, FaClipboardList, FaCloud, FaCompass, FaFistRaised, FaGem, FaGithub, FaGlassCheers, FaGlobeAsia, FaGraduationCap, FaHandshake, FaLaptopCode, FaLightbulb, FaLinkedin, FaMedal, FaPalette, FaRobot, FaRocket, FaSeedling, FaShieldAlt, FaSmile, FaStar, FaTrophy, FaTwitter, FaUnlockAlt, FaUserTie, FaUsers } from 'react-icons/fa';

// Sub-components
const SectionBadge = ({ icon, text }) => (
  <span className="section-badge">
    <span>{icon}</span>
    {text}
  </span>
);

const IntroStat = ({ number, label }) => (
  <div className="intro-stat">
    <div className="intro-stat-number">{number}</div>
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

const TimelineItem = ({ year, title, description, isEven }) => (
  <div className={`timeline-item ${isEven ? 'even' : ''}`}>
    <div className="timeline-marker"></div>
    <div className="timeline-content">
      <span className="timeline-year">{year}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const TeamCard = ({ image, name, role, description, socials }) => (
  <div className="team-card">
    <div className="team-image">
      <img src={image} alt={name} loading="lazy" />
      <div className="team-image-overlay">
        <div className="team-social">
          {socials.map((social, index) => (
            <a key={index} href={social.link} aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="team-info">
      <h3>{name}</h3>
      <p className="team-role">{role}</p>
      <p>{description}</p>
    </div>
  </div>
);

const AchievementItem = ({ icon, number, label }) => (
  <div className="achievement-item">
    <div className="achievement-icon">{icon}</div>
    <div className="achievement-number">{number}</div>
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

const ExtendedTeamItem = ({ icon, title, count }) => (
  <div className="extended-team-item">
    <div className="extended-team-icon">{icon}</div>
    <h4>{title}</h4>
    <p>{count}</p>
  </div>
);

// Main Component
const AboutUs = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Data Arrays
  const introStats = [
    { number: '15+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Tech Experts' },
  ];

  const missionPoints = [
    'Solve one real operational problem well, per product',
    'Deploy fast — days, not months',
    'Build lasting partnerships based on trust and transparency',
    'Give every customer a clear path from problem to demo to go-live',
  ];

  const visionPoints = [
    'Become the default ready-made software for Indian schools, contractors, hospitals, and factories',
    'Keep our products simple enough to deploy without a lengthy implementation project',
    'Take on custom builds where off-the-shelf genuinely isn\'t enough',
    'Earn trust through outcomes, not marketing claims',
  ];

  const values = [
    { icon: <FaLightbulb />, title: 'Innovation First', description: 'We embrace new ideas and technologies to solve complex challenges creatively.' },
    { icon: <FaBullseye />, title: 'Excellence Always', description: 'We never settle for "good enough." Every interaction reflects our commitment to quality.' },
    { icon: <FaHandshake />, title: 'Client Partnership', description: "We see ourselves as an extension of our clients' teams, invested in their success." },
    { icon: <FaUnlockAlt />, title: 'Transparency', description: 'Open communication and honest feedback form the foundation of every relationship.' },
    { icon: <FaChartLine />, title: 'Continuous Growth', description: 'We invest in learning and constantly evolve to stay at the forefront of technology.' },
    { icon: <FaSeedling />, title: 'Sustainability', description: 'We build solutions designed for the long term, considering environmental impact.' },
    { icon: <FaShieldAlt />, title: 'Integrity', description: "We do what's right, even when no one is watching. Ethics are non-negotiable." },
    { icon: <FaUsers />, title: 'Collaboration', description: 'Great things happen when diverse minds work together. We celebrate teamwork.' },
  ];

  const timeline = [
    { year: '2020', title: 'The Beginning', description: 'RUDHISOFT was founded by a small team of passionate developers with a vision to create technology that truly matters.' },
    { year: '2021', title: 'First Major Client', description: 'Secured our first enterprise client and successfully delivered a large-scale ERP system.' },
    { year: '2022', title: 'Global Expansion', description: 'Expanded operations internationally, opening offices in 3 countries. Team grew to 25+ members.' },
    { year: '2023', title: 'AI & Cloud Focus', description: 'Launched dedicated AI and Cloud practices. Developed proprietary frameworks and tools.' },
    { year: '2024', title: 'The Future is Now', description: 'Leading the charge in generative AI. 50+ team members serving clients across 15+ countries.' },
  ];

  const founders = [
  {
    image: '',
    name: 'Prasad Jadhav',
    role: 'Founder & CEO',
    description: '20+ years of experience in technology leadership and business strategy.',
    socials: [
      { icon: <FaLinkedin />, link: '#', label: 'LinkedIn' },
      { icon: <FaTwitter />, link: '#', label: 'Twitter' },
    ],
  },
  {
    image: '',
    name: 'Vaishnavi Kadlag',
    role: 'Co-Founder',
    description: 'AI/ML expert with 15+ years building scalable enterprise systems.',
    socials: [
      { icon: <FaLinkedin />, link: '#', label: 'LinkedIn' },
      { icon: <FaGithub />, link: '#', label: 'GitHub' },
    ],
  },
];

const professionals = [
  { image: '', name: 'Priya Patel', role: 'CTO' },
  { image: '', name: 'Atul Sahane', role: 'FullStack Developer' },
  { image: '', name: 'Arjun Sharma', role: 'Lead Developer' },
  { image: '', name: 'Anshika', role: 'UI/UX Designer' },
  { image: '', name: 'Rohit Desai', role: 'Cloud Architect' },
  { image: '', name: 'Neha Joshi', role: 'AI Specialist' },
  { image: '', name: 'Vijay Shinde', role: 'DevOps Engineer' },
  { image: '', name: 'Anjali Mehta', role: 'QA Lead' },

];


  const extendedTeam = [
    { icon: <FaLaptopCode />, title: 'Engineering', count: '25+ Developers' },
    { icon: <FaPalette />, title: 'Design', count: '8+ Designers' },
    { icon: <FaCloud />, title: 'DevOps', count: '6+ Engineers' },
    { icon: <FaRobot />, title: 'AI/ML', count: '5+ Specialists' },
    { icon: <FaChartBar />, title: 'Analytics', count: '4+ Analysts' },
    { icon: <FaShieldAlt />, title: 'QA', count: '6+ Testers' },
  ];

  const achievements = [
    { icon: <FaTrophy />, number: '10+', label: 'Projects Completed' },
    { icon: <FaSmile />, number: '98%', label: 'Client Satisfaction' },
    { icon: <FaGlobeAsia />, number: '15+', label: 'Countries Served' },
    { icon: <FaMedal />, number: '12+', label: 'Industry Awards' },
  ];

  const cultureFeatures = [
    { icon: <FaGraduationCap />, title: 'Continuous Learning', description: 'Access to courses, certifications, conferences, and learning resources.' },
    { icon: <FaBalanceScale />, title: 'Work-Life Balance', description: 'Flexible hours, remote work options, and generous time off policies.' },
    { icon: <FaGlassCheers />, title: 'Fun & Celebrations', description: 'Team events, hackathons, game nights, and celebration of milestones.' },
    { icon: <FaFistRaised />, title: 'Health & Wellness', description: 'Comprehensive health benefits, gym memberships, and mental health support.' },
  ];

  const cultureImages = [
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop', alt: 'Team Meeting', large: false },
    { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=200&fit=crop', alt: 'Team Fun', large: false },
    { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=250&fit=crop', alt: 'Office Space', large: true },
  ];

  const whyWorkWithUs = [
    { number: '01', title: 'Proven Track Record', description: '200+ successful projects delivered across diverse industries. Our portfolio speaks for our capabilities.' },
    { number: '02', title: 'Technical Excellence', description: 'Our team comprises certified experts in cutting-edge technologies, from AI/ML to cloud architecture.' },
    { number: '03', title: 'Agile Methodology', description: 'We follow industry-best agile practices ensuring transparency, flexibility, and faster time-to-market.' },
    { number: '04', title: 'End-to-End Solutions', description: 'From ideation to deployment and beyond — we provide comprehensive services covering the entire lifecycle.' },
    { number: '05', title: 'Dedicated Support', description: '24/7 support, dedicated project managers, and transparent communication ensure your project is on track.' },
    { number: '06', title: 'Competitive Pricing', description: 'World-class solutions at competitive rates. We deliver maximum value without compromising quality.' },
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
        description="RUDHISOFT is a Nashik-based technology company building ready-made software for schools, construction sites, hospitals, and industrial security — plus custom software builds."
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
                Ready-Made Software for <span>Real Industries</span>, Built by a Team That Ships
              </h1>
              <p className="intro-text">
                RUDHISOFT is a Nashik-based technology company building ready-made software for
                schools, construction sites, hospitals, and industrial security — RudhiCore,
                RudhiArch, our Hospital Management System, and Industry Security System — plus
                custom software for businesses that need something off-the-shelf can't cover.
              </p>
              <p className="intro-text highlight">
                "We don't build vague 'innovative solutions.' We solve specific problems —
                admissions chaos, site visibility, patient queues, gate security — with software
                that ships in days, not months."
              </p>
              <p className="intro-text">
                Every product we build starts from a real operational pain point, not a feature
                checklist. That's why our customers go live fast and keep using what we build.
              </p>

              <div className="intro-stats">
                {introStats.map((stat, index) => (
                  <IntroStat key={index} {...stat} />
                ))}
              </div>
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
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-header reveal">
            <SectionBadge icon=<FaBullseye /> text="Our Purpose" />
            <h2 className="section-title">Mission & <span>Vision</span></h2>
            <p className="section-subtitle">
              Guided by purpose, driven by innovation — discover the principles that shape
              everything we do at RUDHISOFT.
            </p>
          </div>

          <div className="mv-grid stagger-children">
            <div className="mv-card mission-card">
              <div className="mv-icon"><FaRocket /></div>
              <h3>Our Mission</h3>
              <p>
                To give schools, contractors, hospitals, and factories software that solves their
                actual day-to-day problems — admissions, site visibility, patient queues, gate
                security — and to build custom software for companies whose needs go beyond that.
              </p>
              <ul className="mv-points">
                {missionPoints.map((point, index) => (
                  <li key={index}><span><FaCheck /></span> {point}</li>
                ))}
              </ul>
            </div>

            <div className="mv-card vision-card">
              <div className="mv-icon"><FaCompass /></div>
              <h3>Our Vision</h3>
              <p>
                To be the go-to ready-made software provider for Indian schools, construction
                sites, hospitals, and factories — known for fast deployment and software that
                actually gets used, not just installed.
              </p>
              <ul className="mv-points">
                {visionPoints.map((point, index) => (
                  <li key={index}><span><FaCheck /></span> {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <div className="container">
          <div className="values-header reveal">
            <SectionBadge icon=<FaGem /> text="What We Stand For" />
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

      {/* Our Story / Timeline Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-header reveal">
            <SectionBadge icon=<FaBookOpen /> text="Our Journey" />
            <h2 className="section-title">The RUDHISOFT <span>Story</span></h2>
            <p className="section-subtitle">
              From humble beginnings to a global technology partner — explore
              the milestones that shaped who we are today.
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <TimelineItem key={index} {...item} isEven={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
<section className="leadership">
  <div className="container">
    <div className="leadership-header reveal">
      <SectionBadge icon=<FaUsers /> text="Meet Our Leaders" />
      <h2 className="section-title">Leadership <span>Team</span></h2>
      <p className="section-subtitle">
        The visionaries driving RUDHISOFT forward — meet the experienced
        professionals leading our mission.
      </p>
    </div>

    {/* Founders Row */}
    <div className="founders-grid stagger-children">
      {founders.map((member, index) => (
        <TeamCard key={index} {...member} />
      ))}
    </div>

    {/* Professionals Row */}
    <div className="professionals-header reveal" style={{ textAlign: 'center', margin: '60px 0 30px' }}>
      <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Our <span style={{ color: 'var(--primary, #6366f1)' }}>Professionals</span></h3>
    </div>

    <div className="professionals-grid stagger-children">
      {professionals.map((member, index) => (
        <div key={index} className="professional-card">
          <div className="professional-image">
            <img src={member.image} alt={member.name} loading="lazy" />
          </div>
          <h4 className="professional-name">{member.name}</h4>
          <p className="professional-role">{member.role}</p>
        </div>
      ))}
    </div>

    {/* Extended Team */}
    <div className="extended-team reveal">
      <div className="extended-team-header">
        <h3>Our Expert Teams</h3>
        <p>Beyond leadership, we have dedicated teams of specialists across every domain.</p>
      </div>
      <div className="extended-team-grid">
        {extendedTeam.map((team, index) => (
          <ExtendedTeamItem key={index} {...team} />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="container">
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
              <SectionBadge icon=<FaStar /> text="Life at RUDHISOFT" />
              <h2 className="section-title">Our <span>Culture</span></h2>
              <p className="culture-text">
                At RUDHISOFT, we believe that great work comes from great people working in
                an environment where they can thrive. Our culture is built on trust, creativity,
                and continuous learning.
              </p>
              <p className="culture-text">
                We foster an inclusive workplace where diverse perspectives are celebrated,
                ideas are encouraged, and everyone has the opportunity to make an impact.
              </p>

              <div className="culture-features">
                {cultureFeatures.map((feature, index) => (
                  <CultureFeature key={index} {...feature} />
                ))}
              </div>
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

      {/* Why Work With Us Section */}
      <section className="why-work-with-us">
        <div className="container">
          <div className="why-work-header reveal">
            <SectionBadge icon=<FaHandshake /> text="Partner With Us" />
            <h2 className="section-title">Why Work With <span>RUDHISOFT?</span></h2>
            <p className="section-subtitle">
              Discover what makes us different and why leading companies
              choose us as their technology partner.
            </p>
          </div>

          <div className="why-work-grid stagger-children">
            {whyWorkWithUs.map((item, index) => (
              <WhyWorkCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content reveal">
            <h2 className="cta-title">Ready to See Which Product Fits You?</h2>
            <p className="cta-text">
              Whether it's RudhiCore, RudhiArch, our Hospital Management System, Industry
              Security System, or a custom build — let's talk. Get a free 20-min consultation.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <span>Get in Touch</span>
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <span>Explore Services</span>
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