import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Navigation extends React.Component{
    render(){
        return(
            <div>
                <Navbar collapseOnSelect fixed='top' expand="lg" bg='dark' variant='dark'>
                    <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand >App Rofi</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav activeKey="/home" className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <LinkContainer to="/komponen">
                                    <Nav.Link>Komponen</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/styling">
                                    <Nav.Link>Styling</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/form">
                                    <Nav.Link>Form</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
          </div>

        )
    }
}