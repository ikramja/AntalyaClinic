import "./index.css";
import BriefRight from "../../Assets/briefDescription/BriefRight.png";
import BriefLeft from "../../Assets/briefDescription/BriefLeft.png";
import TitleCover from "../../Components/TitleCover";
import BriefDescription from "../../Components/BriefDescription";
import IconItemsList from "./Components/IconItemsList";
import ResultsCarousel from "./Components/ResultsCarousel";
import RecoveryIconList from "./Components/RecoveryIconList";
import ScrollSpySection from "./Components/ScrollSpySection";
import PriceCover from "../../Assets/Covers/Price.png";
import ServicePageCover from "../../Assets/Covers/ServicePageCover.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
					subtitle="(ПОКАЗАНИЯ К ОПЕРАЦИИ)"
					title="КОМУ ПОДХОДИТ ПРОЦЕДУРА"
					description={articleData.surgery_for_whom}
					source={articleData.surgery_for_whom_left_image}
					borderRight={{ borderRight: "15px solid #016245" }}
				/>

				<div
					className="my-5"
					style={{
						background: "#4D917E",
						// paddingTop: "2rem",
						backgroundImage: `url(${BriefRight}), url(${BriefLeft})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "auto 100%",
						backgroundPosition: "right bottom, left top",
						// backgroundPosition: "right top",
					}}
				>
					<BriefDescription
						id="section2"
						title="КАК ПРОХОДИТ ОПЕРАЦИЯ"
						description={articleData.how_surgery_works}
						briefStyle={{
							backgroundColor: " #016245BF",
							color: "white",
							borderRadius: "10px",
							boxShadow:
								" -2px 5px 8px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.2)",
						}}
					/>
				</div>

				<IconItemsList
					id="section4"
					hospitalization={articleData.day_of_surgery_hospitalization}
					preparation={articleData.surgery_preparation}
					anesthesia={articleData.anesthesia}
					duration={articleData.surgery_duration}
					description={articleData.day_of_surgery_description}
				/>
				<RecoveryIconList
					id="section5"
					recoveryPeriod={articleData.recovery_period}
					hospitalization={articleData.recovery_hospitalization}
					stitchesRemovalPeriod={articleData.stitches_removal_period}
					numberOfPostSurgeryVisits={articleData.number_of_post_surgery_visits}
					medicines={articleData.medicines}
					attention={articleData.attention}
					description={articleData.recovery_description}
				/>
				<ResultsCarousel id="section6" images={articleData.results_images} />
				<div>
					<BriefDescription
						id="section3"
						title="ПРОТИВОПАКАЗАНИЯ"
						description={articleData.side_effects}
					/>
				</div>
				<BriefDescription
					id="section7"
					title="ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ"
					description={articleData.faq}
				/>
			</div>
		)
	);
}
