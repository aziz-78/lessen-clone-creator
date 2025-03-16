
import React from 'react';
import { CheckCircle, Home, Tool, Paintbrush, Shield, Search, Clock, Zap } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-white text-xs font-medium text-foreground/80 animate-fade-in">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-slide-in">
            Comprehensive property services, simplified
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            From routine maintenance to complete renovations, we provide everything your property needs with unmatched quality and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              delay={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-primary-foreground bg-primary rounded-full shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Request Service
          </a>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  delay: number;
}

const ServiceCard = ({ title, description, icon: Icon, features, delay }: ServiceCardProps) => {
  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-subtle hover-lift overflow-hidden animate-fade-in`} 
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const serviceCards = [
  {
    title: 'Maintenance & Repairs',
    description: 'Keep your property in perfect condition with our comprehensive maintenance services.',
    icon: Tool,
    features: [
      'Emergency repairs available 24/7',
      'Scheduled preventative maintenance',
      'Detailed documentation and reporting',
    ],
  },
  {
    title: 'Interior Renovations',
    description: 'Transform your spaces with our professional renovation and remodeling services.',
    icon: Paintbrush,
    features: [
      'Kitchen and bathroom remodels',
      'Flooring installation and repair',
      'Custom cabinetry and fixtures',
    ],
  },
  {
    title: 'Property Inspections',
    description: 'Thorough inspections to identify issues before they become costly problems.',
    icon: Search,
    features: [
      'Detailed condition reports with photos',
      'Move-in and move-out assessments',
      'Preventative maintenance recommendations',
    ],
  },
  {
    title: 'Turn Services',
    description: 'Expert make-ready services to prepare your property for new occupants quickly.',
    icon: Zap,
    features: [
      '48-hour standard turnaround time',
      'Deep cleaning and refreshing',
      'Minor repairs and touch-ups included',
    ],
  },
  {
    title: 'Property Protection',
    description: 'Safeguard your investment with our comprehensive property protection services.',
    icon: Shield,
    features: [
      'Security system installation and monitoring',
      'Weatherproofing and seasonal preparation',
      'Emergency response protocols',
    ],
  },
  {
    title: 'Routine Services',
    description: 'Regular scheduled maintenance to keep your property in optimal condition.',
    icon: Clock,
    features: [
      'Landscape maintenance and care',
      'HVAC servicing and filter replacement',
      'Gutter cleaning and maintenance',
    ],
  },
];

export default Services;
