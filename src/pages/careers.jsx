import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import './Careers.css';

// ── Config ───────────────────────────────────────────────────────────────────
const API_URL = 'http://127.0.0.1:5000';

// ── Data ─────────────────────────────────────────────────────────────────────
const whyJoinCards = [
  { icon: '🚀', title: 'Growth Opportunities', text: 'Clear career paths and continuous learning to help you reach your potential.' },
  { icon: '💡', title: 'Innovation Culture', text: 'Work on cutting-edge projects with the latest technologies.' },
  { icon: '🤝', title: 'Great Team', text: 'Collaborate with talented professionals who inspire and support each other.' },
  { icon: '⚖️', title: 'Work-Life Balance', text: 'Flexible work arrangements to help you maintain a healthy balance.' },
];

const benefitsList = [
  { icon: '💰', label: 'Competitive Salary' },
  { icon: '🏥', label: 'Health Insurance' },
  { icon: '🏠', label: 'Remote Work Options' },
  { icon: '📚', label: 'Learning Budget' },
  { icon: '🏖️', label: 'Paid Time Off' },
  { icon: '🎉', label: 'Team Events' },
  { icon: '💪', label: 'Gym Membership' },
  { icon: '🎂', label: 'Birthday Leave' },
];

const cultureItems = [
  { src: '/static/images/culture/office.jpg', fallback: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop', label: 'Our Modern Office' },
  { src: '/static/images/culture/team-meeting.jpg', fallback: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=200&fit=crop', label: 'Team Collaboration' },
  { src: '/static/images/culture/celebration.jpg', fallback: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=200&fit=crop', label: 'Celebrations' },
  { src: '/static/images/culture/hackathon.jpg', fallback: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=200&fit=crop', label: 'Hackathons & Events' },
  { src: '/static/images/culture/learning.jpg', fallback: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=200&fit=crop', label: 'Continuous Learning' },
];

const hiringSteps = [
  { num: '1', title: 'Apply', desc: 'Submit your application online' },
  { num: '2', title: 'Screening', desc: 'Initial review by our team' },
  { num: '3', title: 'Interview', desc: 'Technical & cultural fit' },
  { num: '4', title: 'Assessment', desc: 'Skills evaluation' },
  { num: '5', title: 'Offer', desc: 'Welcome to the team!' },
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

function WhyJoin() {
  return (
    <section className="why-join">
      <div className="container">
        <div className="why-join-header reveal">
          <span className="section-badge"><span>🌟</span> Why RUDHISOFT</span>
          <h2 className="section-title">Why Join <span>Us?</span></h2>
          <p className="section-subtitle">We offer more than just a job — we offer a career with purpose.</p>
        </div>
        <div className="why-join-grid stagger-children">
          {whyJoinCards.map(card => (
            <div className="why-join-card" key={card.title}>
              <div className="why-join-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-grid">
          <div className="benefits-content reveal-left">
            <span className="section-badge"><span>🎁</span> Perks & Benefits</span>
            <h2>Benefits That <span>Matter</span></h2>
            <p>
              We believe in taking care of our team. Here's what you can expect
              when you join RUDHISOFT.
            </p>
            <div className="benefits-list">
              {benefitsList.map(item => (
                <div className="benefit-item" key={item.label}>
                  <div className="benefit-item-icon">{item.icon}</div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="benefits-image reveal-right">
            <div className="benefits-image-wrapper">
              <img
                src="/static/images/team-benefits.jpg"
                alt="Team Benefits"
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'; }}
              />
            </div>
            <div className="benefits-badge">
              <h4>50+</h4>
              <p>Happy Employees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Job Card ──────────────────────────────────────────────────────────────────
function JobCard({ job, onApply }) {
  return (
    <div className="job-card">
      <div className="job-info">
        <h3>{job.title}</h3>
        <div className="job-meta">
          <span className="job-meta-item"><span>📍</span> {job.location}</span>
          <span className="job-meta-item"><span>💼</span> {job.job_type}</span>
        </div>
        <div className="job-tags">
          <span className="job-tag">{job.job_type}</span>
        </div>
      </div>
      <div className="job-action">
        <button className="btn btn-primary" onClick={() => onApply(job.id, job.title)}>
          Apply Now →
        </button>
      </div>
    </div>
  );
}

// ── Open Positions ─────────────────────────────────────────────────────────────
function OpenPositions({ onApply }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/careers`);
        if (data.success) {
          setJobs(data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error loading jobs:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="positions">
      <div className="container">
        <div className="positions-header reveal">
          <span className="section-badge"><span>📋</span> Open Positions</span>
          <h2 className="section-title">Current <span>Openings</span></h2>
          <p className="section-subtitle">Find the perfect role that matches your skills and aspirations.</p>
        </div>

        {loading && (
          <div className="jobs-loading">
            <div className="spinner" />
            <p>Loading job openings...</p>
          </div>
        )}

        {!loading && !error && jobs.length > 0 && (
          <div className="jobs-grid">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} onApply={onApply} />
            ))}
          </div>
        )}

        {!loading && (error || jobs.length === 0) && (
          <div className="no-jobs">
            <div className="no-jobs-icon">🔍</div>
            <h3>{error ? 'Unable to load jobs' : 'No positions available'}</h3>
            <p>
              {error
                ? 'Please try again later.'
                : "We don't have any openings right now. Check back soon or send us your resume!"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Application Modal ─────────────────────────────────────────────────────────
function ApplicationModal({ isOpen, jobId, jobTitle, onClose }) {
  const [formData, setFormData] = useState({ applicant_name: '', applicant_email: '', phone: '', cover_letter: '' });
  const [resumeFile, setResumeFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape' && isOpen) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const resetForm = () => {
    setFormData({ applicant_name: '', applicant_email: '', phone: '', cover_letter: '' });
    setResumeFile(null);
    setMessage(null);
  };

  const handleClose = () => { resetForm(); onClose(); };

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const validateFile = file => {
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type)) {
      setMessage({ type: 'error', text: 'Please upload a PDF, DOC, or DOCX file.' });
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'File size must be less than 5MB.' });
      return false;
    }
    return true;
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file && validateFile(file)) { setResumeFile(file); setMessage(null); }
  };

  const handleDrop = e => {
    e.preventDefault(); setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && validateFile(file)) { setResumeFile(file); setMessage(null); }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!resumeFile) { setMessage({ type: 'error', text: 'Please upload your resume.' }); return; }

    setSubmitting(true);
    const payload = new FormData();
    payload.append('career_id', jobId);
    payload.append('applicant_name', formData.applicant_name);
    payload.append('applicant_email', formData.applicant_email);
    payload.append('phone', formData.phone);
    payload.append('cover_letter', formData.cover_letter);
    payload.append('resume', resumeFile);

    try {
      const { data } = await axios.post(`${API_URL}/api/apply`, payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (data.success) {
        setMessage({ type: 'success', text: data.message || 'Application submitted successfully!' });
        resetForm();
        setTimeout(() => { onClose(); }, 3000);
      } else {
        setMessage({ type: 'error', text: data.message || 'Submission failed. Please try again.' });
      }
    } catch (err) {
      const errMsg = err.response?.data?.message || 'Failed to submit application. Please try again.';
      setMessage({ type: 'error', text: errMsg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`modal-overlay${isOpen ? ' active' : ''}`} onClick={e => { if (e.target.classList.contains('modal-overlay')) handleClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalHeading">
        <div className="modal-header">
          <div>
            <h2 id="modalHeading">Apply for Position</h2>
            <p>{jobTitle}</p>
          </div>
          <button className="modal-close" onClick={handleClose} aria-label="Close modal">✕</button>
        </div>

        <div className="modal-body">
          {message && (
            <div className={`form-message ${message.type}`}>
              <span>{message.type === 'success' ? '✓' : '✕'}</span>
              <span>{message.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name <span className="required">*</span></label>
              <input
                type="text" name="applicant_name" value={formData.applicant_name}
                onChange={handleChange} placeholder="Enter your full name" required
              />
            </div>

            <div className="form-group">
              <label>Email Address <span className="required">*</span></label>
              <input
                type="email" name="applicant_email" value={formData.applicant_email}
                onChange={handleChange} placeholder="Enter your email" required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel" name="phone" value={formData.phone}
                onChange={handleChange} placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>Resume/CV <span className="required">*</span></label>
              <div
                className={`file-upload${dragOver ? ' dragover' : ''}`}
                onDragEnter={e => { e.preventDefault(); setDragOver(true); }}
                onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef} type="file" accept=".pdf,.doc,.docx"
                  onChange={handleFileChange} style={{ display: 'none' }}
                />
                <div className="file-upload-icon">📄</div>
                <p className="file-upload-text"><span>Click to upload</span> or drag and drop</p>
                <p className="file-upload-hint">PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              {resumeFile && (
                <div className="file-name active">
                  <span>{resumeFile.name}</span>
                  <span
                    className="remove-file"
                    onClick={e => { e.stopPropagation(); setResumeFile(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                  >✕</span>
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Cover Letter</label>
              <textarea
                name="cover_letter" value={formData.cover_letter}
                onChange={handleChange}
                placeholder="Tell us why you're a great fit for this role..."
              />
              <small>Optional but recommended</small>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-cancel" onClick={handleClose}>Cancel</button>
              <button type="submit" className="btn btn-submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function CultureGallery() {
  return (
    <section className="culture">
      <div className="container">
        <div className="culture-header reveal">
          <span className="section-badge"><span>🎉</span> Life at RUDHISOFT</span>
          <h2 className="section-title">Our <span>Culture</span></h2>
          <p className="section-subtitle">A glimpse into what it's like to be part of our team.</p>
        </div>
        <div className="culture-gallery reveal">
          {cultureItems.map((item, idx) => (
            <div className="culture-item" key={idx}>
              <img
                src={item.src} alt={item.label}
                onError={e => { e.target.src = item.fallback; }}
              />
              <div className="culture-item-overlay"><span>{item.label}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HiringProcess() {
  return (
    <section className="hiring-process">
      <div className="container">
        <div className="hiring-header reveal">
          <span className="section-badge"><span>📝</span> How We Hire</span>
          <h2 className="section-title">Our Hiring <span>Process</span></h2>
          <p className="section-subtitle">Simple, transparent, and respectful of your time.</p>
        </div>
        <div className="hiring-steps stagger-children">
          {hiringSteps.map(step => (
            <div className="hiring-step" key={step.num}>
              <div className="hiring-step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
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
          <h2 className="cta-title">Don't See a Perfect Fit?</h2>
          <p className="cta-text">
            We're always looking for talented people. Send us your resume
            and we'll reach out when we have a matching opportunity.
          </p>
          <div className="cta-buttons">
            <a href="mailto:careers@rudhisoft.com" className="btn btn-primary">Send Your Resume →</a>
            <a href="/contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CareersPage() {
  useScrollReveal();

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [modal, setModal] = useState({ open: false, jobId: null, jobTitle: '' });

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const openModal = useCallback((id, title) => {
    setModal({ open: true, jobId: id, jobTitle: title });
  }, []);

  const closeModal = useCallback(() => {
    setModal({ open: false, jobId: null, jobTitle: '' });
  }, []);

  return (
    <>
      <main style={{ paddingTop: '92px' }}>
        <WhyJoin />
        <Benefits />
        <OpenPositions onApply={openModal} />
        <CultureGallery />
        <HiringProcess />
        <CTA />
      </main>

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>

      <ApplicationModal
        isOpen={modal.open}
        jobId={modal.jobId}
        jobTitle={modal.jobTitle}
        onClose={closeModal}
      />
    </>
  );
}