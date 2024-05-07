import React, { useEffect } from "react";
import logo from "../assets/assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { changLanguage } from "../Redux/Action";
import { motion } from "framer-motion";

const Navbar = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  }, []);
  const changeLang = (lng) => {
    lng == "en" ? dispatch(changLanguage("en")) : dispatch(changLanguage("ar"));

    i18n.changeLanguage(lng);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg nav__main ">
        <div className="container-fluid md:px-5 md:mx-3">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <motion.ul
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 20 }}
              transition={{ duration: 1 }}
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            >
              <li className="nav-item aos-init aos-animate">
                <a className="" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="" href="#About">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="" href="#Shop">
                  Shop
                </a>
              </li>{" "}
              <li className="nav-item dropdown">
                <a className="" href="#MedicalCare">
                  Medical Care
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="" href="#Testmonial">
                  Testmonial
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="" href="#Contact">
                  Contact
                </a>
              </li>
            </motion.ul>
            <motion.form
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="d-flex nav__list align-items-center"
              role="search"
            >
              <div className="dropdown">
                <img
                  src=" https://cdn-icons-png.flaticon.com/512/9411/9411876.png "
                  width="36"
                  height="36"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  alt=""
                  title=""
                  className="img-small"
                />
                <ul className="dropdown-menu">
                  <li onClick={() => changeLang("ar")}>
                    <a className="dropdown-item" href="#">
                      Arabic
                    </a>
                  </li>
                  <li onClick={() => changeLang("en")}>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                </ul>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/6372/6372641.png"
                width="26"
                height="26"
                alt=""
                title=""
                className="img-small "
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
              <img
                src="   https://cdn-icons-png.flaticon.com/512/3523/3523887.png "
                width="26"
                height="26"
                alt=""
                title=""
                className="img-small"
              />
              <img
                src="   https://cdn-icons-png.flaticon.com/512/2202/2202112.png "
                width="26"
                height="26"
                alt=""
                title=""
                className="img-small"
              />
            </motion.form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
