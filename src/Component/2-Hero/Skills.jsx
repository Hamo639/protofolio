import { Box, Typography, Stack } from "@mui/material";

import { motion } from "framer-motion";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaGitAlt, FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs, SiFirebase, SiTailwindcss, SiBootstrap, SiMaterialformkdocs,
  SiRedux, SiStrapi, SiFormspree, SiAppium, SiFramer, SiPlotly,
} from "react-icons/si";

import "./hero.css";

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
  { name: "React js", icon: <FaReact color="#61dbfb" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#fff" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFA611" /> },
  { name: "BootStrap", icon: <SiBootstrap color="#38BDF8" /> },
  { name: "Materialui", icon: <SiMaterialformkdocs color="#fff" /> },
  { name: "Tailwaind css", icon: <SiTailwindcss color="#fff" /> },
  { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
  { name: "GitHub", icon: <FaGithub color="#fff" /> },
  { name: "Redux", icon: <SiRedux color="#fff" /> },
  { name: "Redux Toolkit", icon: <SiRedux color="#fff" /> },
  { name: "strapi", icon: <SiStrapi color="#fff" /> },
  { name: "Fetch Api", icon: <SiAppium color="#fff" /> },
  { name: "Formspree", icon: <SiFormspree color="#fff" /> },
  { name: "Framer Motion", icon: <SiFramer color="#fff" /> },
  { name: "lottifiles", icon: <SiPlotly color="#fff" /> },
];

const SkillsSection = () => {
  return (
    <Box id="skills" className="skills-section" sx={{ mt: 10, textAlign: "left", px: 2 }}>
      <Typography className="titleskills" variant="h4" gutterBottom>
        🛠 My Tech Stack
      </Typography>

      <Typography className="titleskills" variant="body1" sx={{ mb: 4 }}>
        Tools & technologies I use to build amazing web experiences.
      </Typography>

      <Stack
        direction="row"
        spacing={1.5}
        useFlexGap
        justifyContent="flex-start"
        flexWrap="wrap"
      >
        {/* تكرار العناصر مع أنيميشن باستخدام framer-motion */}
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Box
className="iconskills fire-card"           
   sx={{
                background: "#1f1f1f",
                color: "#fff",
                px: {md:1.5},
                py: {md:2},
                borderRadius: "12px",
                minWidth: "110px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "0.3s",
                },
              }}
            >
              <Box sx={{ fontSize: "2rem", mb: 1 }}>{skill.icon}</Box>
              <Typography variant="body2">{skill.name}</Typography>
            </Box>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

export default SkillsSection;
