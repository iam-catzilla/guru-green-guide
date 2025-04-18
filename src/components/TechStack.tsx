
import { Server, Brain, Cloud, Database, Layout } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      name: "Frontend",
      description: "Built with React.js & TypeScript for a modern, responsive interface",
      details: ["Tailwind CSS for styling", "React Router for navigation", "React Query for data management"]
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      name: "Backend",
      description: "Node.js & Express.js powering our robust API endpoints",
      details: ["RESTful API architecture", "Express.js middleware", "Serverless functions"]
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      name: "AI Model",
      description: "TensorFlow.js for efficient image recognition",
      details: ["Custom trained model", "High accuracy predictions", "Quick analysis time"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      name: "Cloud Infrastructure",
      description: "AWS services for reliable hosting and scaling",
      details: ["Lambda functions", "S3 for storage", "CloudFront CDN"]
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      name: "Database",
      description: "Efficient data storage and retrieval system",
      details: ["Quick query response", "Scalable architecture", "Data redundancy"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Technology Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-muted-foreground mb-4">{tech.description}</p>
              <ul className="space-y-2">
                {tech.details.map((detail, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
