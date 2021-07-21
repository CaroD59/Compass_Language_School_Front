import styled from 'styled-components';

const StyledMainPage = styled.div`
  .Carrousel {
    animation: bounceIn;
    animation-duration: 2s;
    margin-top: 120px;
    display: flex;
    justify-content: center;
    .carrousel {
    }
  }
  .MainPage {
    animation: bounceIn;
    animation-duration: 2s;
    margin-top: 50px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    font-size: 17px;
    color: rgba(70, 70, 70, 1);

    .image {
      img {
        width: 600px;
      }
    }
    .presentation {
      border-top: 15px double #5e5eaa;
      border-left: 15px double #5e5eaa;
      border-radius: 40px 20px 0px 20px;
      width: 30vw;
      font-family: 'roboto', sans-serif;
      h1 {
        padding-left: 30px;
      }
      p {
        padding-left: 50px;
        text-align: justify;
      }
    }
  }
`;

export default StyledMainPage;
