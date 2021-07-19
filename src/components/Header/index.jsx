import React from 'react';
import StyledHeader from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <nav className="NavBar">
        <div className="LogoContainer">
          <a href="/">
            <img src="/img/Icônes/BigLogoCLS.png" alt="logo" />
          </a>
        </div>
      </nav>
    </StyledHeader>
  );
}
