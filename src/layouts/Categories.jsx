import React from 'react'
import { Nav } from 'react-bootstrap';
import ProductList from '../pages/ProductList';
export default function Categories() {
    return (
      
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-3">
                        <div class="d-flex justify-content-start" expand="lg" bg="dark">
                            <Nav defaultActiveKey="/home" className="flex-column ">
                                <Nav.Link className="text-lg" href="/home">Active</Nav.Link>
                                <Nav.Link eventKey="link-1">Link</Nav.Link>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <ProductList/>
                    </div>
                </div>
            </div>


        

    )
}
