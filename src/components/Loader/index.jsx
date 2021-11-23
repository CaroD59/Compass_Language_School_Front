import LoaderStyle from './styles';

export default function Loader() {
  return (
    <LoaderStyle>
      <div className="container">
        <div id="loader" />
        <img
          className="imgMaint"
          src="img/Maintenance-Gif.gif"
          width="96"
          height="96"
          alt=""
        />
      </div>
    </LoaderStyle>
  );
}
