// import logo from './logo.svg';
import './App.css';
import Styling from './Styling';
//import Komponen from './Komponen';
// import {Route, Switch} from 'react-router-dom';
// import Navigation from './Nav/Navigation';

function App() {
  return (

    //Modified by Rofi

    // <div className="App">
    //     <Navigation/>
    //     <Switch>
    //         <Route path='/Komponen' component={Komponen}/> 
    //         <Route path='/Styling' component={Styling}/> 
    //     </Switch>
    //     <header className="App-header">
    //      <img src={logo} width="250px" className="App-logo" alt="logo" />
    //      <p>Hai..., its me Rofi :)</p>
    //    </header>
    // </div>

    <div className="App">
       <Styling/>
    </div>

//  <div className="App">
//       <header className="App-header">
//         <img src={logo} width="250px" className="App-logo" alt="logo" />
//         <p>Hai..., its me Rofi :)</p>
//         <Komponen/>
//       </header>
//     </div>
  );
}

export default App;
