import styled from 'styled-components';

const StyledHeader = styled.div`
  .NavBar {
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: auto;
    background-color: #ffff;
    border-bottom: rgba(220, 220, 220, 1) 1px solid;
    box-shadow: 0px 10px 10px rgba(218, 218, 218, 0.25);
    .LogoContainer {
      a {
        img {
          position: relative;
          right: 100px;
          margin-top: 10px;
          margin-bottom: 10px;
          width: 10vw;
          padding-left: 10px;
          animation: flipInX;
          animation-duration: 2s;
        }
      }
    }
    .TwoContainers {
      display: flex;
      justify-content: space-between;
      .Container {
        display: flex;
        align-items: center;
        .LogoProfile {
          animation: flipInX;
          animation-duration: 2s;
          a {
            color: #5e5eaa;
            font-size: 30px;
            :hover {
              color: #393979;
            }
          }
        }
        .Links {
          ul {
            display: flex;
            padding: 0;
            li {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 110px;
              list-style-type: none;
              a {
                animation: flipInX;
                animation-duration: 2s;
                font-family: 'roboto', sans-serif;
                text-decoration: none;
                font-size: 13px;
                color: rgba(70, 70, 70, 1);
                border-bottom: transparent solid 2px;
                :hover {
                  color: #b4b4b4;
                  transition: 1s;
                }
                :active {
                  transition: 0s;
                  color: rgba(70, 70, 70, 1);
                  animation: zoomOut;
                  animation-duration: 2s;
                }
              }
            }
          }
        }
      }
    }
    .btn {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    .NavBar {
      flex-direction: column;
      text-align: center;
      height: auto;
      .LogoContainer {
        a {
          img {
            position: relative;
            right: 0;
            width: 150px;
            height: 70px;
          }
        }
      }
      .TwoContainers {
        .Container {
          .Links {
            ul {
              flex-direction: column;
              text-align: center;
              li {
                height: 50px;
                width: 100px;
                li:nth-child(1) {
                  border-top: 1px solid #565656;
                  margin-top: 50px;
                }
              }
            }
          }
        }
      }
      .btn {
        animation: flipInX;
        animation-duration: 2s;
        display: block;
        position: absolute;
        right: 10px;
        top: 10px;
        color: #333;
        border: none;
        font-size: 20px;
        color: #565656;
      }
    }
  }
`;

export default StyledHeader;
