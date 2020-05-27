import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@1,500&display=swap'); */
@import url('http://cloud.webtype.com/css/a3ef0e70-14ef-4a0a-ab95-f8b0d80f4893.css');
	*, *:after, *:before {
	padding: 0;
	position: relative;
	box-sizing: border-box;
	margin: 0;
	font-family: 'Neue Haas Grotesk Text', Helvetica, Arial, sans-serif;
	/* font-weight: 700; */
	font-size: 16px;
    line-height: 20px;
    }
`;
export default GlobalStyle;
