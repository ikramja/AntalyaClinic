import "./index.css";
import TitleCover from "../../Components/TitleCover";
import BriefDescription from "../../Components/BriefDescription";
import IconItemsList from "./Components/IconItemsList";
import ResultsCarousel from "./Components/ResultsCarousel";
import RecoveryIconList from "./Components/RecoveryIconList";
import ScrollSpySection from "./Components/ScrollSpySection";
import ServicePageCover from "../../Assets/Covers/ServicePageCover.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Service() {
	const [articleData, setArticleData] = useState(null);
	const { serviceName } = useParams();
	useEffect(() => {
		axios
			.get(
				process.env.REACT_APP_BACKEND_BASE_URL +
					`/api/get/service/${serviceName}/`
			)
			.then((Response) => {
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
					Cover={ServicePageCover}
				/>
				<BriefDescription
					button="УЗНАТЬ ЦЕНУ УСЛУГИ"
					title={articleData.brief_header}
					description={articleData.brief_description}
				/>
				<ScrollSpySection />
				<BriefDescription
					id="section1"
					subtitle="(ПОКАЗАНИЯ К ОПЕРАЦИИ)"
					title="КОМУ ПОДХОДИТ ПРОЦЕДУРА"
					description={articleData.surgery_for_whom}
				/>

				<BriefDescription
					id="section2"
					title="КАК ПРОХОДИТ ОПЕРАЦИЯ"
					description={articleData.how_surgery_works}
				/>

				<BriefDescription
					id="section3"
					title="ПРОТИВОПАКАЗАНИЯ"
					description={articleData.side_effects}
				/>
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
				<BriefDescription
					id="section7"
					title="ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ"
					description={articleData.faq}
				/>
			</div>
		)
	);
}
