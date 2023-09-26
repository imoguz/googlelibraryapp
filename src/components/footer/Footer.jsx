import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { global } from "../../styles/Global.styles";
import { Icon } from "./Icon.styled";
const Footer = () => {
  const { theme, setTheme } = useThemeContext();
  const handleClick = () => {
    setTheme(!theme);
  };
  return (
    <div style={theme ? global.lFooterbg : global.dFooterbg}>
      <Icon
        className={theme ? "fa-regular fa-sun" : "fa-solid fa-sun"}
        onClick={handleClick}
      ></Icon>
    </div>
  );
};

export default Footer;
