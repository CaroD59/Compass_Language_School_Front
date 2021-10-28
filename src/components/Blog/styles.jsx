import styled from 'styled-components';

const BlogStyles = styled.div`
  margin: 100px;
  .BlocBlog {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    animation: fadeIn;
    animation-duration: 2s;
    .Article {
      background-color: #65a8d2;
      width: 15vw;
      border-radius: 15px;
      border: 1px solid white;
      /* box-shadow: 5px 5px 25px; */
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      margin: 10px;
      :hover {
        animation: pulse;
        animation-duration: 2s;
      }
      .date {
        padding-left: 10px;
        font-style: italic;
        color: white;
      }
      .img {
        width: 100%;
        img {
          width: 100%;
          height: 25vh;
        }
      }
      .zonetext {
        margin: 10px;
        .title {
          height: 5vh;
          h1 {
            text-align: center;
            color: #585657;
            font-size: 20px;
          }
        }
        .content {
          color: white;
          text-align: justify;
        }
        .suite {
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 2vw;
          a {
            text-decoration: none;
            color: grey;
          }
          a:hover {
            color: #c5c4c4;
          }
          :visited {
            color: red;
          }
        }
      }
    }
  }
`;

export default BlogStyles;
