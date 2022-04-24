import styled from "styled-components";

export const ProjectWrapper = styled.section.attrs({
    id: "portfolio",
  })``;
  
  
export const ProjectContainer = styled.div.attrs({
className: "container",
})`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2.5rem;
@media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
}
@media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
}
`;

export const ProjectItem = styled.article`
background: var(--color-bg-variant);
padding: 1.2rem;
border-radius: 2rem;
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
border-radius: 1.5rem;
overflow: hidden;
`;

export const ProjectItemImage = styled.img``;

export const ProjectTitle = styled.h3`
margin: 1.2rem 0 2rem;
`;

export const ProjectItemLink = styled.a.attrs({
className: "btn",
})``;

export const ProjectItemLinkTwo = styled.a.attrs({
className: "btn btn-primary",
})``;