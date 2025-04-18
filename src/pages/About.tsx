
import Navigation from '@/components/Navigation';
import { UserRound } from 'lucide-react';

const teamMembers = [
  {
    name: "Gautam Bhatia",
    role: "Backend Developer",
    description: "Lead developer responsible for AI model integration and server architecture",
  },
  {
    name: "Sahil Rana",
    role: "Frontend Developer",
    description: "UI/UX specialist crafting intuitive user experiences",
  },
  {
    name: "Aansh Chopra",
    role: "Data Collection Specialist",
    description: "Leading data collection and curation for AI model training",
  },
  {
    name: "Nikhil Thakur",
    role: "Data Curation Expert",
    description: "Ensuring data quality and AI model accuracy",
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/50 to-white">
      <Navigation />
      
      {/* Hero Section with enhanced animations */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
            About Garbage Guru
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We're on a mission to make recycling accessible and accurate for everyone through artificial intelligence.
          </p>
        </div>
      </section>

      {/* Mission Section with enhanced animations */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Nature" 
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold hover:text-primary transition-colors">Our Mission</h2>
              <p className="text-lg text-gray-600">
                At Garbage Guru, we believe that technology can play a crucial role in environmental conservation. Our AI-powered solution makes it easier than ever to make responsible disposal decisions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <h3 className="font-semibold mb-2">Vision</h3>
                  <p className="text-sm text-gray-600">A world where proper waste disposal is accessible to everyone</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <h3 className="font-semibold mb-2">Impact</h3>
                  <p className="text-sm text-gray-600">Reducing environmental impact through smart technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Lucide icons */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 hover:text-primary transition-colors">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg border hover:shadow-lg transition-all duration-300 animate-fade-up group"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UserRound className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-primary text-center font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-center text-sm">{member.description}</p>
                <p className="text-gray-500 text-center text-sm mt-2">Final Year BCA Student</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
