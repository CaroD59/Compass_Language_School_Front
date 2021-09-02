import dotenv from 'dotenv';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './contexts/User';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Profil from './components/MyProfile';
import Cursus from './components/CoursetFormules';
import DescriptionCursus from './components/DescriptionCursus';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Carrousel from './components/SlideShow';
import Examens from './components/Examens';
import HSK from './components/HSK';
import IELTS from './components/IELTS';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsofUse';

dotenv.config();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <User.Provider value={{ user, setUser }}>
        <Header />
        <Carrousel />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/monprofil" component={Profil} />
          <Route path="/coursformules" component={Cursus} />
          <Route path="/examens" component={Examens} />
          <Route
            path="/coursformulesId/:coursformules"
            component={DescriptionCursus}
          />
          <Route path="/blog" component={Blog} />
          <Route path="/hsk" component={HSK} />
          <Route path="/ielts" component={IELTS} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/termsofuse" component={TermsOfUse} />
        </Switch>
        <Footer />
      </User.Provider>
    </div>
  );
}
