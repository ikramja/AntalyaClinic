import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import categoryhome1 from "../../../../Assets/Home/categoryhome1.png";
import categoryhome3 from "../../../../Assets/Home/categoryhome3.png";
import пластическаяоперацияживота from "../../../../Assets/Home/пластическая операция живота.webp";
import трансплантацияволос from "../../../../Assets/Home/трансплантация волос.webp";
import { Link } from "react-router-dom";
import "./index.css";

export default function HomeCategory() {
	const [categoryData, setCategoryData] = useState(null);
	const categoryImages = {
		"Пластика лица и Шеи": categoryhome1,
		"Пластика Тела": пластическаяоперацияживота,
		"Пластика Груди": categoryhome3,
		"Пересадка Волос": трансплантацияволос,
	};
	useEffect(() => {
		axios.get("/get/categories/").then(({ data }) => {
			console.log(data);

			setCategoryData(data);
		});
	}, []);
	return (
		<div>
			<Fade top delay={1000}>
				<h3 style={{ fontSize: "6vw", fontWeight: "bold" }} className="my-4">
					ПОПУЛЯРНЫЕ УСЛУГИ
				</h3>
			</Fade>
			<div className="w-100 category-home-image-container pb-4">
				<Container>
					<Row className="w-100 center-div category-home-row">
						{categoryData &&
							categoryData.map((category) => (
								<Col lg={3} className="center-div mb-2">
									<div className="category-home-image-container-column h-100">
										<div className="image-and-text-container">
											<img
												className="category-home-image"
												src={categoryImages[category["category_name_in_menu"]]}
												alt={decodeURIComponent(
													categoryImages[category["category_name_in_menu"]]
														.split("/")
														.pop()
														.split(".")[0]
												)}
											></img>
											<div className="overlay-text">
												{category["category_name_in_menu"]}
											</div>
										</div>
										<div className="home-category-links-container h-100 w-100 center-div">
											<div>
												{category.category_articles.map((article, index) => {
													return (
														article.popular && (
															<Link
																className="i"
																style={{
																	textDecoration: "none",
																	color: "white",
																}}
																to={`/service/${article.cover_header}/`}
															>
																<h4
																	className="fade-up"
																	style={{
																		fontSize: "1rem",
																		fontWeight: "600",
																		transitionDelay: `${index * 0.05}s`,
																	}}
																>
																	{article.cover_header}
																</h4>
															</Link>
														)
													);
												})}
											</div>
										</div>
									</div>
								</Col>
							))}
					</Row>
				</Container>
			</div>
		</div>
	);
}
