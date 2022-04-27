import styled from "styled-components";

export const AboutContainer = styled.div`
text-align: center;
width: 100%;
min-height: 100vh;
background-color: #101522;
`;

export const AboutImgSection = styled.section`
display: inline-block;
margin-top: 110px;
margin-right: 20px;
width: 400px;
height: 350px;
vertical-align: top;


@media screen and (max-width: 960px) {
display: flex;
margin: 0 auto;
}
`;

export const AboutTextSection = styled.section`
display: inline-block;
text-align: center;
margin-top: 110px;
margin-left: 20px;
width: 400px;
height: 350px;
vertical-align: top;

@media screen and (max-width: 960px) {
display: flex;
margin: 40px auto;
}
`;

export const Image = styled.img`
  width: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 7px;

  @media screen and (max-width: 960px) {
  margin: 20px auto;
  }
`;

export const AboutText = styled.p`
color: #fff;
`