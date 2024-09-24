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
    console.log(index)
    // setHoveredIndex(index); // Change l'élément survolé
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
      <section className="container">
        <div className="container__map">
          <div className="text-overlay">Membre du 1er réseau panafricain</div>
        </div>
        {
          gridData.map((item, index) => (
            <Grid
              key={index}
              title={item.title}
              image={item.image}
              isHovered={hoveredIndex === index}
              onHover={() => handleMouseEnter(index)}
              onLeave={handleMouseLeave}
            />
          ))
        }
      </section>
    </div>
  );
}

export default Home;
