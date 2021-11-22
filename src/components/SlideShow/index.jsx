import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import SCarrousel from './styles';

const fadeImages = [
  'img/Carrousel/1.png',
  'img/Carrousel/2.png',
  'img/Carrousel/3.png',
  'img/Carrousel/4.png',
  'img/Carrousel/5.png',
];
const properties = {
  arrows: true,
  indicators: false,
  duration: '3000',
  prevArrow: (
    <div
      style={{
        width: '30px',
        marginRight: '-30px',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      <MdKeyboardArrowLeft />
    </div>
  ),
  nextArrow: (
    <div
      style={{
        width: '30px',
        marginLeft: '-30px',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      <MdKeyboardArrowRight />
    </div>
  ),
};

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <SCarrousel>
      <div className="slide-container" data-aos="zoom-in">
        <Fade {...properties}>
          <div className="each-fade">
            <img src={fadeImages[0]} alt="img" />
            <p>BIENVENUE CHEZ COMPASS LANGUAGE SCHOOL</p>
            <p>
              <button type="button">
                <NavLink to="/contact" target="_blank">
                  En savoir plus
                </NavLink>
              </button>
            </p>
          </div>
          <div className="each-fade">
            <img src={fadeImages[1]} alt="img" />
            <p>DES FORMATIONS ADAPTÉES A VOS BESOINS </p>
            <p>
              <button type="button">
                <NavLink to="/contact" target="_blank">
                  Actualités
                </NavLink>
              </button>
            </p>
          </div>
          <div className="each-fade">
            <img src={fadeImages[2]} alt="img" />
            <p>DÉCROCHEZ UNE FORMATION CERTIFIANTE</p>
            <p>
              <button type="button">
                <NavLink to="/examens" target="_blank">
                  En savoir plus
                </NavLink>
              </button>
            </p>
          </div>
          <div className="each-fade">
            <img src={fadeImages[3]} alt="img" />
            <p>APPRENEZ EN LIGNE, OÙ QUE VOUS SOYEZ</p>
            <p>
              <button type="button">
                <NavLink to="/contact" target="_blank">
                  Actualités
                </NavLink>
              </button>
            </p>
          </div>
          <div className="each-fade">
            <img src={fadeImages[4]} alt="img" />
            <p>DES FORMATEURS QUALIFIÉS ET PASSIONNÉS</p>
            <p>
              <button type="button">
                <NavLink to="/contact" target="_blank">
                  Actualités
                </NavLink>
              </button>
            </p>
          </div>
        </Fade>
      </div>
    </SCarrousel>
  );
}
