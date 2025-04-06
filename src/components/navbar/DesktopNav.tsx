
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import serviceItems from './ServiceItems';

interface DesktopNavProps {
  isActive: (path: string) => boolean;
  handleNavigation: (path: string, sectionId?: string) => void;
}

const DesktopNav = ({ isActive, handleNavigation }: DesktopNavProps) => {
  return (
    <div className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link 
              to="/"
              onClick={() => handleNavigation('/')}
              className={cn("nav-link text-gray-800 hover:text-hads-pink px-4 py-2 transition-colors", 
                isActive('/') && "text-hads-pink"
              )}
            >
              Home
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link 
              to="/about"
              onClick={() => handleNavigation('/about')}
              className={cn("nav-link text-gray-800 hover:text-hads-pink px-4 py-2 transition-colors",
                isActive('/about') && "text-hads-pink"
              )}
            >
              About Us
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-gray-800 hover:text-hads-pink">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-2 gap-3 p-4 w-[500px] bg-white shadow-lg border border-gray-200 rounded-lg">
                {serviceItems.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className="flex items-start p-3 rounded-md hover:bg-gray-50 cursor-pointer group transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-hads-teal mr-2 group-hover:text-hads-pink transition-colors" />
                    <div>
                      <h3 className="text-sm font-medium text-hads-dark group-hover:text-hads-pink transition-colors">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link 
              to="/partners"
              onClick={() => handleNavigation('/partners')}
              className={cn("nav-link text-gray-800 hover:text-hads-pink px-4 py-2 transition-colors",
                isActive('/partners') && "text-hads-pink"
              )}
            >
              Partners
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link 
              to="/contact"
              onClick={() => handleNavigation('/contact')}
              className={cn("nav-link text-gray-800 hover:text-hads-pink px-4 py-2 transition-colors", 
                isActive('/contact') && "text-hads-pink"
              )}
            >
              Contact Us
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
