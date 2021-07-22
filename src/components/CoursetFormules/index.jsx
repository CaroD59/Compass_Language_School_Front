import axios from 'axios';
import { useState, useEffect } from 'react';
import Styles from './styles';

export default function Cursus() {
  const [cursus, setCursus] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cours&formules`)
      .then(({ data }) => {
        setCursus(data);
      });
  });
  return (
    <Styles>
      <div className="BlocCursus">
        <div>
          <p>prout</p>
        </div>
        <div className="Cursus">
          {cursus.map((cours) => {
            return (
              <div className="Cours">
                <h1>{cours.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
}
