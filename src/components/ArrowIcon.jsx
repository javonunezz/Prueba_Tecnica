import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import PropTypes from "prop-types"
    

export const ArrowIcon = ({ onDisplay, iconSize = 30 }) => {

  const [isRotated, setRotated] = useState(false);

  const handleRotate = () => {
      setRotated(!isRotated);
      onDisplay();
  };

  return (
    <FaArrowDown 
      className={`transform transition-transform duration-500 ease-in-out cursor-pointer min-w-min ${isRotated ? 'rotate-180' : '-rotate-360'}`} 
      size={iconSize} 
      onClick={handleRotate}
    />
  )
}

ArrowIcon.propTypes = {
  onDisplay: PropTypes.func.isRequired,
  iconSize: PropTypes.number,
}