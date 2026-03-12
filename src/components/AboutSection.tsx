import voluntrLogo from "@/assets/voluntr-logo.png";

const AboutSection = () => {
  return (
    <section className="px-6 py-16">
      <div className="container mx-auto">
        <div className="border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <img
            src={voluntrLogo}
            alt="Voluntr characters"
            className="w-64 h-64 rounded-2xl object-cover flex-shrink-0"
          />
          <div className="space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Built to Make a Difference.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Voluntr connects you with charitable organizations and community events. Discover opportunities, track your volunteer hours, earn badges, and build a social profile that reflects your real-world impact. Available exclusively on iOS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
