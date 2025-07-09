import React, { useState } from "react";
import "./main.css"; 

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import { East, GitHub, Link } from "@mui/icons-material";

// مكتبة framer-motion للحركات
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Main = () => {
  // الحالة لتحديد الفئة النشطة (كل المشاريع أو فئة معينة)

  // قائمة المشاريع الأصلية
  const card = [
        { title: "e-commerce", category: "react", imgpath: "./image/19.png",path:"https://e-comerce-9ed5e.web.app/" },
    { title: "Electric", category: "react", imgpath: "./image/20.png",path:"https://electric-d3832.web.app" },
        { title: "Portofolio", category: "react", imgpath: "./image/15.png",path:"https://portofolio-d5663.web.app" },

    { title: "Verefication project", category: "react", imgpath: "./image/11.png" ,path:"https://fir-sign-up-7c454.web.app"},
    { title: "html project", category: "material", imgpath: "./image/16.png",path:"https://material-ui-9801a.web.app/" },
    { title: "Facebook", category: "html", imgpath: "./image/17.png",path:"https://netflix-90c28.web.app/" },
    { title: "node project", category: "html", imgpath: "./image/18.png",path:"https://resturant-87bcd.web.app/" },
    { title: "node project", category: "node", imgpath: "./image/d.webp" },


  ];

  const [array, setarray] = useState(card);
  const [active, setactive] = useState("all");
  // دالة تصفية العناصر بناءً على الفئة
  const handleclick = (buttoncategory) => {
    setactive(buttoncategory); // تحديث الفئة النشطة
    const newarr = card.filter((item) => item.category === buttoncategory);
    setarray(newarr);
  };

  return (
    <Box id="projects" className="main-section" component="section">

      {/* أزرار الفئات على اليسار */}
      <Box className="leftsection-button">
        <Button
          onClick={() => {
            setactive("all");
            setarray(card); // عرض كل المشاريع
          }}
          className={active === "all" ? "active" : null}
          variant="outlined"
          size="large"
        >
          All Projects
        </Button>

        <Button
          className={active === "html" ? "active" : null}
          onClick={() => handleclick("html")}
          variant="outlined"
        >
          HTML&CSS
        </Button>

        <Button
          className={active === "javascript" ? "active" : null}
          onClick={() => handleclick("javascript")}
          variant="outlined"
        >
          JavaScript
        </Button>

        <Button
          className={active === "react" ? "active" : null}
          onClick={() => handleclick("react")}
          variant="outlined"
        >
          React&MUI
        </Button>

        <Button
          className={active === "material" ? "active" : null}
          onClick={() => handleclick("material")}
          variant="outlined"
        >
          Material Ui
        </Button>
      </Box>

      {/* قائمة الكروت على اليمين */}
      <Box className="right-section">
        <AnimatePresence>
          {array.map((item) => {
            return (
              <motion.article
                key={item.imgpath}
                layout
                initial={{ opacity: 0, y: 200, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "backIn" }}
            
              >
                <Card className="card" sx={{ maxWidth: 290 }}>
                  <CardMedia
                    onClick={() => {
    if (item.path) {
      window.open(item.path, "_blank");
    }
  }}
                    component="img"
                    height="220"
                    image={item.imgpath}
                    alt="project thumbnail"
                  />
                  <CardContent>
                    <Typography
                      sx={{ textTransform: "capitalize" }}
                      className="title"
                      variant="h6"
                    >
                      {item.title}
                    </Typography>
                    <Typography className="subtitle" sx={{ mt: "5px" }} variant="body2">
                      This impressive paella is a perfect party dish and a fun meal
                      to cook together with your guests. Add 1 cup of frozen peas
                      along with the mussels, if you like.
                    </Typography>
                  </CardContent>

                  <CardActions disableSpacing>
                    {/* أيقونة رابط خارجي */}
                    <IconButton className="icon-right">
                      <Link />
                    </IconButton>

                    {/* زر لفتح GitHub في تبويب جديد */}
                    <IconButton
                      onClick={() => {
                        window.open("https://github.com/Hamo639", "_blank");
                      }}
                      className="icon-right"
                    >
                      <GitHub />
                    </IconButton>

                    <Box flexGrow={1} />
                    <Button 
                       onClick={() => {
    if (item.path) {
      window.open(item.path, "_blank");
    }
  }}
                    
                     endIcon={<East />}>More</Button>
                  </CardActions>
                </Card>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default Main;
