import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import NotFound from "./components/NotFound.jsx";
import Career from "./components/Career.jsx";

function App() {
	return (
		<>
			<Header />
			<div className="">
				<Routes>
					<Route
						path="/"
						element={<Home />}
					></Route>
					<Route
						path="/aboutme"
						element={<AboutMe />}
					></Route>
					<Route
						path="/skills"
						element={<Skills />}
						x
					></Route>
					<Route
						path="/career"
						element={<Career />}
					></Route>
					<Route
						path="*"
						element={<NotFound />}
					></Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
