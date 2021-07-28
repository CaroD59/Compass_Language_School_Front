import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DescriptionStyles from './styles';

export default function Description() {
  const { coursformulesId } = useParams();
  const [appli, setAppli] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/coursformules/${coursformulesId}`)
      .then(({ data }) => {
        setAppli(data);
      });
  }, []);
  return (
    <DescriptionStyles>
      <div className="Description">
        {appli.map((app) => {
          return (
            <div className="cours">
              <p>{app.name}</p>
              <p>{app.price}</p>
            </div>
          );
        })}
      </div>
    </DescriptionStyles>
  );
}
