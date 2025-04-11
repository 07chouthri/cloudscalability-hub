
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import GetProtectedDialog from "@/components/GetProtectedDialog";

interface NavActionsProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  handleNavigation: (path: string, sectionId?: string) => void;
}

const NavActions = ({ isMobileMenuOpen, setIsMobileMenuOpen, handleNavigation }: NavActionsProps) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="hidden md:block">
        <GetProtectedDialog />
      </div>
      
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors md:hidden"
        aria-label="Toggle mobile menu"
      >
        <Menu className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  );
};

export default NavActions;
