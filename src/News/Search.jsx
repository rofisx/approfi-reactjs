import React from "react";
import { Container, FloatingLabel, Form} from "react-bootstrap";

export default class Search extends React.Component{    
    state = {
        inputValue:""
    }    
    
    handleFind = (event) => {
    if (event.charCode === 13) {
        this.setState({ 
            inputValue: event.target.value 
            }, 
            () => this.props.receiveValue(this.state.inputValue));
        }
    }

    render(){
        return(
            <div>
                <Container className="mt-5 pt-4">
                    <FloatingLabel size="sm" controlId="floatingInput" label="Search" className="mb-3">
                        <Form.Control size="sm" type="text" placeholder="Search" style={{backgroundColor: "#e3f2fd"}}
                        onKeyPress={this.handleFind}/>        
                    </FloatingLabel>
                </Container>
            </div>
        )
    }
}