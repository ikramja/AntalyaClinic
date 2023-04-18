import "./index.css";
import AnalysesTable from "./Components/AnalysesTable";
import FrameParagraph from "../../Components/FrameParagraph";
import TitleCover from "../../Components/TitleCover";
import ForPatientsCover from "../../Assets/Covers/ForPatients.png";
import AnalysesTableBackground from "../../Assets/ForPatients/AnalysesTableBackground.png";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ForPatients() {
	const [surgeriesData, setSurgeriesData] = useState(null);
	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BACKEND_BASE_URL + `/api/get/services/`)
			.then((Response) => {
				console.log(Response);
				setSurgeriesData(Response.data);
			});
	}, []);
	return (
		surgeriesData && (
			<div>
				<TitleCover
					title="ПАМЯТКА"
					subtitle="ПАЦИЕНТА"
					titleAlign="center"
					Cover={ForPatientsCover}
				/>

				<AnalysesTable surgeriesData={surgeriesData} />

				<div
					className="mb-5"
					style={{
						paddingTop: "8rem",
						backgroundImage: `url(${AnalysesTableBackground})`,
						backgroundSize: "auto 100%",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "left",
					}}
				>
					<FrameParagraph />
				</div>
			</div>
		)
	);
}
