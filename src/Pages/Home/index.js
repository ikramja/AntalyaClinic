import "./index.css";
import CoverVideo from "./Components/CoverVideo";
import ParagraphSection from "../../Components/ParagraphSection";
import Paragraph_Section from "../../Assets/Home/ParagraphSection.png";
import StandardCard from "../../Components/StandardCard";
import { Row } from "react-bootstrap";
import HoverCard from "../../Components/HoverCard";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HoverCardImage from "../../Assets/Home/HoverCardImage.png";
import Doctor_1_Image from "../../Assets/AboutOurDoctors/Doctor_1.png";

export default function Home() {
	return (
		<div>
			<CoverVideo />
			<ParagraphSection
				title="Добро пожаловать в клинику пластической хирургии EL ARTE Здесь красота
					встречается с опытом."
				description="Наша команда высококвалифицированных врачей стремится обеспечить
                высочайший уровень ухода и опыта в области пластической хирургии.
                Благодаря многолетнему обучению и опыту наши специалисты стремятся
                помочь вам достичь желаемых эстетических целей в безопасной и
                комфортной обстановке."
				backgroundImage={Paragraph_Section}
			/>
			<div>
				<div className="my-4">
					<h2>Достигните совершенства с клиникой EL ARTE</h2>
					<h3 className="pt-4">НАШИ СПЕЦИАЛИСТЫ</h3>
				</div>
				<Row className="mt-5 center-div m-0 w-100 i">
					<Col md="3" className="center-div">
						<StandardCard
							cardImage={Doctor_1_Image}
							cardTitle="Александр Александрович
                            ШульцАлександр Александрович
                            Шульц"
							cardDescription="ПЛАСТИЧЕСКИЙ ХИРУРГ
                            ВЫСШЕЙ КАТЕГОРИИ"
						/>
					</Col>
					<Col md="3" className="center-div">
						<StandardCard
							cardImage={Doctor_1_Image}
							cardTitle="Александр Александрович
                            ШульцАлександр Александрович
                            Шульц"
							cardDescription="ПЛАСТИЧЕСКИЙ ХИРУРГ
                            ВЫСШЕЙ КАТЕГОРИИ"
						/>
					</Col>
					<Col md="3" className="center-div">
						<StandardCard
							cardImage={Doctor_1_Image}
							cardTitle="Александр Александрович
                            ШульцАлександр Александрович
                            Шульц"
							cardDescription="ПЛАСТИЧЕСКИЙ ХИРУРГ
                            ВЫСШЕЙ КАТЕГОРИИ"
						/>
					</Col>
					<Col md="3" className="center-div">
						<div className="w-100 standard-card-big-info-div">
							<p>
								<Link to="" className="link-no-text-decoration">
									НОВОСТИ
								</Link>
							</p>
							<p>
								<Link to="" className="link-no-text-decoration ">
									НАШИ ВРАЧИ
								</Link>
							</p>
							<p>
								<Link to="" className="link-no-text-decoration ">
									ОТЗЫВЫ
								</Link>
							</p>
						</div>
					</Col>
				</Row>
			</div>
			<div>
				<h1>ПОПУЛЯРНЫЕ УСЛУГИ</h1>
				<Row className="hard-cover-row">
					<Col md="3" className="center-div">
						<HoverCard
							hoverCard={HoverCardImage}
							hoverCardText1="Увеличение груди"
							hoverCardText2="Реконструкция груди"
							hoverCardText3="Подтяжка груди"
						/>
					</Col>
					<Col md="3" className="center-div">
						<HoverCard
							hoverCard={HoverCardImage}
							hoverCardText1="Увеличение груди"
							hoverCardText2="Реконструкция груди"
							hoverCardText3="Подтяжка груди"
						/>
					</Col>
					<Col md="3" className="center-div">
						<HoverCard
							hoverCard={HoverCardImage}
							hoverCardText1="Увеличение груди"
							hoverCardText2="Реконструкция груди"
							hoverCardText3="Подтяжка груди"
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
}
