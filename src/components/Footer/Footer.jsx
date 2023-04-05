import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Mohd Owais. I am a Full-Stack Developer and a<b> PROGRAMMER</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/MohdOwais22" target="black">
          <BsGithub />
        </a>
        <a href="https://instagram.com/mohd_owais22/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/mohd-owais-b6b5671b8/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
