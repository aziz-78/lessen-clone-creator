
import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

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
  {
    name: 'David Williams',
    role: 'Facilities Director',
    company: 'Oceanview Apartments',
    content: 'Exceptional service from start to finish. Their team handled our complex maintenance needs with professionalism and expertise. I highly recommend their services to any property manager.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Amanda Rodriguez',
    role: 'Property Owner',
    company: 'ARod Properties',
    content: 'The peace of mind I get knowing my properties are in good hands is invaluable. Their proactive approach to maintenance has saved me thousands in potential repairs.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-secondary/30">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-secondary text-xs font-medium text-foreground/80 animate-fade-in">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            Client Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-slide-in">
            What our clients are saying
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Hear directly from property managers who have transformed their maintenance operations.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button 
              className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              onClick={() => {
                const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
                setActiveIndex(newIndex);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
          </div>
          
          <div className="overflow-hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              setApi={(api) => {
                api?.on("select", () => {
                  setActiveIndex(api.selectedScrollSnap());
                });
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <TestimonialCard 
                      testimonial={testimonial} 
                      isActive={index === activeIndex}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button 
              className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              onClick={() => {
                const newIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
                setActiveIndex(newIndex);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-primary scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 font-medium text-primary-foreground bg-primary rounded-full shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const TestimonialCard = ({ testimonial, isActive }: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col",
        isActive ? "border-l-4 border-primary scale-[1.02]" : "border-l-4 border-transparent"
      )}
    >
      <div className="mb-4">
        <Quote className="text-primary/20 h-10 w-10 mb-2" />
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
            />
          ))}
        </div>
        <p className="text-foreground/90 italic mb-6">"{testimonial.content}"</p>
      </div>
      
      <div className="mt-auto flex items-center">
        <Avatar className="h-12 w-12 mr-4 border-2 border-primary/10">
          <AvatarImage src={testimonial.image} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
