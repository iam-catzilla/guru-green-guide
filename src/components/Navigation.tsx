
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { Toggle } from './ui/toggle';
import { useState } from 'react';
import { useTheme } from '@/hooks/use-theme';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-md z-50 rounded-full border shadow-sm">
      <div className="px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4v16m0-16L7 9m5-5l5 5M5 20h14" />
            </svg>
            <span className="text-lg font-bold text-primary">Garbage Guru</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Terms
            </Link>
            <Toggle
              variant="outline"
              size="sm"
              pressed={theme === 'dark'}
              onPressedChange={() => toggleTheme()}
              className="border-0"
            >
              {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Toggle>
            <Button variant="default" size="sm">Try Now</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <Toggle
              variant="outline"
              size="sm"
              pressed={theme === 'dark'}
              onPressedChange={() => toggleTheme()}
              className="border-0"
            >
              {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Toggle>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
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
