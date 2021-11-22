import styled from 'styled-components';

const StyledHeader = styled.div`
  .NavBar {
    display: flex;
    justify-content: space-between;
    .LogoContainer {
      img {
        padding-left: 50px;
        width: 10vw;
        margin: 20px;
        animation: flipInX;
        animation-duration: 2s;
      }
    }
    .TwoContainers {
      display: block;
      margin-top: auto;
      margin-bottom: auto;
      .Links {
        padding-right: 100px;
        ul {
          display: flex;
          padding: 0;
          margin: 0;
          li {
            list-style-type: none;
            a {
              animation: flipInX;
              animation-duration: 2s;
              font-family: 'roboto', sans-serif;
              text-decoration: none;
              font-size: 13px;
              color: rgba(70, 70, 70, 1);
              border-bottom: transparent solid 2px;
              padding: 10px;
              :hover {
                color: #b4b4b4;
                transition: 1s;
                padding: 10px;
                border-bottom: #5e5eaa solid 2px;
                transition: 0.2s;
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

  // RESPONSIVE //

  @media screen and (max-width: 800px) {
    .NavBar {
      flex-direction: column;
      text-align: center;
      .LogoContainer {
        img {
          padding: 0;
          width: 30vw;
        }
      }
      .TwoContainers {
        .Links {
          padding: 0;
          ul {
            background-color: #65a8d2;
            border-top: solid 1px grey;
            flex-direction: column;
            text-align: center;
            li {
              padding: 30px;
              border-bottom: solid 1px grey;
              a {
                animation: flipInX;
                animation-duration: 2s;
                font-family: 'roboto', sans-serif;
                text-decoration: none;
                font-size: 13px;
                color: rgba(70, 70, 70, 1);
                border-bottom: transparent solid 2px;
                padding: 10px;
                :hover {
                  color: #b4b4b4;
                  font-weight: bold;
                  transition: none;
                  border-bottom: none;
                  padding: 10px;
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
        border: none;
        font-size: 30px;
        color: grey;
      }
    }
  }
`;

export default StyledHeader;
