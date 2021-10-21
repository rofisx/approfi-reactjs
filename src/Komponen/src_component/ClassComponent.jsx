import React from "react";

class ClassComponent extends React.Component{    

    state = {
        grade : 50
    }

    handlePlus = ()=> {
        if(this.state.grade < 100){
            this.setState({grade: this.state.grade + 5});
            if(this.state.grade < 60){

            }
        }
    }
    handleMinus = ()=> {
        if(this.state.grade > 50){
            this.setState({grade: this.state.grade - 5});
        }
    }


    render(){
        return(
            <div>
                <h2>Class Component</h2>
                <table align="center">
                    <thead>
                        <tr>
                            <td>Nama :</td>
                            <td >{this.props.nama}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nilai :</td>
                            <td colSpan="3">
                                <button onClick={this.handleMinus}>-</button>
                                <span id="nilai"> {this.state.grade} </span>
                                <button onClick={this.handlePlus}>+</button>
                            </td>
                        </tr>
                    </tbody>
                </table>                
            </div>
        )
    }
}

export default ClassComponent;
