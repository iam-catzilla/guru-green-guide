
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4v16m0-16L7 9m5-5l5 5M5 20h14" />
            </svg>
            <span className="text-xl font-bold text-primary">Garbage Guru</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">
              Terms
            </Link>
            <Button variant="default">Try Now</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b animate-fade-in">
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">
                Terms
              </Link>
              <Button variant="default" className="w-full">Try Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
