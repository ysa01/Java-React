import React from 'react'
import { NavDropdown} from 'react-bootstrap';
export default function CartSummary() {
    return (
        <div>
            <NavDropdown class=" ml-4" title="Sepetim" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">AcerLaptop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Asus Laptop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Dell Laptop</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  href="/cart">Sepete git</NavDropdown.Item>
            </NavDropdown>
        </div>
    )
}

