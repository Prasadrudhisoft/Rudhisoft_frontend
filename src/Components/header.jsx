import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {
  FaBlog,
  FaBook,
  FaQuestionCircle,
  FaUsers,
  FaUserTie,
  FaBriefcase,
} from 'react-icons/fa';
import "./header.css";

// Plain links, rendered in this exact order around the dropdowns below.
const HOME_LINK = { label: "Home", href: "/" };
const MID_LINKS = [
  { label: "Services",     href: "/services"     },
  { label: "Technology",   href: "/technology"    },
  { label: "Case Studies", href: "/case-studies" },
];

const RESOURCE_LINKS = [
  { label: "Blog",                  icon: <FaBlog />,           href: "/blog",                        blurb: "News, updates & insights" },
  { label: "Guides & Checklists",   icon: <FaBook />,           href: "/resources/guides-checklists", blurb: "Practical how-tos" },
  { label: "FAQs",                  icon: <FaQuestionCircle />, href: "/resources/faqs",               blurb: "Common questions answered" },
];

const COMPANY_LINKS = [
  { label: "About Us",    icon: <FaUsers />,     href: "/about",      blurb: "Who we are" },
  { label: "Leadership",  icon: <FaUserTie />,   href: "/leadership",  blurb: "Meet the team" },
  { label: "Careers",     icon: <FaBriefcase />, href: "/careers",     blurb: "Join RUDHISOFT" },
];

export default function Header() {
  const location  = useLocation();
  const activeLink = location.pathname;

  // ✅ true on homepage
  const isHome = location.pathname === "/";

  // ✅ true on any page whose hero has a dark video/gradient background
  // (currently: the 4 Industry pages + Technology) — these also need white
  // nav text before scrolling, same as the homepage.
  const hasDarkHero =
    isHome ||
    location.pathname.startsWith("/industries/") ||
    location.pathname === "/technology";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  // ── Close menu on route change ────────────────────────────────────
  useEffect(() => {
    setMenuOpen(false);
    setResourcesOpen(false);
    setCompanyOpen(false);
  }, [location.pathname]);

  // ── Scroll detection ──────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // ── Body scroll lock when menu open ──────────────────────────────
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top      = `-${scrollY}px`;
      document.body.style.width    = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top      = "";
      document.body.style.width    = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top      = "";
      document.body.style.width    = "";
    };
  }, [menuOpen]);

  // ── Auto-close menu on desktop resize ────────────────────────────
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  // ── Close menu on Escape key ──────────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu  = () => {
    setMenuOpen(false);
    setResourcesOpen(false);
    setCompanyOpen(false);
  };
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleResources = () => setResourcesOpen((prev) => !prev);
  const toggleCompany = () => setCompanyOpen((prev) => !prev);

  // ✅ "transparent" class on home + industry pages (dark hero) while not
  // scrolled = white text. "scrolled" = white backdrop + dark/gray text
  // (all pages). No special class = other pages = dark text by default.
  const headerClass = [
    "header",
    scrolled                   ? "scrolled"    : "",
    hasDarkHero && !scrolled   ? "transparent" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div
        className={`nav-overlay${menuOpen ? " active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <header className={headerClass} id="header" role="banner">
        <div className="header-container">

          {/* ── Logo ───────────────────────────────────────── */}
          <Link to="/" className="logo" aria-label="RUDHISOFT — go to homepage">
            <div className="logo-icon">
              {!logoError ? (
                <img src={logo} alt="" aria-hidden="true" onError={() => setLogoError(true)} />
              ) : (
                <span className="logo-icon-text" aria-hidden="true">RS</span>
              )}
            </div>
            <span className="logo-text">RUDHISOFT</span>
          </Link>

          {/* ── Navigation ─────────────────────────────────── */}
          <nav aria-label="Main navigation">
            <ul
              className={`nav-links${menuOpen ? " active" : ""}`}
              id="navLinks"
              role="list"
            >
              {/* ── Home ─────────────────────────────────────── */}
              <li key={HOME_LINK.href} role="listitem">
                <Link
                  to={HOME_LINK.href}
                  className={activeLink === HOME_LINK.href ? "active" : ""}
                  aria-current={activeLink === HOME_LINK.href ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {HOME_LINK.label}
                </Link>
              </li>

              {/* ── Products ─────────────────────────────────── */}
              <li role="listitem">
                <Link
                  to="/products"
                  className={activeLink === "/products" ? "active" : ""}
                  aria-current={activeLink === "/products" ? "page" : undefined}
                  onClick={closeMenu}
                >
                  Products
                </Link>
              </li>

              {/* ── Industries ─────────────────────────────────── */}
              <li role="listitem">
                <Link
                  to="/industries"
                  className={activeLink === "/industries" ? "active" : ""}
                  aria-current={activeLink === "/industries" ? "page" : undefined}
                  onClick={closeMenu}
                >
                  Industries
                </Link>
              </li>

              {/* ── Services & Case Studies ───────────────────── */}
              {MID_LINKS.map(({ label, href }) => (
                <li key={href} role="listitem">
                  <Link
                    to={href}
                    className={activeLink === href ? "active" : ""}
                    aria-current={activeLink === href ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* ── Resources dropdown ─────────────────────── */}
              <li
                className={`nav-dropdown${resourcesOpen ? " open" : ""}`}
                role="listitem"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-dropdown-trigger${RESOURCE_LINKS.some(r => r.href === activeLink) ? " active" : ""}`}
                  onClick={toggleResources}
                  aria-haspopup="true"
                  aria-expanded={resourcesOpen}
                >
                  Resources
                  <span className="nav-dropdown-caret" aria-hidden="true">▾</span>
                </button>
                <ul className={`nav-dropdown-menu${resourcesOpen ? " active" : ""}`} role="list">
                  {RESOURCE_LINKS.map(({ label, icon, href, blurb }) => (
                    <li key={href} role="listitem">
                      <Link
                        to={href}
                        className={activeLink === href ? "active" : ""}
                        aria-current={activeLink === href ? "page" : undefined}
                        onClick={closeMenu}
                      >
                        <span className="nav-dropdown-icon" aria-hidden="true">{icon}</span>
                        <span className="nav-dropdown-text">
                          <span className="nav-dropdown-label">{label}</span>
                          <span className="nav-dropdown-blurb">{blurb}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* ── Company dropdown ─────────────────────── */}
              <li
                className={`nav-dropdown${companyOpen ? " open" : ""}`}
                role="listitem"
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-dropdown-trigger${COMPANY_LINKS.some(c => c.href === activeLink) ? " active" : ""}`}
                  onClick={toggleCompany}
                  aria-haspopup="true"
                  aria-expanded={companyOpen}
                >
                  Company
                  <span className="nav-dropdown-caret" aria-hidden="true">▾</span>
                </button>
                <ul className={`nav-dropdown-menu${companyOpen ? " active" : ""}`} role="list">
                  {COMPANY_LINKS.map(({ label, icon, href, blurb }) => (
                    <li key={href} role="listitem">
                      <Link
                        to={href}
                        className={activeLink === href ? "active" : ""}
                        aria-current={activeLink === href ? "page" : undefined}
                        onClick={closeMenu}
                      >
                        <span className="nav-dropdown-icon" aria-hidden="true">{icon}</span>
                        <span className="nav-dropdown-text">
                          <span className="nav-dropdown-label">{label}</span>
                          <span className="nav-dropdown-blurb">{blurb}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-cta" role="listitem">
                <Link to="/contact" className="btn-nav" onClick={closeMenu}>
                  Contact Us
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>

            <button
              className={`hamburger${menuOpen ? " active" : ""}`}
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="navLinks"
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </nav>

        </div>
      </header>
    </>
  );
}