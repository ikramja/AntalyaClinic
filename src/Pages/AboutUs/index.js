import "./index.css";
import TitleCover from "../../Components/TitleCover";
import { List, Card } from "antd";
import AboutUsCover from "../../Assets/Covers/AboutUs.png";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import FrameParagraph from "../../Components/FrameParagraph";
import AnalysesTableBackground from "../../Assets/ForPatients/iko.png";
import GreyFrame from "./Components/AboutUsGreyFrame";
import block1 from "../../Assets/AboutUs/block1.png";
import backgroundAbout from "../../Assets/AboutUs/background.png";
import Block2 from "../../Assets/AboutUs/block2.jpg";
import Block3 from "../../Assets/AboutUs/block3.png";
import backgroundAbout2 from "../../Assets/AboutUs/background2.png";
import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "antd";
import ImageCarouselAboutUs1 from "../../Assets/AboutUs/carousel1.png";
import ImageCarouselAboutUs2 from "../../Assets/AboutUs/carousel2.png";
import ImageCarouselAboutUs3 from "../../Assets/AboutUs/carousel3.png";
import ImageCarouselAboutUs4 from "../../Assets/AboutUs/carousel4.png";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../Layouts/ContactForm";

export default function AboutUs() {
	const carouselRef = React.useRef(null);

	// const handleNext = () => carouselRef.current.next();
	// const handlePrev = () => carouselRef.current.prev();
	const settings = {
		dots: true,

		slidesToShow: 5,
		touchMove: true,
		responsive: [
			{
				breakpoint: 1550,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true,
				},
				breakpoint: 1305,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 975,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 632,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		slidesToScroll: 1,
		// nextArrow: <BiRightArrowAlt style={{ fontSize: "2rem", color: "black" }} />,
		// prevArrow: <BiLeftArrowAlt style={{ fontSize: "2rem", color: "black" }} />,
	};
	// const getSlidesToShow = () => {
	// 	const screenWidth = window.innerWidth;

	// 	if (screenWidth > 1200) {
	// 		return 4;
	// 	} else if (screenWidth > 992) {
	// 		return 3;
	// 	} else if (screenWidth > 768) {
	// 		return 2;
	// 	} else {
	// 		return 1;
	// 	}
	// };
	// const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setSlidesToShow(getSlidesToShow());
	// 	};

	// 	window.addEventListener("resize", handleResize);
	// 	return () => {
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, []);
	return (
		<div>
			<div className="about-us-services">
				<TitleCover title="СЕРВИС" titleAlign="center" Cover={AboutUsCover} />
				<Container>
					<div
						style={{
							paddingTop: "1rem",
							backgroundImage: `url(${AnalysesTableBackground})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "auto 117%",
							backgroundPositionX: "right",
							backgroundPositionY: "bottom",
							// backgroundPosition: "right top",
						}}
					>
						<FrameParagraph
							title="Период Восстановления"
							text="После госпитализации в клинику большинство процедур требуют регулярных осмотров у хирурга и обязательного пребывания под наблюдением. Мы в клинике El Arte заботимся о наших пациентах и предоставляем услуги по транспортировке и проживанию во время лечения.  Наша главная задача - помочь нашим клиентам в их выздоровлении, создавая спокойную и комфортную обстановку."
						/>
					</div>
				</Container>
				<div
					className="mt-4"
					style={{
						paddingTop: "1rem",
						backgroundImage: `url(${backgroundAbout})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPositionY: "bottom",
					}}
				>
					<Container>
						<Row className="center-div about-block-space">
							<Col lg={5}>
								<img src={block1} className="about-us-Block-1 w-100"></img>
							</Col>
							<Col lg={6}>
								<p
									style={{
										display: "flex",
										justifyContent: "flex-end",
										fontSize: "5rem",
										fontWeight: "bold",
										marginBottom: "0",
									}}
								>
									01
								</p>
								<div className="about-us-Block-1-content">
									<h1 style={{ fontWeight: "bold" }}>Переводчик</h1>
									<p>
										Пациенты из-за рубежа могут воспользоваться услугами
										переводчика — клиника <br />
										обеспечивает переводчиков английского и русского языка.
									</p>
								</div>
							</Col>
						</Row>
						<Row
							className="center-div about-block-space"
							style={{ paddingTop: "4rem" }}
						>
							<Col lg={6}>
								<p
									style={{
										display: "flex",
										justifyContent: "flex-end",
										fontSize: "5rem",
										fontWeight: "bold",
										marginBottom: "0",
									}}
								>
									02
								</p>
								<div className="about-us-Block-1-content">
									<h1 style={{ fontWeight: "bold" }}>Трансфер</h1>
									<p>Трансфер от аэропорта до отеля и клиники.</p>
								</div>
							</Col>
							<Col lg={5}>
								<img src={Block2} className="about-us-Block-2 w-100"></img>
							</Col>
						</Row>
					</Container>
				</div>
				<Container>
					<div>
						<Row
							className="about-block-space center-div"
							style={{ paddingTop: "5rem" }}
						>
							<Col lg={5}>
								<img src={Block3} className="about-us-Block-3 w-100"></img>
							</Col>
							<Col lg={6}>
								<p
									className="me-5"
									style={{
										display: "flex",
										justifyContent: "flex-end",
										fontSize: "5rem",
										fontWeight: "bold",
										marginBottom: "0",
									}}
								>
									03
								</p>
								<div className="about-us-Block-1-content ">
									<h1 style={{ fontWeight: "bold" }}>Палаты</h1>
									<p>
										Стандартным вариантом размещения являются комфортабельные
										одноместные палаты, каждая из которых располагает отдельным
										санузлом. В клинике есть кафетерий и банкоматы.
									</p>
								</div>
							</Col>
						</Row>
					</div>
					<div>
						<Row
							className="about-block-space center-div"
							style={{ paddingTop: "4rem" }}
						>
							<div className="d-flex ps-5">
								<p
									className="me-4"
									style={{
										fontSize: "5rem",
										fontWeight: "bold",
										marginBottom: "0",
									}}
								>
									04
								</p>
								<h1
									className="mb-0"
									style={{
										fontWeight: "bold",
										display: "flex",
										alignItems: "center",
									}}
								>
									Отель
								</h1>
							</div>
							<div className="about-us-Block-1-content px-5">
								<p className=" mb-0">
									В отелях для размещения наших пациентов комфортные и уютные
									номера. Все они включают в себя необходимую мебель, просторные
									спальные места, телевизор, а также холодильник. В собственной
									ванной комнате обязательно есть душ, туалет, раковина и фен.
									Из окон и балконов вы сможете любоваться потрясающим видом на
									город и море.
								</p>
								<strong>
									В стоимость включено пребывание члена семьи, сопровождающего
									пациента.
								</strong>
							</div>
						</Row>
					</div>
				</Container>

				<div
					className="carousel-about w-100"
					style={{
						backgroundImage: `url(${backgroundAbout2})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						height: "40vh",
						backgroundPositionY: "top",
						paddingBottom: "35px",
						position: "relative",
					}}
				>
					<Carousel
						{...settings}
						className="carousel-about-us"
						ref={carouselRef}
					>
						<div>
							<img
								className="carousel-image_about-us"
								src={ImageCarouselAboutUs1}
								alt="Slide 1"
							/>
						</div>
						<div>
							<img
								className="carousel-image_about-us"
								src={ImageCarouselAboutUs2}
								alt="Slide 2"
							/>
						</div>
						<div>
							<img
								className="carousel-image_about-us"
								src={ImageCarouselAboutUs3}
								alt="Slide 3"
							/>
						</div>
						<div>
							<img
								className="carousel-image_about-us"
								src={ImageCarouselAboutUs4}
								alt="Slide 4"
							/>
						</div>
						<div>
							<img
								className="carousel-image_about-us"
								src={ImageCarouselAboutUs3}
								alt="Slide 5"
							/>
						</div>
					</Carousel>
					{/* <BiLeftArrowAlt className="about-left-arrow" onClick={handlePrev} />
					<BiRightArrowAlt className="about-right-arrow" onClick={handleNext} /> */}
				</div>
			</div>
			{/* <ContactForm /> */}
		</div>
	);
}
