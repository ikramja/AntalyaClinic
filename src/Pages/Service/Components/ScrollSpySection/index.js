import "./index.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
import { Affix } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	BsFillArrowRightCircleFill,
	BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const ScrollSpy = () => {
	const [activeSection, setActiveSection] = useState(null);
	const sliderRef = useRef();

	const handleScroll = (href) => {
		const element = document.querySelector(href);
		if (element) {
			const elementPosition = element.getBoundingClientRect();
			const offsetPosition = elementPosition.top + window.pageYOffset - 120;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});

			// Update the active section and the slider
			const index = [
				"#section1",
				"#section2",
				"#section3",
				"#section4",
				"#section5",
				"#section6",
				"#section7",
			].indexOf(href);
			setActiveSection(href);
			if (sliderRef.current) {
				sliderRef.current.slickGoTo(index);
			}
		}
	};

	const CustomArrowLeft = ({ className, style, onClick }) => (
		<BsFillArrowLeftCircleFill
			className={className}
			style={{
				...style,
				fontSize: "30px",
				color: "black",
				position: "absolute",
				top: "50%",
				left: "5",
				zIndex: "1",
				// transform: "translate(-50%, -50%)",
			}}
			onClick={onClick}
		/>
	);

	const CustomArrowRight = ({ className, style, onClick }) => (
		<BsFillArrowRightCircleFill
			className={className}
			style={{
				...style,
				fontSize: "30px",
				color: "black",
				position: "absolute",
				top: "50%",
				right: "5",
				zIndex: "1",
				// transform: "translate(50%, -50%)",
			}}
			onClick={onClick}
		/>
	);

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
		let minDistanceFromTop = Infinity;

		for (const section of sections) {
			const element = document.querySelector(section);
			if (element) {
				const rect = element.getBoundingClientRect();
				const distanceFromTop = Math.abs(rect.top);

				if (distanceFromTop < minDistanceFromTop) {
					minDistanceFromTop = distanceFromTop;
					currentActiveSection = section;
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

	const sliderSettings = {
		nextArrow: <CustomArrowRight />,
		prevArrow: <CustomArrowLeft />,
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		draggable: true,
		swipe: false,
		initialSlide: 0,

		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 965,
				settings: {
					slidesToShow: 2,

					initialSlide: 2,
				},
			},
			{
				breakpoint: 651,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	useEffect(() => {
		if (activeSection) {
			const index = [
				"#section1",
				"#section2",
				"#section3",
				"#section4",
				"#section5",
				"#section6",
				"#section7",
			].indexOf(activeSection);

			if (sliderRef.current) {
				sliderRef.current.slickGoTo(index);
			}
		}
	}, [activeSection]);

	return (
		<>
			<div>
				<Affix offsetTop={64}>
					<div className="menu-wrapper">
						<Slider ref={sliderRef} {...sliderSettings}>
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
												<p className="flex-element">ДЕНЬ ОПЕРАЦИИ</p>
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
												<p className="flex-element">ВОССТАНОВЛЕНИЕ</p>
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
												<p className="flex-element">РЕЗУЛЬТАТ</p>
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
												<p className="flex-element">ПРОТИВОПОКАЗАНИЯ</p>
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
								<div
									key={section.href}
									className={`menu-item ${
										activeSection === section.href ? "menu-item-active" : ""
									}`}
									onClick={() => handleScroll(section.href)}
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
								</div>
							))}
						</Slider>
					</div>
				</Affix>
			</div>
		</>
	);
};
export default ScrollSpy;
