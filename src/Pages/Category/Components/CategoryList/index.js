import "./index.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import StandardCard from "../../../../Components/StandardCard";

export default function CategoryList(props) {
	console.log("hahah", props.category_articles[0]);
	return (
		<div>
			<Row className="my-5 mx-0">
				{props.category_articles[0] &&
					props.category_articles.map((article) => {
						return (
							<Col md="3" className="d-flex justify-content-center p-0">
								<StandardCard
									height={180}
									cardImage={
										process.env.REACT_APP_BACKEND_BASE_URL +
										article.article_category_image
									}
									cardTitle={article.cover_header}
									cardDescription={article.cover_sub_header}
									cardDescriptionStyle={{
										fontSize: "1rem",
										fontWeight: "600",
										color: "black",
									}}
									link={`/service/${article.cover_header}/`}
								/>
							</Col>
						);
					})}
			</Row>
		</div>
	);
}
