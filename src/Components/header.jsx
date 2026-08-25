import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaGraduationCap, FaHardHat, FaHospital, FaLock, FaIndustry } from 'react-icons/fa';
import "./header.css";

const NAV_LINKS = [
  { label: "Home",         href: "/"             },
  { label: "About",        href: "/about"        },
  { label: "Services",     href: "/services"     },
  { label: "Technology",   href: "/technology"   },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog",         href: "/blog"         },
  { label: "Careers",      href: "/careers"      },
];

const PRODUCT_LINKS = [
  { label: "RudhiCore",                     icon: <FaGraduationCap />, href: "/products/rudhicore-school-college-management", blurb: "School & college management" },
  { label: "RudhiArch",                     icon: <FaHardHat />,       href: "/products/rudhiarch-construction-site-erp",      blurb: "Construction site ERP" },
  { label: "Hospital Management System",    icon: <FaHospital />,      href: "/products/hospital-management-system",           blurb: "Hospital & clinic management" },
  { label: "Industrial Gate In-Out System", icon: <FaLock />,          href: "/products/industry-security-system",             blurb: "Industrial access & security" },
];

const INDUSTRY_LINKS = [
  { label: "Education",                   icon: <FaGraduationCap />, href: "/industries/education-school-college-management", blurb: "Schools & colleges" },
  { label: "Construction & Infrastructure", icon: <FaHardHat />,      href: "/industries/construction-site-management",        blurb: "Contractors & site teams" },
  { label: "Healthcare",                  icon: <FaHospital />,       href: "/industries/hospital-clinic-management",           blurb: "Clinics & hospitals" },
  { label: "Manufacturing & Industrial",  icon: <FaIndustry />,       href: "/industries/manufacturing-industrial-security",   blurb: "Factories & warehouses" },
];

export default function Header() {
  const location  = useLocation();
  const activeLink = location.pathname;

  // ✅ true on homepage
  const isHome = location.pathname === "/";

  // ✅ true on any page whose hero has a dark video/gradient background
  // (currently: the 4 Industry pages) — these also need white nav text
  // before scrolling, same as the homepage.
  const hasDarkHero = isHome || location.pathname.startsWith("/industries/");

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  // ── Close menu on route change ────────────────────────────────────
  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
    setIndustriesOpen(false);
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

  const closeMenu  = () => { setMenuOpen(false); setProductsOpen(false); setIndustriesOpen(false); };
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleProducts = () => setProductsOpen((prev) => !prev);
  const toggleIndustries = () => setIndustriesOpen((prev) => !prev);

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
              {NAV_LINKS.map(({ label, href }) => (
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

              {/* ── Our Products dropdown ─────────────────────── */}
              <li
                className={`nav-dropdown${productsOpen ? " open" : ""}`}
                role="listitem"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-dropdown-trigger${PRODUCT_LINKS.some(p => p.href === activeLink) ? " active" : ""}`}
                  onClick={toggleProducts}
                  aria-haspopup="true"
                  aria-expanded={productsOpen}
                >
                  Our Products
                  <span className="nav-dropdown-caret" aria-hidden="true">▾</span>
                </button>
                <ul className={`nav-dropdown-menu${productsOpen ? " active" : ""}`} role="list">
                  {PRODUCT_LINKS.map(({ label, icon, href, blurb }) => (
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

              {/* ── Industries dropdown ─────────────────────── */}
              <li
                className={`nav-dropdown${industriesOpen ? " open" : ""}`}
                role="listitem"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-dropdown-trigger${INDUSTRY_LINKS.some(i => i.href === activeLink) ? " active" : ""}`}
                  onClick={toggleIndustries}
                  aria-haspopup="true"
                  aria-expanded={industriesOpen}
                >
                  Industries
                  <span className="nav-dropdown-caret" aria-hidden="true">▾</span>
                </button>
                <ul className={`nav-dropdown-menu${industriesOpen ? " active" : ""}`} role="list">
                  {INDUSTRY_LINKS.map(({ label, icon, href, blurb }) => (
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