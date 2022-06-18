import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
	*{
		box-sizing:border-box;
	}

	body {
		position:relative;
		width:100%;
		height:500vh;
		font-family:'Source Sans Pro', sans-serif;
		background:linear-gradient(135deg,#12c2e9,#c471ed,#f64f59);
	}
	a{
		color:inherit;
		text-decoration:none;
		margin: 20px 20px auto;
		padding:20px;
		height: 40px;
		border: 1px solid #000;
		border-radius: 20px;
		margin: 20px 0 0 20px;
		display:inline-block;
		text-align:center;
		line-height:5px;
	}
	li{
		list-style:none;
	}
	button{
		margin:0;
		padding:0;
		background: transparent;
		border:none;
	}

`;
export default GlobalStyle;
