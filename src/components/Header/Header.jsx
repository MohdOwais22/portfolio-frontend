import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../Images/melogo.png";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      // navColor2="hsl(219, 48%, 8%)"
      navColor2="rgb(26, 26, 26)"
      burgerColor="rgb(255, 80, 80)"
      burgerColorHover="rgb(255, 80, 80)"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="rgb(255, 80, 80)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="rgb(255, 80, 80)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="rgb(255, 80, 80)"
      profileIconColorHover="white"
    />
  );
};

export default Header;
