
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white">
      <div className="container-section py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <a href="/" className="text-2xl font-display font-semibold tracking-tight">
              lessen
            </a>
            <p className="text-white/70 text-sm max-w-xs">
              Modernizing property services with a tech-enabled approach that delivers consistently high-quality results.
            </p>
            <div className="flex space-x-4 pt-4">
              <SocialIcon icon={Facebook} href="#" label="Facebook" />
              <SocialIcon icon={Twitter} href="#" label="Twitter" />
              <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
              <SocialIcon icon={Instagram} href="#" label="Instagram" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <FooterLink href="#" text="Maintenance & Repairs" />
              <FooterLink href="#" text="Interior Renovations" />
              <FooterLink href="#" text="Property Inspections" />
              <FooterLink href="#" text="Turn Services" />
              <FooterLink href="#" text="Property Protection" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="#about" text="About Us" />
              <FooterLink href="#" text="Careers" />
              <FooterLink href="#" text="Blog" />
              <FooterLink href="#" text="Press" />
              <FooterLink href="#contact" text="Contact Us" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <p className="text-white/70 text-sm mb-4">
              Stay up to date with the latest news and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 text-sm rounded-l-lg border-0 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-r-lg bg-primary text-white flex items-center justify-center"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            © {currentYear} Lessen. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-white/60 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-sm text-white/60 hover:text-white">Terms of Service</a>
            <a href="#" className="text-sm text-white/60 hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

const SocialIcon = ({ icon: Icon, href, label }: SocialIconProps) => (
  <a
    href={href}
    className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
    aria-label={label}
  >
    <Icon size={16} />
  </a>
);

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink = ({ href, text }: FooterLinkProps) => (
  <li>
    <a href={href} className="text-white/70 hover:text-white transition-colors text-sm">
      {text}
    </a>
  </li>
);

export default Footer;
