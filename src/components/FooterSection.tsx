import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FooterSection = () => {
  return (
    <footer className="px-6 py-12">
      <div className="container mx-auto space-y-6">
        <Accordion type="single" collapsible className="space-y-3">
          <AccordionItem value="privacy" className="bg-secondary rounded-3xl border-none px-6">
            <AccordionTrigger className="text-secondary-foreground font-display font-semibold hover:no-underline py-4">
              Privacy Policy
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 px-2 space-y-3 text-sm leading-relaxed">
              <p><strong className="text-secondary-foreground">Effective Date:</strong> March 2026</p>
              <p>Voluntr ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our mobile application.</p>
              <p><strong className="text-secondary-foreground">Information We Collect:</strong> We collect information you provide directly, such as your name, email address, profile photo, and volunteer activity data. We also collect device information and usage analytics to improve the app experience.</p>
              <p><strong className="text-secondary-foreground">How We Use Your Information:</strong> Your data is used to personalise your experience, match you with volunteer opportunities, track your impact stats, display badges and achievements, and send relevant notifications about events you've registered for.</p>
              <p><strong className="text-secondary-foreground">Data Sharing:</strong> We do not sell, rent, or trade your personal data to third parties. We may share anonymised, aggregated data with charity partners to help them understand volunteer engagement. Third-party services (e.g. authentication providers, analytics) may process data under their own privacy policies.</p>
              <p><strong className="text-secondary-foreground">Data Storage & Security:</strong> Your data is stored securely using industry-standard encryption. We use Supabase for authentication and data storage, which employs enterprise-grade security measures.</p>
              <p><strong className="text-secondary-foreground">Your Rights:</strong> You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:privacy@voluntr.app" className="text-primary underline">privacy@voluntr.app</a>.</p>
              <p><strong className="text-secondary-foreground">Children's Privacy:</strong> Voluntr is not intended for users under 13 years of age. We do not knowingly collect data from children under 13.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="terms" className="bg-secondary rounded-3xl border-none px-6">
            <AccordionTrigger className="text-secondary-foreground font-display font-semibold hover:no-underline py-4">
              Terms of Service
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 px-2 space-y-3 text-sm leading-relaxed">
              <p><strong className="text-secondary-foreground">Effective Date:</strong> March 2026</p>
              <p>By downloading, accessing, or using the Voluntr application, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.</p>
              <p><strong className="text-secondary-foreground">Eligibility:</strong> You must be at least 13 years old to create an account and use Voluntr. Users under 18 should have parental or guardian consent.</p>
              <p><strong className="text-secondary-foreground">Account Responsibilities:</strong> You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information and keep your profile up to date. You may not impersonate others or create accounts for fraudulent purposes.</p>
              <p><strong className="text-secondary-foreground">User Conduct:</strong> You agree not to post harmful, abusive, or misleading content. All posts, comments, and interactions must comply with our community guidelines. We reserve the right to remove content or suspend accounts that violate these standards.</p>
              <p><strong className="text-secondary-foreground">Volunteer Events:</strong> Voluntr connects you with events organised by third-party charities and organisations. We are not responsible for the conduct, safety, or policies of these organisations. Participation in events is at your own discretion and risk.</p>
              <p><strong className="text-secondary-foreground">Intellectual Property:</strong> All content, branding, and features of the Voluntr app are the property of Voluntr. You retain ownership of content you post but grant us a non-exclusive licence to display it within the app.</p>
              <p><strong className="text-secondary-foreground">Limitation of Liability:</strong> Voluntr is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the app or participation in volunteer events.</p>
              <p><strong className="text-secondary-foreground">Changes to Terms:</strong> We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the revised terms.</p>
              <p>For questions, contact us at <a href="mailto:legal@voluntr.app" className="text-primary underline">legal@voluntr.app</a>.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="text-center pt-8 pb-4">
          <p className="text-muted-foreground text-sm">© 2026 Voluntr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
