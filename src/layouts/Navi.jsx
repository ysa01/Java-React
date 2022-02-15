import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Navbar, Nav, Container } from 'react-bootstrap';
import SignedIn from './SignedIn';
import SignOut from './SignOut';
import { useNavigate } from 'react-router-dom';
export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useNavigate() // useHistory de kullanıla bilir kütüphanede yoktu sürüm kaynaklı galiba,
    function handleSignOut(params) {
        setIsAuthenticated(false)
        history("/")
    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }
    return (

        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link style={{ marginRight: "30em" }} href="#pricing">Pricing</Nav.Link>
                            
                            <CartSummary />
                            {isAuthenticated ? <SignedIn signOut={handleSignOut} />:<SignOut signIn={handleSignIn} />}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
