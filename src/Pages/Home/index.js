import "./index.css";
import ParagraphSection from "../../Components/ParagraphSection";
import Paragraph_Section from "../../Assets/Home/ParagraphSection.png";
import StandardCard from "../../Components/StandardCard";
import { Container, Row } from "react-bootstrap";
import ContactForm from "../../Layouts/ContactForm";
import DescriptionBackground from "../../Assets/Home/descriptionBackground.png";
import BlogSection from "./BlogSection";
import HoverCard from "../../Components/HoverCard";
import { Col } from "react-bootstrap";
import HomeCover from "../../Assets/Home/HomeCover.png";
import { Link } from "react-router-dom";
import HoverCardImage from "../../Assets/Home/HoverCardImage.png";
import Doctor_1_Image from "../../Assets/AboutOurDoctors/Doctor_1.png";
import BriefDescription from "../../Components/BriefDescription";
import HomeImage from "./Components/HomeImage";
import TitleCover from "../../Components/TitleCover";
import HomeCategory from "./Components/HomeCategory";
import HomeDoctors from "./Components/HomeDoctors";
import HomeCarousel from "./Components/HomeCarousel";
import CoverVideo from "./Components/CoverVideo";

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

			<div className="mb-2 pt-3">
				<HomeDoctors />
			</div>

			<div
				className="container-description "
				style={{
					// position:"relative",
					paddingLeft: "0 !important",
					paddingTop: "1rem",
					backgroundImage: `url(${DescriptionBackground})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "top",
				}}
			>
				<Container className="home-description-section">
					<BriefDescription
						text="ПОДРОБНЕЕ..."
						title="МЕДИЦИНСКИЙ ТУРИЗМ"
						description="Мы хотим, чтобы наши пациенты не только получили высококачественные медицинские услуги от опытных врачей Турции, но и имели возможность открыть для себя и полюбить эту страну.
				Анталия — город, наполненный очарованием и красотой. Он известен своими потрясающими пляжами, бирюзовыми водами и захватывающими дух природными ландшафтами. В свою очередь, Стамбул — поистине уникальный и захватывающий дух город, который может похвастаться сочетанием очарования старинной Европы и оживленных восточных базаров, древних амфитеатров и множества восхитительных ресторанов с национальной кухней.
				Мы приглашаем вас присоединиться к нам в захватывающих  экскурсиях, которые призваны обогатить ваш опыт и сделать путешествие незабываемым."
						headerStyle={{
							color: "#323334",
							paddingBottom: "1rem",
							fontSize: "4vw",
						}}
						descriptionStyle={{ fontSize: "1.2rem", color: "#323334" }}
						containerStyle={{
							background: "rgba(255, 255, 255)",
							paddingTop: "1rem",
							color: "black",
							borderRadius: "10px",
							boxShadow:
								" -2px 5px 8px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.2)",
						}}
					/>
				</Container>
			</div>
			<div className="mt-3" style={{ marginBottom: "5rem" }}>
				<BlogSection />
			</div>
			<ContactForm className="contact-form" />
		</div>
	);
}
