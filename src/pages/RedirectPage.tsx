import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const APP_STORE_URL = "https://apps.apple.com/pk/app/volunteer-take-action/id6751082349";

const RedirectPage = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search + location.hash;
    const appScheme = "voluntr://" + path.replace(/^\//, "");

    const start = Date.now();
    const timer = setTimeout(() => {
      if (Date.now() - start < 2500) {
        window.location.href = APP_STORE_URL;
      }
    }, 1500);

    window.location.href = appScheme;

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default RedirectPage;
