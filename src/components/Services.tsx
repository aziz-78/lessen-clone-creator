
import React, { useState, useEffect } from 'react';
import { CheckCircle, Home, Wrench, Paintbrush, Shield, Search, Clock, Zap } from 'lucide-react';
import { fetchServices, ServiceItem } from '../utils/api';
import { useToast } from "@/components/ui/use-toast";

const Services = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadServices = async () => {
      try {
        setIsLoading(true);
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
        toast({
          title: "Error",
          description: "Failed to load services. Please refresh the page.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadServices();
  }, [toast]);

  // Icon mapping function
  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, React.ElementType> = {
      Wrench: Wrench,
      Paintbrush: Paintbrush,
      Search: Search,
      Zap: Zap,
      Shield: Shield,
      Clock: Clock,
      Home: Home,
    };
    
    return iconMap[iconName] || Home; // Default to Home if icon not found
  };

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
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={getIconComponent(service.icon)}
                features={service.features}
                delay={index}
              />
            ))}
          </div>
        )}
        
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

export default Services;
