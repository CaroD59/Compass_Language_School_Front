import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Article() {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/blog/${articleId}`)
      .then(({ data }) => {
        setArticle(data);
      });
  }, []);

  return (
    <>
      <div>{article.title}</div>
      <div>{article.content1}</div>
    </>
  );
}
