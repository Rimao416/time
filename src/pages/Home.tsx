import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import Logo from "../assets/logo.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { calendarData, headerData, Title } from "../constants/headerData";
function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useState<number | null>(null); // Garde la trace de l'élément survolé
  const truncateTitle = (title: string, index: number = 40) => {
    if (title.length > index) {
      return title.slice(0, index) + "...";
    }
    return title;
  };

  const menuItems = [
    { label: "Accueil", link: "#" },
    { label: "Présentation", link: "#" },
    { label: "Formations", link: "#" },
    { label: "Événement", link: "#" },
    { label: "Contact", link: "#" },
    // { label: "Vie estudiante", link: "#" },
  ];
 

  return (
    <div className="App">
      <section className="navigation">
        <img src={Logo} alt={Logo} className="navigation__logo" />
        <ul className="navigation__menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="navigation__link">
                {item.label}
              </a>
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
              <motion.span initial={{ opacity: .5 }} animate={{ opacity: 1 }} transition={{ duration: .8, ease: "easeIn", type: "spring",delay:.5}
            } className="header__slide">{Title[activeIndex].title}</motion.span>
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
    </div>
  );
}

export default Home;
