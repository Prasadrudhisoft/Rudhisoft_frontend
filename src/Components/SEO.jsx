import React from 'react';
import { Helmet } from 'react-helmet-async';

// Central place for site-wide constants used across every page's SEO tags.
// ⚠️ UPDATE SITE_URL below if rudhisoft.com is not your live domain.
export const SITE_URL = 'https://rudhisoft.com';
export const SITE_NAME = 'RUDHISOFT';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`; // add a 1200x630 image at /public/og-image.jpg

/**
 * Drop this at the top of any page component to control that route's
 * <title>, meta description, canonical URL, Open Graph/Twitter tags,
 * and optional JSON-LD structured data.
 *
 * Example:
 * <SEO
 *   title="School & College Management Software | RudhiCore"
 *   description="RudhiCore is ready-made school management software for Indian institutions. Deploy in days, not months."
 *   path="/"
 *   keywords="school management software India, college ERP, RudhiCore"
 *   jsonLd={organizationSchema}
 * />
 */
export default function SEO({
  title,
  description,
  path = '/',
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd,
}) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data */}
      {jsonLd && Array.isArray(jsonLd)
        ? jsonLd.map((schema, i) => (
            <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
          ))
        : jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}

// ── Reusable JSON-LD builders ─────────────────────────────────────────────

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rudhisoft Private Limited',
  alternateName: 'RUDHISOFT',
  url: SITE_URL,
  logo: `${SITE_URL}/rudhisoft_logo.png`,
  email: 'director@rudhisoft.com',
  telephone: '+91-9766149500',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '13, Maruti Plaza, Vidya Vikas Circle, Gangapur Rd',
    addressLocality: 'Nashik',
    addressRegion: 'Maharashtra',
    postalCode: '422005',
    addressCountry: 'IN',
  },
  sameAs: [
    // Add real profile URLs here, e.g.:
    // 'https://www.linkedin.com/company/rudhisoft',
    // 'https://twitter.com/rudhisoft',
    // 'https://github.com/rudhisoft',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Rudhisoft Private Limited',
  image: `${SITE_URL}/rudhisoft_logo.png`,
  url: SITE_URL,
  telephone: '+91-9766149500',
  email: 'director@rudhisoft.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '13, Maruti Plaza, Vidya Vikas Circle, Gangapur Rd',
    addressLocality: 'Nashik',
    addressRegion: 'Maharashtra',
    postalCode: '422005',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
  priceRange: '$$',
};

export function breadcrumbSchema(items) {
  // items: [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  };
}

/**
 * SoftwareApplication schema for product pages, per site notes:
 * "SoftwareApplication or Product schema on product pages."
 * name, description, path required. category e.g. 'BusinessApplication'.
 */
export function softwareApplicationSchema({ name, description, path, category = 'BusinessApplication' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: category,
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '0',
      description: 'Contact for pricing',
    },
    provider: {
      '@type': 'Organization',
      name: 'Rudhisoft Private Limited',
      url: SITE_URL,
    },
  };
}