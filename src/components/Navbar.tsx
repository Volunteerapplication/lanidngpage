import voluntrLogo from "@/assets/voluntr-logo.png";

const Navbar = () => {
  return (
    <nav className="bg-foreground px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={voluntrLogo} alt="Voluntr" className="h-8 w-8 rounded-md" />
        <span className="font-display text-lg font-bold text-primary-foreground">Voluntr</span>
      </div>
      <a
        href="https://www.voluntrcharityportal.com/auth"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-background text-foreground font-display font-semibold text-sm px-5 py-2 rounded-full hover:bg-muted transition-colors"
      >
        Charity Portal
      </a>
    </nav>
  );
};

export default Navbar;
