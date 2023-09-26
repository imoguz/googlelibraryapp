import React from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { useThemeContext } from "../../context/ThemeContext";
import { global } from "../../styles/Global.styles";

const Home = () => {
  const { theme } = useThemeContext();

  return (
    <div style={theme ? global.dHomebg : global.dHomebg}>
      <Header />
      <Card />
    </div>
  );
};

export default Home;
