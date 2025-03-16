
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  useEffect(() => {
    // Add intersection observer for animation on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-secondary text-xs font-medium text-foreground/80 animate-fade-in">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                How It Works
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-slide-in">
                A simplified approach to property services
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in">
                Our streamlined process makes property maintenance and management effortless.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="animate-on-scroll opacity-0 hover-lift bg-white rounded-lg shadow-subtle" style={{ animationDelay: '0s' }}>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-6">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Request Service</h3>
                  <p className="text-muted-foreground">Submit your service request through our intuitive platform or speak with a property specialist.</p>
                </CardContent>
              </Card>
              
              <Card className="animate-on-scroll opacity-0 hover-lift bg-white rounded-lg shadow-subtle" style={{ animationDelay: '0.15s' }}>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-6">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
                  <p className="text-muted-foreground">We match your request with qualified professionals from our vetted network of service providers.</p>
                </CardContent>
              </Card>
              
              <Card className="animate-on-scroll opacity-0 hover-lift bg-white rounded-lg shadow-subtle" style={{ animationDelay: '0.3s' }}>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-6">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Service Delivered</h3>
                  <p className="text-muted-foreground">Receive high-quality service with real-time updates and transparent documentation.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container-section">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-on-scroll opacity-0">
                <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-secondary text-xs font-medium text-foreground/80">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                  About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  We're reimagining property services
                </h2>
                <p className="text-muted-foreground mb-6">
                  Founded with a mission to modernize property services, we've built a tech-enabled platform that connects property owners and managers with vetted professionals to deliver consistently high-quality service.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our innovative approach combines cutting-edge technology with exceptional service providers to create a seamless, transparent experience for all stakeholders in the property management ecosystem.
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-5 py-2.5 text-primary-foreground bg-primary rounded-full shadow-sm transition-all hover:bg-primary/90"
                >
                  Work With Us
                </a>
              </div>
              
              <div className="order-1 md:order-2 animate-on-scroll opacity-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Modern property service" 
                    className="rounded-2xl shadow-card relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
