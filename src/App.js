import './reset.css';
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

        </Routes>
        
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
