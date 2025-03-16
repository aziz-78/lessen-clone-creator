
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
        
        <div className="relative max-w-5xl mx-auto px-4">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-3/4 lg:basis-3/5">
                  <div className="p-1">
                    <Card className="bg-secondary/30 border-0 overflow-hidden">
                      <CardContent className="p-8 md:p-10">
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
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="h-10 w-10 border-0 bg-white shadow-md" />
            </div>
            <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2">
              <CarouselNext className="h-10 w-10 border-0 bg-white shadow-md" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
