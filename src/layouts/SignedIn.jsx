import React from 'react'
import { NavDropdown ,Image} from 'react-bootstrap'

export default function SignedIn(props) {
    return (
        <div>
            <NavDropdown class=" ml-4" title="Yavuz" id="collasible-nav-dropdown">
                <Image src="https://placeimg.com/171/180/any" roundedCircle />  
                <NavDropdown.Item href="#action/3.1">Bilgilerim</NavDropdown.Item>
                <NavDropdown.Item onClick={props.signOut} href="#action/3.2">Çıkış</NavDropdown.Item>
            </NavDropdown>
        </div>
    )
}
