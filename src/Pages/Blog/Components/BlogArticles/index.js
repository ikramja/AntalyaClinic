import { Col, Row } from "react-bootstrap";
import "./index.css";
import Pic from "../../../../Assets/Blog/blog-articles.png";
import StandardCard from "../../../../Components/StandardCard";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BlogArticles(props) {
	const allArticles = props.allArticles;
	const [articlesToSHow, setArticlesToSHow] = useState(6);
	return (
		<div>
			<Row className="my-5 mx-0">
				{allArticles
					.slice(0, Math.min(articlesToSHow, allArticles.length))
					.map((article) => (
						<Col md="4" className=" p-0">
							<StandardCard
								height={200}
								width={90}
								cardImage={article.image}
								cardTitle={article.title}
								cardTitleStyle={{
									fontSize: "1.15rem",
									display: "block",
									wordWrap: "break-word",
									fontWeight: "bold",
								}}
								cardDescription={article.head}
								cardDescriptionStyle={{
									fontSize: "1rem",
									textAlign: "justify",
									wordSpacing: "-0.1em",
									color: "black",
									fontWeight: "500",
								}}
								link={
									props.blog
										? `/blog/${article.title}`
										: `/news/${article.title}`
								}
								linkWidth={"100%"}
							/>
						</Col>
					))}
			</Row>

			{allArticles.length > 6 && (
				<div className="center-div m-4">
					<Button
						className="blog-articles-button center-div p-4"
						onClick={() => setArticlesToSHow(articlesToSHow + 6)}
					>
						БОЛЬШЕ СТАТЕЙ
					</Button>
				</div>
			)}
		</div>
	);
}
