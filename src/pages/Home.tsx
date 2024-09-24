import Time from "../assets/logo.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import MyU from "../assets/u.png";
import MyT from "../assets/t.png";
import {motion} from "framer-motion"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import { headerData } from "../constants/headerData";
import Header from "../components/Header";
// import { motion } from "framer-motion";
function Home() {
  useState<number | null>(null); // Garde la trace de l'élément survolé
  const menuItems = [
    { label: "Accueil", link: "#" },
    { label: "Formations", link: "#" },
    { label: "Admissions", link: "#" },
    { label: "Actualités", link: "#" },
    { label: "International", link: "#" },
    { label: "Vie estudiante", link: "#" },
  ];

  return (
    <div className="App">
      <section className="navigation">
        <img src={Time} alt={Time} className="navigation__logo" />
        <ul className="navigation__menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="navigation__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="navigation__button">Espace Privé</button>
      </section>
      <section className="header">
        <Swiper
          // direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 3000, // Délai en ms
            disableOnInteraction: false, // Continue après interaction
            // disable when mouse is on
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          modules={[Autoplay]}
          className="header"
        >
          {headerData.map((item, index) => (
            <SwiperSlide key={index}>
              <Header
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="presentation">
        <div className="presentation__image">
          <motion.img animate={{y: [0,100]}} transition={{duration:1,repeat:Infinity,repeatType:"reverse",type:"tween",repeatDelay:1}}  src={MyU} alt="MyU" />
          <motion.img animate={{y: [0,-100]}} transition={{duration:1,repeat:Infinity,repeatType:"reverse",type:"tween",repeatDelay:1}}   src={MyT} alt="MyT" />
        </div>
        <div className="presentation__body">
          <p className="presentation__body--title">
            L'employabilité d'abord
          </p>
          <h1 className="presentation__body--text">TIME Higher School vise principalement l'employabilité, en s'assurant que ses étudiants soient opérationnels à la fin de leurs études et en leur permettant d'évoluer dans les nouveaux métiers.</h1>
          <div className="presentation__body--main">
            <div className="presentation__wrapper">
              <p>TIME Higher School, a pour principal objectif l’employabilité, qui consiste pour elle à tout mettre en œuvre pour permettre à l’étudiant d’être immédiatement opérationnel au terme de ses études tout en développant en lui la capacité d’évoluer dans les nouveaux métiers qu’il aura à exercer.</p>
              <button>En Savoir plus</button>
            </div>
            <p>
            Une formation diplômante (agréée par l'État) et certifiante qui permet une double reconnaissance réglementaire et professionnelle et qui aboutit à un diplôme reconnu par le M.E.S, soutenu par une maîtrise des normes professionnelles internationales.

La formation continue qui porte sur quelques modules et/ou de sous modules appartenant au contenu des programmes d'enseignement permet aux candidats concernés de s'inscrire pour passer les examens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
