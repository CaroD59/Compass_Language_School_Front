import styled from 'styled-components';

const ProfileStyles = styled.div`
  animation: fadeInDown;
  animation-duration: 2s;
  margin-top: 250px;
  h1 {
    text-align: center;
    font-family: 'roboto', sans-serif;
    color: #393979;
  }
  .Profile {
    display: flex;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: rgba(70, 70, 70, 1);
      font-family: 'roboto', sans-serif;
    }
    .Teacher {
      font-size: 1.5em;
      img {
        width: 300px;
      }
      p {
        text-align: center;
      }
      :hover {
        transform: scale(1.04);
      }
    }
  }
  .Student {
    font-size: 1.5em;
    img {
      width: 300px;
    }
    p {
      text-align: center;
    }
    :hover {
      transform: scale(1.04);
    }
  }
`;

export default ProfileStyles;
