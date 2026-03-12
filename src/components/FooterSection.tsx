import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./FooterSection.css";

const SUPPORT_EMAIL = "savetheworld@gmail.com";

const FooterSection = () => {
  return (
    <footer className="px-6 py-12">
      <div className="container mx-auto space-y-6">
        <Accordion type="single" collapsible className="space-y-3">

          {/* Privacy Policy */}
          <AccordionItem value="privacy" className="bg-secondary rounded-3xl border-none px-6">
            <AccordionTrigger className="footer-section-heading font-display hover:no-underline py-4">
              Privacy Policy
            </AccordionTrigger>
            <AccordionContent className="footer-body pb-6 px-2 space-y-4 text-sm leading-relaxed">
              <p><span className="footer-heading">Effective Date:</span> March 12, 2026</p>
              <p>
                Voluntr ("we", "our", "us") is committed to protecting and respecting your privacy.
                This Privacy Policy sets out how we collect, use, store, and protect personal information
                obtained through your use of the Voluntr mobile application ("App"). Please read this
                policy carefully before using the App.
              </p>

              <p><span className="footer-heading">1. Information We Collect</span></p>
              <p>
                We collect information you provide when registering an account, including your full name,
                email address, profile photo, location preferences, and volunteering interests. We also
                automatically collect device identifiers, IP addresses, app usage data, and crash reports
                to maintain and improve service quality.
              </p>

              <p><span className="footer-heading">2. How We Use Your Information</span></p>
              <p>
                Your personal data is used solely to operate and improve the App. Specifically, we use it
                to: create and manage your account; match you with relevant volunteer opportunities; track
                and display your impact statistics and achievement badges; send notifications for events
                you have registered for; and respond to your support enquiries.
              </p>

              <p><span className="footer-heading">3. Data Sharing & Disclosure</span></p>
              <p>
                We do not sell, rent, or trade your personal data to any third parties. We may share
                anonymised and aggregated data with our charity partners to help them understand
                volunteering trends. Where we engage third-party service providers (e.g. authentication,
                cloud storage, analytics), those providers are contractually required to process data
                only on our behalf and in accordance with applicable data protection law.
              </p>

              <p><span className="footer-heading">4. Data Retention</span></p>
              <p>
                We retain your personal data for as long as your account is active, or as necessary to
                provide our services. You may request deletion of your account and associated data at any
                time (see Section 6 below). We may retain certain records where required by law or for
                legitimate business purposes.
              </p>

              <p><span className="footer-heading">5. Security</span></p>
              <p>
                We implement industry-standard technical and organisational measures to protect your data
                against unauthorised access, loss, or disclosure. Our infrastructure leverages
                enterprise-grade encryption and secure authentication protocols. However, no method of
                electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <p><span className="footer-heading">6. Your Rights</span></p>
              <p>
                Subject to applicable law, you have the right to: access the personal data we hold about
                you; request correction of inaccurate data; request deletion of your data; withdraw
                consent at any time where processing is based on consent; and lodge a complaint with a
                relevant data protection authority. To exercise any of these rights, please contact us at{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="footer-link">{SUPPORT_EMAIL}</a>.
              </p>

              <p><span className="footer-heading">7. Children's Privacy</span></p>
              <p>
                The App is not directed at children under the age of 13. We do not knowingly collect
                personal data from children under 13. If we become aware that a child under 13 has
                provided us with personal data, we will take steps to delete such information promptly.
              </p>

              <p><span className="footer-heading">8. Changes to This Policy</span></p>
              <p>
                We reserve the right to update this Privacy Policy at any time. We will notify you of
                material changes via the App or by email. Continued use of the App following such
                notification constitutes acceptance of the revised policy.
              </p>

              <p>
                For privacy-related enquiries, contact us at{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="footer-link">{SUPPORT_EMAIL}</a>.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Terms & Conditions */}
          <AccordionItem value="terms" className="bg-secondary rounded-3xl border-none px-6">
            <AccordionTrigger className="footer-section-heading font-display hover:no-underline py-4">
              Terms &amp; Conditions
            </AccordionTrigger>
            <AccordionContent className="footer-body pb-6 px-2 space-y-4 text-sm leading-relaxed">
              <p><span className="footer-heading">Effective Date:</span> March 12, 2026</p>
              <p>
                These Terms &amp; Conditions ("Terms") govern your access to and use of the Voluntr
                mobile application ("App"), operated by Voluntr ("we", "us", "our"). By downloading,
                installing, or using the App, you confirm that you have read, understood, and agree to
                be bound by these Terms. If you do not agree, you must not use the App.
              </p>

              <p><span className="footer-heading">1. Eligibility</span></p>
              <p>
                You must be at least 13 years of age to register an account. Users between 13 and 17
                years of age must have obtained verifiable parental or guardian consent prior to use.
                By creating an account, you represent and warrant that you meet these eligibility requirements.
              </p>

              <p><span className="footer-heading">2. Account Registration & Responsibilities</span></p>
              <p>
                You agree to provide accurate, current, and complete information during registration and
                to keep your account details up to date. You are solely responsible for maintaining the
                confidentiality of your login credentials and for all activity that occurs under your
                account. You must not impersonate any person or entity, or create accounts for
                fraudulent or unauthorised purposes. You must notify us immediately at{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="footer-link">{SUPPORT_EMAIL}</a>{" "}
                if you suspect any unauthorised use of your account.
              </p>

              <p><span className="footer-heading">3. Acceptable Use</span></p>
              <p>
                You agree to use the App only for lawful purposes and in a manner consistent with these
                Terms and all applicable laws and regulations. You must not: post, upload, or share
                content that is harmful, abusive, defamatory, fraudulent, or otherwise objectionable;
                use the App to harass, intimidate, or harm others; attempt to gain unauthorised access
                to any part of the App or its underlying systems; or use automated tools to scrape,
                mine, or extract data from the App without our express written consent.
              </p>

              <p><span className="footer-heading">4. Volunteer Events &amp; Third-Party Organisations</span></p>
              <p>
                Voluntr acts as a platform connecting users with volunteer opportunities organised by
                independent third-party charities and organisations ("Organisers"). We do not endorse,
                operate, or control these events. We are not responsible for the safety, conduct,
                policies, or obligations of any Organiser. Your participation in any event is entirely
                at your own discretion and risk. You should conduct your own due diligence before
                attending any event.
              </p>

              <p><span className="footer-heading">5. Intellectual Property</span></p>
              <p>
                All content, design, trademarks, logos, and features of the App are the exclusive
                intellectual property of Voluntr and are protected by applicable copyright and
                trademark law. You retain ownership of any content you submit or post through the App,
                but by doing so you grant us a worldwide, royalty-free, non-exclusive licence to use,
                display, reproduce, and distribute such content solely within the App for its intended
                purposes. You may not copy, modify, distribute, or create derivative works from any
                part of the App without our prior written consent.
              </p>

              <p><span className="footer-heading">6. Disclaimers &amp; Limitation of Liability</span></p>
              <p>
                The App is provided on an "as is" and "as available" basis without warranties of any
                kind, express or implied. To the fullest extent permitted by law, we disclaim all
                warranties including fitness for a particular purpose and non-infringement. We shall not
                be liable for any indirect, incidental, special, consequential, or punitive damages
                arising from your use of, or inability to use, the App or any volunteer event, even if
                we have been advised of the possibility of such damages.
              </p>

              <p><span className="footer-heading">7. Termination</span></p>
              <p>
                We reserve the right to suspend or terminate your account at our sole discretion,
                without prior notice, if we reasonably believe you have violated these Terms or
                applicable law. Upon termination, your right to access the App will immediately cease.
                Provisions of these Terms that by their nature should survive termination shall
                continue to apply.
              </p>

              <p><span className="footer-heading">8. Governing Law</span></p>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                jurisdiction in which Voluntr is registered, without regard to conflict of law
                principles. Any disputes arising under these Terms shall be subject to the exclusive
                jurisdiction of the courts of that jurisdiction.
              </p>

              <p><span className="footer-heading">9. Changes to These Terms</span></p>
              <p>
                We may revise these Terms at any time by posting an updated version within the App.
                Your continued use of the App after any such changes constitutes your acceptance of the
                new Terms. We encourage you to review these Terms periodically.
              </p>

              <p>
                For any questions regarding these Terms, please contact us at{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="footer-link">{SUPPORT_EMAIL}</a>.
              </p>
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        <div className="text-center pt-8 pb-4">
          <p className="footer-copyright text-sm">© 2026 Voluntr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
