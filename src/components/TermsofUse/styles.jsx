import styled from 'styled-components';

const TermsStyles = styled.div`
  margin-top: 150px;
  animation: fadeInDown;
  animation-duration: 2s;
  .TermsPage {
    display: flex;
    justify-content: center;
    .termsofuse {
      border-top: 15px double #5e5eaa;
      border-left: 15px double #5e5eaa;
      border-radius: 40px 20px 0px 20px;
      width: 50vw;
      font-family: 'roboto', sans-serif;
      h1 {
        padding-left: 30px;
      }
      p {
        padding-left: 50px;
        text-align: justify;
      }
    }
  }
`;

export default TermsStyles;
