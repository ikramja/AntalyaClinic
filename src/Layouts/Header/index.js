import "./index.css";
import { Sling as Hamburger } from "hamburger-react";
import MenuTabs from "../../Components/MenuTabs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../Assets/Logo/headerLogo/HeaderLogo.png";
import MenuDropDowns from "../../Components/MenuDropDowns";
export default function Header(props) {
	const [showMenu, setShowMenu] = useState(false);
	const [small, setSmall] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () =>
				setSmall(window.pageYOffset > 100)
			);
		}
	}, []);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: showMenu ? "100vh" : "auto",
				margin: "0",
			}}
		>
			<header className="web-app-header">
				<div className={`header px-4 py-2  ${small ? "scroller" : ""}`}>
					<Link to="/" className="link-no-text-decoration">
						<div className="h-100 header-text-background">
							<h1 className="header-text pt-2">EL ARTE CLINIC</h1>
						</div>
					</Link>
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
			{showMenu && (
				<MenuTabs
					setShowMenu={setShowMenu}
					setShowContent={props.setShowContent}
				/>
			)}
			{/* <MenuDropDowns /> */}
		</div>
	);
}
