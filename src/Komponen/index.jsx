import React from "react";
import ClassComponent from "./src_component/ClassComponent";
import FunctionalComponent from "./src_component/FunctionalComponent";

class Komponen extends React.Component{
    render(){
        return(
            <div>
                <header className="App-header">
                    <ClassComponent
                    nama = "Rofi"
                    />
                    <FunctionalComponent
                    js= "Javascript"
                    reactjs = "React JS"
                    nodejs = "Node JS"
                    expjs = "Express JS"
                    />
                </header>
            </div>
        )
    }
}

export default Komponen;