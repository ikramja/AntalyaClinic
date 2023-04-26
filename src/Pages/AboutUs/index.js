import "./index.css";
import TitleCover from "../../Components/TitleCover";
import AboutUsCover from "../../Assets/Covers/AboutUs.png";
import FrameParagraph from "../../Components/FrameParagraph";
import AnalysesTableBackground from "../../Assets/ForPatients/AnalysesTableBackground.png";
import GreyFrame from "./Components/AboutUsGreyFrame";
import aboutUs from "../../Assets/AboutUs/AboutUs.png";
import LeftHalfImage from "../../Assets/AboutUs/leftHalf.png";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import ImageCarouselAboutUs1 from "../../Assets/AboutUs/carousel1.png";
import ImageCarouselAboutUs2 from "../../Assets/AboutUs/carousel2.png";
import ImageCarouselAboutUs3 from "../../Assets/AboutUs/carousel3.png";
import ImageCarouselAboutUs4 from "../../Assets/AboutUs/carousel4.png";
import RightHalfImage from "../../Assets/AboutUs/rightHalf.png";
import GreenContainerImage from "../../Assets/AboutUs/GreenContainer.png";
import { Container } from "react-bootstrap";

export default function AboutUs() {
	const getSlidesToShow = () => {
		const screenWidth = window.innerWidth;

		if (screenWidth > 1200) {
			return 4;
		} else if (screenWidth > 992) {
			return 3;
		} else if (screenWidth > 768) {
			return 2;
		} else {
			return 1;
		}
	};
	const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
	useEffect(() => {
		const handleResize = () => {
			setSlidesToShow(getSlidesToShow());
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div className="about-us-services">
			<TitleCover title="СЕРВИС" titleAlign="center" Cover={AboutUsCover} />
			<div
				className="about-us-frame-paragraph"
				style={{
					paddingTop: "2rem",
					backgroundImage: `url(${AnalysesTableBackground})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "auto 180%",
					backgroundPositionX: "right",
					backgroundPositionY: "top",
					// backgroundPosition: "right top",
				}}
			>
				<FrameParagraph
					title="Период Восстановления"
					text="После госпитализации в клинику большинство процедур требуют регулярных осмотров у хирурга и обязательного пребывания под наблюдением. Мы в клинике El Arte заботимся о наших пациентах и предоставляем услуги по транспортировке и проживанию во время лечения.  Наша главная задача - помочь нашим клиентам в их выздоровлении, создавая спокойную и комфортную обстановку."
				/>
			</div>
			<Container>
				<div className="px-3 grey-frame-about-us-first">
					<GreyFrame
						width="400px"
						title="ТРАНСФЕР"
						text="Трансфер от аэропорта до отеля и клиники. "
					/>
					<div className="grey-frame-about-us-image me-5 px-5">
						<img className="image" src={aboutUs}></img>
					</div>
				</div>

				<div className="mx-3 grey-frame-about-us-second">
					<GreyFrame
						style={{ paddingBottom: "10rem" }}
						width="100%"
						subtitle="персональное сопровождение"
						title="ПЕРЕВОДЧИК"
						text="Пациенты из-за рубежа могут воспользоваться услугами переводчика — клиника обеспечивает переводчиков английского и русского языка."
					/>
					<div className="grey-frame-about-us-image-mobile me-5 px-5">
						<img className="image-mobile" src={aboutUs}></img>
					</div>
				</div>
			</Container>
			<img className="right-half-image-about-us" src={RightHalfImage}></img>
			<div className="about-us-green-carousel-container">
				<div className="green-container-about-us pt-5">
					<div className="px-5 green-frame-about-us-content">
						<h1 className="pt-4 my-0">
							<h5 className="my-0">размещение в стационаре</h5>
							<h1 className="green-frame-about-us-title my-0">ПАЛАТЫ</h1>
						</h1>
						<p>
							Стандартным вариантом размещения являются комфортабельные
							одноместные палаты, каждая из которых располагает отдельным
							санузлом. В клинике есть кафетерий и банкоматы.
						</p>
					</div>

					<div className="green-container-image-div-about-us my-4">
						<img
							className="green-container-image-about-us"
							src={GreenContainerImage}
						></img>
						<div className="white-container-about-us px-4 py-4">
							<h1>
								<h5>комфортабельные номера</h5>
								<span className="white-container-about-us-title">ОТЕЛЬ</span>
							</h1>
							<p>
								В отелях для размещения наших пациентов комфортные и уютные
								номера. Все они включают в себя необходимую мебель, просторные
								спальные места, телевизор, а также холодильник. В собственной
								ванной комнате обязательно есть душ, туалет, раковина и фен. Из
								окон и балконов вы сможете любоваться потрясающим видом на город
								и море. В стоимость включено пребывание члена семьи,
								сопровождающего пациента.
							</p>
						</div>
					</div>
					<img
						className="left-half-image-about-us mb-5"
						src={LeftHalfImage}
					></img>
				</div>

				<div className="carousel-about w-100 mb-4">
					<Carousel
						dots={true}
						autoplay
						className="carousel-about-us"
						slidesToShow={slidesToShow}
						touchMove={true}
						centerMode={true}
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
								src={ImageCarouselAboutUs2}
								alt="Slide 2"
							/>
						</div>
						<div>
							<img
								className="carousel-image_about-us"
								src={ImageCarouselAboutUs4}
								alt="Slide 2"
							/>
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	);
}
