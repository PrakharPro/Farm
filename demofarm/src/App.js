import logo from './logo.svg';
import Char1 from './Images/Char1.jpeg';
import Char2 from './Images/Char2.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div id="Box1">
        <div id="chair1">
            <img src={Char1} /> 
            <div id="TextChair1" ><p>Lounge Chair</p>
            <strong>$149</strong>
            </div>
        </div>
      </div>

     <div id="Box3">
      <p>Up To 20% off</p>
      <span>
        SPRING OFFER
      </span>
      <p >Shop now</p>
     </div>

      <div id="Box2">
      <img src={Char2} />
      <div id="TextChair2" ><p>Take it outside Carpet</p>
            <strong>$500</strong>
            </div>
      </div>
    </div>
  );
}

export default App;
