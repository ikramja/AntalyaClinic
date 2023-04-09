import "./index.css";
import { Anchor } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Affix } from "antd";
import { Menu } from "antd";

const ScrollSpy = () => {
	const [activeSection, setActiveSection] = useState(null);

	const handleScroll = (href) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const updateActiveSection = () => {
		const sections = [
			"#section1",
			"#section2",
			"#section3",
			"#section4",
			"#section5",
			"#section6",
			"#section7",
		];

		let currentActiveSection = null;

		for (const section of sections) {
			const element = document.querySelector(section);
			if (element) {
				const rect = element.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
					currentActiveSection = section;
					break;
				}
			}
		}

		setActiveSection(currentActiveSection);
	};
	useEffect(() => {
		window.addEventListener("scroll", updateActiveSection);
		return () => {
			window.removeEventListener("scroll", updateActiveSection);
		};
	}, []);
	return (
		<>
			<div>
				<Affix offsetTop={64}>
					<div className="menu-wrapper">
						<Menu
							mode="horizontal"
							onClick={({ key }) => handleScroll(key)}
							selectedKeys={[activeSection]}
							style={{ width: "100%" }}
							className="scrollable-menu"
						>
							{[
								{
									key: "#section1",
									href: "#section1",
									title: (
										<div className="flex-container">
											<p className="flex-element">КОМУ ПОДХОДИТ ПРОЦЕДУРА</p>
										</div>
									),
								},
								{
									key: "#section2",
									href: "#section2",
									title: (
										<div className="flex-container">
											<div className="center-div">
												<p className="flex-element">КАК ПРОХОДИТ ОПЕРАЦИЯ</p>
											</div>
										</div>
									),
								},
								{
									key: "#section3",
									href: "#section3",
									title: (
										<div className="flex-container">
											<div className="center-div">
												<p className="flex-element">ПРОТИВОПОКАЗАНИЯ</p>
											</div>
										</div>
									),
								},
								{
									key: "#section4",
									href: "#section4",
									title: (
										<div className="flex-container">
											<div className="center-div">
												<p className="flex-element">ДЕНЬ ОПЕРАЦИИ</p>
											</div>
										</div>
									),
								},
								{
									key: "#section5",
									href: "#section5",
									title: (
										<div className="flex-container">
											<div className="center-div">
												<p className="flex-element">ВОССТАНОВЛЕНИЕ</p>
											</div>
										</div>
									),
								},
								{
									key: "#section6",
									href: "#section6",
									title: (
										<div className="flex-container">
											<div className="center-div">
												<p className="flex-element">РЕЗУЛЬТАТ</p>
											</div>
										</div>
									),
								},
								{
									key: "#section7",
									href: "#section7",
									title: (
										<div className="d-flex">
											<div className="center-div">
												<p className="flex-element">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</p>
											</div>
										</div>
									),
								},
							].map((section) => (
								<Menu.Item
									key={section.href}
									className="menu-item"
									style={{
										color: activeSection === section.href ? "white" : "",
										textDecoration:
											activeSection === section.href ||
											activeSection === section.key
												? "none"
												: "",
									}}
								>
									<div className="flex-container">
										<p className="flex-element">{section.title}</p>
										<div className="center-div">
											<ArrowRightOutlined
												className={`custom-arrow-right ${
													activeSection === section.href ? "arrow-down" : ""
												}`}
											/>
										</div>
									</div>
								</Menu.Item>
							))}
						</Menu>
					</div>
				</Affix>
			</div>
		</>
	);
};
export default ScrollSpy;
