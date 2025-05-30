
// Using a placeholder image URL since the actual logo.png is missing
import LogoImage from '../images/logo.png'
const Logo = () => {
  return (
    <>
      <img 
        src={LogoImage}
        alt="HADS Technovations Logo"
        className="w-auto h-full" 
      />
    </>
  );
};
export default Logo;
