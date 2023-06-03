import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import testImage from "../../../../Assets/Home/HoverCardImage.png";
import { Button } from "antd";

export default function BlogSection() {
	return (
		<Container>
			<div>
				<h1 style={{ fontSize: "6vw", fontWeight: "bolder" }}>БЛОГ</h1>

				<Row className="center-div pb-5 pt-4">
					<Col md={6}>
						<div
							className="home-blog-grey-container"
							style={{ transform: " rotate(1deg)" }}
						>
							<h1
								style={{
									fontSize: "1.3rem",
									fontWeight: "bold",
									width: "300px",
									textAlign: "left",
								}}
							>
								Можно ли кормить грудью после маммопластики?
							</h1>
							<h2
								style={{
									fontSize: "1rem",
									fontWeight: "bold",
									textAlign: "left",
									color: "#016245",
								}}
							>
								Читать полностью
							</h2>

							<div
								className="home-blog-grey-container-circle-image"
								style={{
									transform: " rotate(-9.28deg)",
									marginRight: " 1.5rem",
									right: "0",
									border: "7px double #323334",
								}}
							>
								<img src={testImage}></img>
							</div>
						</div>
					</Col>
					<Col md={6}>
						<div
							className="home-blog-grey-container "
							style={{ transform: " rotate(-0.54deg)", marginTop: "3rem" }}
						>
							<h1
								style={{
									fontSize: "1.4rem",
									fontWeight: "bold",
									maxWidth: "300px",
									textAlign: "left",
									marginLeft: "13rem",
								}}
							>
								Варикоз у мужчин: миф или реальность?
							</h1>
							<h2
								style={{
									fontSize: "1rem",
									fontWeight: "bold",
									textAlign: "left",
									marginLeft: "13rem",
									color: "#016245",
								}}
							>
								Читать полностью
							</h2>
							<div
								className="home-blog-grey-container-circle-image"
								style={{
									transform: " rotate(6.23deg)",
									border: "7px double #016245",
								}}
							>
								<img src={testImage}></img>
							</div>
						</div>
					</Col>
				</Row>
				<Row className="center-div my-5">
					<Col md={6}>
						<div
							className="home-blog-grey-container"
							style={{ transform: " rotate(-9.68deg)" }}
						>
							<h1
								style={{
									fontSize: "1.4rem",
									fontWeight: "bold",
									width: "300px",
									textAlign: "left",
									marginLeft: "13rem",
								}}
							>
								Варикоз у мужчин: миф или реальность?
							</h1>
							<h2
								style={{
									fontSize: "1rem",
									fontWeight: "bold",
									textAlign: "left",
									marginLeft: "13rem",
									color: "#016245",
								}}
							>
								Читать полностью
							</h2>
							<div
								className="home-blog-grey-container-circle-image"
								style={{
									transform: " rotate(-3.07deg)",
									border: "7px double #016245",
								}}
							>
								<img src={testImage}></img>
							</div>
						</div>
					</Col>
					<Col md={6}>
						<div
							className="home-blog-grey-container"
							style={{ transform: " rotate(-4deg)" }}
						>
							<h1
								style={{
									fontSize: "1.3rem",
									fontWeight: "bold",
									width: "300px",
									textAlign: "left",
								}}
							>
								Можно ли кормить грудью после маммопластики?
							</h1>
							<h2
								style={{
									fontSize: "1rem",
									fontWeight: "bold",
									textAlign: "left",
									color: "#016245",
								}}
							>
								Читать полностью
							</h2>
							<div
								className="home-blog-grey-container-circle-image"
								style={{
									transform: " rotate(-12.3deg)",
									marginRight: " 1.5rem",
									right: "0",
									border: "7px double #323334",
								}}
							>
								<img src={testImage}></img>
							</div>
						</div>
					</Col>
					<div className="w-100 d-flex justify-content-end ">
						<Button className="brief-description-button  px-2 py-4 my-4">
							ВСЕ СТАТЬИ
						</Button>
					</div>
				</Row>
			</div>
		</Container>
	);
}
