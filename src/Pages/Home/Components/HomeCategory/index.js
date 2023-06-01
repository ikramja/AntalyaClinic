import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
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
			<h1 style={{ fontSize: "2.3rem", fontWeight: "bold" }}>
				Достигните совершенства с клиникой EL ARTE
			</h1>
			<br />
			<br />
			<h1 style={{ fontSize: "2rem", fontWeight: "bold" }} className="mb-3">
				ПОПУЛЯРНЫЕ УСЛУГИ
			</h1>
			<div className="w-100 category-home-image-container py-4">
				<Container>
					<Row className="w-100 center-div category-home-row">
						{categoryData &&
							categoryData.map((category) => (
								<Col lg={3} className="center-div mb-2">
									<div className="category-home-image-container-column h-100">
										<img
											className="category-home-image"
											src={categoryImages[category["category_name_in_menu"]]}
										></img>

										<div className="home-category-links-container h-100 w-100 center-div">
											<div>
												{category.category_articles.map(
													(article) =>
														article.popular && (
															<Link
																style={{
																	textDecoration: "none",
																	color: "white",
																}}
																to={`/service/${article.cover_header}/`}
															>
																<h1
																	style={{
																		fontSize: "1rem",
																		fontWeight: "600",
																	}}
																>
																	{article.cover_header}
																</h1>
															</Link>
														)
												)}
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
