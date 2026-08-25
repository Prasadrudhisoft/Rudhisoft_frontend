import React from 'react';
import SEO, { organizationSchema, breadcrumbSchema } from '../../Components/SEO';
import './legal.css';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Privacy() {
  return (
    <div className="legal-page">
      <SEO
        title="Privacy Policy"
        description="How RUDHISOFT collects, uses, and protects information submitted through this website."
        path="/privacy"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }])]}
      />

      <section className="legal-hero">
        <h1>Privacy Policy</h1>
        <p>Last updated: August 2026</p>
      </section>

      <div className="legal-body">
        {/* <FaExclamationTriangle /> PLACEHOLDER — have this reviewed by a lawyer before publishing live.
            Replace bracketed details with RUDHISOFT's actual data-handling practices. */}
        <div className="legal-note">
          <FaExclamationTriangle /> This is placeholder policy text. Please have it reviewed by a legal professional
          and updated with RUDHISOFT's actual data practices before this page goes live.
        </div>

        <h2>1. Information We Collect</h2>
        <p>
          When you use the contact form, apply for a job, or otherwise reach out to us, we may
          collect your name, email address, phone number, company name, and any message details
          you choose to share with us.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To respond to your enquiries and provide requested information about our products and services.</li>
          <li>To process job applications submitted via our Careers page.</li>
          <li>To improve our website and communications.</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share information with trusted
          service providers who help us operate this website (for example, form-handling or
          email services), and only to the extent necessary for them to perform those services.
        </p>

        <h2>4. Data Retention</h2>
        <p>
          We retain enquiry and application data only as long as necessary to respond to you and
          for legitimate business record-keeping, after which it is deleted or anonymised.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal data at any
          time by emailing us at{' '}
          <a href="mailto:director@rudhisoft.com">director@rudhisoft.com</a>.
        </p>

        <h2>6. Cookies</h2>
        <p>
          This website may use cookies for basic functionality and analytics. See our{' '}
          <a href="/cookies">Cookie Policy</a> for details.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          Questions about this Privacy Policy can be sent to{' '}
          <a href="mailto:director@rudhisoft.com">director@rudhisoft.com</a> or by phone at{' '}
          <a href="tel:+919766149500">+91 97661 49500</a>.
        </p>
      </div>
    </div>
  );
}
