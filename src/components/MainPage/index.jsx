import React from 'react';
import Carrousel from '../SlideShow/index';

import StyledMainPage from './styles';

export default function MainPage() {
  return (
    <StyledMainPage>
      <Carrousel />
      <div className="BigBloc">
        <div className="firstBloc">
          <div className="div-img-one">
            <img src="img/img-one.jpeg" alt="" className="img-one" />
          </div>
          <div className="div-p-one">
            <p className="title-one">Qui sommes nous ?</p>
            <p className="p-one">
              Compass est un centre d&lsquo;apprentissage de langues étrangères
              en ligne.
            </p>
            <p className="p-one">
              Notre objectif principal est de faciliter l&lsquo;accès à
              l&lsquo;apprentissage et à l&lsquo;enseignement des langues
              étrangères pour les apprenants de tout âge. Nos enseignants sont
              tous recrutés sur des critères stricts et sont en pleine capacité
              de transmettre leurs connaissances des langues de la manière la
              plus ludique et efficace possible.
            </p>
          </div>
        </div>
        <div className="secondBloc">
          <div className="div-ul-two">
            <p className="title-two">Nos missions</p>
            <ul className="ul-two">
              <li>
                Transmettre nos connaissances de manière ludique et
                personnalisée.
              </li>
              <li>
                Offrir à nos apprenants un cadre d&apos;apprentissage sécurisé,
                stimulant et relaxant.
              </li>
              <li>
                Suivre et accompagner l&apos;apprenant de son parcours
                linguistique.
              </li>
              <li>
                Respecter les différences de nos apprenants et nous adapter à
                leurs rythmes et à leurs besoins.
              </li>
              <li>Utiliser des méthodes d&apos;enseignement efficaces.</li>
              <li>
                Apporter une connaissances des langues étrangères
                correspondantes aux objectifs de l&apos;apprenant.
              </li>
            </ul>
          </div>
          <div className="div-img-two">
            <img src="img/img-two.jpg" alt="" className="img-two" />
          </div>
        </div>
        <div className="thirdBloc">
          <div className="div-img-three">
            <img src="img/img-three.jpg" alt="" className="img-three" />
          </div>
          <div className="div-p-three">
            <p className="title-three">Pourquoi choisir Compass ?</p>
            <p className="p-three">
              Chez Compass, nous mettons l&#39;accent sur la communication
              orales et la confiance en soi.
            </p>
            <p className="p-three">
              Nos enseignants se doivent de donner le goût de l&#39;effort et la
              passion des langues aux apprenants qui décident de faire un bout
              de chemin à nos côtés.
            </p>
            <p className="p-three">
              Nos enseignants doivent être à même de s&#39;adapter aux besoin et
              aux objectifs de l&#39;apprenant, tout en maintenant un cap
              réaliste et atteignable à moyen terme.
            </p>
            <p className="p-three">
              L&#39;équipe de Compass possède une solide expérience dans
              l&#39;enseignement en ligne et est toujours disponible pour
              répondre à vos attentes et vous offrir une expérience des langues
              étrangères inoubliable.
            </p>
          </div>
        </div>
      </div>
    </StyledMainPage>
  );
}
