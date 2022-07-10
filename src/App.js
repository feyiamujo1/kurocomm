import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nabvar from './components/NavBar/Nabvar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Nabvar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/services' element={<Services/>}/>
          {/* <Route path='/about' element={<About/>}/>*/}
          <Route path='/contact' element={<Contact/>}/> 
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
