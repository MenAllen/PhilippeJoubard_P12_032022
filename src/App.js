import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserBoard from "./pages/UserBoard";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/user/:userId" element={<UserBoard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
