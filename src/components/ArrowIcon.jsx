import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
    

export const ArrowIcon = ({ onDisplay, iconSize = 30 }) => {

    const [isRotated, setRotated] = useState(false);

    const handleRotate = () => {
        setRotated(!isRotated);
        onDisplay();
    };

  return (
    <FaArrowDown className={`transform transition-transform duration-500 ease-in-out cursor-pointer ${isRotated ? 'rotate-180' : '-rotate-360'}`} size={iconSize} onClick={handleRotate}/>
  )
}