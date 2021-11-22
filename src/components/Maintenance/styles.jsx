import styled from 'styled-components';

const MaintenancePage = styled.div`
  .container {
    text-align: center;
    padding-top: 5%;
    .loader {
      padding-top: 50px;
      position: relative;
      .outer,
      .middle,
      .inner {
        border: 3px solid transparent;
        border-top-color: #65a8d2;
        border-right-color: #4484ac;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
      }

      .outer {
        width: 3.5em;
        height: 3.5em;
        margin-left: -1.75em;
        margin-top: -1.75em;
        animation: spin 2s linear infinite;
      }

      .middle {
        width: 2.1em;
        height: 2.1em;
        margin-left: -1.05em;
        margin-top: -1.05em;
        animation: spin 1.75s linear reverse infinite;
      }

      .inner {
        width: 0.8em;
        height: 0.8em;
        margin-left: -0.4em;
        margin-top: -0.4em;
        animation: spin 1.5s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    }

    .titleSection {
      padding-top: 50px;
      .comingsoon {
        font-size: 30px;
        color: grey;
      }
    }
  }
`;

export default MaintenancePage;
