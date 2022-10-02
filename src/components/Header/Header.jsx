import { Link, NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import "./Header.css";

/**
 * The Header function returns a header element with a nav element inside, which contains a link
 * with the SportSee logo, and four navlink elements.
 * @returns A React component returning the header HTML of the App
 */
function Header() {
	return (
		<header>
			<nav>
				<Link to="/">
					<img className="logo" src={logo} alt="logo du site Spotsee" />
				</Link>
				<NavLink to="/">Accueil</NavLink>
				<NavLink to="/">Profil</NavLink>
				<NavLink to="/">Réglages</NavLink>
				<NavLink to="/">Communauté</NavLink>
			</nav>
		</header>
	);
}

export default Header;
