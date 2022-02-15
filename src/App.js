import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Card from './components/Card.js';

const axios = require('axios');


function App() {
  return (
    <div className="App">
      <div className="container px-4 py-5">
        <Header />
       
       <div className="grid grid-cols-2 gap-5">
          <Card />
          <Card />
        </div> 
        

      </div>

    </div>
  );
}



export default App;



