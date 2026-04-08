import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-6 animate-fade-in">
              Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              We take your privacy seriously. Here is exactly how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-lg leading-relaxed">
              This privacy policy explains how Codes2cloud collects and uses information when you visit our website or use our services. By accessing our website, you agree to the practices described below.
            </p>

            <div>
              <h4 className="text-foreground font-semibold mb-2">This policy covers:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>What information we collect and why</li>
                <li>How we use your personal information</li>
                <li>How we keep your data secure</li>
                <li>Your rights regarding your data</li>
              </ul>
            </div>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Information We Collect
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Browser Information</h3>
              <p className="mb-6">
                When you visit our website, we automatically collect basic browser data including your IP address and cookies. This helps us understand how visitors navigate our site so we can improve the user experience. We use this information to analyze traffic patterns and optimize our content.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Contact Information</h3>
              <p className="mb-6">
                If you reach out to us through our contact form or email, we collect the information you provide — typically your name, email address, phone number, and the contents of your message. We only ask for what we need to respond to your inquiry and discuss potential projects.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Project-Related Data</h3>
              <p>
                When you become a client, we may collect additional information necessary to complete your project, such as business details, technical requirements, and access credentials. This information is handled with strict confidentiality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to respond to inquiries, provide our services, and improve our website. We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
              <p>
                Occasionally, we may share information with trusted service providers who help us operate our business (for example, hosting providers or project management tools), but only when necessary and under strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. This includes encrypted connections (HTTPS), secure server infrastructure, access controls, and regular security audits. However, no method of transmission over the internet is 100 percent secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Your Rights and Choices
              </h2>
              <p className="mb-6">
                You have control over your personal information. You can browse our website without providing any personal data. If you have submitted information to us, you can request access to, correction of, or deletion of that information at any time.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Policy Updates</h3>
              <p className="mb-6">
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. Significant changes will be communicated through our website.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Questions?</h3>
              <p>
                If you have any questions about this privacy policy or how we handle your data, contact us at hello@codes2cloud.com. We are happy to clarify anything.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                GDPR Compliance
              </h2>
              <p className="mb-4">For users in the European Union, we comply with GDPR requirements. This means:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We will notify you of any data breaches that may affect your personal information</li>
                <li>You can request deletion of your personal data at any time</li>
                <li>We only retain data for as long as necessary for the purposes stated</li>
                <li>You can request that we stop processing your personal information</li>
                <li>You have the right to receive a copy of the personal data we hold about you</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
