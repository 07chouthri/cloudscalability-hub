
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavActionsProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  handleNavigation: (path: string, sectionId?: string) => void;
}

const NavActions = ({ isMobileMenuOpen, setIsMobileMenuOpen, handleNavigation }: NavActionsProps) => {
  return (
    <div className="flex items-center">
      <Link 
        to="/contact" 
        onClick={() => handleNavigation('/contact')}
        className="hidden md:block"
      >
        <Button variant="cloud" size="sm" className="ml-2">
          <Shield className="mr-1" size={16} />
          Get Protected
        </Button>
      </Link>
      
      <button
        className="md:hidden p-2 rounded-md text-hads-purple hover:bg-hads-purple/10 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
    </div>
  );
};

export default NavActions;
