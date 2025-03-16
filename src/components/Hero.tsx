
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (clientX - centerX) / 70;
      const moveY = (clientY - centerY) / 70;
      
      const circles = heroRef.current.querySelectorAll('.parallax-circle');
      
      circles.forEach((circle, index) => {
        const depth = (index + 1) * 0.3;
        if (circle instanceof HTMLElement) {
          circle.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
        }
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-24 overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-circle absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-primary/5"></div>
        <div className="parallax-circle absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-primary/5"></div>
        <div className="parallax-circle absolute top-1/4 -left-20 w-[300px] h-[300px] rounded-full bg-primary/3"></div>
      </div>
      
      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-foreground/80 animate-fade-in">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            Reimagining service experience
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-in">
            Simple, reliable property services with <span className="text-primary">exceptional quality</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            We're modernizing property management with a tech-enabled approach that delivers consistently high-quality service while eliminating complexity.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-primary-foreground bg-primary rounded-full shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            
            <a 
              href="#how-it-works" 
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-foreground bg-secondary rounded-full shadow-sm transition-all hover:bg-secondary/80"
            >
              Learn How It Works
            </a>
          </div>
        </div>
        
        <div className="mt-16 relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none h-[20%] bottom-0"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-card glass-panel aspect-[16/9] w-full max-w-5xl mx-auto animate-image-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Modern property service" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-1">2000+</h3>
            <p className="text-muted-foreground text-sm">Professionals</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-1">35+</h3>
            <p className="text-muted-foreground text-sm">Cities served</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-1">48hr</h3>
            <p className="text-muted-foreground text-sm">Average response</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-1">4.9<span className="text-sm">/5</span></h3>
            <p className="text-muted-foreground text-sm">Customer rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
