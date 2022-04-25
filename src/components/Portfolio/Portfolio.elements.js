import styled from "styled-components";

export const ProjectWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #3498db;
  
  `;
  
  
export const ProjectContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2.5rem;
padding: 2rem;

@media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
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
`;

export const ProjectTitle = styled.h3`
margin: 1.2rem 0 2rem;
`;

export const ProjectItemLink = styled.a.attrs({
className: "btn",
})``;

export const ProjectItemLinkTwo = styled.a.attrs({
className: "btn btn-primary",
})``;