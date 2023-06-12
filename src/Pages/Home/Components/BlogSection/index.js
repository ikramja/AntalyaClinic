import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import testImage from "../../../../Assets/AboutUs/block1.png";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

export default function BlogSection() {
	const [blogs, setBlogs] = useState(null);
	useEffect(() => {
		axios.get("/get/blog/articles/").then(({ data }) => {
			console.log(data);
			setBlogs(data);
		});
	}, []);
	return (
		<Container>
			<div>
				<Fade bottom>
					<h3 style={{ fontSize: "4rem", fontWeight: "bolder" }}>БЛОГ</h3>
				</Fade>
				{/* {blogs &&
					blogs.map((blog) => ( */}
				<Row className="center-div pb-5 pt-4">
					<Col lg={6}>
						<Fade top>
							<div
								className="home-blog-grey-container"
								style={{ transform: " rotate(1deg)" }}
							>
								<div>
									<h4
										className="home-blog-header"
										style={{
											fontSize: "1rem",
											fontWeight: "800",

											textAlign: "left",
										}}
									>
										"hcjd"
									</h4>
									<h5
										className="home-blog-sub-header"
										style={{
											fontSize: "1rem",
											fontWeight: "800",
											textAlign: "left",
											color: "#016245",
										}}
									>
										Читать полностью
									</h5>
								</div>

								<div
									className="home-blog-grey-container-circle-image"
									style={{
										transform: " rotate(-8.28deg)",
										marginRight: " 15px",
										right: "0",
										border: " 7px solid #323334",
										outline: " 3px solid #323334",
										outlineOffset: "6px",
									}}
								>
									<img src={testImage}></img>
								</div>
							</div>
						</Fade>
					</Col>
					<Col lg={6}>
						<Fade top>
							<div
								className="home-blog-grey-container "
								style={{ transform: " rotate(-0.54deg)", marginTop: "3rem" }}
							>
								<h4
									className="home-blog-header-left"
									style={{
										fontSize: "1rem",
										fontWeight: "800",
										textAlign: "left",
									}}
								>
									blogtitle
								</h4>
								<h5
									className="home-blog-sub-header-left"
									style={{
										fontSize: "1rem",
										fontWeight: "800",
										textAlign: "left",
										color: "#016245",
									}}
								>
									Читать полностью
								</h5>
								<div
									className="home-blog-grey-container-circle-image"
									style={{
										transform: " rotate(6.23deg)",
										border: " 7px solid #016245",
										outline: " 3px solid #016245",
										outlineOffset: "6px",
										left: "0",
										marginLeft: "15px",
									}}
								>
									<img src={testImage}></img>
								</div>
							</div>
						</Fade>
					</Col>
				</Row>

				<Row className="center-div my-5">
					<Col lg={6} className="blog-section-last-col">
						<Fade bottom>
							<div
								className="home-blog-grey-container"
								style={{ transform: " rotate(-9.68deg)" }}
							>
								<h4
									className="home-blog-header-left"
									style={{
										fontSize: "1rem",
										fontWeight: "800",
										textAlign: "left",
									}}
								>
									Варикоз у мужчин: миф или реальность?
								</h4>
								<h5
									className="home-blog-sub-header-left"
									style={{
										fontSize: "1rem",
										fontWeight: "800",
										textAlign: "left",
										color: "#016245",
									}}
								>
									Читать полностью
								</h5>
								<div
									className="home-blog-grey-container-circle-image"
									style={{
										transform: " rotate(-3.07deg)",
										border: " 7px solid #016245",
										outline: " 3px solid #016245",
										outlineOffset: "6px",
										left: "0",
										marginLeft: "15px",
									}}
								>
									<img src={testImage}></img>
								</div>
							</div>
						</Fade>
					</Col>
					<Col lg={6}>
						<Fade bottom>
							<div
								className="home-blog-grey-container"
								style={{ transform: " rotate(-4deg)" }}
							>
								<h4
									className="home-blog-header"
									style={{
										fontSize: "1rem",
										fontWeight: "800",
										textAlign: "left",
									}}
								>
									Варикоз у мужчин: миф или реальность?
								</h4>
								<h5
									className="home-blog--sub-header"
									style={{
										fontSize: "1rem",
										fontWeight: "800",
										textAlign: "left",

										color: "#016245",
									}}
								>
									Читать полностью
								</h5>
								<div
									className="home-blog-grey-container-circle-image"
									style={{
										transform: " rotate(-8.3deg)",
										marginRight: " 15px",
										right: "0",
										border: " 7px solid #323334",
										outline: " 3px solid #323334",
										outlineOffset: "6px",
									}}
								>
									<img src={testImage}></img>
								</div>
							</div>
						</Fade>
					</Col>
					<div className="w-100 d-flex justify-content-end ">
						<Link style={{ textDecoration: "none" }} to="/blog">
							<Fade right>
								<Button className="brief-description-button  px-2 py-4 my-4">
									ВСЕ СТАТЬИ
								</Button>
							</Fade>
						</Link>
					</div>
				</Row>
			</div>
		</Container>
	);
}
