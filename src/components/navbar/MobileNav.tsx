
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isActive: (path: string) => boolean;
  handleNavigation: (path: string, sectionId?: string) => void;
}

const MobileNav = ({ isOpen, setIsOpen, isActive, handleNavigation }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "fixed inset-y-0 right-0 z-50 w-full md:hidden bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-28 w-auto"> {/* Increased from h-24 to h-28 */}
              <img 
                src="/lovable-uploads/9edfea07-b725-4d2f-92ed-e6295aa52924.png" 
                alt="HADS Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>
          <button
            className="text-gray-800 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg> */}
          </button>
        </div>
        <div className="flex flex-col space-y-4 mt-8">
          <Link 
            to="/"
            onClick={() => handleNavigation('/')}
            className={cn("py-2 px-4 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors text-left", 
              isActive('/') && "text-hads-pink bg-gray-100"
            )}
          >
            Home
          </Link>
          <Link 
            to="/about"
            onClick={() => handleNavigation('/about')}
            className={cn("py-2 px-4 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors text-left",
              isActive('/about') && "text-hads-pink bg-gray-100"
            )}
          >
            About Us
          </Link>
          <Link 
            to="/services"
            onClick={() => handleNavigation('/services')}
            className={cn("py-2 px-4 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors text-left",
              isActive('/services') && "text-hads-pink bg-gray-100"
            )}
          >
            Services
          </Link>
          <Link 
            to="/partners"
            onClick={() => handleNavigation('/partners')}
            className={cn("py-2 px-4 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors text-left",
              isActive('/partners') && "text-hads-pink bg-gray-100"
            )}
          >
            Partners
          </Link>
          <Link 
            to="/contact"
            onClick={() => handleNavigation('/contact')}
            className={cn("py-2 px-4 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors text-left", 
              isActive('/contact') && "text-hads-pink bg-gray-100"
            )}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
