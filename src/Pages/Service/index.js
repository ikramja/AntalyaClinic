import "./index.css";
import BriefRight from "../../Assets/briefDescription/BriefRight.png";
import BriefLeft from "../../Assets/briefDescription/BriefLeft.png";
import TitleCover from "../../Components/TitleCover";
import BriefDescription from "../../Components/BriefDescription";
import IconItemsList from "./Components/IconItemsList";
import beforeLastBackground from "../../Assets/ServicesIcons/beforeLastBackground.png";
import ResultsCarousel from "./Components/ResultsCarousel";
import RecoveryIconList from "./Components/RecoveryIconList";
import ScrollSpySection from "./Components/ScrollSpySection";
import PriceCover from "../../Assets/Covers/Price.png";
import articleLeftTree from "../../Assets/ServicesIcons/articleLeftTree.png";
import ServicePageCover from "../../Assets/Covers/ServicePageCover.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Service() {
	const [articleData, setArticleData] = useState(null);
	const { serviceName } = useParams();
	useEffect(() => {
		axios.get(`/get/service/${serviceName}/`).then((Response) => {
			console.log(Response);
			setArticleData(Response.data);
		});
	}, []);
	return (
		articleData && (
			<div>
				<TitleCover
					title={articleData.cover_header}
					subtitle={articleData.cover_sub_header}
					titleAlign="center"
					Cover={articleData.cover_image}
				/>
				{articleData.brief_header && articleData.brief_description && (
					<BriefDescription
						button="УЗНАТЬ ЦЕНУ УСЛУГИ"
						title={articleData.brief_header}
						description={articleData.brief_description}
					/>
				)}
				<ScrollSpySection />

				<BriefDescription
					id="section1"
					borderRight={{ borderRight: " 10px solid #016245" }}
					subtitle="(ПОКАЗАНИЯ К ОПЕРАЦИИ)"
					title="КОМУ ПОДХОДИТ ПРОЦЕДУРА"
					description={articleData.surgery_for_whom}
					source={articleData.surgery_for_whom_left_image}
				/>

				<div
					className="my-5 py-2"
					style={{
						background: "#4D917E",
						// paddingTop: "2rem",
						backgroundImage: `url(${BriefRight}), url(${BriefLeft})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "auto 100%",
						backgroundPosition: "right bottom, left top",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-around",
						// backgroundPosition: "right top",
					}}
				>
					<BriefDescription
						id="section2"
						title="КАК ПРОХОДИТ ОПЕРАЦИЯ"
						description={articleData.how_surgery_works}
						containerStyle={{
							backgroundColor: " #016245BF",
							color: "white",
							borderRadius: "10px",
							boxShadow:
								" -2px 5px 8px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.2)",
						}}
					/>
				</div>
				<div
					style={{
						// paddingTop: "2rem",
						backgroundImage: `url(${articleLeftTree})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "auto 70%",
						backgroundPosition: "left top",

						// backgroundPosition: "right top",
					}}
				>
					<IconItemsList
						id="section3"
						hospitalization={articleData.day_of_surgery_hospitalization}
						preparation={articleData.surgery_preparation}
						anesthesia={articleData.anesthesia}
						duration={articleData.surgery_duration}
						description={articleData.day_of_surgery_description}
					/>

					<RecoveryIconList
						id="section4"
						recoveryPeriod={articleData.recovery_period}
						hospitalization={articleData.recovery_hospitalization}
						stitchesRemovalPeriod={articleData.stitches_removal_period}
						numberOfPostSurgeryVisits={
							articleData.number_of_post_surgery_visits
						}
						medicines={articleData.medicines}
						attention={articleData.attention}
						description={articleData.recovery_description}
					/>
				</div>
				<ResultsCarousel id="section5" images={articleData.results_images} />
				<Container
					style={{
						// paddingTop: "2rem",
						backgroundImage: `url(${beforeLastBackground})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "auto 100%",
						backgroundPosition: "right top",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-around",
						// backgroundPosition: "right top",
					}}
				>
					<BriefDescription
						id="section6"
						title="ПРОТИВОПАКАЗАНИЯ"
						description={articleData.side_effects}
						containerStyle={{
							background: "rgba(255, 255, 255, 0.79)",

							color: "black",
							borderRadius: "10px",
							boxShadow:
								" -2px 5px 8px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.2)",
						}}
					/>
				</Container>
				<BriefDescription
					id="section7"
					title="ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ"
					description={articleData.faq}
				/>
			</div>
		)
	);
}
