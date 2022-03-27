import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Hikes from './components/pages/Hikes';
import background from './components/pages/bg.jpg';

function App() {
  return (
    <div className='bg'>
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/hike_website" element={<Home/>}></Route>
        <Route exact path="/Hikes" element={<Hikes/>}></Route>
        <Route exact path="/AboutMe" element={<AboutMe/>}></Route>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
