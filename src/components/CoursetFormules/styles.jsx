import styled from 'styled-components';

const Styles = styled.div`
  margin-top: 200px;
  .BlocCursus {
    .Cursus {
      display: flex;
      justify-content: space-around;
      .Cours {
        width: 250px;
        height: 200px;
        background-color: grey;
        border-radius: 30px;
        h1 {
          text-align: center;
        }
      }
    }
  }
`;

export default Styles;
