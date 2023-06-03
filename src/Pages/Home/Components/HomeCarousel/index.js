import { Col, Row } from "react-bootstrap";
import липосакциятела from "../../../../Assets/Home/липосакция тела.webp";
import подтяжкагуб from "../../../../Assets/Home/подтяжка губ.webp";
import пластикатела from "../../../../Assets/Home/пластика тела.webp";
import пластикагруди from "../../../../Assets/Home/пластика груди.webp";
import операция_по_трансплонтации_волос from "../../../../Assets/Home/операция_по_трансплонтации_волос.webp";
import "./index.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ScrollSpyHome from "../ScrollSpySectionHome";
import { useEffect, useState } from "react";
import { Button } from "antd";

export default function HomeCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const carouselData = [
		{
			title: "Пластика Груди",
			text: "Маммопластика, или операция на груди, представляет собой хирургическую процедуру, которая может выполняться по различным причинам, включая как косметические, так и медицинские. Однако, прежде чем принять решение о таком важном шаге, необходимо тщательно ознакомиться со всеми деталями операции, поскольку это решение имеет глубоко личный характер. Для тех, кто стремится улучшить свою внешность, операция на груди может стать подходящим вариантом. В зависимости от потребностей и желаний пациента, процедура может включать увеличение, уменьшение или изменение формы груди. Это может существенно повлиять на самооценку женщины и уверенность в своем теле, что в конечном счете приведет к улучшению качества жизни.",
			img: пластикагруди,
		},
		{
			title: "Пластика тела",
			text: "Операции на теле, включая пластическую хирургию, могут предложить пациентам изменения во внешности или исправление дефектов. Процедуры могут включать операции на животе, руках, ногах и других частях тела. Пластическая хирургия на теле может помочь улучшить форму и симметрию. Операции на животе, руках и ногах могут исправить возрастные или постродовые изменения или внести изменения в физическую форму. Одна из самых популярных операций на теле - абдоминопластика, также известная как операция на животе или подтяжка живота.",
			img: пластикатела,
		},
		{
			title: "Пластика лица и шеи",
			text: "Пластическая хирургия лица и шеи предлагает разнообразные процедуры, которые помогают пациентам улучшить свою внешность и достичь желаемых результатов. Операции на лице и шее включают в себя процедуры, направленные на улучшение контуров, формы и пропорций лица. Подтяжка лица, ринопластика и блефаропластика являются одними из наиболее известных  и популярных процедур.",
			img: подтяжкагуб,
		},
		{
			title: "Липосакция",
			text: "Липосакция всего тела является процедурой, которая может помочь тем, кто желает улучшить свою фигуру и контуры. Она предлагает возможность удалить избыточную жировую ткань с различных областей, таких как живот, бедра, ягодицы, руки и спина.Липосакция проводится с использованием тонких канюлей (длинной тонкой полой трубки), которые вводятся через небольшие разрезы в коже. Это позволяет разрушить и удалить  значительные объемы жира из различных областей вашего тела с минимальными разрезами, создавая более стройный силуэт и улучшая пропорции тела.",
			img: липосакциятела,
		},
		{
			title: "Пересадка волос",
			text: "Трансплантация волос - это хирургическая процедура, предназначенная для решения проблемы облысения или редких волос на голове. Она позволяет перемещать волосяные фолликулы из одной области тела в область с облысением, восстанавливая естественный рост волос. Процедура трансплантации волос проводится с использованием специальных инструментов, которые позволяют перемещать отдельные волосяные фолликулы в нужные области. Это помогает достичь естественного и долгосрочного результата, восстанавливающего плотность и объем волос.",
			img: операция_по_трансплонтации_волос,
		},
		// Add more slides as needed
	];
	const nextSlide = () => {
		setCurrentSlide((oldSlide) => {
			let newSlide = oldSlide + 1;
			if (newSlide >= carouselData.length) newSlide = 0;
			return newSlide;
		});
	};

	const prevSlide = () => {
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
				style={{
					borderRight: " 50px solid #016245",
					paddingRight: "1rem",
				}}
			>
				<Row className="w-100">
					<Col lg={4} className="px-0">
						<img
							className="home-carousel-image w-100"
							src={carouselData[currentSlide].img}
							alt="carousel"
						/>
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
								style={{ fontSize: "30px", cursor: "pointer" }}
								onClick={prevSlide}
							/>
							<h1
								style={{ fontSize: "3rem", fontWeight: "bold" }}
								className="mx-3"
							>
								{carouselData[currentSlide].title}
							</h1>
							<AiOutlineArrowRight
								style={{ fontSize: "30px", cursor: "pointer" }}
								onClick={nextSlide}
							/>
						</div>

						<div className="image-Brief-description">
							<p>{carouselData[currentSlide].text}</p>
						</div>
						<div className="w-100 d-flex justify-content-end ">
							<Button className="brief-description-button home-carousel-button px-3 py-4 my-4">
								{carouselData[currentSlide].title}
							</Button>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}
