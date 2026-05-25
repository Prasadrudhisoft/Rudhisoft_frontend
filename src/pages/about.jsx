// src/pages/AboutUs.jsx
import React, { useEffect, useState } from 'react';
import './about.css';

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
    { number: '10+', label: 'Years of Excellence' },
    { number: '200+', label: 'Projects Delivered' },
    { number: '50+', label: 'Team Members' },
  ];

  const missionPoints = [
    'Deliver excellence in every project we undertake',
    'Build lasting partnerships based on trust and transparency',
    'Continuously innovate to stay ahead of technology curves',
    'Create measurable business value for our clients',
  ];

  const visionPoints = [
    'Lead the AI and digital transformation revolution',
    'Set industry standards for software quality and security',
    'Build a global community of technology excellence',
    'Shape the future of how businesses leverage technology',
  ];

  const values = [
    { icon: '💡', title: 'Innovation First', description: 'We embrace new ideas and technologies to solve complex challenges creatively.' },
    { icon: '🎯', title: 'Excellence Always', description: 'We never settle for "good enough." Every interaction reflects our commitment to quality.' },
    { icon: '🤝', title: 'Client Partnership', description: "We see ourselves as an extension of our clients' teams, invested in their success." },
    { icon: '🔓', title: 'Transparency', description: 'Open communication and honest feedback form the foundation of every relationship.' },
    { icon: '📈', title: 'Continuous Growth', description: 'We invest in learning and constantly evolve to stay at the forefront of technology.' },
    { icon: '🌱', title: 'Sustainability', description: 'We build solutions designed for the long term, considering environmental impact.' },
    { icon: '🛡️', title: 'Integrity', description: "We do what's right, even when no one is watching. Ethics are non-negotiable." },
    { icon: '👥', title: 'Collaboration', description: 'Great things happen when diverse minds work together. We celebrate teamwork.' },
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
      { icon: '💼', link: '#', label: 'LinkedIn' },
      { icon: '🐦', link: '#', label: 'Twitter' },
    ],
  },
  {
    image: '',
    name: 'Vaishnavi Kadlag',
    role: 'Co-Founder',
    description: 'AI/ML expert with 15+ years building scalable enterprise systems.',
    socials: [
      { icon: '💼', link: '#', label: 'LinkedIn' },
      { icon: '💻', link: '#', label: 'GitHub' },
    ],
  },
];

const professionals = [
  { image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h300&fit=crop', name: 'Priya Patel', role: 'COO' },
  { image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop', name: 'Atul Sahane', role: 'FullStack Developer' },
  { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop', name: 'Arjun Sharma', role: 'Lead Developer' },
  { image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop', name: 'Anshika', role: 'UI/UX Designer' },
  { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', name: 'Rohit Desai', role: 'Cloud Architect' },
  { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop', name: 'Neha Joshi', role: 'AI Specialist' },
  { image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop', name: 'David Roy', role: 'DevOps Engineer' },
  { image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop', name: 'Anjali Mehta', role: 'QA Lead' },

];


  const extendedTeam = [
    { icon: '👨‍💻', title: 'Engineering', count: '25+ Developers' },
    { icon: '🎨', title: 'Design', count: '8+ Designers' },
    { icon: '☁️', title: 'DevOps', count: '6+ Engineers' },
    { icon: '🤖', title: 'AI/ML', count: '5+ Specialists' },
    { icon: '📊', title: 'Analytics', count: '4+ Analysts' },
    { icon: '🛡️', title: 'QA', count: '6+ Testers' },
  ];

  const achievements = [
    { icon: '🏆', number: '10+', label: 'Projects Completed' },
    { icon: '😊', number: '98%', label: 'Client Satisfaction' },
    { icon: '🌍', number: '15+', label: 'Countries Served' },
    { icon: '🏅', number: '12+', label: 'Industry Awards' },
  ];

  const cultureFeatures = [
    { icon: '🎓', title: 'Continuous Learning', description: 'Access to courses, certifications, conferences, and learning resources.' },
    { icon: '⚖️', title: 'Work-Life Balance', description: 'Flexible hours, remote work options, and generous time off policies.' },
    { icon: '🎉', title: 'Fun & Celebrations', description: 'Team events, hackathons, game nights, and celebration of milestones.' },
    { icon: '💪', title: 'Health & Wellness', description: 'Comprehensive health benefits, gym memberships, and mental health support.' },
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

      {/* Company Intro Section */}
      <section className="company-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content reveal-left">
              <span className="intro-label">Who We Are</span>
              <h1 className="intro-title">
                Building the <span>Future</span> of Technology, One Innovation at a Time
              </h1>
              <p className="intro-text">
                Founded with a vision to bridge the gap between business challenges and technological solutions,
                RUDHISOFT has grown from a small team of developers into a full-service technology partner
                trusted by companies across the globe.
              </p>
              <p className="intro-text highlight">
                "We don't just build software. We engineer solutions that transform how businesses operate,
                compete, and grow in the digital age."
              </p>
              <p className="intro-text">
                Our journey began with a simple belief: that technology should empower businesses, not complicate them.
                Today, we continue to uphold this principle through every project we undertake.
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
                <div className="intro-float-icon">🌍</div>
                <div className="intro-float-content">
                  <h4>Global Presence</h4>
                  <p>Serving 15+ Countries</p>
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
            <SectionBadge icon="🎯" text="Our Purpose" />
            <h2 className="section-title">Mission & <span>Vision</span></h2>
            <p className="section-subtitle">
              Guided by purpose, driven by innovation — discover the principles that shape
              everything we do at RUDHISOFT.
            </p>
          </div>

          <div className="mv-grid stagger-children">
            <div className="mv-card mission-card">
              <div className="mv-icon">🚀</div>
              <h3>Our Mission</h3>
              <p>
                To empower organizations worldwide with innovative, scalable, and intelligent
                technology solutions that drive growth, efficiency, and competitive advantage.
              </p>
              <ul className="mv-points">
                {missionPoints.map((point, index) => (
                  <li key={index}><span>✓</span> {point}</li>
                ))}
              </ul>
            </div>

            <div className="mv-card vision-card">
              <div className="mv-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>
                To be the world's most trusted technology partner, recognized for our innovation,
                expertise, and unwavering commitment to client success in the AI-driven future.
              </p>
              <ul className="mv-points">
                {visionPoints.map((point, index) => (
                  <li key={index}><span>✓</span> {point}</li>
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
            <SectionBadge icon="💎" text="What We Stand For" />
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
            <SectionBadge icon="📖" text="Our Journey" />
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
      <SectionBadge icon="👥" text="Meet Our Leaders" />
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
              <SectionBadge icon="🌟" text="Life at RUDHISOFT" />
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
            <SectionBadge icon="🤝" text="Partner With Us" />
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
            <h2 className="cta-title">Ready to Start Your Journey With Us?</h2>
            <p className="cta-text">
              Let's discuss how RUDHISOFT can help transform your business with
              innovative technology solutions. Schedule a free consultation today.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                <span>Get in Touch</span>
                <span className="btn-icon">→</span>
              </a>
              <a href="/services" className="btn btn-secondary">
                <span>Explore Services</span>
                <span className="btn-icon">📋</span>
              </a>
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