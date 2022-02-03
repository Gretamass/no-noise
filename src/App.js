import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhiteLine from './components/WhiteLine/WhiteLine';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhiteLine />
      <Services />
      
      <Footer />
    </div>
  );
}

export default App;
