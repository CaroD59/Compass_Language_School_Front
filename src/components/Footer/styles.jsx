import styled from 'styled-components';

const StyledFooter = styled.div`
  bottom: 0;
  width: 100%;
  .Footer {
    animation: flipInX;
    animation-duration: 2s;
    font-size: 0.7em;
    .FirstContainer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 10px;
      .privacypolicy {
        a {
          color: rgba(70, 70, 70, 1);
          text-decoration: none;
          font-family: 'roboto', sans-serif;
          :hover {
            color: #b4b4b4;
            transition: 1s;
          }
        }
      }
      .termsofuse {
        a {
          color: rgba(70, 70, 70, 1);
          text-decoration: none;
          font-family: 'roboto', sans-serif;
          :hover {
            color: #b4b4b4;
            transition: 1s;
          }
        }
      }
      .contact {
        a {
          color: rgba(70, 70, 70, 1);
          text-decoration: none;
          font-family: 'roboto', sans-serif;
          :hover {
            color: #b4b4b4;
            transition: 1s;
          }
        }
      }
    }
    .SecondContainer {
      display: flex;
      justify-content: space-around;
      border-top-style: solid;
      border-top-width: 1px;
      border-image: linear-gradient(to left, white 1%, #dbdbdb 50%, white 100%)
        100% 0 100% 0 /1px 0 3px 0 stretch;
      .copyright {
        color: #acacac;
        margin: 10px;
        font-size: 0.8em;
        font-style: italic;
        font-family: 'roboto', sans-serif;
      }
    }
  }
`;

export default StyledFooter;
