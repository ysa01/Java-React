import React from 'react'
import CartSummary from './CartSummary'
import { Navbar,  Nav,NavDropdown,Button,Container } from 'react-bootstrap';
export default function Navi() {
    return (

        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown class=" ml-4" title="Dropdown" id="collasible-nav-dropdown">
                               <CartSummary></CartSummary>
                            </NavDropdown>
                            <Button href="#">Sign Up</Button> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
