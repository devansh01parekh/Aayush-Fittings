import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/17117b1e-d18b-4dbe-a4e4-d3f160e21d97.png" 
                alt="Aayush Fittings Logo" 
                className="h-10 w-auto filter invert"
              />
              <div>
                <h3 className="text-2xl font-bold">Aayush Fittings</h3>
                <p className="text-primary-foreground/80 text-sm">Premium Bag Accessories</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              With over 25 years of excellence in manufacturing premium bag accessories, 
              we continue to deliver quality, innovation, and customer satisfaction.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+91 98212 25481</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">aayushfittings@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-choose-us')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">Metal Runners</li>
              <li className="text-primary-foreground/80">Premium Sliders</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
            © 2024 Aayush Fittings. All rights reserved.
          </div>
          
          {/* Contact Actions */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+919821225481"
              className="flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            
            <a 
              href="https://wa.me/919821225481"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
