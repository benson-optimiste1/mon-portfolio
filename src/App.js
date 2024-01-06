import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './page/Home';
import Footer from './page/Footer';
import Projects from './page/Projects';
import AboutMe from './page/AboutMe';

function App() {
  return (
    
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about' element={<AboutMe/>}/>
      

  
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;

