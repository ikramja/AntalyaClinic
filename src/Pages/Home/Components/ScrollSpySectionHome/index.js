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

const ScrollSpyHome = (props) => {
	const sliderRef = useRef();

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

	const sliderSettings = {
		nextArrow: <CustomArrowRight />,
		prevArrow: <CustomArrowLeft />,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		draggable: true,
		swipe: false,
		initialSlide: 0,

		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 965,
				settings: {
					slidesToShow: 3,

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
		console.log(props.currentSlide);
		if (props.currentSlide !== null) {
			sliderRef.current.slickGoTo(props.currentSlide);
		}
	}, [props.currentSlide]);

	return (
		<div className="home-scroll-spy">
			<div>
				<div className="menu-wrapper w-100">
					<Slider ref={sliderRef} {...sliderSettings}>
						{[
							{
								key: "#slide1",
								href: "#slide1",
								title: (
									<div className="flex-container">
										<p className="flex-element">Пластика Груди</p>
									</div>
								),
							},
							{
								key: "#slide2",
								href: "#slide2",
								title: (
									<div className="flex-container">
										<div className="center-div">
											<p className="flex-element">Пластика тела</p>
										</div>
									</div>
								),
							},

							{
								key: "#slide3",
								href: "#slide3",
								title: (
									<div className="flex-container">
										<div className="center-div">
											<p className="flex-element">Пластика лица и шеи</p>
										</div>
									</div>
								),
							},
							{
								key: "#slide4",
								href: "#slide4",
								title: (
									<div className="flex-container">
										<div className="center-div">
											<p className="flex-element">Липосакция</p>
										</div>
									</div>
								),
							},
							{
								key: "#slide5",
								href: "#slide5",
								title: (
									<div className="flex-container">
										<div className="center-div">
											<p className="flex-element">Пересадка волос</p>
										</div>
									</div>
								),
							},
						].map((section) => (
							<div
								key={section.href}
								className={`menu-item ${
									`#slide${props.currentSlide + 1}` === section.href
										? "menu-item-active"
										: ""
								}`}
								onClick={() =>
									props.setCurrentSlide(
										parseInt(section.key.replace(/\D/g, ""), 10) - 1
									)
								}
							>
								<div className="flex-container">
									<p className="flex-element">{section.title}</p>
									<div className="center-div">
										<ArrowRightOutlined
											className={`custom-arrow-right ${
												`#slide${props.currentSlide + 1}` === section.href
													? "arrow-down"
													: ""
											}`}
										/>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};
export default ScrollSpyHome;
