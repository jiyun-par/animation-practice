import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const Box = styled(motion.div)`
	position: absolute;
	top: 200px;
	width: 400px;
	height: 200px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Button = styled.button`
	padding: 20px;
	height: 40px;
	line-height: 2px;
	text-align: center;
	margin: 0;
	font-size: 17px;
	margin-right: 10px;
	border-radius: 20px;
	border: 1px solid #000;
	cursor: pointer;
`;

const boxVariants = {
	entry: (back: boolean) => ({
		x: back ? -500 : 500,
		opacity: 0,
		scale: 0,
	}),
	center: (back: boolean) => ({
		x: 0,
		opacity: 1,
		scale: 1,
		rotateX: 360,
		transition: {
			duration: 0.5,
		},
	}),
	leaving: (back: boolean) => ({
		x: back ? 500 : -500,
		opacity: 0,
		scale: 0,
		transition: {
			duration: 0.5,
		},
	}),
};

function Slider() {
	const [visible, setVisible] = useState(1);
	const [back, setBack] = useState(false);
	const nextPlease = () => {
		setBack(false);
		setVisible((prev) => (prev === 10 ? 1 : prev + 1));
	};
	const prevPlease = () => {
		setBack(true);
		setVisible((prev) => (prev === 1 ? 10 : prev - 1));
	};
	//AnimatePresence에 exitBeforeEnter를 추가하면 entry와 leaving이 동시에 진행되지 않는다.
	return (
		<>
			<Link to="animation-practice">GO BACK</Link>
			<Wrapper>
				<AnimatePresence custom={back}>
					<Box
						custom={back}
						variants={boxVariants}
						initial="entry"
						animate="center"
						exit="leaving"
						key={visible}
					>
						{visible}
					</Box>

					<div>
						<Button onClick={prevPlease}>prev</Button>
						<Button onClick={nextPlease}>next</Button>
					</div>
				</AnimatePresence>
			</Wrapper>
		</>
	);
}

export default Slider;
