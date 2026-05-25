import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import "./header.css";

const NAV_LINKS = [
  { label: "Home",       href: "/"           },
  { label: "About",      href: "/about"      },
  { label: "Services",   href: "/services"   },
  { label: "Technology", href: "/technology" },
  { label: "Careers",    href: "/careers"    },
];

export default function Header() {
  const location  = useLocation();
  const activeLink = location.pathname;

  // ✅ true only on homepage
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // ── Close menu on route change ────────────────────────────────────
  useEffect(() => {
    setMenuOpen(false);
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

  const closeMenu  = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // ✅ "transparent" class only on home + not scrolled = white text
  // "scrolled" = white backdrop + dark/gray text (all pages)
  // no special class = other pages = dark text by default
  const headerClass = [
    "header",
    scrolled             ? "scrolled"    : "",
    isHome && !scrolled  ? "transparent" : "",
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
          <a href="/" className="logo" aria-label="RUDHISOFT — go to homepage">
            <div className="logo-icon">
              {!logoError ? (
                <img src={logo} alt="" aria-hidden="true" onError={() => setLogoError(true)} />
              ) : (
                <span className="logo-icon-text" aria-hidden="true">RS</span>
              )}
            </div>
            <span className="logo-text">RUDHISOFT</span>
          </a>

          {/* ── Navigation ─────────────────────────────────── */}
          <nav aria-label="Main navigation">
            <ul
              className={`nav-links${menuOpen ? " active" : ""}`}
              id="navLinks"
              role="list"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href} role="listitem">
                  <a
                    href={href}
                    className={activeLink === href ? "active" : ""}
                    aria-current={activeLink === href ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}

              <li className="nav-cta" role="listitem">
                <a href="/contact" className="btn-nav" onClick={closeMenu}>
                  Contact Us
                  <span aria-hidden="true">→</span>
                </a>
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