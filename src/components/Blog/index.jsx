import axios from 'axios';
import { useState, useEffect } from 'react';
import BlogStyles from './styles';

export default function Blog() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/blog`).then(({ data }) => {
      setBlog(data);
    });
  });
  return (
    <BlogStyles>
      <div className="BlocBlog">
        {blog.map((article) => {
          return (
            <div className="Article">
              <p>{article.datetime}</p>
              <h1>{article.title}</h1>
            </div>
          );
        })}
      </div>
    </BlogStyles>
  );
}
