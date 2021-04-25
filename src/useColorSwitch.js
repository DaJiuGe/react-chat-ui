import { useState } from "react";

function useColorSwitch(color1 = "#f00", color2 = "#0f0") {
  const [color, setColor] = useState(color1);
  const handleButton1Click = () => {
    setColor(color2);
  };
  return [color, handleButton1Click];
}

export default useColorSwitch;
