import React from 'react';
import SEO, { organizationSchema, breadcrumbSchema } from '../../Components/SEO';
import './legal.css';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Terms() {
  return (
    <div className="legal-page">
      <SEO
        title="Terms of Service"
        description="The terms and conditions governing the use of RUDHISOFT's website and services."
        path="/terms"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms of Service', path: '/terms' }])]}
      />

      <section className="legal-hero">
        <h1>Terms of Service</h1>
        <p>Last updated: August 2026</p>
      </section>

      <div className="legal-body">
        {/* <FaExclamationTriangle /> PLACEHOLDER — have this reviewed by a lawyer before publishing live. */}
        <div className="legal-note">
          <FaExclamationTriangle /> This is placeholder terms text. Please have it reviewed by a legal professional
          before this page goes live.
        </div>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing this website, you agree to be bound by these Terms of Service. If you do
          not agree with any part of these terms, please do not use this website.
        </p>

        <h2>2. Use of This Website</h2>
        <p>
          This website is provided for informational purposes about RUDHISOFT's products and
          services. You agree not to misuse the site, attempt unauthorised access to our
          systems, or use the contact form for spam or unlawful purposes.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, and product names —
          is the property of Rudhisoft Private Limited unless otherwise stated, and may not be
          reproduced without permission.
        </p>

        <h2>4. Products &amp; Services</h2>
        <p>
          Descriptions of RudhiCore, RudhiArch, Hospital Management System, Industrial Gate
          In-Out System, and custom software services on this site are for general information.
          Specific pricing, features, and delivery timelines are confirmed separately in a
          signed proposal or contract.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          RUDHISOFT is not liable for any indirect or consequential loss arising from the use of
          this website. Formal service commitments are governed by individual client contracts,
          not by this website.
        </p>

        <h2>6. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of this website after
          changes are posted constitutes acceptance of the updated terms.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          Questions about these Terms can be sent to{' '}
          <a href="mailto:director@rudhisoft.com">director@rudhisoft.com</a>.
        </p>
      </div>
    </div>
  );
}
