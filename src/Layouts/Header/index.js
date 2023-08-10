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
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		window.addEventListener("scroll", () =>
	// 			setSmall(window.pageYOffset > 100)
	// 		);
	// 	}
	// }, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () =>
				setSmall(window.pageYOffset > 100)
			);

			// Set windowWidth on initial load
			setWindowWidth(window.innerWidth);

			// Add an event listener to update windowWidth value when the window is resized
			const handleResize = () => {
				setWindowWidth(window.innerWidth);
			};
			window.addEventListener("resize", handleResize);

			// Clean up event listener on unmount
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	const isMobile = windowWidth <= 990;

	const handleToggle = () => {
		setShowMenu(!showMenu);
		props.setShowContent(showMenu);
	};

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
							<h1 className="header-text  mb-0">EL ARTE CLINIC</h1>
							<h2
								className={`under-header-text mb-0 ${
									small ? "under-header-text-scroll" : ""
								}`}
							>
								ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
							</h2>
						</div>
					</Link>
					{/* () => {
							setShowMenu(!showMenu);
							props.setShowContent(showMenu);
						} */}
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
						}}
					>
						<Hamburger
							className="menu-icon"
							toggle={handleToggle}
							toggled={showMenu}
						/>
						<h2
							className="mb-0"
							style={{ fontSize: "2rem", fontWeight: "700" }}
						>
							МЕНЮ
						</h2>
					</div>
				</div>
			</header>
			{showMenu && isMobile && (
				<MenuDropDowns
					setShowMenu={setShowMenu}
					setShowContent={props.setShowContent}
				/>
			)}
			{showMenu && !isMobile && (
				<MenuTabs
					setShowMenu={setShowMenu}
					setShowContent={props.setShowContent}
				/>
			)}
			{/* {showMenu && (
				<MenuTabs
					setShowMenu={setShowMenu}
					setShowContent={props.setShowContent}
				/>
			)}

			<MenuDropDowns
				setShowMenu={setShowMenu}
				setShowContent={props.setShowContent}
			/> */}
		</div>
	);
}
