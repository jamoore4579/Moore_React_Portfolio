import React from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
} from "mdbreact";

function Navbar() {
    return (
        <MDBNavbar
            color="special-color-dark"
            dark
            expand="md"
            style={{ width: "100%" }}
        >
            <MDBNavbarBrand>
                <strong className="white-text">Jason Moore</strong>
            </MDBNavbarBrand>
            <MDBNavbarNav right>
                <MDBNavbarItem>
                    <MDBNavbarLink className="waves-effect waves-light" to="/about">
                        <MDBIcon icon="home" className="mr-1" />
                        About
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink className="waves-effect waves-light" to="/portfolio">
                        <MDBIcon icon="home" className="mr-1" />
                        Projects
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink className="waves-effect waves-light" to="/contact">
                        <MDBIcon icon="home" className="mr-1" />
                        Contact
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink className="waves-effect waves-light" to="/resume">
                        <MDBIcon icon="home" className="mr-1" />
                        Resume
                    </MDBNavbarLink>
                </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBNavbar>
    );
};

export default Navbar;