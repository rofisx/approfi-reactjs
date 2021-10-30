import React from "react";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import styled from "styled-components";
import profile from "./profile.png";
import style from "./Style.module.css"

const Na = styled.div`
    background-color: rgb(34, 63, 80);
    padding : 10px 0px;    
    font-weight: bold;
    line-height:40px;
    
    `;
const A = styled.a`
    text-decoration: none;
    color:white;
    &:hover{
        cursor:pointer;
        color:rgb(166, 190, 204);
    }
`;

export default class Content extends React.Component{
    render(){
        return(
            <div className={`${style.backpage}`}>    
                    <Row className={`mt-lg-5 mt-sm-5 mt-xs-5 ${style.head}`}> 
                        <Na>
                                <A href="#experience">Experience</A>&emsp;
                                <A href="#education">Education</A>&emsp;
                                <A href="#skills">Skills</A>&emsp;
                                <A href="#hobi">Hobi</A>&emsp;
                        </Na>                          
                        <Col lg="10" md="10" sm="10">
                            <Card.Body>
                                <Container className="my-lg-5 text-start">
                                    <Card.Title>It's Me, Rofi</Card.Title>
                                        <Card.Text>
                                        Hi, you can call me rofi, I'm a junior Android Studio programmer, 
                                        I've made several android applications using the Google Maps API library, 
                                        Android Material, Volley Library, MP Android Chart, Androidx, and so on. 
                                        From these things, I managed to make several application prototypes such 
                                        as educational applications for early childhood, automatic location detection, and presence using facial authentication.
                                        In addition, I have also developed several websites using HTML, CSS, and 
                                        Javascript for Company Profiles, Library Administration, 
                                        and other small website projects.
                                        Don't hesitate to ask me for help if you need my services, 
                                        I'll be happy to help as best I can.
                                        </Card.Text>
                            </Container>
                            </Card.Body>
                        </Col>
                        <Col xs lg="2" md="1" sm="1" >
                        <Image className="img-fluid max-width:50% heigth:auto" src={profile} rounded/>
                        </Col> 
                    </Row>
                <Row>
                    <Col>
                    <Container className="my-lg-2 mb-md-2 mb-sm-2">
                        <Row>
                            <Col lg="12">
                                <Card>
                                    <Card.Header className="bg-info text-dark" as="h5" id="experience">Experience</Card.Header>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                    <Row>
                                        <Col>
                                            <Card.Body className="px-lg-5 text-start">
                                            <Card.Title> Information Technology Support Engineer</Card.Title>
                                                <div>Atmosfer IT Consultan Full-time</div>
                                                <div className="text-muted">2014 - Present</div>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Implementing cashier and financial software</ListGroup.Item>
                                                    <ListGroup.Item>User training for the use of cashier and financial applications</ListGroup.Item>
                                                    <ListGroup.Item>Analyze and repair network devices and computers</ListGroup.Item>
                                                    <ListGroup.Item>Evaluating the performance of the application system that has been implemented</ListGroup.Item>
                                                </ListGroup>                                            
                                            </Card.Body>
                                        </Col>
                                        <Col>
                                            <Card.Body className="px-lg-5 text-start">
                                                <Card.Title>Freelance Information Technology Consultant</Card.Title>                                  
                                                    <div>PT Tripar Multivision Plus Freelance</div>
                                                    <div className="text-muted">Dec 2019 – May 2020</div>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>Creating a website portal for movies nonton.com</ListGroup.Item>
                                                        <ListGroup.Item>Analyzing mobile application needs Android, IOS dan Android TV </ListGroup.Item>
                                                        <ListGroup.Item>Monitoring and evaluating the performance of the nonton.com Android, IOS dan Android TV application</ListGroup.Item>
                                                    </ListGroup>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>                                                                                                                                                                                                                                 
                            </Col>
                        </Row>
                        <Row className="mt-lg-2">
                            <Col>
                            <Card>
                                <Row>
                                    <Col>
                                        <Card.Header className="bg-info text-dark" as="h5" id="education">Education</Card.Header>
                                        <Card.Body>
                                            <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                <Card.Title>Informatics Engineering</Card.Title>
                                                <h6>Tanri Abeng University</h6>  
                                                <p>GPA : 3.53</p>  
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Card.Title>Network Engineering</Card.Title>
                                                <h6>SMK Negeri 1 Pemalang</h6>  
                                                <p>GPA : 8.2</p>  
                                            </ListGroup.Item>
                                            </ListGroup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                        </Card.Body>
                                    </Col>
                                    <Col> 
                                        <Card.Header className="bg-info text-dark" as="h5" id="hobi">Hobi</Card.Header>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                            <Card.Body>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Learning Coding</ListGroup.Item>
                                                    <ListGroup.Item>Reading</ListGroup.Item>
                                                    <ListGroup.Item>Simple Physical Exercise</ListGroup.Item>
                                                </ListGroup>  
                                            </Card.Body>
                                    </Col>
                                    <Col> 
                                        <Card.Header className="bg-info text-dark" as="h5" id="skills">Skills</Card.Header>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                            <Card.Body>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>HTML5,CSS3,Javascript </ListGroup.Item>
                                                    <ListGroup.Item>PHP </ListGroup.Item>
                                                    <ListGroup.Item>Android Studio(Java) </ListGroup.Item>
                                                    <ListGroup.Item>MySQL </ListGroup.Item>
                                                    <ListGroup.Item>React JS </ListGroup.Item>
                                                </ListGroup>  
                                            </Card.Body>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container> 
                </Col> 
                </Row>
                <footer className={`${style.footer}`}>
                   &copy; Rofi-Task_Styling Bootstrap
                </footer>                            
            </div>
        )
    }
}