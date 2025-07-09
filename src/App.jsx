import Hero from "./Component/2-Hero/Hero";
import Header from "./Component/1-Header/Header";
import Main from "./Component/3-Main/Main";
import Contact from "./Component/4-Contact/Contact";
import Footer from "./Component/5-Footer/Footer";
import { Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { useEffect, useState } from "react";

function App() {
  const [darkmode, setdarkmode] = useState(
    localStorage.getItem("currentmode") === null
      ? "dark"
      : localStorage.getItem("currentmode") ===  "dark"
      ? "dark"
      : "light"
  );
  const [scroll, setscroll] = useState(false);
  useEffect(() => {
  document.body.className = darkmode;
}, [darkmode]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    });
  }, []);
  return (
    <>
      <div id="up" className="container">
        <Header setdarkmode={setdarkmode} darkmode={darkmode} />
        <Hero />
        <div className="divider" />

        <Main />
        <div className="divider" />

        <Contact />
        <div className="divider" />

        <Footer />
        <a style={{ opacity: scroll ? 1 : 0, transition: "1s" }} href="#up">
          <Fab
            className="scroll2up"
            size="medium"
            color="primary"
            aria-label="add"
          >
            <KeyboardArrowUp />
          </Fab>
        </a>
      </div>
    </>
  );
}

export default App;
