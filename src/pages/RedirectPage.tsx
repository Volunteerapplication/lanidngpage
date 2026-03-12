import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Apple } from "lucide-react";
import voluntrLogo from "@/assets/voluntr-logo.png";
import "./RedirectPage.css";

const APP_STORE_URL = "https://apps.apple.com/pk/app/volunteer-take-action/id6751082349";

const RedirectPage = () => {
  const location = useLocation();
  const [showFallback, setShowFallback] = useState(false);
  const storeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const path = location.pathname + location.search + location.hash;
    const appScheme = "voluntr://" + path.replace(/^\//, "");

    const start = Date.now();
    const timer = setTimeout(() => {
      if (Date.now() - start < 2500) {
        setShowFallback(true);
      }
    }, 1500);

    window.location.href = appScheme;

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="redirect-wrapper">
      <img src={voluntrLogo} alt="Voluntr" className="redirect-logo" />
      <h1 className="redirect-title">Opening Voluntr…</h1>
      <p className="redirect-subtitle">
        Taking you to the app. If it doesn't open automatically, tap below.
      </p>

      <div className="redirect-spinner" />

      <a
        ref={storeLinkRef}
        href={APP_STORE_URL}
        className="redirect-store-btn"
      >
        <Apple size={18} />
        Download on the App Store
      </a>

      {showFallback && (
        <p className="redirect-fallback-text">
          App not installed? The App Store link is ready above.
        </p>
      )}
    </div>
  );
};

export default RedirectPage;
