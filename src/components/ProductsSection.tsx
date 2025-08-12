import React, { useState, useEffect, useRef } from 'react';
import { Filter, ZoomIn } from 'lucide-react';
import productsRunners from '@/assets/products-runners.jpg';
import productsSliders from '@/assets/products-sliders.jpg';

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: 'all', name: 'All Products' },
    { id: 'runners', name: 'Runners' },
    { id: 'sliders', name: 'Sliders' }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Metal Runners',
      category: 'runners',
      image: productsRunners,
      description: 'High-quality metal runners with smooth operation and durable finish',
      features: ['Corrosion Resistant', 'Smooth Operation', 'Multiple Finishes']
    },
    {
      id: 2,
      name: 'Luxury Slider Collection',
      category: 'sliders',
      image: productsSliders,
      description: 'Elegant sliders with premium gold and silver finishes',
      features: ['Premium Finish', 'Ergonomic Design', 'Lightweight']
    },
    {
      id: 3,
      name: 'Custom Design Runners',
      category: 'runners',
      image: productsRunners,
      description: 'Customizable runners with unique patterns and designs',
      features: ['Custom Patterns', 'Brand Integration', 'Various Sizes']
    },
    {
      id: 4,
      name: 'Professional Sliders',
      category: 'sliders',
      image: productsSliders,
      description: 'Professional-grade sliders for commercial applications',
      features: ['Heavy Duty', 'Long Lasting', 'Professional Grade']
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 reveal">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal">
            Discover our comprehensive range of premium bag accessories, crafted with precision 
            and designed for excellence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-medium'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {filter.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-card rounded-xl shadow-soft overflow-hidden card-hover card-glow reveal`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full btn-ghost text-center"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="mt-16 text-center reveal">
          <div className="bg-gradient-to-r from-primary to-primary-glow p-8 lg:p-12 rounded-2xl shadow-strong">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              We specialize in creating custom bag accessories tailored to your specific requirements. 
              Let us help you bring your unique designs to life.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-accent bg-accent-foreground text-white hover:bg-accent-foreground/90"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;