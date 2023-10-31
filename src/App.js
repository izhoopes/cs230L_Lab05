import logo from './logo.svg';
import './App.css';
import navigation from './lab06.js';
import CardBois from './lab06.js';

function App() {
  return (
    <div className="App">
      <navigation></navigation>
	  <h1>CS 230L</h1>
	  <h2>Section - 002</h2>
	  <p>WVU ID: 800368267</p>
	  <p>Hey, I'm Ian Hoopes</p>
	  <CardBois></CardBois>
	</div>
  );
}

export default App;
