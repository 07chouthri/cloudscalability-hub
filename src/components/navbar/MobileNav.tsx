
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import GetProtectedDialog from '@/components/GetProtectedDialog';
import serviceItems from './ServiceItems';
import { X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isActive: (path: string) => boolean;
  handleNavigation: (path: string, sectionId?: string) => void;
}

const MobileNav = ({ isOpen, setIsOpen, isActive, handleNavigation }: MobileNavProps) => {
  const closeMenu = () => setIsOpen(false);
  
  return (
    <div className="h-full flex flex-col py-6 px-4">
      <div className="flex items-center justify-between mb-6">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="h-12 w-auto"> 
            <img 
              src="/lovable-uploads/f1d950f6-05d5-4bdd-9e1c-84621cd7e7a4.png" 
              alt="HADS Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>
        <button
          className="text-gray-800 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex-grow overflow-y-auto pb-20">
        <div className="flex flex-col space-y-3">
          <Link 
            to="/"
            onClick={() => {
              handleNavigation('/');
              closeMenu();
            }}
            className={cn("py-3 px-4 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors text-left", 
              isActive('/') && "text-hads-pink bg-gray-100"
            )}
          >
            Home
          </Link>
          <Link 
            to="/about"
            onClick={() => {
              handleNavigation('/about');
              closeMenu();
            }}
            className={cn("py-3 px-4 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors text-left",
              isActive('/about') && "text-hads-pink bg-gray-100"
            )}
          >
            About Us
          </Link>
          
          <div className="py-2 px-4">
            <div className="font-medium text-gray-800 mb-2">Services</div>
            <div className="pl-2 flex flex-col space-y-2">
              {serviceItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  onClick={() => {
                    handleNavigation(item.path);
                    closeMenu();
                  }}
                  className={cn(
                    "py-2 px-3 text-sm rounded transition-colors flex items-center gap-2",
                    isActive(item.path) 
                      ? "text-hads-pink bg-gray-50" 
                      : "text-gray-600 hover:text-hads-pink"
                  )}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            to="/partners"
            onClick={() => {
              handleNavigation('/partners');
              closeMenu();
            }}
            className={cn("py-3 px-4 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors text-left",
              isActive('/partners') && "text-hads-pink bg-gray-100"
            )}
          >
            Partners
          </Link>
          <Link 
            to="/contact"
            onClick={() => {
              handleNavigation('/contact');
              closeMenu();
            }}
            className={cn("py-3 px-4 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors text-left", 
              isActive('/contact') && "text-hads-pink bg-gray-100"
            )}
          >
            Contact Us
          </Link>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200 sticky bottom-0 bg-white">
        <GetProtectedDialog mobileFullWidth={true} />
      </div>
    </div>
  );
};

export default MobileNav;
