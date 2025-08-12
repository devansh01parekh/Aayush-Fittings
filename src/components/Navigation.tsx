import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'nav-scrolled' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/17117b1e-d18b-4dbe-a4e4-d3f160e21d97.png" 
              alt="Aayush Fittings Logo" 
              className="h-10 w-auto"
            />
            <div className="hidden lg:block">
              <h1 className="text-xl font-bold text-primary">Aayush Fittings</h1>
              <p className="text-xs text-muted-foreground">Premium Bag Accessories</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-accent"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-accent w-full mt-4"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;