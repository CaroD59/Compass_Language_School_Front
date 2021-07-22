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
      <div>
        {cursus.map((cours) => {
          return <div>Cours{cours.name}</div>;
        })}
      </div>
    </Styles>
  );
}
