import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0 auto;
  position: relative;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  background-color: ${p => p.theme.colors.bgMain};
  max-width: 768px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6
 {
  font-family: 'Jua';
  margin: 0;
  padding: 0;
}

p {font-family: 'Inter';
  margin: 0;
  padding: 0;}

h1 {
  text-transform: uppercase;
}

button {
  border: none;
  margin: 0;
  /* padding: 5px 5px; */
   cursor: pointer;
}

img {
  display: block;
  width: 100%;
  height: auto;

}
input {
  all: unset;
  border-bottom: 1px solid black;
}
a {
  color: #303030;
}
`;
