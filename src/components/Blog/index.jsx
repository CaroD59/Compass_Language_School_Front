// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Loader from '../Maintenance';
import Timer from './timer';
import BlogStyles from './styles';

export default function Blog() {
  // POUR MAJ
  // const [blog, setBlog] = useState([]);
  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/blog`).then(({ data }) => {
  //     setBlog(data);
  //   });
  // }, []);
  return (
    <BlogStyles>
      <div className="ComingSoon">
        <Loader />
        <Timer countdownTimestampMs={1662203000000} />
      </div>
      {/*
      22 - 11 : 285 jours
      POUR MAJ
      <div className="BlocBlog">
        {blog.map((article) => {
          return (
            <div className="Article">
              <div className="date">
                <p>{article.datetime}</p>
              </div>
              <div className="img">
                <img src={article.img} alt={article.imgalt} />
              </div>
              <div className="zonetext">
                <div className="title">
                  <h1>{article.title}</h1>
                </div>
                <div className="content">
                  <p>{article.content1}</p>
                </div>
                <div className="suite">
                  <Link to={`/blog/${article.id}`} target="blanck">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </BlogStyles>
  );
}
