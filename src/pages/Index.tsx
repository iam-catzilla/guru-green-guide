import { Upload, ArrowRight, Recycle, FileSearch, BarChart3, Workflow, Leaf, Rocket, ThumbsUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import TechStack from '@/components/TechStack';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  const scrollToContent = () => {
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/5 to-background">
      <Navigation />
      
      {/* Hero Section with enhanced animations */}
      <section className="pt-32 pb-16 px-4 min-h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-up hover:scale-105 transition-transform duration-300">
            Recycle Smarter with AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up hover:text-primary transition-colors" style={{ animationDelay: "0.2s" }}>
            Upload a photo of any item and instantly learn how to dispose of it responsibly. Making recycling easy and accurate with AI-powered analysis.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="text-lg px-8 hover:scale-110 transition-transform duration-300 hover:shadow-lg group">
              Try Now <Upload className="ml-2 h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContent} className="text-lg px-8">
              Learn More <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 hover:text-primary transition-colors">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FileSearch className="h-8 w-8 text-primary" />,
                title: "AI-Powered Recognition",
                description: "Upload an image and let our AI detect & classify items for recycling"
              },
              {
                icon: <Recycle className="h-8 w-8 text-primary" />,
                title: "Smart Categories",
                description: "Automatically sorts waste into categories like plastic, metal, glass, etc"
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-primary" />,
                title: "99% Accuracy",
                description: "Highly accurate AI model trained on thousands of images"
              },
              {
                icon: <Workflow className="h-8 w-8 text-primary" />,
                title: "Easy Workflow",
                description: "Simple upload-and-analyze process for quick results"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border hover:shadow-lg transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Analysis Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 animate-fade-up">AI-Powered Image Analysis</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-up">
                <p className="text-lg text-muted-foreground">
                  Our advanced AI model can identify and categorize recyclable items with high accuracy.
                  Simply upload an image, and let our technology do the work.
                </p>
                <ul className="space-y-4">
                  {[
                    "Instant object recognition",
                    "Material classification",
                    "Recycling instructions",
                    "Environmental impact assessment"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-first md:order-last">
                <div className="glass p-6 rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1635241161466-541f065683ba"
                    alt="AI Analysis"
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <TechStack />

      {/* Methodology Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/30 to-white/30 dark:from-gray-800/30 dark:to-gray-900/30 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold hover:text-primary transition-colors">How We Built It</h2>
              <div className="space-y-4">
                {[
                  "Planning & Research: Defined key functionalities and studied global recycling rules",
                  "Design & Prototyping: Created intuitive UI/UX wireframes",
                  "Development: Built with React.js and integrated TensorFlow.js",
                  "Testing & Debugging: Verified AI accuracy and optimized performance",
                  "Deployment: Using serverless functions and AWS"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3 animate-fade-up" style={{ animationDelay: `${0.2 * index}s` }}>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-up order-first md:order-last">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="AI Technology" 
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 hover:text-primary transition-colors">Results & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ThumbsUp className="h-8 w-8" />,
                title: "Easy Solutions",
                description: "Empowers users with simple recycling solutions"
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Eco-Friendly",
                description: "Supports sustainable living through proper recycling"
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Future Ready",
                description: "Continuously improving AI accuracy and features"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary dark:from-gray-800 dark:to-gray-900 backdrop-blur-md">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-up">Ready to Start Recycling Smarter?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
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
