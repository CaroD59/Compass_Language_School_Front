import styled from 'styled-components';

const StyledMainPage = styled.div`
  .BigBloc {
    margin-top: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    color: white;
    display: flex;
    flex-direction: column;
    .firstBloc {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .div-img-one {
        width: 600px;
        margin-right: 150px;
        .img-one {
          padding-top: 5%;
          max-width: 100%;
        }
      }
      .div-p-one {
        background-color: #585657;
        border: solid 1px white;
        width: 500px;
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
      flex-wrap: wrap;
      .div-img-two {
        width: 600px;
        .img-two {
          padding-top: 30%;
          width: 100%;
        }
      }
      .div-ul-two {
        background-color: #585657;
        border: solid 1px white;
        width: 550px;
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
      flex-wrap: wrap;
      margin-bottom: 150px;
      .div-img-three {
        width: 600px;
        .img-three {
          padding-top: 20%;
          width: 100%;
        }
      }
      .div-p-three {
        background-color: #585657;
        border: solid 1px white;
        width: 650px;
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

  // RESPONSIVE //

  @media screen and (max-width: 1300px) {
    .BigBloc {
      margin: 0;
      margin-top: 50px;
      .firstBloc {
        .div-img-one {
          width: 500px;
        }
        .div-p-one {
          width: 400px;
        }
      }
      .secondBloc {
        .div-img-two {
          width: 500px;
        }
        .div-ul-two {
          width: 500px;
        }
      }
      .thirdBloc {
        .div-img-three {
          width: 500px;
        }
        .div-p-three {
          width: 400px;
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .BigBloc {
      .firstBloc {
        justify-content: column;
        .div-img-one {
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 500px;
        }
        .div-p-one {
          width: 400px;
        }
      }
      .secondBloc {
        justify-content: column;
        .div-img-two {
          width: 500px;
          .img-two {
            padding: 0;
          }
        }
        .div-ul-two {
          width: 500px;
        }
      }
      .thirdBloc {
        justify-content: column;
        .div-img-three {
          width: 500px;
          padding: 0;
          .img-three {
            padding: 0;
          }
        }
        .div-p-three {
          width: 400px;
        }
      }
    }
  }
`;

export default StyledMainPage;
