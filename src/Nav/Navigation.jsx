import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class Navigation extends React.Component{
    render(){
        return(
            <div>
                <Navbar collapseOnSelect fixed='top' expand="lg" bg='dark' variant='dark'>
                    <Container fluid>
                    <Navbar.Brand href="/">App Rofi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            >
                            <Nav.Link href="/Komponen">Komponen</Nav.Link>
                            <Nav.Link href="/Styling">Styling</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
          </div>

        )
    }
}