import dotenv from 'dotenv';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import User from './contexts/User';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
// import Account from './components/Account';
import Blog from './components/Blog';
import ArticlePage from './components/Article';

const StyledApp = styled.main`
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #e4e6f4,
    #c2cfea,
    #99bbdf,
    #65a8d2
  );
`;
dotenv.config();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <User.Provider value={{ user, setUser }}>
        <Header />
        <StyledApp>
          <main>
            <ToastContainer
              position={toast.POSITION.TOP_CENTER}
              autoClose={5000}
            />
            <Switch>
              <Route exact path="/" component={MainPage} />
              {/* <Route exact path="/account" component={Account} /> */}
              <Route exact path="/blog" component={Blog} />
              <Route path="/blog/:articleId" component={ArticlePage} />
            </Switch>
          </main>
          <Footer />
        </StyledApp>
      </User.Provider>
    </div>
  );
}
