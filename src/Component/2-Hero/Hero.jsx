import "./hero.css"; // استيراد التنسيقات الخاصة بالقسم

import VerifiedIcon from "@mui/icons-material/Verified";
import {  Stack } from "@mui/material";
import { Link as MuiLink } from '@mui/material';

import Lottie from "lottie-react";
import developer from "../../../public/animation/dev.json";

import Skills from "./Skills";

import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="about" className="hero flex"> {/* قسم الصفحة الرئيسية */}

      {/* Left Section*/}
      <div className="left-section">

        <div className="parent-avatar flex">
          <img className="avatar" src="./image/protofolio.png" alt="" />
          <span className="icon-verified">
            <VerifiedIcon />
          </span>
        </div>

        <h1 className="title">
          Mohamed Ashraf
          <br /> Web Developer Portofolio
        </h1>

        <p className="subtitle">
          I’m a frontend developer with hands-on experience in React, Next.js,
          and Firebase. I build performant web applications with modern
          JavaScript, clean UI, and solid version control using Git and GitHub.
        </p>

        <div className="parent-iconsocial flex">
          <Stack direction="row" spacing={3} justifyContent="center" mb={2}>
            <MuiLink
              href="https://github.com/Hamo639"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              color="inherit"
              sx={{
                fontSize: 24,
                '&:hover': { color: '#38bdf8', transform: 'scale(1.2)' },
                transition: 'all 0.3s ease'
              }}
            >
              <FaGithub />
            </MuiLink>

            <MuiLink
              href="https://www.linkedin.com/in/hamo-ashraf-670b442b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              color="inherit"
              sx={{
                fontSize: 24,
                '&:hover': { color: '#38bdf8', transform: 'scale(1.2)' },
                transition: 'all 0.3s ease'
              }}
            >
              <FaLinkedin />
            </MuiLink>

            <MuiLink
              href="mailto:hamo777@gmail.com"
              aria-label="Email"
              color="inherit"
              sx={{
                fontSize: 24,
                '&:hover': { color: '#38bdf8', transform: 'scale(1.2)' },
                transition: 'all 0.3s ease'
              }}
            >
              <FaEnvelope />
            </MuiLink>

            <MuiLink
              href="https://www.facebook.com/hamo.elmagik.77?rdid=OI6TOcfyWCxRzuEc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1NMjgqQXfa%2F#"
              aria-label="Facebook"
              color="inherit"
              sx={{
                fontSize: 24,
                '&:hover': { color: '#38bdf8', transform: 'scale(1.2)' },
                transition: 'all 0.3s ease'
              }}
            >
              <FaFacebook />
            </MuiLink>
          </Stack>
        </div>

        <Skills />

        <div className="parent"></div>
      </div>

      {/* Right Section*/}
      <div className="right-section">
        <Lottie
          style={{ height: 500, width: 600 }}
          animationData={developer}
        />
      </div>
    </section>
  );
};

export default Hero;
