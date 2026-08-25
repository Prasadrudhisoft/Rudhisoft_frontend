import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './blog.css';
import SEO, { organizationSchema, breadcrumbSchema } from '../../Components/SEO';
import { getPostBySlug, getClusterById } from '../../data/blogPosts';
import { FaExclamationTriangle } from 'react-icons/fa';

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

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useScrollReveal([slug]);

  if (!post) {
    return (
      <div className="blog-page">
        <div className="blog-not-found">
          <h1>Post not found</h1>
          <p><Link to="/blog" style={{ color: 'var(--primary)', fontWeight: 600 }}>← Back to Blog</Link></p>
        </div>
      </div>
    );
  }

  const cluster = getClusterById(post.cluster);

  return (
    <div className="blog-page">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="blog-post">
        <div className="container">
          <div className="blog-post-breadcrumb ip-reveal">
            <Link to="/blog">Blog</Link> / {cluster?.label}
          </div>
          <h1 className="ip-reveal">{post.title}</h1>
          <div className="blog-post-body ip-reveal">
            {/* <FaExclamationTriangle /> PLACEHOLDER — replace with real post content in src/data/blogPosts.js */}
            {post.body}
          </div>
          <div className="blog-post-cta ip-reveal">
            <p>Want to see this in action?</p>
            <Link to={cluster?.relatedProduct.href} className="btn">
              <span>{post.cta || `See ${cluster?.relatedProduct.name}`}</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}