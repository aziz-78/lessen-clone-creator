
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="container-section">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-2xl font-display font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
            >
              lessen
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#contact" 
              className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-full shadow-sm transition-all hover:bg-primary/90"
            >
              Get Started
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-subtle border-b border-border/50 animate-fade-in">
          <div className="container-section py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              <MobileNavLinks closeMenu={() => setIsMobileMenuOpen(false)} />
            </nav>
            <a 
              href="#contact" 
              className="inline-flex w-full items-center justify-center px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-full shadow-sm transition-all hover:bg-primary/90"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = () => {
  return (
    <>
      <a href="#services" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Services</a>
      <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">How It Works</a>
      <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Testimonials</a>
      <a href="#about" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">About</a>
    </>
  );
};

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <a 
        href="#services" 
        className="text-foreground/80 hover:text-primary transition-colors text-base font-medium py-2"
        onClick={closeMenu}
      >
        Services
      </a>
      <a 
        href="#how-it-works" 
        className="text-foreground/80 hover:text-primary transition-colors text-base font-medium py-2"
        onClick={closeMenu}
      >
        How It Works
      </a>
      <a 
        href="#testimonials" 
        className="text-foreground/80 hover:text-primary transition-colors text-base font-medium py-2"
        onClick={closeMenu}
      >
        Testimonials
      </a>
      <a 
        href="#about" 
        className="text-foreground/80 hover:text-primary transition-colors text-base font-medium py-2"
        onClick={closeMenu}
      >
        About
      </a>
    </>
  );
};

export default Navbar;
