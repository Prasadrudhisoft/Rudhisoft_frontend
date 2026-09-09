import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './contact.css';
import { FaCheckCircle, FaCommentDots, FaEnvelope, FaExclamationTriangle, FaHeadset, FaMapMarkerAlt, FaPhoneAlt, FaQuestionCircle, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

// ── Config ────────────────────────────────────────────────────────────────────
const API_URL = 'https://admin.rudhisoft.com';

// ── Helpers ───────────────────────────────────────────────────────────────────
const SERVICE_LABELS = {
  web: 'Web Development',
  mobile: 'Mobile App Development',
  cloud: 'Cloud Solutions',
  ai: 'AI & Machine Learning',
  devops: 'DevOps Services',
  consulting: 'IT Consulting',
  other: 'Other',
};

const BUDGET_LABELS = {
  '5k-15k': '₹50,000 - ₹1,50,000',
  '15k-50k': '₹1,50,000 - ₹5,00,000',
  '50k-100k': '₹5,00,000 - ₹10,00,000',
  '100k+': '₹10,00,000+',
  'not-sure': 'Not sure yet',
};

const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function buildMessage({ company, service, budget, phone, message }) {
  let out = '';
  if (company) out += `Company: ${company}\n`;
  if (service) out += `Service Interested: ${SERVICE_LABELS[service] ?? service}\n`;
  if (budget) out += `Budget: ${BUDGET_LABELS[budget] ?? budget}\n`;
  if (phone) out += `Phone: ${phone}\n`;
  out += `\nMessage:\n${message}`;
  return out;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const contactCards = [
  { icon: <FaEnvelope />, title: 'Email Us', sub: 'For general inquiries', link: 'mailto:director@rudhisoft.com', linkLabel: 'director@rudhisoft.com' },
  { icon: <FaPhoneAlt />, title: 'Call Us', sub: 'Mon-Fri, 9am-6pm IST', link: 'tel:+919766149500', linkLabel: '+91 97661 49500' },
  { icon: <FaMapMarkerAlt />, title: 'Visit Us', sub: 'Our Office Location', link: 'https://www.google.com/maps/place/Rudhisoft+Private+Limited/data=!4m2!3m1!1s0x0:0x78a8e1b3f866db1f?sa=X&ved=1t:2428&ictx=111', linkLabel: '13, Maruti Plaza, Vidya Vikas Circle, Gangapur Rd, Nashik, Maharashtra 422005' },
  { icon: <FaHeadset />, title: 'Support', sub: 'For existing clients', link: 'mailto:director@rudhisoft.com', linkLabel: 'director@rudhisoft.com' },
];

const faqData = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer both fixed-price and time & materials models. For well-defined projects, we recommend fixed-price. For evolving requirements, time & materials provides more flexibility. We\'ll help you choose the best fit.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes! We offer various support and maintenance packages to keep your application running smoothly. This includes bug fixes, updates, security patches, and feature enhancements.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Absolutely! We frequently collaborate with in-house teams. Whether you need to augment your team or want us to work alongside your developers, we\'re flexible and experienced in collaborative environments.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'We work with modern tech stacks including React, Node.js, Python, AWS, and more. Check our Technology page for a complete list. We\'re always learning and adopting new technologies that benefit our clients.',
  },
];

// ── Hooks ─────────────────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children')
        .forEach(el => {
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

// ── Sub-components ────────────────────────────────────────────────────────────

// ── Contact Form ──────────────────────────────────────────────────────────────
const INITIAL_FORM = {
  firstName: '', lastName: '', email: '', phone: '',
  company: '', service: '', budget: '', message: '', privacy: false,
};

function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    if (!form.firstName.trim() || !form.lastName.trim()) return 'Please enter your full name.';
    if (!form.email.trim() || !isValidEmail(form.email)) return 'Please enter a valid email address.';
    if (!form.message.trim()) return 'Please enter your message.';
    if (!form.privacy) return 'Please agree to the Privacy Policy.';
    return null;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }

    setError('');
    setSubmitting(true);

    const fullName = `${form.firstName.trim()} ${form.lastName.trim()}`;
    const fullMessage = buildMessage({
      company: form.company,
      service: form.service,
      budget: form.budget,
      phone: form.phone,
      message: form.message,
    });

    try {
      const { data } = await axios.post(`${API_URL}/api/contact`, {
        name: fullName,
        email: form.email.trim(),
        message: fullMessage,
      });

      if (data.success) {
        setSuccess(true);
        setForm(INITIAL_FORM);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Network error. Please check your connection and try again.';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => { setSuccess(false); setError(''); setForm(INITIAL_FORM); };

  return (
    <div className="contact-form-wrapper reveal-right">
      <div className="contact-form-header">
        <h3>Send Us a Message</h3>
        <p>Fill out the form and we'll get back to you shortly.</p>
      </div>

      {error && (
        <div className="form-error show">
          <span><FaExclamationTriangle /></span> {error}
        </div>
      )}

      {!success && (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label>First Name <span className="required">*</span></label>
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" required />
            </div>
            <div className="form-group">
              <label>Last Name <span className="required">*</span></label>
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email <span className="required">*</span></label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
            </div>
          </div>

          <div className="form-group">
            <label>Company</label>
            <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company name" />
          </div>

          <div className="form-group">
            <label>What are you interested in?</label>
            <select name="service" value={form.service} onChange={handleChange}>
              <option value="">Select a service</option>
              {Object.entries(SERVICE_LABELS).map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Estimated Budget</label>
            <select name="budget" value={form.budget} onChange={handleChange}>
              <option value="">Select budget range</option>
              {Object.entries(BUDGET_LABELS).map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Your Message <span className="required">*</span></label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." required />
          </div>

          <div className="form-checkbox">
            <input type="checkbox" id="privacy" name="privacy" checked={form.privacy} onChange={handleChange} required />
            <label htmlFor="privacy">
              I agree to the <Link to="/privacy">Privacy Policy</Link> and consent to being contacted regarding my inquiry.
            </label>
          </div>

          <button type="submit" className="btn-submit" disabled={submitting}>
            {submitting ? 'Sending... ⏳' : <><span>Send Message</span><span>→</span></>}
          </button>
        </form>
      )}

      {success && (
        <div className="form-success show">
          <div className="form-success-icon"><FaCheckCircle /></div>
          <h3>Message Sent Successfully!</h3>
          <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
          <button type="button" className="btn-submit" onClick={handleReset}>
            Send Another Message
          </button>
        </div>
      )}
    </div>
  );
}

// ── Contact Section ────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <div className="contact-info-header">
              <span className="section-badge"><span><FaCommentDots /></span> Let's Talk</span>
              <h2>We're Here to <span>Help</span></h2>
              <p>Reach out to us through any of these channels. We typically respond within 24 hours.</p>
            </div>

            <div className="contact-cards stagger-children">
              {contactCards.map(card => (
                <div className="contact-card" key={card.title}>
                  <div className="contact-card-icon">{card.icon}</div>
                  <div className="contact-card-content">
                    <h3>{card.title}</h3>
                    <p>{card.sub}</p>
                    {card.link
                      ? <a href={card.link} target={card.link.startsWith('http') ? '_blank' : undefined} rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}>{card.linkLabel}</a>
                      : <span>{card.text}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                {[
                  [<FaLinkedin />, 'LinkedIn', 'https://www.linkedin.com/in/Rudhisoft%20Private%20Limited'],
                  [<FaTwitter />, 'Twitter', '#'],
                  [<FaGithub />, 'GitHub', '#'],
                  [<FaInstagram />, 'Instagram', 'https://www.instagram.com/rudhisoftpvtltd'],
                  [<FaYoutube />, 'YouTube', '#'],
                ].map(([icon, name, url]) => (
                  <a key={name} href={url} target={url !== '#' ? '_blank' : undefined} rel={url !== '#' ? 'noopener noreferrer' : undefined} className="social-link" aria-label={name}>{icon}</a>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

// ── FAQ ────────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = idx => setOpenIdx(prev => (prev === idx ? null : idx));

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header reveal">
          <span className="section-badge"><span><FaQuestionCircle /></span> FAQs</span>
          <h2>Frequently Asked <span>Questions</span></h2>
          <p>Quick answers to common questions about working with us.</p>
        </div>

        <div className="faq-grid reveal">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className={`faq-item${openIdx === idx ? ' active' : ''}`}
            >
              <div className="faq-question" onClick={() => toggle(idx)} role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && toggle(idx)}>
                <h3>{item.q}</h3>
                <div className="faq-toggle">+</div>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
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
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-text">Let's turn your ideas into reality. Get a free consultation and quote.</p>
          <div className="cta-buttons">
            <a href="tel:+919766149500" className="btn btn-primary">Call Us Now <FaPhoneAlt /></a>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  useScrollReveal();

  const [showBackToTop, setShowBackToTop] = useState(false);

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
        <ContactSection />
        <FAQSection />
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