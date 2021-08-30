import styled from 'styled-components';

/* Couleurs, polices, fonds à modifer par la suite, ne pas oublier */

const StyledMainPage = styled.div`
  margin-bottom: 100px;
  .LogoContainer {
    text-align: center;
    .titlesiteweb {
      font-family: 'roboto', sans-serif;
      font-size: 2em;
      letter-spacing: 0.3em;
      color: grey;
      font-weight: bold;
    }
  }

  .ValeurContainer {
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
    font-family: 'roboto', sans-serif;

    .valeur {
      /* border: 1px solid black;
      border-radius: 5px;
      background-color: yellow; */
      font-family: 'roboto', sans-serif;
      width: 20vw;
      height: auto;
      .title {
        letter-spacing: 0.2em;
        font-style: italic;
        font-weight: bold;
        text-align: center;
        font-size: 1.5em;
      }
      .textValeur {
        text-align: justify;
        padding: 1em;
      }
    }
  }

  .ContactSection {
    margin-top: 100px;
    text-align: center;

    .texts {
      font-family: 'roboto', sans-serif;
      font-size: 1em;
      color: grey;
      font-weight: bold;
      .accroche {
      }
    }
    .buttonSection {
      margin-top: 50px;
      .buttonContact {
        padding: 0.5em;
        padding-left: 2em;
        padding-right: 2em;
        border: none;
        border-radius: 30px;
        background-color: pink;
        :hover {
          background-color: #fad8de;
          transition: 1s;
        }
        a {
          font-family: serif;
          text-decoration: none;
          color: blue;
        }
      }
    }
  }

  .FormulesPresentation {
    margin-top: 100px;
    text-align: center;
    .titleFormule {
      font-family: 'roboto', sans-serif;
      font-size: 2em;
      letter-spacing: 0.3em;
      color: grey;
      font-weight: bold;
    }
    .textFormule {
      font-family: 'roboto', sans-serif;
      font-size: 1em;
      color: grey;
      font-weight: bold;
    }
  }

  .BigContainer {
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .Bloc {
      background-color: grey;
      height: 800px; /* A MODIFIER SELON TEXT */
      .blocImage {
        height: 400px;
        text-align: center;
        background-color: yellow;
        img {
          width: 100%;
          max-height: 100%;
        }
      }
      .blocText {
        font-family: 'roboto', sans-serif;
        .langue {
          font-size: 2em;
          text-align: center;
        }
        .text {
          font-size: 1.2em;
          padding: 1.5em;
          text-align: justify;
        }
      }
      .buttonSection {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        button {
          padding: 0.5em;
          padding-left: 2em;
          padding-right: 2em;
          border: none;
          border-radius: 30px;
          background-color: pink;
          :hover {
            background-color: #fad8de;
            transition: 1s;
          }
          a {
            font-family: serif;
            text-decoration: none;
            color: blue;
          }
        }
      }
    }
  }

  .About {
    margin-top: 100px;
    text-align: center;
    .accrocheAbout {
      font-family: 'roboto', sans-serif;
      font-size: 1em;
      color: greu;
      font-weight: bold;
    }
    .titleAbout {
      font-family: 'roboto', sans-serif;
      font-size: 2em;
      letter-spacing: 0.3em;
      color: grey;
      font-weight: bold;
    }
    .textSection {
      margin-top: 50px;
      padding-left: 25em;
      padding-right: 25em;
      .textAbout {
        font-family: 'roboto', sans-serif;
        font-size: 1.2em;
        text-align: justify;
      }
    }
  }
`;

export default StyledMainPage;
