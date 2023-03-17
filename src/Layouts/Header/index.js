import "./index.css";
import { Sling as Hamburger } from "hamburger-react";
export default function Header() {
	return (
		<header>
			<div className="header px-4 py-2 bg-transparent fixed-top">
				<h1>EL ARTE</h1>
				<Hamburger className="menu-icon" />
			</div>
		</header>
	);
}
