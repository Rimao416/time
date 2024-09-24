// import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import Time from "../assets/logo.gif";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { gridData } from "../constants/gridData";
import { Grid } from "../components/Grid";
import { useState } from "react";
// import { motion } from "framer-motion";
function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Garde la trace de l'élément survolé
  const menuItems = [
    { label: "Accueil", link: "#" },
    { label: "Etudes", link: "#" },
    { label: "Stages", link: "#" },
    { label: "Admissions", link: "#" },
    { label: "Actualités", link: "#" },
    { label: "Formations", link: "#" },
  ];
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index); // Change l'élément survolé
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Réinitialise l'état quand la souris quitte l'élément
  };
  return (
    <div className="App">
      <section className="header">
        <div className="header__hero">
          <p>
            {" "}
            <span className="header__hero--icons">
              <FaPhoneAlt />
            </span>
            <span>(+216) 71 95 11 94</span>
          </p>
          <p>
            {" "}
            <span className="header__hero--icons">
              <IoMailSharp />
            </span>{" "}
            <span>contact</span>
          </p>
          <p>
            {" "}
            <span className="header__hero--icons">
              <FaUniversity />
            </span>{" "}
            <span>Admissions</span>
          </p>
          <ul className="header__hero--social">
            <li>
              <a href="#">
                <TiSocialFacebook />
              </a>
            </li>

            <li>
              {" "}
              <a href="#">
                <FaTwitter />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">
                <FaLinkedinIn />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">
                <FaDribbble />
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="header__nav">
          <img src={Time} alt={Time} />
          <ul className="header__nav--list">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
            <button></button>
          </ul>
        </div>
      </section>
      <div className="layout">
        {/* La partie gauche qui ne fait pas partie du grid */}
        <div className="layout__left">
          <div className="layout__left-overlay">
            Membre du 1er réseau panafricain d'enseignement privé
          </div>
        </div>

        {/* La partie droite contenant le grid */}
        <section className="layout__right">
          <div className="grid">
            {gridData.map((item, index) => (
             <Grid
             key={item.title}
             title={item.title}
             image={item.image}
             className={hoveredIndex === index ? "grid__item--large" : ""}
             isLarge={hoveredIndex === null && index === 0} // Le premier élément est large par défaut
             onHover={() => handleMouseEnter(index)} // Passe l'index lors du survol
             onLeave={handleMouseLeave}
           />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
