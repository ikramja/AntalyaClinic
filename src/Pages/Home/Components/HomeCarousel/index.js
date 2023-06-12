import { Col, Row } from "react-bootstrap";
import липосакциятела from "../../../../Assets/Home/липосакция тела.webp";
import подтяжкагуб from "../../../../Assets/Home/подтяжка губ.webp";
import Fade from "react-reveal/Fade";
import пластикатела from "../../../../Assets/Home/пластика тела.webp";
import пластикагруди from "../../../../Assets/Home/пластика груди.webp";
import Pulse from "react-reveal/Pulse";
import операция_по_трансплонтации_волос from "../../../../Assets/Home/операция_по_трансплонтации_волос.webp";
import "./index.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ScrollSpyHome from "../ScrollSpySectionHome";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function HomeCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [direction, setDirection] = useState("next");
	const carouselData = [
		{
			title: "Пластика Груди",
			textBold:
				"Маммопластика, или операция на груди, представляет собой хирургическую процедуру, которая может выполняться по различным причинам, включая как косметические, так и медицинские. Однако, прежде чем принять решение о таком важном шаге, необходимо тщательно ознакомиться со всеми деталями операции, поскольку это решение имеет глубоко личный характер.",
			text: "Для тех, кто стремится улучшить свою внешность, операция на груди может стать подходящим вариантом. В зависимости от потребностей и желаний пациента, процедура может включать увеличение, уменьшение или изменение формы груди. Это может существенно повлиять на самооценку женщины и уверенность в своем теле, что в конечном счете приведет к улучшению качества жизни.",
			img: пластикагруди,
			link: "Маммопластика",
		},
		{
			title: "Пластика тела",
			textBold:
				"Операции на теле, включая пластическую хирургию, могут предложить пациентам изменения во внешности или исправление дефектов.",
			text: " Процедуры могут включать операции на животе, руках, ногах и других частях тела. Пластическая хирургия на теле может помочь улучшить форму и симметрию. Операции на животе, руках и ногах могут исправить возрастные или постродовые изменения или внести изменения в физическую форму. Одна из самых популярных операций на теле - абдоминопластика, также известная как операция на животе или подтяжка живота.",
			img: пластикатела,
			link: "Пластика Тела",
		},
		{
			title: "Пластика лица и шеи",
			textBold:
				"Пластическая хирургия лица и шеи предлагает разнообразные процедуры, которые помогают пациентам улучшить свою внешность и достичь желаемых результатов.",
			text: "Операции на лице и шее включают в себя процедуры, направленные на улучшение контуров, формы и пропорций лица. Подтяжка лица, ринопластика и блефаропластика являются одними из наиболее известных  и популярных процедур.",
			img: подтяжкагуб,
			link: "Пластика Лица и Шеи",
		},
		{
			title: "Липосакция",
			textBold:
				"Липосакция всего тела является процедурой, которая может помочь тем, кто желает улучшить свою фигуру и контуры. Она предлагает возможность удалить избыточную жировую ткань с различных областей, таких как живот, бедра, ягодицы, руки и спина.",
			text: "Липосакция проводится с использованием тонких канюлей (длинной тонкой полой трубки), которые вводятся через небольшие разрезы в коже. Это позволяет разрушить и удалить  значительные объемы жира из различных областей вашего тела с минимальными разрезами, создавая более стройный силуэт и улучшая пропорции тела.",
			img: липосакциятела,
			link: "Пластика Тела",
		},
		{
			title: "Пересадка волос",
			textBold:
				"Трансплантация волос - это хирургическая процедура, предназначенная для решения проблемы облысения или редких волос на голове. Она позволяет перемещать волосяные фолликулы из одной области тела в область с облысением, восстанавливая естественный рост волос.",
			text: " Процедура трансплантации волос проводится с использованием специальных инструментов, которые позволяют перемещать отдельные волосяные фолликулы в нужные области. Это помогает достичь естественного и долгосрочного результата, восстанавливающего плотность и объем волос.",
			img: операция_по_трансплонтации_волос,
			link: "Трансплантация Волос",
		},
		// Add more slides as needed
	];

	const nextSlide = () => {
		setDirection("next");
		setCurrentSlide((oldSlide) => {
			let newSlide = oldSlide + 1;
			if (newSlide >= carouselData.length) newSlide = 0;
			return newSlide;
		});
	};

	const prevSlide = () => {
		setDirection("prev");
		setCurrentSlide((oldSlide) => {
			let newSlide = oldSlide - 1;
			if (newSlide < 0) newSlide = carouselData.length - 1;
			return newSlide;
		});
	};
	return (
		<div>
			<div className="mb-5">
				<ScrollSpyHome
					currentSlide={currentSlide}
					setCurrentSlide={(slideIndex) => setCurrentSlide(slideIndex)}
				/>
			</div>

			<div
				className="carousel-home-border-right-container"
				// style={{
				// 	borderRight: " 50px solid #016245",
				// 	paddingRight: "1rem",
				// }}
			>
				<Row className="w-100 carousel-home-border-right-container-row">
					<Col lg={4} className="px-0">
						<Fade
							key={currentSlide}
							left={direction === "next"}
							right={direction === "prev"}
						>
							<img
								className="home-carousel-image w-100"
								src={carouselData[currentSlide].img}
								alt={decodeURIComponent(
									carouselData[currentSlide].img.split("/").pop().split(".")[0]
								)}
							/>
						</Fade>
					</Col>
					<Col lg={8} className="home-carousel-text">
						<div
							className="mb-4"
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<AiOutlineArrowLeft
								className="animate-arrow"
								style={{ fontSize: "30px", cursor: "pointer" }}
								onClick={prevSlide}
							/>

							<Fade bottom>
								<h3
									style={{ fontSize: "3rem", fontWeight: "bold" }}
									className="mx-3"
								>
									{carouselData[currentSlide].title}
								</h3>
							</Fade>

							<AiOutlineArrowRight
								className="animate-arrow"
								style={{ fontSize: "30px", cursor: "pointer" }}
								onClick={nextSlide}
							/>
						</div>
						<Fade
							key={currentSlide}
							left={direction === "next"}
							right={direction === "prev"}
						>
							<div className="image-Brief-description">
								<p style={{ fontWeight: "bold" }}>
									{carouselData[currentSlide].textBold}
								</p>
								<p>{carouselData[currentSlide].text}</p>
							</div>
						</Fade>
						<div className="w-100 d-flex justify-content-end ">
							<Link
								style={{ textDecoration: "none" }}
								to={`/category/${carouselData[currentSlide].link}`}
							>
								<Fade
									key={currentSlide}
									left={direction === "next"}
									right={direction === "prev"}
								>
									<Button className="brief-description-button home-carousel-button px-3 py-4 my-4">
										{carouselData[currentSlide].title}
									</Button>
								</Fade>
							</Link>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}
