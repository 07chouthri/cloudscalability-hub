
import { Link } from 'react-router-dom';
import HADSLogo from '../../images/Hads.png'
// Since the image file is missing, we're using a placeholder image URL
// Note: In a real project, you'd need to add the actual image file to the project

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="h-24 sm:h-26 md:h-28 w-auto"> 
        <img 
          src={HADSLogo} 
          alt="HADS Logo" 
          className="h-full w-auto object-contain"
        />
      </div>
    </Link>
  );
};

export default NavLogo;
