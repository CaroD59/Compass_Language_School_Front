import React, { useState, useEffect } from 'react';
import { ImMenu3 } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import StyledHeader from './styles';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);
  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);
  return (
    <StyledHeader>
      <nav className="NavBar">
        <div className="LogoContainer">
          <a href="/">
            <img src="/img/Icônes/BigLogoCLS.png" alt="logo" />
          </a>
        </div>
        {(toggleMenu || largeur > 500) && (
          <div className="TwoContainers">
            <div className="Container">
              <div className="Links">
                <ul>
                  <li className="Link">
                    <NavLink to="/">Accueil</NavLink>
                  </li>
                  <li className="Link">
                    <NavLink to="/cours&formules">Cours et Formules</NavLink>
                  </li>
                  <li className="Link">
                    <NavLink to="/recrutement">Recrutement</NavLink>
                  </li>
                  <li className="Link">
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li className="Link">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Container">
              <div className="LogoProfile">
                <NavLink to="/monprofil">
                  <CgProfile />
                </NavLink>
              </div>
            </div>
          </div>
        )}
        <button onClick={toggleNavSmallScreen} className="btn" type="button">
          <ImMenu3 />
        </button>
      </nav>
    </StyledHeader>
  );
}
