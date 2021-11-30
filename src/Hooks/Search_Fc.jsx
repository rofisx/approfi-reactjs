import { useState } from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";

const SearchFc = (data) => {

    let [value,setValue] = useState()

    const handleFind = (event) => {
        if (event.charCode === 13) {
            setValue(value = event.target.value)   
            data.recive(value)         
        }        
    }
        
    return(
        <div>
            <Container className="mt-5 pt-4">
                <FloatingLabel size="sm" controlId="floatingInput" label="Search" className="mb-3">
                    <Form.Control size="sm" type="text" placeholder="Search" style={{backgroundColor: "#e3f2fd"}}
                    onKeyPress={handleFind}/>        
                </FloatingLabel>
            </Container>
        </div>
    )
}

export default SearchFc;