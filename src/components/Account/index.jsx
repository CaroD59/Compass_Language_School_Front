import React from 'react';
import StyledAccount from './styles';

export default function Account() {
  return (
    <StyledAccount>
      <div className="blocUser">
        <div className="userOff">
          <div className="askForConnection">
            <p>Veuillez vous connecter</p>
          </div>
          <div className="user">
            <p>Nom d&apos;utilisateur</p>
            <input type="text" />
          </div>
          <div className="password">
            <p>Mot de passe</p>
            <input type="text" name="" id="" />
          </div>
          <div className="askForCreateAccount">
            <p>Pas encore inscrit ?</p>
            <p>Créer un compte</p>
          </div>
        </div>
      </div>
    </StyledAccount>
  );
}
