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
      }
      p {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: white;
        font-size: 2em;
        text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
        button {
          margin-top: 200px;
          background-color: transparent;
          padding: 15px;
          padding-left: 50px;
          padding-right: 50px;
          border: 1px solid #fff;
          border-radius: 30px;
          cursor: pointer;
          a {
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
`;
export default SCarrousel;
