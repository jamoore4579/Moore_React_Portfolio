import * as styled from 'styled-components'

const GlobalStyle = styled.createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: sans-serif;
}

:root {
    --color-bg: #1f1f38;
    --color-bg-variant: #2c2c6c;
    --color-primary: #4db5ff;
    --color-primary-variant: rgba(77, 181, 255, 0.4);
    --color-white: #fff;
    --color-light: rgba(255, 255, 255, 0.6);
    --transition: all 400ms ease;
    --container-width-lg: 75%;
    --container-width-md: 86%;
    --container-width-sm: 90%;
}

html {
    scroll-behavior: smooth;
  }
  /* Scrollbar of the navigator */
  ::-webkit-scrollbar {
    display: none;
  }

  /* ========== GENERAL STYLES ========== */
  .container {
    width: var(--container-width-lg);
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 500;
  }
  h1 {
    font-size: 2.5rem;
  }
  // Every components in the app is wrapped in a section
  section {
    margin-top: 8rem;
  }
  // Every section also have an h2 and an h5
  section > h2,
  section > h5 {
    text-align: center;
    color: var(--color-light);
  }
  section > h2 {
    color: var(--color-primary);
    margin-bottom: 3rem;
  }
  // General class for text-light
  .text-light {
    color: var(--color-light);
  }
  a {
    color: var(--color-primary);
    transition: var(--transition);
  }
  a:hover {
    color: var(--color-white);
  }
  .btn {
    width: max-content;
    display: inline-block;
    color: var(--color-primary);
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    transition: var(--transition);
  }
  .btn:hover {
    background-color: var(--color-white);
    color: var(--color-bg);
    border-color: transparent;
  }
  .btn-primary {
    background-color: var(--color-primary);
    color: var(--color-bg);
  }
  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  /* ========== MEDIA QUERIES (MEDIUM DEVICES) ========== */
  @media (min-width: 1024px) {
    .container {
      width: var(--container-width-md);
    }
    section {
      margin-top: 6rem;
    }
  }
  /* ========== MEDIA QUERIES (SMALL DEVICES) ========== */
  @media (min-width: 600px) {
    .container {
      width: var(--container-width-sm);
    }
    section > h2 {
      margin-bottom: 2rem;
    }
  }

`;


export default GlobalStyle;

// export const Container = styled.div
// z-index: 1;
// width: 100%;
// max-width: 1300px;
// margin-right: auto;
// margin-left: auto;
// padding-right: 50px;
// padding-left: 50px;

//export const Button = styled.button
// border-radius: 4px;
// background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB')};
// white-space: nowrap;
// padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
// color: #fff;
// font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
// outline: none;
// border: none;
// cursor: pointer;

// &:hover {
//     transition: all 0.3s ease-out;
//     background: #fff;
//     background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
// }

// @media screen and (max-width: 960px) {
//     width: 100%;