import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import { BrowserRouter as Router, Route,Routes, Switch, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Information from './components/Information';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path = '/' element={<Home />}></Route>
          <Route path = '/about' element={<About />}></Route>
          <Route path = '/information' element={<Information />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
