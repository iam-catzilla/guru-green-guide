
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/5 to-background">
      <AnimatedBackground />
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">Terms and Conditions</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none animate-fade-up space-y-8" style={{ animationDelay: "0.2s" }}>
          <section className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">1. Data Collection & Usage</h2>
            <p className="text-muted-foreground">
              By using Garbage Guru, you acknowledge and agree that any images you submit may be used to improve our AI model's accuracy. These images become part of our training dataset, helping us enhance our recycling identification capabilities.
            </p>
          </section>

          <section className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">2. Privacy Commitment</h2>
            <p className="text-muted-foreground">
              We are committed to protecting your privacy. While we collect image data for training purposes, we do not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mt-4">
              <li>Sell your data to third parties</li>
              <li>Share personally identifiable information</li>
              <li>Use your data for purposes other than improving our AI model</li>
            </ul>
          </section>

          <section className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">3. Image Rights</h2>
            <p className="text-muted-foreground">
              By uploading images to Garbage Guru, you grant us a non-exclusive, worldwide, royalty-free license to use, store, and process these images for the purpose of:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mt-4">
              <li>Providing recycling recommendations</li>
              <li>Training and improving our AI models</li>
              <li>Enhancing our service accuracy</li>
            </ul>
          </section>

          <section className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement industry-standard security measures to protect your uploaded content. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          <section className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">5. Updates to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Continued use of Garbage Guru after changes constitutes acceptance of new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
