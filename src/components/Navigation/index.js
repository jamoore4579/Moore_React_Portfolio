import React from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
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
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="/about">
                        <MDBIcon icon="home" className="mr-1" />
                        About
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="/portfolio">
                        <MDBIcon icon="home" className="mr-1" />
                        Projects
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="/contact">
                        <MDBIcon icon="home" className="mr-1" />
                        Contact
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="/resume">
                        <MDBIcon icon="home" className="mr-1" />
                        Resume
                    </MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
    );
};

export default Navbar;