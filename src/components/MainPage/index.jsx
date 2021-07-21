import React from 'react';
import StyledMainPage from './styles';
import Carrousel from './carrousel.gif';

export default function MainPage() {
  return (
    <StyledMainPage>
      <div className="Carrousel">
        <div className="carrousel">
          <img src={Carrousel} alt="carrousel" />
        </div>
      </div>
      <div className="MainPage">
        <div className="image">
          <img src="/img/CLS.png" alt="" />
        </div>
        <div className="presentation">
          <h1>Qui sommes nous ?</h1>
          <p>
            Compass est un centre d&apos;apprentissage de langues étrangères en
            ligne. Nos éducateurs viennent de divers horizons et sont tous
            qualifiés pour enseigner l&apos;anglais, l&apos;espagnol, ainsi que
            le chinois mandarin.
          </p>
          <h1>Pourquoi choisir Compass </h1>
          <p>
            Chez Compass, nous mettons l&apos;accent sur un enseignement typique
            de langues que nous enseignons. Cela signifie que quiconque décide
            de nous faire confiance doit être à terme capable de s&apos;exprimer
            avec assurance en compagnie de locuteurs natifs.
          </p>
          <p>
            Nous pouvons également nous adapter aux exigences et besoins de nos
            étudiants. Vous souhaitez préparer un test de niveau officiel en
            anglais, en espagnol ou en chinois ? Nous sommes là pour vous aider
            à réaliser vos rêves car chez Compass, votre but, c&apos;est notre
            responsabilité. Contactez nous plus plus d&apos;informations.
          </p>
        </div>
      </div>
    </StyledMainPage>
  );
}
