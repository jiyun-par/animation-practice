import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const Wrapper = styled(motion.div)`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 50vw;
	gap: 10px;
	div:first-child,
	div:last-child {
		grid-column: span 2;
	}
`;
const Box = styled(motion.div)`
	height: 200px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Overlay = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Circle = styled(motion.div)`
	background-color: #00a5ff;
	height: 100px;
	width: 100px;
	border-radius: 50px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const overlay = {
	hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
	visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
	exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};
function SharedLayout() {
	const [id, setId] = useState<null | string>(null);
	console.log(id);
	return (
		<>
			<Link to="/">GO BACK</Link>
			<Wrapper>
				<Grid>
					{["1", "2", "3", "4"].map((n) => (
						<Box onClick={() => setId(n)} key={n} layoutId={n} />
					))}
				</Grid>
				<AnimatePresence>
					{id ? (
						<Overlay
							onClick={() => setId(null)}
							variants={overlay}
							initial="hidden"
							animate="visible"
							exit="exit"
						>
							<Box
								layoutId={id}
								style={{ width: 400, height: 200 }}
							/>
						</Overlay>
					) : null}
				</AnimatePresence>
			</Wrapper>
		</>
	);
}

export default SharedLayout;
