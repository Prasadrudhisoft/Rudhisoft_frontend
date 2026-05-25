import React, { useState } from 'react';
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

    ],
    services: [
      { href: '#', label: 'Custom Development' },
      { href: '#', label: 'Mobile Apps' },
      { href: '#', label: 'Cloud Solutions' },
      { href: '#', label: 'AI & ML' },
      { href: '#', label: 'DevOps' },
    ],
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* ── Brand Column ─────────────────────────────── */}
          <div className="footer-brand">
            <div className="footer-logo">
              {!logoError ? (
                <img
                  src={logo}
                  alt="RUDHISOFT logo"
                  className="footer-logo-img"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="footer-logo-icon">RS</div>
              )}
              <span className="footer-logo-text">RUDHISOFT</span>
            </div>

            <p>
              Innovative technology solutions that empower businesses to grow,
              innovate, and lead in the digital era. Let's build the future together.
            </p>

            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* ── Company Links ────────────────────────────── */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* ── Services Links ───────────────────────────── */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* ── Contact Column ───────────────────────────── */}
          <div className="footer-column">
            <h4>Contact</h4>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaEnvelope />
              </div>
              <div className="footer-contact-text">
                <a href="mailto:info@rudhisoft.com">info@rudhisoft.com</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="footer-contact-text">
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaMapMarkerAlt />
              </div>
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
            © 2025 <a href="/">RUDHISOFT</a>. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;