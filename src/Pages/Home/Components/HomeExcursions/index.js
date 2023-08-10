import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import homeExcursionAccommodationShape from "../../../../Assets/Home/homeExcursionAccommodationShape.png";
import homeExcursionAccommodationImage from "../../../../Assets/Home/homeExcursionAccommodationImage.png";
import homeExcursionNutritionShape from "../../../../Assets/Home/homeExcursionNutritionShape.png";
import homeExcursionNutritionImage from "../../../../Assets/Home/homeExcursionNutritionImage.png";
import homeExcursionExcursionShape from "../../../../Assets/Home/homeExcursionExcursionsShape.png";
import homeExcursionExcursionImage from "../../../../Assets/Home/homeExcursionExcursionsImage.png";
import HomeExcursionShapeOne from "../../../../Assets/Home/HomeExcursionShapeOne.png";
import HomeFirstSection from "../../../../Assets/Home/HomeFirstSection.png";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function HomeExcursions() {
	return (
		<div>
			{/* <Container> */}
			<Row className="w-100 ">
				<Col lg={6} className="px-5">
					<div className="small">
						<h2
							style={{
								display: "flex",
								lineHeight: " 65.24px",
								textAlign: "left",
								flexDirection: "column",
							}}
						>
							<span className="ms-3 home-excursion-title-one">
								Ваш медицинский
							</span>
							<span className="home-excursion-title-two">ОТПУСК</span>
						</h2>

						<p
							className="Brief-description mb-0 mt-4"
							style={{ fontSize: "1.3rem" }}
						>
							Хотите сделать давно желанную операцию и провести отпуск в одном
							месте? Тогда добро пожаловать в клинику пластической хирургии EL
							ARTE. Наша команда высококвалифицированных специалистов обеспечит
							вам не только безупречные результаты операции, но и прекрасный
							отпуск. Вы сможете наслаждаться каждым моментом, ведь наши
							эксперты заботятся обо всех деталях: от трансфера и проживания, до
							экскурсий и питания. Ваша единственная забота будет - радоваться
							результатам и наслаждаться прекрасным отпуском.
						</p>
						<div className="w-100 home-excursion-button-container mt-3">
							<Link style={{ textDecoration: "none" }} to="/excursion">
								<Button className="home-excursion-button px-5 py-4">
									Узнать подробнее
								</Button>
							</Link>
						</div>
					</div>
				</Col>
				<Col lg={6} className="center-div pe-0">
					<div class="ellipse  mt-3">
						<img src={HomeFirstSection} className="ellipse-image"></img>
						<div className="home-excursion-shape-one">
							<h3 className="home-excursion-shape-one-text">
								ПУТЕШЕСТВИЕ <br />
								по Анталье
							</h3>
							<img
								className="home-excursion-shape-one-sub"
								src={HomeExcursionShapeOne}
							></img>
						</div>
					</div>
				</Col>
			</Row>
			<Row className="mt-4 w-100">
				<Col xl={4}>
					<div className="home-excursion-nutrition">
						<img
							className="home-excursion-nutrition-shape"
							src={homeExcursionNutritionShape}
						></img>
						<img
							className="home-excursion-nutrition-image"
							src={homeExcursionNutritionImage}
						></img>
					</div>
					<div className="w-100 center-div mt-3">
						<h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>Питание</h2>
					</div>
				</Col>
				<Col xl={4}>
					<div className="home-excursion-nutrition w-100">
						<img
							className="home-excursion-nutrition-shape"
							src={homeExcursionExcursionShape}
						></img>
						<img
							className="home-excursion-Excursions-image"
							src={homeExcursionExcursionImage}
						></img>
					</div>
					<div className="w-100 center-div">
						<h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>Экскурсии</h2>
					</div>
				</Col>
				<Col xl={4}>
					<div className="home-excursion-nutrition">
						<img
							className="home-excursion-nutrition-shape"
							src={homeExcursionAccommodationShape}
						></img>
						<img
							className="home-excursion-Accommodation-image"
							src={homeExcursionAccommodationImage}
						></img>
					</div>
					<div className="w-100 center-div">
						<h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>Проживание</h2>
					</div>
				</Col>
			</Row>
			{/* </Container> */}
		</div>
	);
}
