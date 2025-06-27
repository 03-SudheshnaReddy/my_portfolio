import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Skills from './components/Skills';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import  StarsCanvas  from "./components/canvas/Stars"
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Banner />
      <About/>
      <Education/>
      <Skills/>
      <Work/>
      <div className='relative z-0'>
      <Contact/>
      <StarsCanvas/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
