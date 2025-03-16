
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: 'residential',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        propertyType: 'residential',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white text-xs font-medium text-foreground/80 animate-fade-in">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-slide-in">
              Elevate your property services today
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in">
              Fill out the form and one of our property specialists will reach out to discuss how we can help streamline your property services.
            </p>
            
            <div className="space-y-4 pt-4">
              <FeatureItem text="Free consultation and property assessment" />
              <FeatureItem text="Custom service plans tailored to your needs" />
              <FeatureItem text="Transparent pricing with no hidden fees" />
              <FeatureItem text="Tech-enabled reporting and communication" />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card animate-fade-in">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Thank you!</h3>
                <p className="text-muted-foreground">
                  Your message has been received. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-semibold mb-6">Request information</h3>
                
                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-foreground mb-1">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formState.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="multi-family">Multi-family</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      placeholder="Tell us about your property and service needs..."
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-primary-foreground bg-primary rounded-full shadow-sm transition-all hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Submit Request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
                
                <p className="text-xs text-center text-muted-foreground pt-2">
                  By submitting this form, you agree to our {' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a> and {' '}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  text: string;
}

const FeatureItem = ({ text }: FeatureItemProps) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 h-5 w-5 mt-1 rounded-full bg-primary/10 flex items-center justify-center">
      <Check className="h-3 w-3 text-primary" />
    </div>
    <span className="ml-3 text-base">{text}</span>
  </div>
);

export default Contact;
