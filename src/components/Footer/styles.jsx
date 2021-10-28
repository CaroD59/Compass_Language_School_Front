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
      padding: 10px;
      .privacypolicy {
        a {
          color: white;
          text-decoration: none;
          font-family: 'roboto', sans-serif;
        }
      }
      .termsofuse {
        a {
          color: white;
          text-decoration: none;
          font-family: 'roboto', sans-serif;
        }
      }
      .contact {
        a {
          color: white;
          text-decoration: none;
          font-family: 'roboto', sans-serif;
        }
      }
    }
    .SecondContainer {
      display: flex;
      justify-content: space-around;

      .copyright {
        color: white;
        padding: 10px;
        font-size: 0.8em;
        font-style: italic;
        font-family: 'roboto', sans-serif;
      }
    }
  }
`;

export default StyledFooter;
