
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Property Manager',
    company: 'Urban Living Properties',
    content: 'Working with this team has transformed our maintenance process. Their attention to detail and quick response times have greatly improved tenant satisfaction scores across our portfolio.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Michael Torres',
    role: 'Real Estate Investor',
    company: 'MT Holdings',
    content: 'The consistency and quality of service across all my properties is exactly what I needed. Their tech platform makes it easy to request services and track progress in real-time.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Emily Chen',
    role: 'HOA President',
    company: 'Parkview Residences',
    content: 'Since switching to this service, our community has received more consistent, high-quality maintenance. The communication and transparency has eliminated the usual complaints from residents.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number>();
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAnimating]);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-secondary text-xs font-medium text-foreground/80 animate-fade-in">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-slide-in">
            Trusted by property managers nationwide
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            See what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative rounded-2xl bg-secondary/30 p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 p-8 md:p-12 transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 -z-10'
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < testimonial.rating ? 'text-primary fill-primary' : 'text-muted'}
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl font-medium mb-6">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
            <button
              onClick={prevSlide}
              className="rounded-full p-2 md:p-3 bg-white shadow-subtle text-foreground/80 hover:text-primary transition-colors"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
            <button
              onClick={nextSlide}
              className="rounded-full p-2 md:p-3 bg-white shadow-subtle text-foreground/80 hover:text-primary transition-colors"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-secondary'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
