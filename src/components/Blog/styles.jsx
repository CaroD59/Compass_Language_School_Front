import styled from 'styled-components';

const BlogStyles = styled.div`
  margin-top: 250px;

  .BlocBlog {
    display: flex;
    justify-content: space-around;
    .Article {
      p {
        font-size: 0.7em;
        font-style: italic;
      }
      h1 {
        font-size: 2em;
        text-align: center;
        background-color: green;
      }
      background-color: blue;
      width: 300px;
      height: 300px;
    }
  }
`;

export default BlogStyles;
