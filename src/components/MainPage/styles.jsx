import styled from 'styled-components';

const StyledMainPage = styled.div`
  .BigBloc {
    margin: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    color: white;
    display: flex;
    flex-direction: column;
    .firstBloc {
      animation: fadeIn;
      animation-duration: 2s;
      display: flex;
      justify-content: space-around;
      .div-img-one {
        .img-one {
          padding-top: 10%;
          width: 25vw;
        }
      }
      .div-p-one {
        background-color: #585657;
        border: solid 1px white;
        width: 30%;
        height: auto;
        border-radius: 15px;
        overflow: hidden;
        padding: 20px;
        .title-one {
          padding-bottom: 20px;
          font-weight: bold;
          text-align: center;
        }
        .p-one {
          text-align: justify;
        }
      }
    }
    .secondBloc {
      display: flex;
      justify-content: space-around;
      animation: fadeIn;
      animation-duration: 2s;
      .div-img-two {
        .img-two {
          padding-top: 30%;
          width: 30vw;
        }
      }
      .div-ul-two {
        background-color: #65a8d2;
        border: solid 1px white;
        width: 30%;
        height: auto;
        border-radius: 15px;
        overflow: hidden;
        padding: 20px;
        .title-two {
          font-weight: bold;
          text-align: center;
          padding-bottom: 20px;
        }
        .ul-two {
          list-style: none;
          padding: 20px;
          text-align: justify;
          li {
            padding-bottom: 20px;
          }
        }
      }
    }
    .thirdBloc {
      display: flex;
      justify-content: space-around;
      animation: fadeIn;
      animation-duration: 2s;
      .div-img-three {
        .img-three {
          padding-top: 20%;
          width: 30vw;
        }
      }
      .div-p-three {
        background-color: #585657;
        border: solid 1px white;
        width: 35%;
        height: auto;
        border-radius: 15px;
        overflow: hidden;
        padding: 20px;
        .title-three {
          padding-bottom: 20px;
          font-weight: bold;
          text-align: center;
        }
        .p-three {
          text-align: justify;
        }
      }
    }
  }
`;

export default StyledMainPage;
