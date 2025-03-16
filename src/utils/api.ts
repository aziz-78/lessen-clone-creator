
/**
 * API service utility for handling API requests
 */

// API base URL - replace with your actual API endpoint
const API_BASE_URL = 'https://api.example.com';

// Types
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyType: string;
}

// Service API functions
export const fetchServices = async (): Promise<ServiceItem[]> => {
  try {
    // In a real app, this would call your actual API
    // For demo purposes, we'll simulate an API call
    console.log('Fetching services from API...');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return mock data
    return servicesMockData;
  } catch (error) {
    console.error('Error fetching services:', error);
    // Return mock data as fallback
    return servicesMockData;
  }
};

// Contact API functions
export const submitContactForm = async (formData: ContactFormData): Promise<{success: boolean; message: string}> => {
  try {
    console.log('Submitting contact form to API...', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate successful response
    return {
      success: true,
      message: 'Your request has been submitted successfully!'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'There was an error submitting your request. Please try again.'
    };
  }
};

// Mock data for services (normally this would come from your API)
const servicesMockData: ServiceItem[] = [
  {
    id: '1',
    title: 'Maintenance & Repairs',
    description: 'Keep your property in perfect condition with our comprehensive maintenance services.',
    icon: 'Wrench',
    features: [
      'Emergency repairs available 24/7',
      'Scheduled preventative maintenance',
      'Detailed documentation and reporting',
    ],
  },
  {
    id: '2',
    title: 'Interior Renovations',
    description: 'Transform your spaces with our professional renovation and remodeling services.',
    icon: 'Paintbrush',
    features: [
      'Kitchen and bathroom remodels',
      'Flooring installation and repair',
      'Custom cabinetry and fixtures',
    ],
  },
  {
    id: '3',
    title: 'Property Inspections',
    description: 'Thorough inspections to identify issues before they become costly problems.',
    icon: 'Search',
    features: [
      'Detailed condition reports with photos',
      'Move-in and move-out assessments',
      'Preventative maintenance recommendations',
    ],
  },
  {
    id: '4',
    title: 'Turn Services',
    description: 'Expert make-ready services to prepare your property for new occupants quickly.',
    icon: 'Zap',
    features: [
      '48-hour standard turnaround time',
      'Deep cleaning and refreshing',
      'Minor repairs and touch-ups included',
    ],
  },
  {
    id: '5',
    title: 'Property Protection',
    description: 'Safeguard your investment with our comprehensive property protection services.',
    icon: 'Shield',
    features: [
      'Security system installation and monitoring',
      'Weatherproofing and seasonal preparation',
      'Emergency response protocols',
    ],
  },
  {
    id: '6',
    title: 'Routine Services',
    description: 'Regular scheduled maintenance to keep your property in optimal condition.',
    icon: 'Clock',
    features: [
      'Landscape maintenance and care',
      'HVAC servicing and filter replacement',
      'Gutter cleaning and maintenance',
    ],
  },
];
