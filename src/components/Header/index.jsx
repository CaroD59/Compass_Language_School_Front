import React, { useState, useEffect } from 'react';
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import StyledHeader from './styles';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const closeMobileMenu = () => setToggleMenu(false);
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
          <NavLink to="/">
            <img src="/img/Icônes/BigLogoCLS.png" alt="logo" />
          </NavLink>
        </div>
        {(toggleMenu || largeur > 800) && (
          <div className="TwoContainers">
            <div className="Links">
              <ul>
                <li className="Link">
                  <NavLink to="/" onClick={closeMobileMenu}>
                    Accueil
                  </NavLink>
                </li>
                <li className="Link">
                  <NavLink to="/team" onClick={closeMobileMenu}>
                    Nos enseignants
                  </NavLink>
                </li>
                <li className="Link">
                  <NavLink to="/jobs" onClick={closeMobileMenu}>
                    Recrutement
                  </NavLink>
                </li>
                <li className="Link">
                  <NavLink to="/blog" onClick={closeMobileMenu}>
                    Blog
                  </NavLink>
                </li>
                <li className="Link">
                  <NavLink to="/account" onClick={closeMobileMenu}>
                    Mon compte
                  </NavLink>
                </li>
                <li className="Link">
                  <NavLink to="/help" onClick={closeMobileMenu}>
                    Aide et support
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
        <button onClick={toggleNavSmallScreen} className="btn" type="button">
          {toggleMenu ? <ImMenu4 /> : <ImMenu3 />}
        </button>
      </nav>
    </StyledHeader>
  );
}
