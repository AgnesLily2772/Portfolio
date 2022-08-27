import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import  Home  from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Blogs from './Components/Blogs'
function App() {
  return (
    <>
        <NavBar/>
        <div className='App'>
        <Home/>
        <About/>
        <Skills/>
        <Blogs/>
        <Projects/>
        <Contact/>
        </div>
        <Footer/>
    </>
  );
}

export default App;
