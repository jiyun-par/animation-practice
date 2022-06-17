import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonBox = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 1000px;
	height: 300px;
	display: flex;
	justify-content: center;
`;
function Home() {
	return (
		<ButtonBox>
			<Link to="FramerDemo">Go to Framer Demo</Link>
			<Link to="Slider">Go to Slider</Link>
			<Link to="SharedLayout">Go to Shared Layout</Link>
		</ButtonBox>
	);
}

export default Home;
