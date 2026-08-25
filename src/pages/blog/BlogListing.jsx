import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './blog.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../../Components/SEO';
import { clusters, getPostsByCluster } from '../../data/blogPosts';

function useScrollReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.ip-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ip-revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default function BlogListing() {
  const [activeCluster, setActiveCluster] = useState('all');

  const visibleClusters = activeCluster === 'all'
    ? clusters
    : clusters.filter((c) => c.id === activeCluster);

  useScrollReveal([activeCluster]);

  return (
    <div className="blog-page">
      <SEO
        title="Blog"
        description="Practical guides on school management, construction site ERP, hospital management, and industrial security software — from RUDHISOFT."
        path="/blog"
        keywords="school management software blog, construction ERP blog, hospital management software blog, industrial security blog"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])]}
      />

      {/* HERO */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="ip-reveal">Guides for Schools, Contractors, Hospitals & Factories</h1>
          <p className="ip-reveal">Practical answers to the questions our customers ask before they buy.</p>
        </div>
      </section>

      {/* CLUSTER FILTER */}
      <div className="container">
        <div className="blog-cluster-tabs ip-reveal">
          <button
            className={`blog-cluster-tab${activeCluster === 'all' ? ' active' : ''}`}
            onClick={() => setActiveCluster('all')}
          >
            All Topics
          </button>
          {clusters.map((c) => (
            <button
              key={c.id}
              className={`blog-cluster-tab${activeCluster === c.id ? ' active' : ''}`}
              onClick={() => setActiveCluster(c.id)}
            >
              <span>{c.icon}</span> {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* CLUSTER SECTIONS */}
      <div className="container">
        {visibleClusters.map((cluster) => {
          const posts = getPostsByCluster(cluster.id);
          if (posts.length === 0) return null;
          return (
            <div className="blog-cluster-section ip-reveal" key={cluster.id}>
              <div className="blog-cluster-header">
                <span className="icon">{cluster.icon}</span>
                <h2>{cluster.label}</h2>
                <Link to={cluster.relatedProduct.href} className="related-link">
                  See {cluster.relatedProduct.name} →
                </Link>
              </div>
              <div className="blog-post-grid ip-reveal-stagger">
                {posts.map((post, i) => (
                  <Link
                    to={`/blog/${post.slug}`}
                    className="blog-post-card ip-reveal"
                    style={{ '--i': i }}
                    key={post.slug}
                  >
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="read-more">Read more →</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}