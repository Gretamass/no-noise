import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhiteLine from './components/WhiteLine/WhiteLine';
import Design from './components/Design/Design';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhiteLine />
      <Design />
      
      <Hero />
    </div>
  );
}

export default App;
