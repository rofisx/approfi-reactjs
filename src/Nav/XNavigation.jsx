import { Container, Nav, Navbar } from "react-bootstrap"

const Navigation = () =>{
    return(
        <>
            <Navbar fixed='top' expand='lg' bg='dark' variant='dark'>
                <Container fluid>
                <Navbar.Brand href="#">Rofi App</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                            <Nav.Link href='/Komponen'>Komponen</Nav.Link>
                            <Nav.Link href='/Styling'>Styling</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation;