import React from 'react';
import SEO, { organizationSchema, breadcrumbSchema } from '../../Components/SEO';
import './legal.css';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Cookies() {
  return (
    <div className="legal-page">
      <SEO
        title="Cookie Policy"
        description="How RUDHISOFT uses cookies on this website."
        path="/cookies"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Cookie Policy', path: '/cookies' }])]}
      />

      <section className="legal-hero">
        <h1>Cookie Policy</h1>
        <p>Last updated: August 2026</p>
      </section>

      <div className="legal-body">
        {/* <FaExclamationTriangle /> PLACEHOLDER — update once actual analytics/cookie tools are added to the site. */}
        <div className="legal-note">
          <FaExclamationTriangle /> Placeholder text — update this list once actual analytics or tracking tools are
          added to the live site.
        </div>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device that help websites function
          properly and, in some cases, help us understand how visitors use our site.
        </p>

        <h2>2. How We Use Cookies</h2>
        <ul>
          <li><strong>Essential cookies</strong> — needed for basic site functionality (e.g. remembering menu state).</li>
          <li><strong>Analytics cookies</strong> — help us understand which pages are most useful, if analytics tools are enabled.</li>
        </ul>

        <h2>3. Managing Cookies</h2>
        <p>
          Most browsers let you refuse or delete cookies through their settings. Disabling
          cookies may affect some functionality of this website.
        </p>

        <h2>4. Third-Party Cookies</h2>
        <p>
          If we embed third-party content (such as Google Fonts or an analytics service), those
          providers may set their own cookies in accordance with their own privacy policies.
        </p>

        <h2>5. Contact Us</h2>
        <p>
          Questions about this Cookie Policy can be sent to{' '}
          <a href="mailto:director@rudhisoft.com">director@rudhisoft.com</a>.
        </p>
      </div>
    </div>
  );
}
