import { NavLink } from 'react-router-dom';
import ProfileStyles from './styles';

export default function Profil() {
  return (
    <ProfileStyles>
      <h1>Vous êtes :</h1>
      <div className="Profile">
        <NavLink to="/teacherprofile">
          <div className="Teacher">
            <img src="/img/teacher.png" alt="" />
            <p>Un professeur</p>
          </div>
        </NavLink>
        <NavLink to="/studentprofile">
          <div className="Student">
            <img src="/img/student.png" alt="" />
            <p>Un élève</p>
          </div>
        </NavLink>
      </div>
    </ProfileStyles>
  );
}
