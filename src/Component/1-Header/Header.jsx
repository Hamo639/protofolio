import { useState } from "react";

import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
// تعريف مكون Header ويستقبل props: setdarkmode و darkmode
const Header = ({ setdarkmode, darkmode }) => {
  // تعريف حالة لتحديد إذا كانت المودال ظاهرة أم لا
  const [showmodal, setshowmodal] = useState(false);

  return (
    <header
      style={{
        marginTop: "15px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1.4rem",
      }}
      className="header flex"
    >
      {/*  (Responsive Menu) */}
      <button
        onClick={() => {
          setshowmodal(true); // يفتح المودال
        }}
        className="header__menu-toggle"
      >
        <FontAwesomeIcon style={{ fontSize: "1.3rem" }} icon={faBars} />
      </button>

      <div />

      {/* القائمة الرئيسية في الوضع العادي */}
      <nav className="header__nav">
        <ul className="header__nav-list flex">
          {/* روابط التنقل */}
          <li className="header__nav-item">
            <a href="#about" className="header__nav-link">
              About
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#skills" className="header__nav-link">
              Skills
            </a>
          </li>

          <li className="header__nav-item">
            <a href="#projects" className="header__nav-link">
              Projects
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#contact" className="header__nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* زرار لتغيير وضع الإضاءة */}
      <button
        onClick={() => {
          const newmode = darkmode === "light" ? "dark" : "light"; // التبديل بين الوضعين
          setdarkmode(newmode); // تحديث الـ state
          localStorage.setItem("currentmode", newmode); // Save localStorage
        }}
        className="header__mode-toggle"
      >
        {/* تغيير الأيقونة حسب الوضع الحالي */}
        {darkmode === "light" ? (
          <FontAwesomeIcon
            style={{ color: "orange", fontSize: "1.3rem" }}
            icon={faMoon}
          />
        ) : (
          <FontAwesomeIcon
            style={{ color: "orange", fontSize: "1.3rem" }}
            icon={faSun}
          />
        )}
      </button>

      {/* المودال (بيظهر في وضع الموبايل مثلاً) */}
      {showmodal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ul>
              {/* زرار لإغلاق المودال */}
              <li>
                <FontAwesomeIcon
                  className="modal-close"
                  onClick={() => {
                    setshowmodal(false);
                  }}
                  icon={faXmark}
                />
              </li>

              {/* باقي الروابط داخل المودال */}
              <li>
                <a href="" className="modal-nav-link">
                  About
                </a>
              </li>
              <div className="modal-divider" />
              <li>
                <a href="" className="modal-nav-link">
                  Articles
                </a>
              </li>
              <div className="modal-divider" />
              <li>
                <a href="" className="modal-nav-link">
                  Projects
                </a>
              </li>
              <div className="modal-divider" />
              <li>
                <a href="" className="modal-nav-link">
                  Speaking
                </a>
              </li>
              <div className="modal-divider" />
              <li>
                <a href="" className="modal-nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
