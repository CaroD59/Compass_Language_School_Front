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
        padding-top: 2%;
        width: 600px;
        margin-right: 150px;
        .img-one {
          max-width: 100%;
          -webkit-border-radius: 30px;
          -moz-border-radius: 30px;
          border-radius: 30px;
        }
      }
      .div-p-one {
        background-color: #595d62;
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
      justify-content: center;
      flex-wrap: wrap;
      .div-img-two {
        width: 600px;
        padding-top: 8%;
        .img-two {
          width: 100%;
          -webkit-border-radius: 30px;
          -moz-border-radius: 30px;
          border-radius: 30px;
        }
      }
      .div-ul-two {
        background-color: #61aad6;
        border: solid 1px white;
        width: 550px;
        height: auto;
        border-radius: 15px;
        overflow: hidden;
        padding: 20px;
        color: #595d62;
        margin-right: 200px;
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
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 150px;
      .div-img-three {
        width: 600px;
        padding-top: 5%;
        margin-right: 150px;
        .img-three {
          width: 100%;
          -webkit-border-radius: 30px;
          -moz-border-radius: 30px;
          border-radius: 30px;
        }
      }
      .div-p-three {
        background-color: #595d62;
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
          margin-right: 100px;
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

  @media screen and (max-width: 1150px) {
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
          padding: 0;
          .img-two {
            padding: 0;
          }
        }
        .div-ul-two {
          width: 450px;
          margin: 0;
        }
      }
      .thirdBloc {
        justify-content: column;
        .div-img-three {
          width: 500px;
          padding: 0;
          margin: 0;
          .img-three {
          }
        }
        .div-p-three {
          width: 400px;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .BigBloc {
      .firstBloc {
        .div-img-one {
          width: 100%;
        }
        .div-p-one {
          width: 100%;
        }
      }
      .secondBloc {
        .div-img-two {
          width: 100%;
        }
        .div-ul-two {
          width: 100%;
        }
      }
      .thirdBloc {
        .div-img-three {
          width: 100%;
        }
        .div-p-three {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .BigBloc {
      .firstBloc {
        .div-img-one {
          display: none;
        }
      }
      .secondBloc {
        .div-img-two {
          display: none;
        }
      }
      .thirdBloc {
        .div-img-three {
          display: none;
        }
      }
    }
  }
`;

export default StyledMainPage;
