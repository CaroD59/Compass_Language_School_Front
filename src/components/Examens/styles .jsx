import styled from 'styled-components';

const StyleExamens = styled.div`
  .ExamensTitle {
    text-align: center;
    .title {
      font-family: 'roboto', sans-serif;
      font-size: 2em;
      letter-spacing: 0.3em;
      color: grey;
      font-weight: bold;
    }
  }

  .Bloc1 {
    display: flex;
    justify-content: space-between;
    .image1 {
      width: 50%;
      img {
        width: 100%;
        height: 100%;
        filter: contrast(120%);
      }
    }
    .description {
      width: 50%;
      background-color: #6b0808;
      p {
        font-family: 'roboto', sans-serif;
        margin-top: 30px;
        font-size: 1.2em;
        padding: 1.5em;
        text-align: justify;
      }
      img {
        margin-top: 30px;
        border-radius: 50%;
        border: 1px solid black;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
      }
    }
  }

  .Bloc2 {
    display: flex;
    justify-content: space-between;
    .bloc2Title {
      .title {
        font-family: 'roboto', sans-serif;
        font-size: 1.5em;
        letter-spacing: 0.2em;
        color: grey;
        font-weight: bold;
      }
    }
    .image1 {
      width: 30%;
      img {
        width: 100%;
        height: 100%;
        filter: opacity(0.7);
      }
    }
    .description {
      width: 50%;
      background-color: #e79f9f;
      p {
        font-family: 'roboto', sans-serif;
        font-size: 1.2em;
        padding: 1.5em;
        text-align: justify;
      }
    }
  }

  .Bloc3 {
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
    .imageDiplome1 {
      img {
        width: 10vw;
      }
    }
    .imageDiplome2 {
      img {
        width: 10vw;
      }
    }
  }

  .Bloc4 {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    .button1 {
      button {
        text-decoration: none;
        cursor: pointer;
      }
    }
    .button2 {
      button {
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
`;

export default StyleExamens;
