import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './page/Home';
import Footer from './page/Footer';
import Projects from './page/Projects';

function App() {
  return (
    
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/projects' element={<Projects/>}/>
      

  
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;

