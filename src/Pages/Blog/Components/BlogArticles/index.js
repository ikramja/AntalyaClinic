import { Col, Row } from "react-bootstrap";
import "./index.css";
import Pic from "../../../../Assets/Blog/blog-articles.png";
import StandardCard from "../../../../Components/StandardCard";
import { Button } from "antd";

export default function BlogArticles() {
	return (
		<div>
			<Row className="my-5 mx-0 center-div">
				<Col md="4" className="center-div p-0">
					<StandardCard
						height={200}
						width={90}
						cardImage={Pic}
						cardTitle="МИФЫ О РИНОПЛАСТИКЕ"
						cardTitleStyle={{
							fontSize: "1.15rem",
							display: "block",
							wordWrap: "break-word",
						}}
						cardDescription="Все мы хотим идеальное тело и вечно молодое лицо, но постоянный стресс, бесконечная работа, городской ритм и плохая экология берут свое."
						cardDescriptionStyle={{
							fontSize: "1rem",
							textAlign: "justify",
							wordSpacing: "-0.1em",
							color: "black",
						}}
						// link={`/service/${article.cover_header}/`}
					/>
				</Col>
				<Col md="4" className="center-div p-0">
					<StandardCard
						height={200}
						width={90}
						cardImage={Pic}
						cardTitle="МИФЫ О РИНОПЛАСТИКЕ"
						cardTitleStyle={{
							fontSize: "1.15rem",
							display: "block",
							wordWrap: "break-word",
						}}
						cardDescription="Все мы хотим идеальное тело и вечно молодое лицо, но постоянный стресс, бесконечная работа, городской ритм и плохая экология берут свое."
						cardDescriptionStyle={{
							fontSize: "1rem",
							textAlign: "justify",
							wordSpacing: "-0.1em",
							color: "black",
						}}
						// link={`/service/${article.cover_header}/`}
					/>
				</Col>
				<Col md="4" className="center-div p-0">
					<StandardCard
						height={200}
						width={90}
						cardImage={Pic}
						cardTitle="МИФЫ О РИНОПЛАСТИКЕ"
						cardTitleStyle={{
							fontSize: "1.15rem",
							display: "block",
							wordWrap: "break-word",
						}}
						cardDescription="Все мы хотим идеальное тело и вечно молодое лицо, но постоянный стресс, бесконечная работа, городской ритм и плохая экология берут свое."
						cardDescriptionStyle={{
							fontSize: "1rem",
							textAlign: "justify",
							wordSpacing: "-0.1em",
							color: "black",
						}}
						// link={`/service/${article.cover_header}/`}
					/>
				</Col>
			</Row>

			<div className="center-div m-4">
				<Button
					className="blog-articles-button center-div p-4"
					// onClick={() => setShowAllDoctors(true)}
				>
					БОЛЬШЕ СТАТЕЙ
				</Button>
			</div>
		</div>
	);
}
