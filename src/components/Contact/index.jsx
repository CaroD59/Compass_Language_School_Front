import { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { NavLink } from 'react-router-dom';
import { IoOpenOutline } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io';
import { SiWechat } from 'react-icons/si';
import { FaFacebookSquare } from 'react-icons/fa';
import StyledContact from './styles';

dotenv.config();

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (evt) => {
    const newDetails = { ...details };
    newDetails[evt.target.name] = evt.target.value;
    setDetails(newDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/contact`, details).then(() => {
      setIsSent(true);
    });
  };

  return (
    <StyledContact id="Contact">
      {isSent ? (
        <div className="buttonContactForm">
          <div className="Image">
            <img src="img/MessageSent.png" alt="" />
          </div>
          <div className="inactive">
            <div>
              <p>Message envoyé !</p>
            </div>
            <div>
              <NavLink to="/">
                <IoOpenOutline />
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="ContactPage">
            <div className="Contact">
              <div className="form">
                <img
                  src="./img/Icônes/LogoCLS.png"
                  alt=""
                  className="CLSLogo"
                />
                <form onSubmit={handleSubmit}>
                  <div className="pContact">
                    <p>Formulaire de contact</p>
                  </div>
                  <div className="form-inner">
                    <div className="form-groupe">
                      <input
                        type="text"
                        id="firstname"
                        placeholder="Prénom"
                        name="firstName"
                        value={details.firstName}
                        onChange={handleChange}
                        className="ContactInput"
                        required
                      />
                      <div className="form-groupe">
                        <input
                          type="text"
                          id="lastname"
                          placeholder="Nom"
                          name="lastName"
                          value={details.lastName}
                          onChange={handleChange}
                          className="ContactInput"
                          required
                        />
                      </div>
                      <div className="form-groupe">
                        <input
                          type="text"
                          id="phoneNumber"
                          placeholder="Numéro de téléphone"
                          name="phoneNumber"
                          value={details.phoneNumber}
                          onChange={handleChange}
                          className="ContactInput"
                          required
                        />
                      </div>
                      <div className="form-groupe">
                        <input
                          type="text"
                          id="email"
                          placeholder="E-mail"
                          name="email"
                          value={details.email}
                          onChange={handleChange}
                          className="ContactInput"
                          required
                        />
                      </div>
                    </div>
                    <div className="secondBloc">
                      <div className="form-groupe">
                        <textarea
                          type="text"
                          id="message"
                          placeholder="Ecrivez votre message"
                          name="message"
                          value={details.message}
                          onChange={handleChange}
                          className="ContactMessage"
                          required
                        />
                      </div>
                    </div>
                    <div className="RGPD">
                      <div>
                        <input type="checkbox" required />
                      </div>
                      <div className="CLSInfos">
                        <p>
                          J&apos;accepte de partager mes informations à Compass
                          Language School
                        </p>
                      </div>
                    </div>
                    <div className="Button">
                      <button
                        type="submit"
                        className="buttonContact"
                        disabled={handleSubmit}
                      >
                        Envoyer
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="InfosPage">
              <p>Coordonnées</p>
              <div className="Infos">
                <div className="Coordonnées">
                  <div className="phoneSection">
                    <p className="phone">+333 333 333 333</p>
                  </div>
                  <div className="addressSection">
                    <p className="address">Address Address Address</p>
                    <p className="address">Address Address Address</p>
                  </div>
                </div>
              </div>
              <div className="Map">
                <div className="GoogleMap">
                  <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97583.88432375464!2d44.41852741838064!3d40.15350050866108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2sErevan%2C%20Arm%C3%A9nie!5e0!3m2!1sfr!2sfr!4v1626879895322!5m2!1sfr!2sfr"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="Logos">
                <div className="firstlogo">
                  <a
                    href="https://www.youtube.com/channel/UCdCKYrYjczTsYqSgZIqnryw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoYoutube />
                  </a>
                </div>
                <div className="secondlogo">
                  <a
                    href="https://www.facebook.com/comlans"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                </div>
                <div className="thirdlogo">
                  <a
                    href="https://web.wechat.com/?lang=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiWechat />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </StyledContact>
  );
}
