import logo from './logo.svg'
import React from "react";

export default class Home extends React.Component{
    render(){
        return(
            <div className="App">
            <header className="App-header">
                <img src={logo} width="250px" className="App-logo" alt="logo" />
                <p>Hai..., its me Rofi :)</p>
            </header>
            </div>
        )
    }
}