import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserBoard from "./pages/UserBoard";
import Header from "./components/Header/Header";
import Error from "./pages/Error";
import "./App.css";


/**
 * The App function returns a div with a Router component containing the Header component and a Routes
 * component. This Routes component defines a Route component for each of the three pages in the app
 * @returns The return statement is returning a React element.
 */
function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/user/:userId" element={<UserBoard />} />
					<Route path="/*" element={<Error />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
