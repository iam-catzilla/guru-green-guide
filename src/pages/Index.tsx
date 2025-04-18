
import { Upload, ArrowRight, Recycle, RefreshCw, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
            Recycle Smarter with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Upload a photo of any item and instantly learn how to dispose of it responsibly. Making recycling easy and accurate.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
              Try Now <Upload className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI Analysis Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Powered by Advanced AI</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">Our cutting-edge AI model:</p>
                <ul className="space-y-3">
                  {[
                    "Identifies materials with 99% accuracy",
                    "Provides specific recycling instructions",
                    "Suggests creative reuse options",
                    "Updates regularly with new items"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                      <ThumbsUp className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-up">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                alt="AI Analysis" 
                className="rounded-lg shadow-xl hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Upload className="h-8 w-8 text-primary" />,
                title: "Upload Photo",
                description: "Take or upload a photo of the item you want to dispose of"
              },
              {
                icon: <RefreshCw className="h-8 w-8 text-primary" />,
                title: "AI Analysis",
                description: "Our AI instantly analyzes the item and identifies its materials"
              },
              {
                icon: <ThumbsUp className="h-8 w-8 text-primary" />,
                title: "Get Guidance",
                description: "Receive clear instructions on how to properly dispose or recycle"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg border bg-white hover:shadow-lg transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 px-4 bg-gradient-to-br from-secondary to-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Nature" 
                className="rounded-lg shadow-xl hover:scale-105 transition-transform"
              />
            </div>
            <div className="animate-fade-up space-y-6">
              <h2 className="text-3xl font-bold">Make a Difference</h2>
              <p className="text-lg text-gray-600">
                Every item properly recycled contributes to a healthier planet. Join thousands of environmentally conscious individuals making better disposal decisions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-gray-600">Items Analyzed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">99%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-up">Ready to Start Recycling Smarter?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Join thousands of environmentally conscious individuals making a difference.
          </p>
          <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
