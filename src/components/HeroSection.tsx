import { Apple } from "lucide-react";
import voluntrLogo from "@/assets/voluntr-logo.png";

const HeroSection = () => {
  return (
    <section className="bg-hero px-6 py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Make Volunteering<br />Social & Rewarding
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Discover meaningful volunteer opportunities, connect with charities, and track your impact — all in one app.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://apps.apple.com/us/app/voluntur/id6751082349"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background text-foreground font-display font-semibold px-6 py-3 rounded-full hover:bg-muted transition-colors text-sm"
            >
              <Apple className="h-5 w-5" />
              App Store
            </a>
            <a
              href="https://www.voluntrcharityportal.com/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-foreground text-foreground font-display font-semibold px-6 py-3 rounded-full hover:bg-foreground hover:text-primary-foreground transition-colors text-sm"
            >
              Charity Portal
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <img
            src={voluntrLogo}
            alt="Voluntr App"
            className="w-56 h-56 md:w-72 md:h-72 rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
