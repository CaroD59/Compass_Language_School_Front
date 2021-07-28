import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Styles from './styles';

export default function Cursus() {
  const [cursus, setCursus] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/coursformules`)
      .then(({ data }) => {
        setCursus(data);
      });
  }, []);
  return (
    <Styles>
      <div className="BlocCursus">
        <div className="Cursus">
          {cursus.map((cours) => {
            return (
              <Link to={`/${cours.id}/${cours.name}`}>
                <div className="Cours" aria-hidden="true" key={cours.id}>
                  <h1>{cours.name}</h1>
                  <p>{cours.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Styles>
  );
}
