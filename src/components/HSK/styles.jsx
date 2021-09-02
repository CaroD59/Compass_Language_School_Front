import styled from 'styled-components';

const StylesHSK = styled.div`
  margin-top: 50px;

  .BigDivHSK {
    .imgHSK1 {
      display: flex;
      justify-content: center;
      img {
        width: 15vw;
      }
    }
    .imgHSK2 {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      img {
        width: 50vw;
      }
    }
    .text1 {
      margin-top: 50px;
      display: block;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      width: 50vw;
      p {
        font-family: 'roboto', sans-serif;
        font-size: 1.2em;
        text-align: justify;
      }
    }
    .text2 {
      margin-top: 50px;
      margin-bottom: 100px;
      display: block;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      width: 50vw;
      p {
        font-family: 'roboto', sans-serif;
        font-size: 1.2em;
        text-align: justify;
      }
    }
  }
`;

export default StylesHSK;
