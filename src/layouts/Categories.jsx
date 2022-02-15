import React from 'react'
import { Nav} from 'react-bootstrap';
export default function Categories() {
    return (


        <div className="d-flex justify-content-start" expand="lg" bg="dark">
            <Nav style={{ color: "pink" }}  defaultActiveKey="/home" className="flex-column ">
                <Nav.Link style={{ borderStyle: "solid", borderWidth: "1px", width: "270px", color: "black" }} className="text-lg" href="/home">Elektronik</Nav.Link>
                <Nav.Link style={{ borderStyle: "solid", borderWidth: "1px", color: "black" }} eventKey="link-1">Giyim</Nav.Link>
                <Nav.Link style={{ borderStyle: "solid", borderWidth: "1px", color: "black" }} eventKey="link-2">Gıda</Nav.Link>
                <Nav.Link style={{ borderStyle: "solid", borderWidth: "1px", color: "black" }} eventKey="link-2">Sağlık</Nav.Link>
            </Nav>
        </div>






    )
}
