import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import './legal.css';

export default function NotFound() {
  return (
    <div className="notfound-page">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or may have moved."
        path="/404"
        noindex={true}
      />
      <div className="notfound-content">
        <p className="notfound-code">404</p>
        <h1 className="notfound-title">Page not found</h1>
        <p className="notfound-text">
          The page you're looking for doesn't exist, may have been moved, or the link
          you followed might be outdated.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="notfound-btn notfound-btn-primary">Go to Homepage</Link>
          <Link to="/contact" className="notfound-btn notfound-btn-secondary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
