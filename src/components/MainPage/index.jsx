import React from 'react';
import StyledMainPage from './styles';

export default function MainPage() {
  return (
    <StyledMainPage>
      <div className="LogoContainer">
        <img src="img/Icônes/LogoCLS.png" alt="img" />
        <p className="titlesiteweb">Cours de langues en ligne</p>
        <p className="citation">“Osez vous améliorer !”</p>
      </div>

      <div className="ValeurContainer">
        <div className="valeur">
          <p className="title">Titre 1</p>
        </div>
        <div className="valeur">
          <p className="title">Titre 2</p>
        </div>
        <div className="valeur">
          <p className="title">Titre 3</p>
        </div>
      </div>
    </StyledMainPage>
  );
}
