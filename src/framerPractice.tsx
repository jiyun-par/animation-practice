import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
	motion,
	useMotionValue,
	useTransform,
	useViewportScroll,
} from "framer-motion";

const Wrapper = styled.div`
	height: 200vh;
	display: grid;
	grid-template-columns: repeat(3, 0.5fr);
	grid-template-rows: repeat(3, 0.1fr);
	gap: 10px;
	margin: 20px 20px auto;
`;

const Container = styled(motion.div)`
	border-radius: 20px;
	background: linear-gradient(135deg, #40e0d0, #ff8c00, #ff0080);
	align-items: center;
	h1 {
		font-size: 17px;
		text-align: center;
		margin: 10px 0;
	}
`;
const Box = styled(motion.div)`
	width: 200px;
	height: 200px;
	margin: 10% auto;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 30px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
	background-color: #fff;
	height: 70px;
	width: 70px;
	place-self: center;
	border-radius: 35px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const boxVariants = {
	start: { opacity: 0, scale: 0.5 },
	end: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			duration: 0.5,
			bounce: 0.5,
			delayChilren: 0.5,
			staggerChildren: 0.2,
		},
	},
};

const circleVariants = {
	start: { scale: 0, opacity: 0, y: 20 },
	end: {
		y: 0,
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
		},
	},
};
const hoverVarients = {
	hover: { rotateZ: 90 },
	click: { borderRadius: "100px" },
	drag: {
		backgroundColor: "rgb(77, 76, 125)",
		transition: { duration: 0.5 },
	},
};
const Svg = styled.svg`
	width: 300px;
	height: 300px;
	path {
		stroke: #fff;
		stroke-width: 2px;
	}
`;
const svg = {
	start: {
		fill: "rgba(255,255,255,0)",
		pathLength: 0,
	},
	end: {
		fill: "rgba(255,255,255,1)",
		pathLength: 1,
	},
};

function FramerPractice() {
	const biggerBoxRef = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const rotate = useTransform(x, [-800, 800], [-360, 360]);
	const gradient = useTransform(
		x,
		[-800, 0, 800],
		[
			"linear-gradient(135deg, #C6FFDD, #FBD786,#f7797d)",
			"linear-gradient(135deg, #40e0d0, #ff8c00, #ff0080)",
			"linear-gradient(135deg, #004FF9, #FFF94C, #f64f59)",
		]
	);
	useEffect(() => rotate.onChange(() => console.log(rotate.get())), [x]);
	const { scrollY, scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
	useEffect(() => {
		scrollY.onChange(() => {
			console.log(scrollY.get(), scrollYProgress.get());
		});
	}, [scrollY, scrollYProgress]);

	return (
		<>
			<Link to="animation-practice">GO BACK</Link>
			<Wrapper>
				<Container>
					<h1>Variants</h1>
					<Box variants={boxVariants} initial="start" animate="end">
						<Circle variants={circleVariants} />
						<Circle variants={circleVariants} />
						<Circle variants={circleVariants} />
						<Circle variants={circleVariants} />
					</Box>
				</Container>
				<Container>
					<h1>Hover & Click</h1>
					<Box
						variants={hoverVarients}
						whileHover="hover"
						whileTap="click"
					></Box>
				</Container>
				<Container ref={biggerBoxRef}>
					<h1>Drag</h1>
					<Box
						drag
						dragSnapToOrigin
						dragElastic={0} //0은 컨테이너 안에, 0.5는 일정 범위 내, 1은 아무데나
						dragConstraints={biggerBoxRef}
						variants={hoverVarients}
						whileHover="hover"
						whileDrag="drag"
						whileTap="click"
					></Box>
				</Container>
				<Container style={{ background: gradient }}>
					<h1>useMotionValue</h1>
					<Box style={{ x, rotate }} drag="x" dragSnapToOrigin>
						<button onClick={() => x.set(290)}>go to x 290</button>
						<button onClick={() => x.set(0)}>go back x 0 </button>
					</Box>
				</Container>
				<Container style={{ scale }}>
					<h1>Scroll</h1>
					<Box></Box>
				</Container>
				<Container>
					<h1>Svg animation</h1>
					<Svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<motion.path
							variants={svg}
							initial="start"
							animate="end"
							transition={{
								default: { duration: 5 },
								fill: { duration: 2, delay: 3 },
							}}
							d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
						/>
					</Svg>
				</Container>
			</Wrapper>
		</>
	);
}
export default FramerPractice;
