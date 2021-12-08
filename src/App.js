
import About from './about';
import './style.css';
import Contact from './contact';
import Navbar from './navbar';
import Project from './Project';
import Foot from './footer.js'

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <About></About>
     <Project></Project>
     <Contact></Contact>
     <Foot></Foot>
    </div>
  );
}

export default App;
