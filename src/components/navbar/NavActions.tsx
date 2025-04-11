
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import GetProtectedDialog from "@/components/GetProtectedDialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNav from "./MobileNav";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavActionsProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  handleNavigation: (path: string, sectionId?: string) => void;
  isActive: (path: string) => boolean;
}

const NavActions = ({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  handleNavigation,
  isActive 
}: NavActionsProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex items-center space-x-3">
      <div className="hidden md:block">
        <GetProtectedDialog />
      </div>
      
      {/* Replace the regular button with Sheet component for better mobile UX */}
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors md:hidden"
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="p-0 w-full sm:max-w-md">
          <MobileNav 
            isOpen={true}
            setIsOpen={setIsMobileMenuOpen}
            isActive={isActive}
            handleNavigation={handleNavigation}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavActions;
