import { BrowserRouter, Routes, Route } from "react-router-dom";
import FramerPractice from "./framerPractice";
import SharedLayout from "./SharedLayout";
import Home from "./home";
import Slider from "./Slider";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="animation-practice" element={<Home />} />
				<Route path="FramerDemo" element={<FramerPractice />} />
				<Route path="Slider" element={<Slider />} />
				<Route path="SharedLayout" element={<SharedLayout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
