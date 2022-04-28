import styled from "styled-components";

export const ProjectWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 50px;
  background-color: #101522;
  min-height: 90vh;
  `;
  
  
export const ProjectContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2.5rem;
padding: 2rem;

@media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

@media screen and (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
}
`;

export const ProjectItem = styled.article`
background: black;
padding: 1.2rem;
border-radius: 0.5rem;
border: 1px solid transparent;
transition: var(--transition);
:hover {
    border-color: var(--color-primary-variant);
    background: tranparent;
}
`;

export const ProjectItemCta = styled.div`
display: flex;
gap: 1rem;
margin-bottom: 1rem;
`;

export const ProjectItemImageContainer = styled.div`
border-radius: 0.5rem;
overflow: hidden;
`;

export const ProjectItemImage = styled.img`
height: 200px;
width: 100%;
border-radius: 3px;
margin-left: 10px;
margin-right: 10px;
`;

export const ProjectTitle = styled.h3`
color: #fff;
margin: 1.2rem 0 2rem;
`;

export const ProjectItemLink = styled.a`
color: #fff;
`;

export const ProjectItemLinkTwo = styled.a`
color: #fff;
`