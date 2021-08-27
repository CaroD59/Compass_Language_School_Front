import styled from 'styled-components';

const StyledContact = styled.div`
  animation: backInDown;
  animation-duration: 2s;
  .buttonContactForm {
    animation: zoomIn;
    animation-duration: 2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    .Image {
      img {
        width: 30vw;
      }
    }
    .inactive {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: auto;
      background-color: #17963d;
      font-family: 'roboto', sans-serif;
      border-radius: 5px;
      color: #ffffff;
      font-size: 1.3em;
      width: 350px;
      height: 45px;
      margin: 10px;
      font-size: 1.2em;
      font-weight: bold;
      a {
        color: #c8c8e9;
      }
    }
  }
  .ContactPage {
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    .InfosPage {
      margin: 0;
      border-radius: 20px;
      width: 900px;
      height: 700px;
      background-color: #cacaca;
      border: solid 1px #b3a8a8;
      p {
        font-family: 'roboto', sans-serif;
        font-size: 1.3em;
        color: rgba(70, 70, 70, 1);
        text-align: center;
      }
      .Infos {
        .Coordonnées {
          font-family: 'roboto', sans-serif;
          display: flex;
          justify-content: space-around;
          .phoneSection {
            font-size: 15px;
            opacity: 0.5;
          }
          .addressSection {
            line-height: 0%;
            font-size: 15px;
            opacity: 0.5;
          }
        }
      }
      .Map {
        .GoogleMap {
          text-align: center;
        }
      }
      .Logos {
        padding-top: 50px;
        font-size: 2em;
        display: flex;
        justify-content: space-around;
        .firstlogo {
          a {
            color: white;
            :hover {
              color: red;
            }
          }
        }
        .secondlogo {
          a {
            color: white;
            :hover {
              color: blue;
            }
          }
        }
        .thirdlogo {
          a {
            color: white;
            :hover {
              color: green;
            }
          }
        }
      }
    }
    .Contact {
      .form {
        border-radius: 20px;
        width: 650px;
        height: 700px;
        background-color: #cacaca;
        border: solid 1px #b3a8a8;
        .CLSLogo {
          width: 150px;
          display: block;
          margin-top: 10px;
          margin-left: auto;
          margin-right: auto;
        }
        .pContact {
          font-family: 'roboto', sans-serif;
          padding-top: 20px;
          font-size: 1.3em;
          color: rgba(70, 70, 70, 1);
          line-height: 0%;
          text-align: center;
        }
        .form-inner {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .form-groupe {
            .ImgContact {
              width: 100px;
            }
            .ContactInput {
              border: none;
              background-color: transparent;
              color: transparent;
              font-family: 'roboto', sans-serif;
              letter-spacing: -0.2px;
              font-size: 15px;
              width: 350px;
              height: 45px;
              opacity: 0.5;
              :focus {
                background-color: transparent;
              }
              :active {
                background-color: transparent;
              }
              :hover {
                outline: none;
              }
            }
            .ContactMessage {
              resize: none;
              border: none;
              background-color: white;
              border-radius: 10px;
              color: rgba(70, 70, 70, 1);
              font-family: serif, sans-serif;
              letter-spacing: -0.2px;
              font-size: 15px;
              margin-top: 15px;
              width: 350px;
              height: 100px;
              opacity: 0.5;
            }

            .ContactInput:focus,
            .ContactInput:hover {
              outline: none;
            }
            .ContactMessage:focus,
            .ContactMessage:hover {
              outline: none;
            }

            ::placeholder {
              opacity: 1;
            }
          }
          .RGPD {
            padding-top: 10px;
            display: flex;
            align-items: center;
            .CLSInfos {
              color: #b3a8a8;
              font-family: serif, sans-serif;
              font-size: 12px;
            }
          }
          .Button {
            button {
              margin-top: 20px;
              background-color: #5e5eaa;
              border: none;
              border-radius: 5px;
              color: #b3a8a8;
              font-family: 'roboto', sans-serif;
              font-weight: bold;
              font-size: 20px;
              width: 350px;
              height: 45px;
            }
            button:active {
              background-color: #393979;
            }
            button:hover,
            button:focus {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

export default StyledContact;
