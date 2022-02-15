import React from 'react'
import { Badge, NavDropdown} from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function CartSummary() {
    const {cartItems} = useSelector(state => state.cart)
    return (
        <div>
            <NavDropdown className=" ml-4" title="Sepetim" id="collasible-nav-dropdown">
               {
                   cartItems.map((cartItem)=>(
                    <NavDropdown.Item href="#action/3.1">{cartItem.product.productName+" "}
                     <Badge bg="secondary">{cartItem.quantity}</Badge>                  
                    </NavDropdown.Item>
                   ))
               }               
                <NavDropdown.Divider />
                <NavDropdown.Item  href="/cart">Sepete git</NavDropdown.Item>
            </NavDropdown>
        </div>
    )
}

