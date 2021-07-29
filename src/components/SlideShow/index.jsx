import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import SCarrousel from './styles';

const fadeImages = [
  'img/Carrousel/1.jpg',
  'img/Carrousel/2.jpg',
  'img/Carrousel/3.jpg',
];
const properties = {
  arrows: true,
  indicators: true,
  prevArrow: (
    <div style={{ width: '30px', marginRight: '-30px', color: 'white' }}>
      <MdKeyboardArrowLeft />
    </div>
  ),
  nextArrow: (
    <div
      style={{
        width: '30px',
        marginLeft: '-30px',
        color: 'white',
      }}
    >
      <MdKeyboardArrowRight />
    </div>
  ),
};

export default function App() {
  return (
    <SCarrousel>
      <div className="slide-container">
        <Fade {...properties}>
          <div className="each-fade">
            <img src={fadeImages[0]} alt="img" />
            <p>Bienvenue sur Compass Language School</p>
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
            <p>Venustatis gratiarum decorata gratiarum condita.</p>
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
            <p>Venustatis gratiarum decorata gratiarum condita.</p>
            <p>
              <button type="button">
                <NavLink to="/contact" target="_blank">
                  En savoir plus
                </NavLink>
              </button>
            </p>
          </div>
        </Fade>
      </div>
    </SCarrousel>
  );
}
