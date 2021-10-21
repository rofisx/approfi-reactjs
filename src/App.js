import logo from './logo.svg';
import './App.css';
import Komponen from './Komponen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="250px" className="App-logo" alt="logo" />
        <p>Hai..., its me Rofi :)</p>
        <Komponen/>
      </header>
    </div>
  );
}

export default App;
