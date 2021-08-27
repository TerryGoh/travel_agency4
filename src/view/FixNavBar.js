import React from "react";


import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';



export const FixNavBar = () => {
    return (
        <div className="body">

            <Nav
                activeKey="/home"
                //  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                className="justify-content-end  navStyle"
            >
                <div>
                    <p style={{ fontSize: "25px",marginBottom:"-10px", fontWeight: "bold", color: "pink",width:"550px" }}>Welcome To Terry Travel Agency</p>
                    </div>
                    <LinkContainer to="/About Us">
                        <Nav.Link eventKey="aboutUS">About Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Contact Us">
                        <Nav.Link eventKey="contactUs">Contact Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/memberShip">
                        <Nav.Link eventKey="Membership">Membership</Nav.Link>
                    </LinkContainer>
            </Nav>
        </div>
    );
}
