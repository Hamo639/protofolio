import React from "react";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { Box, Typography, Stack, Link as MuiLink } from "@mui/material";

import "./footer.css";

export default function Footer() {
  // حساب السنة الحالية تلقائيًا
  const year = new Date().getFullYear();

  return (
    <Box
      className="footer"
      component="footer"
      sx={{
        backgroundColor: "rgb(31, 31, 31)",
        color: "#f1f5f9",
        py: 4,
        px: 2,
        textAlign: "center",
        mt: "auto",
        borderRadius: "10px",
      }}
    >
      {/* روابط التنقل (About - Projects - Contact) */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="center"
        mb={2}
      >
        <MuiLink
          href="#about"
          underline="none"
          color="inherit"
          sx={{ "&:hover": { color: "#38bdf8" } }}
        >
          About
        </MuiLink>

        <MuiLink
          href="#projects"
          underline="none"
          color="inherit"
          sx={{ "&:hover": { color: "#38bdf8" } }}
        >
          Projects
        </MuiLink>

        <MuiLink
          href="#contact"
          underline="none"
          color="inherit"
          sx={{ "&:hover": { color: "#38bdf8" } }}
        >
          Contact
        </MuiLink>
      </Stack>

      {/* أيقونات السوشيال ميديا (GitHub, LinkedIn, Email) */}
      <Stack direction="row" spacing={3} justifyContent="center" mb={2}>
        <MuiLink
          href="https://github.com/hamo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          color="inherit"
          sx={{
            fontSize: 24,
            "&:hover": {
              color: "#38bdf8",
              transform: "scale(1.2)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <FaGithub />
        </MuiLink>

        <MuiLink
          href="https://linkedin.com/in/hamo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          color="inherit"
          sx={{
            fontSize: 24,
            "&:hover": { color: "#38bdf8", transform: "scale(1.2)" },
            transition: "all 0.3s ease",
          }}
        >
          <FaLinkedin />
        </MuiLink>

        <MuiLink
          href="mailto:hamo@gmail.com"
          aria-label="Email"
          color="inherit"
          sx={{
            fontSize: 24,
            "&:hover": { color: "#38bdf8", transform: "scale(1.2)" },
            transition: "all 0.3s ease",
          }}
        >
          <FaEnvelope />
        </MuiLink>
      </Stack>

      <Typography variant="h6" sx={{ color: "#94a3b8" }}>
        © {year} Developed by Hamo Ashraf
      </Typography>
    </Box>
  );
}
