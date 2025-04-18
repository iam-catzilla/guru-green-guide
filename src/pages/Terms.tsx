
import Navigation from '@/components/Navigation';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/50 to-white">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">Terms and Conditions</h1>
        
        <div className="prose max-w-none animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Garbage Guru. By using our service, you agree to these terms. Please read them carefully.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p className="text-gray-600 mb-4">
              Garbage Guru provides AI-powered recycling guidance through image analysis. While we strive for accuracy,
              results should be verified with local recycling guidelines.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide clear images for analysis</li>
              <li>Follow local recycling guidelines</li>
              <li>Use the service responsibly</li>
              <li>Not misuse or attempt to deceive the AI system</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Privacy</h2>
            <p className="text-gray-600 mb-4">
              We respect your privacy. Images uploaded are used only for analysis and improving our AI model.
              No personal information is shared with third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimers</h2>
            <p className="text-gray-600 mb-4">
              Our AI provides guidance based on available data. Final recycling decisions should align with local regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
