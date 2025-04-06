
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Logo from '../images/Hads.png';
const Footer = () => {
  return (
    <footer className="bg-hads-footerbg text-gray-800 pt-16 pb-8 shadow-sm border-t border-hads-purple/10">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Top section with newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 pb-12 border-b border-hads-purple/10">
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="h-28 w-auto">
                <img
                  src={Logo}
                  alt="HADS Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 max-w-lg">
              HADS is your trusted partner for cloud migration, application development, and data analytics.
              We help businesses leverage modern cloud technologies to achieve scalability, reliability, and cost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-hads-teal" />
                <span className="text-sm text-gray-600">+917204026426</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-hads-teal" />
                <span className="text-sm text-gray-600">info@hads.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-hads-teal" />
              <span className="text-sm text-gray-600">Perungudi, Chennai</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link to="/" className="text-gray-600 hover:text-hads-teal transition-colors flex items-center">
                <span className="mr-1">Home</span>
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-hads-teal transition-colors flex items-center">
                <span className="mr-1">About Us</span>
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-hads-teal transition-colors flex items-center">
                <span className="mr-1">Services</span>
              </Link>
              <Link to="/careers" className="text-gray-600 hover:text-hads-teal transition-colors flex items-center">
                <span className="mr-1">Careers</span>
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-hads-teal transition-colors flex items-center">
                <span className="mr-1">Contact</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600">Stay updated with our latest news and offers.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-hads-purple/20 text-gray-700 placeholder:text-gray-400 focus:border-hads-teal focus:ring-hads-teal"
              />
              <Button variant="default"className="bg-hads-teal hover:bg-hads-teal/90 px-4 py-2 h-10 text-sm">
                <Send size={16} />
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <a href="#" className="text-gray-600 hover:text-hads-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-hads-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-hads-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-hads-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HADS Innovative Solution. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-hads-teal text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-hads-teal text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-hads-teal text-sm transition-colors">
              Sitemap
            </Link>
            <Link to="/faqs" className="text-gray-500 hover:text-hads-teal text-sm transition-colors">
              FAQs
            </Link>
            <Link to="/support" className="text-gray-500 hover:text-hads-teal text-sm transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
