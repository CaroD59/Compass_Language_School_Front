import React from 'react';
import { NavLink } from 'react-router-dom';
import StyleExamens from './styles ';

export default function Examens() {
  return (
    <StyleExamens>
      <div className="ExamensTitle">
        <p className="title">PRÉPARATIONS AUX EXAMENS</p>
      </div>
      <div className="Bloc1">
        <div className="image1">
          <img src="/img/diplome.jpg" alt="diplome" />
        </div>
        <div className="description">
          <img src="/img/book.webp" alt="book" />
          <p>
            Passer un examen peut devenir très difficile si l&apos;on ne
            s&apos;est pas correctement préparé. Pour mettre toutes les chances
            de votre coté, nous avons mis au point des cours de préparation
            intensive qui vous permettront de maitriser toutes les subtilités et
            de déjouer tous les pièges.
          </p>
          <p>
            Nos formateurs vous donneront toutes les clés pour réussir, au
            travers de conseils et d&apos;un accompagnement tout au long de
            votre parcours. Ils vous donneront la possibilité de vous entraîner
            dans les conditions réelles d&apos;examen, afin d’améliorer la
            gestion du temps et du stress.
          </p>
        </div>
      </div>

      <div className="Bloc2">
        <div className="description">
          <div className="bloc2Title">
            <p className="title">Quels examens ?</p>
          </div>
          <p>
            Il existe plusieurs examens reconnus, et ils ont tous le même
            principe : tester et certifier le niveau de langue pour les
            apprenants non natifs. Ils ont cependant des objectifs très
            différents : certains ont une finalité académique alors que
            d&apos;autres ont la spécificité d’évaluer les capacités
            linguistiques dans un contexte professionnel.
          </p>
          <p>
            De même, les compétences testées, la structure, la notation, le
            format ne sont pas identiques d&apos;un examen a un autre. Dans tous
            les cas, la préparation est primordiale : pour chaque examen, nous
            travaillerons ensemble sur les points spécifiques qui vous mèneront
            à la réussite.
          </p>
        </div>
        <div className="image1">
          <img src="/img/exam.jpg" alt="exam" />
        </div>
      </div>

      <div className="Bloc3">
        <div className="imageDiplome1">
          <img src="/img/Diplomes/HSK.png" alt="diplome" />
        </div>
        <div className="imageDiplome2">
          <img src="/img/Diplomes/ielts.png" alt="diplome" />
        </div>
      </div>

      <div className="Bloc4">
        <div className="button1">
          <button type="button">
            <NavLink to="/hsk" target="_blank">
              Infos
            </NavLink>
          </button>
        </div>
        <div className="button2">
          <button type="button">
            <NavLink to="/ielts" target="_blank">
              Infos
            </NavLink>
          </button>
        </div>
      </div>
    </StyleExamens>
  );
}
