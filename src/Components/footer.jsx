import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
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
    ],
  };

  return (
    <footer className="footer">
      <div className="container">
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
              Ready-made software for schools, construction sites, hospitals, and industrial
              security — plus custom builds. Deploy in days, not months.
            </p>

            <div className="footer-social">
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
                <a href="mailto:director@rudhisoft.com">director@rudhisoft.com</a>
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
                  13, Maruti Plaza, Vidya Vikas Circle, Gangapur Rd, Nasik, Maharashtra 422005
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