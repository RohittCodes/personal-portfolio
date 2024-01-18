import React, { useState } from "react";
import "./NavBar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} width={100} alt="Logo"></img>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "testimonials", "contact"].map(
          (item) => {
            return (
              <li className="app__flex p-text" key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a> <div />
              </li>
            );
          }
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <div>
              <HiX onClick={() => setToggle(false)} />

              <ul style={{ display: "flex", flexDirection: "column" }}>
                {["home", "about", "work", "skills", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
                <span style={{ display: "flex", flexDirection: "row" }}>
                  <a
                    href="https://github.com/AmanBhanse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <FaGithub />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aman-bhanse/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <BsLinkedin />
                    </span>
                  </a>
                  <a
                    href="https://twitter.com/bhanse_aman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <BsTwitter />
                    </span>
                  </a>
                </span>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
