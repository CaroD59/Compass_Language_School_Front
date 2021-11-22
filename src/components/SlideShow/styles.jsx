import styled from 'styled-components';

const SCarrousel = styled.div`
  width: 100vw;
  height: auto;
  position: relative;

  .each-slideshow-indicator::before {
    background: ${({ theme }) => theme.fontColor || 'yellowgreen'};
  }
  .slide-container {
    .each-fade {
      img {
        width: 100vw;
        height: 50vh;
        filter: blur(2px);
      }
      p {
        position: absolute;
        display: flex;
        justify-content: center;
        font-family: 'roboto', sans-serif;
        text-shadow: 2px 2px 2px black;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: white;
        font-size: 1.4em;
        letter-spacing: 0.4em;
        color: white;
        button {
          margin-top: 200px;
          background-color: transparent;
          padding: 15px;
          padding-left: 50px;
          padding-right: 50px;
          border: 2px solid #fff;
          border-radius: 30px;
          cursor: pointer;
          a {
            font-family: 'roboto', sans-serif;
            text-shadow: 2px 2px 2px black;
            text-decoration: none;
            font-size: 1.5em;
            font-family: 'roboto', sans-serif;
            color: white;
          }
          :hover {
            background-color: rgba(226, 226, 226, 0.5);
            transition-duration: 0.5s;
          }
        }
      }
    }
  }

  @media screen and (max-width: 950px) {
    .slide-container {
      .each-fade {
        p {
          font-size: 1.1em;
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    .slide-container {
      .each-fade {
        p {
          font-size: 0.9em;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export default SCarrousel;
