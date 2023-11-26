import { useState } from "react";

interface RadioOptionHook {
  isHovering: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const useRadioOption = (): RadioOptionHook => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return {
    isHovering,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useRadioOption;
