import dotenv from 'dotenv';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './contexts/User';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Contact from './components/Contact';

dotenv.config();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <User.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </User.Provider>
    </div>
  );
}
