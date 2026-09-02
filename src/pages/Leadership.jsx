import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import './products.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../Components/SEO';
import atulImg from '../assets/images/atul.jpg';
import shubhamImg from '../assets/images/shubham.jpg';
import { FaHandshake, FaLinkedin, FaUsers } from 'react-icons/fa';

const PATH = '/leadership';

const founders = [
  {
    name: 'Prasad Jadhav',
    role: 'Founder and Director',
    description: "Prasad leads Rudhisoft's product direction, customer engagements, and software delivery. His focus is helping businesses replace manual workflows with practical, scalable software.",
    socials: [{ icon: <FaLinkedin />, link: '#', label: 'LinkedIn' }],
  },
  {
    name: 'Vaishnavi Kadlag',
    role: 'Co-Founder and Manager',
    description: "Vaishnavi is responsible for supporting the company's day-to-day operations, team coordination, client communication, and business execution.",
    socials: [{ icon: <FaLinkedin />, link: '#', label: 'LinkedIn' }],
  },
  {
    name: 'Shrunkhala Gite',
    role: 'Director',
    description: "Shrunkhala's leadership, professionalism, and focus on sustainable growth play an important role in advancing RUDHISOFT's vision of delivering innovative, reliable, and business-focused software solutions.",
    socials: [{ icon: <FaLinkedin />, link: '#', label: 'LinkedIn' }],
  },
];

const professionals = [
  { name: 'Atul', image: atulImg },
  { name: 'Shubham', image: shubhamImg },
];

function initials(name) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

const FounderCard = ({ name, role, description, socials }) => (
  <div className="team-card">
    <div className="team-image">
      <div className="professional-image-placeholder" style={{ height: '100%', minHeight: '220px', fontSize: '2.2rem' }}>
        {initials(name)}
      </div>
      <div className="team-image-overlay">
        <div className="team-social">
          {socials.map((social, i) => (
            <a key={i} href={social.link} aria-label={social.label}>{social.icon}</a>
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

const ProfessionalCard = ({ name, image }) => (
  <div className="professional-card">
    <div className="professional-image">
      <img src={image} alt={name} loading="lazy" />
    </div>
    <p className="professional-name">{name}</p>
  </div>
);

export default function Leadership() {
  // Reveal-on-scroll, same behaviour as about.jsx (.reveal / .stagger-children
  // start at opacity:0 in about.css and need JS to add the .active class).
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
    const t = setTimeout(revealElements, 100);
    return () => {
      window.removeEventListener('scroll', revealElements);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="about-page product-page">
      <SEO
        title="Leadership Team"
        description="Meet the founders and core team behind RUDHISOFT — the people leading product direction, delivery, and day-to-day operations."
        path={PATH}
        keywords="RUDHISOFT founders, RUDHISOFT leadership team, software company Nashik team"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Company', path: '/about' }, { name: 'Leadership', path: PATH }])]}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <span className="section-badge"><span><FaUsers /></span> Meet Our Leaders</span>
          <h1>Leadership Team</h1>
          <p className="pp-hero-subhead">
            The founders and core team driving RUDHISOFT forward — building practical,
            industry-focused software and supporting the businesses that run on it.
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="leadership" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="founders-grid stagger-children">
            {founders.map((member, i) => (
              <FounderCard key={i} {...member} />
            ))}
          </div>

          <div className="professionals-header reveal">
            <h3>Our <span>Professionals</span></h3>
            <p className="professionals-note">
              Rudhisoft works with a growing team of developers, designers, QA professionals, and
              technology specialists. We bring the right people together based on the product,
              industry, and implementation requirements.
            </p>
          </div>

          <div className="professionals-grid stagger-children">
            {professionals.map((person, i) => (
              <ProfessionalCard key={i} {...person} />
            ))}
          </div>

          <div className="leadership-footer-cta">
            <Link to="/careers" className="btn btn-secondary">
              <span>View open positions</span>
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="pp-cta-band">
        <div className="container">
          <h2>Want to talk to our team directly?</h2>
          <div className="pp-cta-band-buttons">
            <Link to="/contact" className="btn btn-primary"><span>Get in touch</span></Link>
            <Link
              to="/about"
              className="btn btn-secondary"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
            >
              <span>More about RUDHISOFT</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}