
import Navigation from '@/components/Navigation';

const teamMembers = [
  {
    name: "Gautam Bhatia",
    role: "Team Lead",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gautam"
  },
  {
    name: "Aansh Chopra",
    role: "AI Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aansh"
  },
  {
    name: "Sahil Rana",
    role: "Frontend Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sahil"
  },
  {
    name: "Nikhil Thakur",
    role: "Backend Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/50 to-white">
      <Navigation />
      
      {/* Hero Section */}
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

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.role}</p>
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
