import logo from './logo.svg';
import './App.css';
import Navigation from './lab06-2.js';
import CardBois from './lab06.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Home from "./Home.js";
import Contact from"./Contact.js";

function App() {
  return (
    <div className="App">
      <Navigation/>
	  <BrowserRouter>
	  <Navbar/>
	  <Routes>
		<Route path ="/" element = {<Home / >}></Route>
		<Route path ="/card" element = {<CardBois / >}></Route>
		<Route path ="/contact" element = {<Contact / >}></Route>
		
	  </Routes>
	  </BrowserRouter>
	</div>
  );
}

export default App;
