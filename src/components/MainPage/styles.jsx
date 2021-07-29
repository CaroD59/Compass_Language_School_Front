import styled from 'styled-components';

const StyledMainPage = styled.div`
  margin-bottom: 100px;
  .LogoContainer {
    text-align: center;
    img {
      margin-top: 50px;
      width: 10vw;
    }
    .titlesiteweb {
      font-family: 'roboto', sans-serif;
      font-size: 2em;
    }
    .citation {
      font-family: 'roboto', sans-serif;
      font-style: italic;
      font-size: 1.5em;
    }
  }

  .ValeurContainer {
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
    font-family: 'roboto', sans-serif;
    .valeur {
      background-color: yellow;
      width: 20vw;
      height: 20vh;
      .title {
        text-align: center;
        font-size: 1.5em;
      }
    }
  }
`;

export default StyledMainPage;
