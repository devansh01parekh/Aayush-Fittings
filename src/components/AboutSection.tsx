import React, { useEffect, useRef } from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import manufacturingImage from '@/assets/manufacturing.jpg';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 reveal">
            About Aayush Fittings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal">
            With over 25 years of dedicated service in the bag accessories industry, 
            we have built our reputation on delivering exceptional quality and innovative designs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="reveal">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in Mumbai, India, Aayush Fittings has been at the forefront of manufacturing 
                premium bag accessories. Our journey began with a simple vision: to create accessories 
                that combine functionality with aesthetic appeal.
              </p>
            </div>

            <div className="reveal">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are committed to delivering high-quality materials with unique designs that exceed 
                our customers' expectations. Every product we create reflects our dedication to 
                craftsmanship and innovation.
              </p>
            </div>

            {/* Timeline Milestones */}
            <div className="space-y-6 reveal">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Milestones</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-primary">1998 - Foundation</div>
                    <div className="text-muted-foreground">Established Aayush Fittings in Mumbai</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-primary">2005 - Expansion</div>
                    <div className="text-muted-foreground">Expanded product range to include premium sliders</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-primary">2015 - Innovation</div>
                    <div className="text-muted-foreground">Introduced unique design patterns and finishes</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-primary">2023 - Digital Presence</div>
                    <div className="text-muted-foreground">Launched modern digital platform for better customer experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            <div className="reveal">
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={manufacturingImage} 
                  alt="Manufacturing Process" 
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-6 reveal">
              <div className="text-center p-6 bg-card rounded-xl shadow-soft card-hover">
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Quality</h4>
                <p className="text-sm text-muted-foreground">Premium materials and craftsmanship</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-xl shadow-soft card-hover">
                <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Trust</h4>
                <p className="text-sm text-muted-foreground">25+ years of customer satisfaction</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-xl shadow-soft card-hover">
                <Target className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Precision</h4>
                <p className="text-sm text-muted-foreground">Attention to every detail</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-xl shadow-soft card-hover">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">Unique designs and solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;