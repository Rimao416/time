import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.jpg";
import { MdArrowDropDown } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuMapPin } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

import About from "../assets/about.png";

import Temoignage_1 from "../assets/Temoignage_1.jpg";
import Temoignage_2 from "../assets/Temoignage_2.jpg";
import Temoignage_3 from "../assets/Temoignage_3.jpg";
import Temoignage_4 from "../assets/Temoignage_4.jpg";
import Temoignage_5 from "../assets/Temoignage_5.jpg";
import Temoignage_6 from "../assets/Temoignage_6.jpg";

import Temoignage_10 from "../assets/Temoignage_10.jpg";

import Temoignage_12 from "../assets/Temoignage_12.jpg";
import Temoignage_13 from "../assets/Temoignage_13.jpg";

// import required modules
import { Autoplay } from "swiper/modules";
import { calendarData, headerData, Title } from "../constants/headerData";
import { NewsData } from "../components/News";
import { Link } from "react-router-dom";
function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détection du scroll pour changer l'état
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useState<number | null>(null); // Garde la trace de l'élément survolé
  const truncateTitle = (title: string, index: number = 40) => {
    if (title.length > index) {
      return title.slice(0, index) + "...";
    }
    return title;
  };
  interface DropItem {
    label: string;
    link: string;
  }
  interface SubItem {
    label: string;
    link: string;
    dropItems?: DropItem[]; // Make dropItems optional
  }

  interface MenuItem {
    label: string;
    link: string;
    type?: string; // Optional, based on your structure
    subItems?: SubItem[]; // Make subItems optional
  }
  // Update your menuItems variable with the correct type
  const menuItems: MenuItem[] = [
    { label: "Accueil", link: "#", type: "simple" },
    // {
    //   label: "Autres Options",
    //   link: "#",
    //   type: "normal",
    //   subItems: [
    //     { label: "Drop menu 1", link: "#" },
    //     { label: "Drop menu 2", link: "#" },
    //     { label: "Drop menu 3", link: "#" },
    //     { label: "Drop menu 4", link: "#" },
    //   ],
    // },
    { label: "Présentation", link: "#", type: "normal" },
    {
      label: "Formations",
      link: "#",
      type: "big",
      subItems: [
        {
          label: "Licences LMD",
          link: "#",
          dropItems: [
            { label: "Informatique (Business Computing)", link: "#" },
            { label: "Finance", link: "#" },
            { label: "Marketing", link: "#" },
            { label: "Management", link: "#" },
            { label: "Comptabilité", link: "#" },
            { label: "Gestion des Ressources Humaines", link: "#" },
          ],
        },
        {
          label: "Cycle preparatoire integré",
          link: "#",
          dropItems: [
            { label: "1ière Année : Math-Physique: Informatique", link: "#" },
            { label: "2ième Année", link: "#" },
          ],
        },
        {
          label: "Mastères professionels",
          link: "#",
          dropItems: [
            { label: "Comptabilité", link: "#" },
            { label: "Finance", link: "#" },
            { label: "Ingénirie Financière (IF)", link: "#" },
            { label: "Ingénierie de Logiciel", link: "#" },
            {
              label:
                "Fiscalité des systèmes inforamtiques et des réseauxx (SSIR)",
              link: "#",
            },
            {
              label:
                "Management des ressources humaines et ingénierie des compétences (MRHIC)",
              link: "#",
            },
            {
              label:
                "Intelligence économique et stratégies compétitives à l'international (ESCI)",
              link: "#",
            },
            {
              label: "Contrôle de gestion et systèmes d'information (CGSI)",
              link: "#",
            },
            { label: "Management opérationnel (MO)", link: "#" },
            {
              label: "Marketing et force de vente à l'international (MFVI)",
              link: "#",
            },
          ],
        },

        // ... (rest of your items)
      ],
    },
    { label: "Événement", link: "#", type: "big" },
    { label: "Contact", link: "#", type: "big" },
  ];

  const imageGallery = [
    Temoignage_1,
    Temoignage_2,
    Temoignage_3,
    Temoignage_4,
    Temoignage_5,
    Temoignage_6,
    Temoignage_10,
    Temoignage_12,
    Temoignage_13,
  ];
  // const SlideAbout = [About_1, About_2, About_3, About_4];
  const EventTop = () => {
    return (
      <div className="events__features">
        <div className="events__features--date">
          <p>22</p>
          <p>Sept</p>
        </div>
        <div className="events__features--title">
          <h5>Lorem ipsum dolor sit amet</h5>
          <p>Lorem ipsum dolorr sit amet</p>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <section
        className={`navigation ${isScrolled ? "navigation--scrolled" : ""}`}
      >
        <img src={Logo} alt={Logo} className="navigation__logo" />
        <ul className="navigation__menu">
          {menuItems.map((item, index) => (
            <li key={index} className="navigation__item">
              <a href={item.link} className="navigation__link">
                {item.label}
              </a>
              {item.subItems && (
                
              <span style={{cursor:"pointer"}}><MdArrowDropDown/></span>
              )}
              {item.subItems && item.type === "normal" ? (
              <ul className="navigation__dropdown">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex} className="navigation__dropdown--item">
                  <a href={subItem.link} className="navigation__dropdown-link">
                    {subItem.label}
                    {subItem.dropItems && (
                      <ul className="navigation__dropdown--dropdown">
                        {subItem.dropItems.map((dropItem, dropIndex) => (
                          <li
                            key={dropIndex}
                            className="navigation__dropdown--dropdown-item"
                          >
                            <a
                              href={dropItem.link}
                              className="navigation__dropdown--dropdown-link"
                            >
                              {dropItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </a>
                </li>
              ))}
            </ul>
              ) : item.subItems && item.type === "big" ? (
                <div className="navigation__mega">
        <div className="navigation__mega--content">
          {item.subItems && item.subItems.map((subItem, subIndex) => (
            <div key={subIndex} className="navigation__mega--item">
              <h3 className="navigation__mega--title">
                {subItem.label}
              </h3>
              <ul>
                {subItem.dropItems &&
                  subItem.dropItems.map((dropItem, dropIndex) => (
                    <li key={dropIndex}>
                      <a href={dropItem.link} className="navigation__mega--link">{dropItem.label}</a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
              ): null}
            </li>
          ))}
        </ul>
      </section>

      <section className="header">
        <div className="header__wrapper">
          <div></div>

          <h1
            key={activeIndex} // Cela force une nouvelle animation à chaque changement d'index
            className="header__maintitle"
          >
            À L'université Time, &nbsp;
            <AnimatePresence>
              <motion.span
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeIn",
                  type: "spring",
                  delay: 0.5,
                }}
                className="header__slide"
              >
                {Title[activeIndex].title}
              </motion.span>
            </AnimatePresence>
          </h1>
          <div className="header__bottom">
            <div className="header__bottom--wrapper">
              <p>PRÉ-INSCRIPTION</p>
            </div>
            <div className="header__bottom--details">
              {calendarData.map((item, index) => (
                <div key={index} className="header__calendar">
                  <div className="header__calendar--date">
                    <p>{item.day}</p>
                    <p>{item.month}</p>
                  </div>
                  <div className="header__calendar--container">
                    <h4>{item.title}</h4>
                    <p>{truncateTitle(item.description, 20)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Swiper
          direction={"vertical"}
          slidesPerView={5}
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
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="header__wrapper"
        >
          {headerData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="header__wrapper--element" key={index}>
                <h1 className="header__title">{truncateTitle(item.title)}</h1>
                <p className="header__description">
                  {truncateTitle(item.description, 20)}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="about">
        <img src={About} alt={About} className="about__wrapper" />
        {/* <div className="about__wrapper">
          <div className="about__wrapper--image">
            <img src={About} alt={About} />
            <img src={Mu} alt={Mu} />
          </div>
        </div> */}
        <div className="about__wrapper">
          <p className="about__wrapper--about">À Propos de TIME</p>
          <h1 className="about__wrapper--title">
            TIME Higher School vise principalement l'employabilité
          </h1>
          <p className="about__wrapper--lorem">
            TIME Higher School, a pour principal objectif l’employabilité, qui
            consiste pour elle à tout mettre en œuvre pour permettre à
            l’étudiant d’être immédiatement opérationnel au terme de ses études
            tout en développant en lui la capacité d’évoluer dans les nouveaux
            métiers qu’il aura à exercer.
          </p>
          <div className="about__wrapper--bottom">
            <button>Voir Plus</button>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="news__header">
          <h1 className="news__header--title">
            Les Dernières <span>Actualités</span>
          </h1>
          <button className="news__header--button">Voir Tout</button>
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
      <section className="events">
        <div className="events__header">
          <div className="events__header--wrapper">
            <h1 className="events__header--title">
              Événements <span>Universitaires</span>{" "}
            </h1>
          </div>
          <div className="events__header--date">
            <p>Sept</p>
            <p>Oct</p>
            <p>Nov</p>
          </div>
        </div>
        <div className="events__body">
          <div className="events__body--main">
            {NewsData.slice(0, 2).map((item, index) => (
              <div key={index} className="events__body--item">
                <img src={item.image} alt={item.title} />
                <div className="events__body--item--text">
                  <div className="events__container">
                    <EventTop />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptatem sunt sint amet natus perferendis, minima
                      voluptatum rem dolorem ea numquam magni tempora illum,
                      explicabo, voluptate corporis quod ad eius accusantium.
                    </p>
                    <Link to="#">Voir Plus</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="events__body--second">
            {NewsData.map(() => (
              <div className="events__body--others" key={Math.random()}>
                <EventTop />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="gallery__header">
          <h1>Gallerie</h1>
          <button>Voir Tout</button>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000, // Délai en ms
          }}
          speed={1000}
          modules={[Autoplay]}
          className="gallery__grid"
        >
          {imageGallery.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt={`Gallery image ${index + 1}`}
                className="gallery__image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="map">
        <div className="map__word">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12776.316702999457!2d10.1840488!3d36.8166226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd346280d8b2b5%3A0x1d2f572c8f2fa17c!2sTIME%20Universit%C3%A9!5e0!3m2!1sfr!2stn!4v1727381487125!5m2!1sfr!2stn"
            width="100%" // Largeur 100% de l'écran
            height="450px" // Hauteur fixe
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="map__text">
          <h1>Contacts</h1>
          <p>
            {" "}
            <span>
              <LuMapPin />
            </span>
            <p>Veuillez indiquer la position exacte</p>{" "}
          </p>
          <p>
            {" "}
            <span>
              <LuMapPin />
            </span>
            <p>+21612345678</p>{" "}
          </p>
          <p>
            {" "}
            <span>
              <LuMapPin />
            </span>
            <p>nomdeluniversite@gmail.com</p>{" "}
          </p>
          <p>
            {" "}
            <span>
              <LuMapPin />
            </span>
            <p>nomdeluniversite.com</p>{" "}
          </p>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__column">
            <h4 className="footer__heading">TIME</h4>
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
          <p>©TIME</p>
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
