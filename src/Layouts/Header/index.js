import "./index.css";
import { Sling as Hamburger } from "hamburger-react";
import MenuTabs from "../../Components/MenuTabs";
import { useState } from "react";
export default function Header(props) {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: showMenu ? "100vh" : "auto",
				margin: "0",
			}}
		>
			<header>
				<div className="header px-4 py-2 bg-transparent">
					<h1 className="my-auto">EL ARTE</h1>
					<Hamburger
						className="menu-icon"
						toggle={() => {
							setShowMenu(!showMenu);
							props.setShowContent(showMenu);
						}}
						toggled={showMenu}
					/>
				</div>
			</header>
			{showMenu && <MenuTabs style={{ flex: 1 }} />}
		</div>
	);
}
