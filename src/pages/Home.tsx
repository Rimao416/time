import Time from "../assets/logo.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import MyU from "../assets/u.png";
import MyT from "../assets/t.png";
import { motion } from "framer-motion";
import Univ from "../assets/univ.jpg";
import Play from "../assets/play.png";
// Import Images
import Temoignage_1 from "../assets/Temoignage_1.jpg";
import Temoignage_2 from "../assets/Temoignage_2.jpg";
import Temoignage_3 from "../assets/Temoignage_3.jpg";
import Temoignage_4 from "../assets/Temoignage_4.jpg";
import Temoignage_5 from "../assets/Temoignage_5.jpg";
import Temoignage_6 from "../assets/Temoignage_6.jpg";

import Temoignage_10 from "../assets/Temoignage_10.jpg";

import Temoignage_12 from "../assets/Temoignage_12.jpg";
import Temoignage_13 from "../assets/Temoignage_13.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import { headerData } from "../constants/headerData";
import Header from "../components/Header";
import { formationsData } from "../constants/formationsData";
import Life from "../components/Life";
import { NewsData } from "../components/News";
// import { motion } from "framer-motion";
function Home() {
  useState<number | null>(null); // Garde la trace de l'élément survolé
  const truncateTitle = (title: string) => {
    if (title.length > 40) {
      return title.slice(0, 100) + "...";
    }
    return title;
  };
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
          <motion.img
            animate={{ y: [0, 100] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              type: "tween",
              repeatDelay: 1,
            }}
            src={MyU}
            alt="MyU"
          />
          <motion.img
            animate={{ y: [0, -100] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              type: "tween",
              repeatDelay: 1,
            }}
            src={MyT}
            alt="MyT"
          />
        </div>
        <div className="presentation__body">
          <p className="presentation__body--title">L'employabilité d'abord</p>
          <h1 className="presentation__body--text">
            TIME Higher School vise principalement l'employabilité, en
            s'assurant que ses étudiants soient opérationnels à la fin de leurs
            études et en leur permettant d'évoluer dans les nouveaux métiers.
          </h1>
          <div className="presentation__body--main">
            <div className="presentation__wrapper">
              <p>
                TIME Higher School, a pour principal objectif l’employabilité,
                qui consiste pour elle à tout mettre en œuvre pour permettre à
                l’étudiant d’être immédiatement opérationnel au terme de ses
                études tout en développant en lui la capacité d’évoluer dans les
                nouveaux métiers qu’il aura à exercer.
              </p>
              <button>En Savoir plus</button>
            </div>
            <p>
              Une formation diplômante (agréée par l'État) et certifiante qui
              permet une double reconnaissance réglementaire et professionnelle
              et qui aboutit à un diplôme reconnu par le M.E.S, soutenu par une
              maîtrise des normes professionnelles internationales. La formation
              continue qui porte sur quelques modules et/ou de sous modules
              appartenant au contenu des programmes d'enseignement permet aux
              candidats concernés de s'inscrire pour passer les examens.
            </p>
          </div>
        </div>
      </section>
      <section className="formations">
        <div className="formations__header">
          <p className="formations__header--title">
            Découvrez nos programmes d'enseignement
          </p>
          <h1 className="formations__header--text">Formations</h1>
        </div>
        <div className="formations__wrapper">
          {formationsData.map((item, index) => (
            <div key={index} className="formations__item">
              <img
                className="formations__item--image"
                src={item.image}
                alt={item.title}
              />
              <div className="formations__item--gradient"></div>
              <div className="formations__item--text">
                <h2>{item.title}</h2>
                <p>{truncateTitle(item.description)}</p>
                <button>En Savoir plus</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="life">
        <Life image={Temoignage_1} top="0" left="0" right="0" bottom="0" />
        <Life image={Temoignage_2} top="50%" left="86%" />
        <Life image={Temoignage_3} top="20%" left="15%" />
        <Life image={Temoignage_4} top="40%" left="25%" />
        <Life image={Temoignage_5} top="10%" left="50%" />
        <Life image={Temoignage_6} top="85%" left="80%" />

        <Life image={Temoignage_10} top="70%" left="5%" />

        <Life image={Temoignage_12} top="40%" left="70%" />
        <Life image={Temoignage_13} top="5%" left="80%" />
        <div className="life__container">
          <div className="life__container--text">
            <p>La vie à TIME est une expérience.</p>
            <h1>Notre engagement</h1>
          </div>
          <div className="life__container--image">
            <img src={Univ} alt={Univ} className="life__container--main" />
            <img src={Play} alt={Play} className="life__container--play" />
          </div>
        </div>
      </section>
      <section className="partenaires">
        <div className="partenaires__header">
          <p className="partenaires__header--title">
            Découvrez nos partenaires
          </p>
          <h1 className="partenaires__header--text">Partenaires</h1>
        </div>
        <div className="partenaires__wrapper"></div>
      </section>
      <section className="news">
        <div className="news__header">
          <h1>Actualités</h1>
        </div>
        <div className="news__grid">
          {NewsData.map((item, index) => (
            <div key={index} className="news__grid--item">
              <img src={item.image} alt={item.title} />
              <div className="news__grid--item--text">
                <p>Actualités</p>
                <h1>{item.title}</h1>
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="actualites">
        <div className="actualites__header">
          <p className="actualites__title">Découvrez nos actualités</p>
          <h1 className="actualites__text">TIME Actualités</h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          className="actualites__wrapper"
          modules={[Autoplay]}
        >
          {NewsData.map((item, index) => (
            <SwiperSlide key={index} className="actualites__wrapper--item">
              <img src={item.image} alt={item.title} />
              <div className="actualites__wrapper--text">
                <h1>{item.title}</h1>
                <p>{truncateTitle(item.description)}</p>
              </div>
              <div className="actualites__wrapper--gradient"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__column">
            <h4 className="footer__heading">ULT</h4>
            <ul className="footer__list">
              <li className="footer__item">L'université</li>
              <li className="footer__item">Partenaires</li>
              <li className="footer__item">Actualités</li>
              <li className="footer__item">Presse et médias</li>
              <li className="footer__item">Contact</li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Pourquoi Time ?</h4>
            <ul className="footer__list">
              <li className="footer__item">Corps professoral</li>
              <li className="footer__item">Campus</li>
              <li className="footer__item">Assurance qualité</li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Formations</h4>
            <ul className="footer__list">
              <li className="footer__item">Polytechnique</li>
              <li className="footer__item">Business School</li>
              <li className="footer__item">Ecole d'Architecture</li>
              <li className="footer__item">Ecole de Droit</li>
              <li className="footer__item">Certifications & Formations</li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Admission</h4>
            <ul className="footer__list">
              <li className="footer__item">Pré-inscription en ligne</li>
              <li className="footer__item">Conditions d'admission</li>
              <li className="footer__item">Conditions financières</li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Nous Contacter</h4>
            <ul className="footer__list">
              <li className="footer__item">Ici Adresse</li>
              <li className="footer__item">1002 Tunis</li>
              <li className="footer__item">Tél.: (+216) ****</li>
              <li className="footer__item">(+216) ******</li>
              <li className="footer__item">contact@time.com</li>
              <li className="footer__item">Comment s'y rendre ?</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>©2020 Université Libre de Tunis</p>
          <ul className="footer__bottom-list">
            <li className="footer__bottom-item">FAQ</li>
            <li className="footer__bottom-item">Accès Privés</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
