import React, { useEffect, useRef } from 'react';
import { Award, Users, Clock, Sparkles } from 'lucide-react';

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Award,
      title: 'High Quality',
      description: 'Premium materials and precision manufacturing ensure superior durability and performance in every product.',
      color: 'text-accent'
    },
    {
      icon: Sparkles,
      title: 'Unique Designs',
      description: 'Innovative and distinctive designs that set your products apart with aesthetic appeal and functional excellence.',
      color: 'text-primary'
    },
    {
      icon: Clock,
      title: '25+ Years Experience',
      description: 'Over two decades of expertise in bag accessories manufacturing, delivering proven results and reliable quality.',
      color: 'text-accent'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Dedicated to exceeding expectations with personalized service and commitment to your success.',
      color: 'text-primary'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('active');
              }, index * 200);
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
    <section id="why-choose-us" ref={sectionRef} className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 reveal">
            Why Choose Aayush Fittings?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal">
            Discover what sets us apart in the bag accessories industry and why thousands 
            of customers trust us for their premium fitting needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`text-center group reveal card-hover`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full flex flex-col items-center card-glow">
                  {/* Icon */}
                  <div className={`mb-6 p-4 rounded-full bg-gradient-to-br from-${feature.color.includes('accent') ? 'accent' : 'primary'}/10 to-${feature.color.includes('accent') ? 'accent' : 'primary'}/20 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary via-primary-glow to-primary p-8 lg:p-12 rounded-2xl shadow-strong reveal">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="text-primary-foreground">
                <div className="text-4xl lg:text-5xl font-bold mb-2">25+</div>
                <div className="text-primary-foreground/80 uppercase tracking-wide text-sm">Years of Excellence</div>
              </div>
              <div className="text-primary-foreground">
                <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
                <div className="text-primary-foreground/80 uppercase tracking-wide text-sm">Happy Customers</div>
              </div>
              <div className="text-primary-foreground">
                <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
                <div className="text-primary-foreground/80 uppercase tracking-wide text-sm">Product Varieties</div>
              </div>
              <div className="text-primary-foreground">
                <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
                <div className="text-primary-foreground/80 uppercase tracking-wide text-sm">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center reveal">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-medium text-primary italic mb-6">
              "Aayush Fittings has been our trusted partner for over a decade. Their commitment to quality 
              and innovation has helped us maintain our competitive edge in the market."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold">R</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-primary">Rajesh Kumar</div>
                <div className="text-muted-foreground">Manufacturing Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;