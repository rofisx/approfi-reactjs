// import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Styling from './Styling';
import Komponen from './Komponen';
import Navigation from './Nav/Navigation';
import FormValidation from './FormValidation';
import News from './News';
import NewsHooks from './Hooks';
import Redux from './Redux';

function App() {
  return (

    //Modified by Rofi

    <div className="App">
        <Navigation/> 
        <Switch>
            <Route exact path='/' component={Home}/> 
            <Route path='/komponen' component={Komponen}/> 
            <Route path='/styling' component={Styling}/> 
            <Route path='/form' component={FormValidation}/> 
            <Route path='/news' component={News}/> 
            <Route path='/newshooks' component={NewsHooks}/> 
            <Route path='/redux' component={Redux}/> 
        </Switch>
    </div>

    // <div className="App">
    //     <Redux/>
    // </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} width="250px" className="App-logo" alt="logo" />
    //     <p>Hai..., its me Rofi :)</p>
    //     <Komponen/>
    //   </header>
    // </div>
  );
}

export default App;
