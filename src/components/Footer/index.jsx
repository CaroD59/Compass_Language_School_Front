import { NavLink } from 'react-router-dom';
// import { IoLogoYoutube } from 'react-icons/io';
// import { SiWechat } from 'react-icons/si';
// import { FaFacebookSquare } from 'react-icons/fa';
import StyledFooter from './styles';

export default function Footer() {
  return (
    <StyledFooter>
      <div className="Footer">
        <div className="FirstContainer">
          <div className="privacypolicy">
            <NavLink to="/privacypolicy">Privacy Policy</NavLink>
          </div>
          <div className="termsofuse">
            <NavLink to="/termsofuse">Terms of Use</NavLink>
          </div>
          <div className="contact">
            <NavLink to="/contact">Contactez-nous</NavLink>
          </div>
          {/* <div className="follow">
            <div className="logos">
              <div className="firstlogo">
                <IoLogoYoutube />
              </div>
              <div className="secondlogo">
                <FaFacebookSquare />
              </div>
              <div className="thirdlogo">
                <SiWechat />
              </div>
            </div>
          </div> */}
        </div>
        <div className="SecondContainer">
          <div className="copyright">
            ©️ 2021 Copyright : Compass Language School
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
