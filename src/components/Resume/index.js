import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Resume from "../assets/img/Jason_Moore_20_22.pdf"

const MyResume = () => {
    return (
        <MDBContainer className="mt-5">
            <MDBRow>
                <MDBCol md="12">
                    <embed id="Resume" src={Resume} width="100%" height="750px" />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default MyResume;