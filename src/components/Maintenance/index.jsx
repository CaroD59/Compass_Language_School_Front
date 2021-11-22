import Maintenance from './styles';

export default function MaintenancePage() {
  return (
    <Maintenance>
      <div className="container">
        <div className="loader">
          <div className="outer" />
          <div className="middle" />
          <div className="inner" />
        </div>
        <div className="titleSection">
          <h2 className="comingsoon">Bientôt en ligne !</h2>
        </div>
      </div>
    </Maintenance>
  );
}
