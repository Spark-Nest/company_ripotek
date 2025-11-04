import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top on route change, except when navigating to a hash (#section)
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash, try to scroll to the element instead of top.
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Defer to allow DOM to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      }, 0);
      return;
    }

    // No hash: scroll to top on route/pathname or search changes
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollToTop;

