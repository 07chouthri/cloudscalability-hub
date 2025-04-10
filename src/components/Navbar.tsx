import { cn } from "@/lib/utils";
import NavLogo from "./navbar/NavLogo";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";
import NavActions from "./navbar/NavActions";
import useNavbar from "./navbar/useNavbar";

const Navbar = () => {
  const {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isVisible,
    isActive,
    handleNavigation,
  } = useNavbar();

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-200 ease-in-out",
          isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm",
          isVisible ? "translate-y-0" : "-translate-y-full")}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-[5rem]">
            <NavLogo />
            <DesktopNav
              isActive={isActive}
              handleNavigation={handleNavigation}
            />
            <NavActions
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              handleNavigation={handleNavigation}
            />
          </div>
        </div>

        <MobileNav
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          isActive={isActive}
          handleNavigation={handleNavigation}
        />
      </nav>
    </>
  );
};

export default Navbar;
