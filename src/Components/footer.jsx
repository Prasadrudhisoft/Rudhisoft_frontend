import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logofooter.png';
import "./footer.css";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const [logoError, setLogoError] = useState(false);

  const footerLinks = {
    company: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/services', label: 'Services' },
      { href: '/technology', label: 'Technologies' },
      { href: '/leadership', label: 'Leadership' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
    ],
    products: [
      { href: '/products/rudhicore-school-college-management', label: 'RudhiCore' },
      { href: '/products/rudhiarch-construction-site-erp', label: 'RudhiArch' },
      { href: '/products/hospital-management-system', label: 'Hospital Management System' },
      { href: '/products/industry-security-system', label: 'Industrial Gate In-Out System' },
    ],
    industries: [
      { href: '/industries/education-school-college-management', label: 'Education' },
      { href: '/industries/construction-site-management', label: 'Construction & Infrastructure' },
      { href: '/industries/hospital-clinic-management', label: 'Healthcare' },
      { href: '/industries/manufacturing-industrial-security', label: 'Manufacturing & Industrial' },
    ],
    resources: [
      { href: '/services/custom-software-development', label: 'Custom Software Development' },
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/blog', label: 'Blog' },
      { href: '/resources/faqs', label: 'FAQs' },
      { href: '/resources/guides-checklists', label: 'Guides & Checklists' },
    ],
  };

  return (
    <footer className="footer">
      <div className="container">

        {/* ── Direct demo CTA ─────────────────────────── */}
        <div
          className="footer-demo-cta"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            padding: "28px 0",
            marginBottom: "32px",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <p
            style={{
              margin: 0,
              maxWidth: "620px",
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            Rudhisoft builds ready-to-deploy and custom software for education, construction, healthcare, and industrial businesses.
          </p>
          <Link
            to="/contact"
            className="footer-demo-btn"
            style={{
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "8px",
              background: "var(--primary-gradient, var(--primary))",
              color: "var(--white, #fff)",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Book a demo →
          </Link>
        </div>

        <div className="footer-grid">

          {/* ── Brand Column ─────────────────────────────── */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              {!logoError ? (
                <img
                  src={logo}
                  alt="RUDHISOFT"
                  className="footer-logo-img"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="footer-logo-icon">RS</div>
              )}
              <span className="footer-logo-text">RUDHISOFT</span>
            </Link>

            <p>
              Ready-to-deploy software for schools, contractors, hospitals, and factories —
              plus custom software development.
            </p>

            <div className="footer-social">
              {/* NOTE: replace these href="#" values with your actual profile URLs */}
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* ── Company Links ────────────────────────────── */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}><Link to={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* ── Products Links ───────────────────────────── */}
          <div className="footer-column">
            <h4>Products</h4>
            <ul className="footer-links">
              {footerLinks.products.map((link, index) => (
                <li key={index}><Link to={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* ── Industries Links ─────────────────────────── */}
          <div className="footer-column">
            <h4>Industries</h4>
            <ul className="footer-links">
              {footerLinks.industries.map((link, index) => (
                <li key={index}><Link to={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* ── Resources Links ──────────────────────────── */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links">
              {footerLinks.resources.map((link, index) => (
                <li key={index}><Link to={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* ── Contact Column ───────────────────────────── */}
          <div className="footer-column">
            <h4>Contact</h4>

            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaEnvelope /></div>
              <div className="footer-contact-text">
                <a href="mailto:director@rudhisoft.com">Sales: director@rudhisoft.com</a>
                <br />
                {/* NOTE: update this if your support inbox is different */}
                <a href="mailto:support@rudhisoft.com">Support: support@rudhisoft.com</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaPhoneAlt /></div>
              <div className="footer-contact-text">
                <a href="tel:+919766149500">+91 9766149500</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaMapMarkerAlt /></div>
              <div className="footer-contact-text">
                <a
                  href="https://www.google.com/maps/place/Rudhisoft+Private+Limited/@20.0089107,73.7639885,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  13, Maruti Plaza, Vidya Vikas Circle, Gangapur Rd, Nashik, Maharashtra 422005
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── Footer Bottom ────────────────────────────────── */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 <Link to="/">RUDHISOFT</Link>. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;