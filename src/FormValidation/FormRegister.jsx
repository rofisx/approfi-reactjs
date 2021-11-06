import Button from "@restart/ui/esm/Button";
import React from "react";
import { ButtonGroup, Card, Col, Form, Row } from "react-bootstrap";

export default class FormReg extends React.Component{
    state = {
        email:"",
        password:"",
        gender:"",
        ttl:"",
        alamat:"",
        term:false,
        errEmail:"",
        errPass:"",
        errGender:"",
        errTtl:"",
        errAlamat:"",
        errTerm:""
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const male = document.getElementById("male");
        const female = document.getElementById("female");
        const {email,password,gender,ttl,alamat,term} = this.state;     
       
            if(email.length > 0 && 
                re.test(String(email).toLowerCase()) && 
                password.length > 7 && 
                gender.length > 0 &&
                ttl.length > 0 &&
                alamat.length > 0 &&
                term === true){
                    this.setState({
                        email:"",
                        password:"",
                        gender:"",
                        ttl:"",
                        alamat:"",
                        term:false,
                        errEmail:"",
                        errPass:"",
                        errGender:"",
                        errTtl:"",
                        errAlamat:"",
                        errTerm:""
                    })
                    alert(`
                        email:${this.state.email}
                        password:${this.state.password}
                        gender:${this.state.gender}
                        ttl:${this.state.ttl}
                        alamat:${this.state.alamat}
                        term:${this.state.term ? 'YA' : 'TIDAK'}
                    `)
                   male.checked = false;
                   female.checked = false;

            }else if(email.length === 0){
                this.setState({
                    errEmail:<div style={{color:"red"}}> Email Tidak Boleh Kosong</div>
                })            
            }else if(email.length > 0){
                if(!re.test(String(email).toLowerCase())){
                    this.setState({
                        errEmail:<div style={{color:"red"}}> Email Tidak Valid</div>
                    })
                }else{
                    this.setState({
                        errEmail:""
                    })
                }
            }
            
            if(password.length === 0){
                this.setState({
                    errPass:<div style={{color:"red"}}> Password Tidak Boleh Kosong</div>
                })            
            }else if(password.length < 7){
                this.setState({
                    errPass:<div style={{color:"red"}}> Password Kurang Dari 8 Karakter</div>
                })            
            }
            else if(password.length > 7){
                this.setState({
                    errPass:""
                })
            }

            if(gender.length === 0){
                this.setState({
                    errGender:<div style={{color:"red"}}> Jenis Kelamin Tidak Boleh Kosong</div>
                })            
            }else if(gender.length > 0){
                this.setState({
                    errGender:""
                })
            }
            
            if(ttl.length === 0){
                this.setState({
                    errTtl:<div style={{color:"red"}}> Tanggal Lahir Tidak Boleh Kosong</div>
                })            
            }else if(ttl.length > 0){
                this.setState({
                    errTtl:""
                }) 
            }
            if(alamat.length === 0){
                this.setState({
                    errAlamat:<div style={{color:"red"}}> Alamat Tidak Boleh Kosong</div>
                })            
            }else if(alamat.length > 0){
                this.setState({
                    errAlamat:""
                })
            }
            
            if(term === false){
                this.setState({
                    errTerm:<div style={{color:"red"}}> Checklist Term and Condition, Please</div>
                })            
            }else if(term === true){
                this.setState({
                    errTerm:""
                })
            }          

    }

    render(){
        return(
               <Row style={{backgroundColor:'gray'}}>
                    <Col lg={6} className="mx-auto my-lg-5 text-start">
                        <Card style ={{marginTop:'15px'}} border="info" className="shadow bg-info rounded">
                        <Card.Header className="text-center"><h4>Registrasi Users</h4></Card.Header>                        
                            <Card.Body>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group as={Row} className="mb-3" controlId="Email">
                                            <Form.Label column sm={3}>
                                            Email
                                            </Form.Label>
                                            <Col sm={9}>
                                            <Form.Control type="email" name="email" placeholder="Email"
                                            onChange={e => this.setState({email: e.target.value})}
                                            value={this.state.email}/>                                        
                                            {this.state.errEmail}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="Password">
                                            <Form.Label column sm={3}>
                                            Password
                                            </Form.Label>
                                            <Col sm={9}>
                                            <Form.Control type="password" placeholder="Password" 
                                            onChange={e => this.setState({password: e.target.value})}
                                            value={this.state.password}/>
                                            {this.state.errPass}
                                            </Col>
                                        </Form.Group>                                
                                        <Form.Group as={Row} className="mb-3">
                                            <Form.Label as="legend" column sm={3}>
                                                Jenis Kelamin
                                            </Form.Label>
                                            <Col sm={5}>
                                                <ButtonGroup>
                                                    <Form.Check
                                                    type="radio"
                                                    label="Laki - Laki"
                                                    value={this.state.gender}
                                                    id="male"
                                                    name="gender"
                                                    onChange={e => this.setState({gender:"Laki-Laki"})}
                                                    />
                                                    &emsp;
                                                    <Form.Check
                                                    type="radio"
                                                    label="Perempuan"    
                                                    value={this.state.gender}    
                                                    id="female"                  
                                                    name="gender"
                                                    onChange={e => this.setState({gender:"Perempuan"})}
                                                    />
                                                </ButtonGroup>
                                                {this.state.errGender}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as = {Row} className="mb-3" controlId="ttl">
                                                <Form.Label column sm={3}>Tanggal Lahir</Form.Label>
                                            <Col sm={9} >
                                                <Form.Control type="date" name="ttl"
                                                onChange={e => this.setState({ttl: e.target.value})}
                                                value={this.state.ttl}/>
                                                {this.state.errTtl}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label column sm={3}>Alamat</Form.Label>
                                            <Col sm={9}>
                                            <Form.Control as="textarea"
                                            onChange={e => this.setState({alamat: e.target.value})}
                                            value={this.state.alamat}/>
                                            {this.state.errAlamat}
                                            </Col>
                                        </Form.Group>
                                        
                                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                            <Col sm={{ span: 9, offset: 3 }}>
                                            <Form.Check label="I have read terms and conditions" checked={this.state.term}
                                            onChange={e => this.setState({term: e.target.checked})}/>
                                            {this.state.errTerm}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3">
                                            <Col sm={{ span: 9, offset: 3 }}>
                                            <Button type="submit" className="rounded-pill p-2">Create Account</Button>                                        
                                            </Col>
                                        </Form.Group>
                                    </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        )
    }
}