import dotenv from 'dotenv';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './contexts/User';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Profil from './components/MyProfile';
import Cursus from './components/CoursetFormules';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsofUse';

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
          <Route path="/monprofil" component={Profil} />
          <Route path="/cours&formules" component={Cursus} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/termsofuse" component={TermsOfUse} />
        </Switch>
        <Footer />
      </User.Provider>
    </div>
  );
}
