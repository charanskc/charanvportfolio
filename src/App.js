import './App.css';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Header from './Components/Header';
import MainBody from './Components/MainBody';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Aboutme />
      <Experience />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
