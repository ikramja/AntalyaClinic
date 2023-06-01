import "./index.css";
import CoverVideo from "./Components/CoverVideo";
import ParagraphSection from "../../Components/ParagraphSection";
import Paragraph_Section from "../../Assets/Home/ParagraphSection.png";
import StandardCard from "../../Components/StandardCard";
import { Container, Row } from "react-bootstrap";
import ContactForm from "../../Layouts/ContactForm";
import leftCover from "../../Assets/Home/leftCover.png";
import HoverCard from "../../Components/HoverCard";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HoverCardImage from "../../Assets/Home/HoverCardImage.png";
import Doctor_1_Image from "../../Assets/AboutOurDoctors/Doctor_1.png";
import BriefDescription from "../../Components/BriefDescription";
import HomeImage from "./Components/HomeImage";
import HomeCategory from "./Components/HomeCategory";
import HomeDoctors from "./Components/HomeDoctors";
import HomeCarousel from "./Components/HomeCarousel";

export default function Home() {
	return (
		<div className="home">
			<CoverVideo />
			<HomeImage />
			<div className="mb-4">
				<HomeCategory />
			</div>
			<div className="mb-5">
				<HomeCarousel />
			</div>

			<div className="my-2">
				<HomeDoctors />
			</div>

			<Container
				className="container-description "
				style={{
					paddingLeft: "0 !important",
					paddingTop: "1rem",
					backgroundImage: `url(${leftCover})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "auto 110% ",
					backgroundPosition: "left bottom",
				}}
			>
				<BriefDescription
					text="ПОДРОБНЕЕ..."
					title="МЕДИЦИНСКИЙ ТУРИЗМ"
					description="Мы хотим, чтобы наши пациенты не только получили высококачественные медицинские услуги от опытных врачей Турции, но и имели возможность открыть для себя и полюбить эту страну.
				Анталия — город, наполненный очарованием и красотой. Он известен своими потрясающими пляжами, бирюзовыми водами и захватывающими дух природными ландшафтами. В свою очередь, Стамбул — поистине уникальный и захватывающий дух город, который может похвастаться сочетанием очарования старинной Европы и оживленных восточных базаров, древних амфитеатров и множества восхитительных ресторанов с национальной кухней.
				Мы приглашаем вас присоединиться к нам в захватывающих  экскурсиях, которые призваны обогатить ваш опыт и сделать путешествие незабываемым."
					headerStyle={{ color: "#323334", paddingBottom: "1rem" }}
					containerStyle={{
						background: "rgba(255, 255, 255, 0.79)",
						paddingTop: "1rem",
						color: "black",
						borderRadius: "10px",
						boxShadow:
							" -2px 5px 8px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.2)",
					}}
				/>
			</Container>
			<ContactForm />
		</div>
	);
}
