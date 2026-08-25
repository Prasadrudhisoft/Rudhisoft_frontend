import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the window to the top every time the route (pathname) changes.
 * React Router does NOT do this automatically — without it, navigating to
 * a new page keeps whatever scroll position the previous page was at.
 *
 * Place this once, right inside <BrowserRouter>, alongside your <Routes>.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 'instant' avoids a visible smooth-scroll animation on every navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}