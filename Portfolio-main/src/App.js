import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import Experience from './components/Experience';
import { Banner } from "./components/Banner";
import TechStack from './components/TechStack';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import  StarsCanvas  from "./components/canvas/Stars"
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <NavBar />
      <Banner />
      <About />
      <TechStack />
      <Experience />
      <Work />

      <div className="contact-stars-wrapper">
        <Contact />
        <StarsCanvas />
      </div>

      <Footer />
    </div>
  );
}

export default App;
