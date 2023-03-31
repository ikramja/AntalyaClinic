import "./index.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import TitleCover from "../../../../Components/TitleCover";
import CategoryCover from "../../../../Assets/Covers/Category.png";
import StandardCard from "../../../../Components/StandardCard";
import category1 from "../../../../Assets/Category/category1.png";
import category2 from "../../../../Assets/Category/category2.png";
import category3 from "../../../../Assets/Category/category3.png";
import category4 from "../../../../Assets/Category/category4.png";
export default function CategoryList() {
	return (
		<div>
			<Row className="my-5 mx-0">
				<Col md="3" className="d-flex justify-content-center p-0">
					<StandardCard
						height={180}
						cardImage={category1}
						cardTitle="ПОДТЯЖКА ЛИЦА"
						cardDescription="Фейслифтинг"
						cardDescriptionStyle={{
							fontSize: "1rem",
							fontWeight: "600",
							color: "black",
						}}
					/>
				</Col>
				<Col md="3" className="d-flex justify-content-center p-0">
					<StandardCard
						height={180}
						cardImage={category2}
						cardTitle="ПЛАСТИКА ГУБ
						"
						cardDescription="Хейлопластика"
					/>
				</Col>
				<Col md="3" className="d-flex justify-content-center p-0">
					<StandardCard
						height={180}
						cardImage={category3}
						cardTitle="ПЛАСТИКА ВЕК
						"
						cardDescription="Блефаропластика"
					/>
				</Col>
				<Col md="3" className="d-flex justify-content-center p-0">
					<StandardCard
						height={180}
						cardImage={category4}
						cardTitle="ПЛАСТИКА УШЕЙ
						"
						cardDescription="Отопластика"
					/>
				</Col>
			</Row>
		</div>
	);
}
