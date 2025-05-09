
import { Link } from 'react-router-dom';
import Logo from '../../images/Hads.png'

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="h-28 w-auto"> 
        <img 
          src={Logo} 
          alt="HADS Logo" 
          className="h-full w-auto object-contain"
        />
      </div>
    </Link>
  );
};

export default NavLogo;
