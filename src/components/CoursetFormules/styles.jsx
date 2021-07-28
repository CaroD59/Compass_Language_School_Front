import styled from 'styled-components';

const Styles = styled.div`
  margin-top: 200px;
  .BlocCursus {
    .Cursus {
      display: flex;
      justify-content: space-around;
      animation: flipInX;
      animation-duration: 2s;

      a {
        text-decoration: none;
        color: black;
      }
      .Cours {
        width: 250px;
        height: 200px;
        background-color: grey;
        border-radius: 30px;
        cursor: pointer;

        :hover {
          animation: flash;
          animation-duration: 2s;
        }
        h1 {
          text-align: center;
        }
      }
    }
  }
`;

export default Styles;
