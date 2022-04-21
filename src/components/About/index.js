import React from "react";
import { MDBContainer, MDBRow, MDBCol} from "mdbreact"
const profile = require('../../assets/img/self.jpg')

const About = () => {
    return (
        <MDBContainer className="mt-5">
            <MDBRow>
                <MDBCol md="12">
                    <h2>About Me</h2>
                    <hr class="solid bg-dark" />
                    <img
                        style={{ height: "285px" }}
                        src={profile}
                        class="float-left pr-4 pb-3 img-fluid"
                        alt="self-photo"
                    />
                    <p style={{ fontSize: "27px" }}>
                    Operations Professional with excellent communication skills and the ability to work cross-functionally between multiple departments. Will bring a customer focused attitude to work every day and want to make a difference in the success of a company. With over 20 years of operations and business experience, have developed a strong ability to lead and motivate others to be successful and work as a team.
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default About;