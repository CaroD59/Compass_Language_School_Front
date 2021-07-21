import { NavLink } from 'react-router-dom';
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
