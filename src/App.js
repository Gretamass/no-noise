import './reset.css';
import './colorMode.js';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhiteLine from './components/WhiteLine/WhiteLine';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Sales from './components/Sales/Sales';
import Rental from './components/Rental/Rental';
import Design from './components/Design/Design';
import DesignArticle from './components/Design/DesignArticles/DesignArticle/DesignArticle';
import SoundProofing from './components/Design/DesignArticles/DesignArticle/SoundProofing';
import EvacuationSystems from './components/Design/DesignArticles/DesignArticle/EvacuationSystems';
import DesignOfSoundSystems from './components/Design/DesignArticles/DesignArticle/DesignOfSoundSystems';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Hero/><WhiteLine/><Services/></>}> 
          </Route>
          
          <Route path="/sales" element={<><Hero/><WhiteLine/><Sales/></>}> 
          </Route>

          <Route path="/rental" element={<><Hero/><WhiteLine/><Rental/></>}> 
          </Route>

          <Route path="/design" element={<><Hero/><WhiteLine/><Design/></>}> 
          </Route>

          <Route path="/design/akustika" element={<><Hero/><WhiteLine/><DesignArticle/></>}> 
          </Route>

          <Route path="/design/garso-maskavimas" element={<><Hero/><WhiteLine/><SoundProofing/></>}> 
          </Route>

          <Route path="/design/evakuacines-ir-garso-pranesimo-sistemos" element={<><Hero/><WhiteLine/><EvacuationSystems/></>}> 
          </Route>
          
          <Route path="/design/profesionaliu-garso-sistemu-projektavimas" element={<><Hero/><WhiteLine/><DesignOfSoundSystems/></>}> 
          </Route>

        </Routes>
        
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
