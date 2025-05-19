
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/ef01dac6-96ed-4fb1-8226-d23286de2788.png" 
            alt="We Love Logic Logo" 
            className="h-10 md:h-12" 
          />
        </NavLink>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavItem to="/games">Logic Games</NavItem>
          <NavItem to="/worksheets">Worksheets</NavItem>
          <NavItem to="/pricing">Pricing</NavItem>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-inner">
          <ul className="flex flex-col gap-4">
            <MobileNavItem to="/games" onClick={toggleMenu}>Logic Games</MobileNavItem>
            <MobileNavItem to="/worksheets" onClick={toggleMenu}>Worksheets</MobileNavItem>
            <MobileNavItem to="/pricing" onClick={toggleMenu}>Pricing</MobileNavItem>
          </ul>
        </nav>
      )}
    </header>
  );
};

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `text-base font-medium transition-colors hover:text-logic-blue ${
        isActive ? "text-logic-blue font-bold" : "text-gray-600"
      }`
    }
  >
    {children}
  </NavLink>
);

const MobileNavItem = ({ 
  to, 
  onClick, 
  children 
}: { 
  to: string; 
  onClick: () => void;
  children: React.ReactNode 
}) => (
  <li>
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `block py-2 px-4 text-lg font-medium rounded-md transition-colors hover:bg-logic-blue/10 hover:text-logic-blue ${
          isActive ? "bg-logic-blue/10 text-logic-blue font-bold" : "text-gray-600"
        }`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  </li>
);

export default NavigationBar;
