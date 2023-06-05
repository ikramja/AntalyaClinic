import "./index.css";
import AnalysesTable from "./Components/AnalysesTable";
import FrameParagraph from "../../Components/FrameParagraph";
import TitleCover from "../../Components/TitleCover";
import ForPatientsCover from "../../Assets/Covers/ForPatients.png";
import AnalysesTableBackground from "../../Assets/ForPatients/AnalysesTableBackground.png";
import { useEffect, useState } from "react";
import ContactForm from "../../Layouts/ContactForm";
import Footer from "../../Layouts/Footer";

import axios from "axios";
import { Container } from "react-bootstrap";
export default function ForPatients() {
	const [surgeriesData, setSurgeriesData] = useState(null);
	useEffect(() => {
		axios.get("/get/services/").then((Response) => {
			console.log(Response);
			setSurgeriesData(Response.data);
		});
	}, []);
	return (
		<div>
			{surgeriesData && (
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
							paddingTop: "4rem",
							backgroundImage: `url(${AnalysesTableBackground})`,
							backgroundSize: "auto 130%",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "left",
						}}
					>
						<FrameParagraph
							title="ВАЖНО ОБРАТИТЬ ВНИМАНИЕ"
							text="Перед операцией важно бросить курить и употреблять алкоголь, так как эти привычки несовместимы с процедурой. Никотин, содержащийся в сигаретах, может замедлить процесс заживления на 25% и увеличить вероятность гибели тканей в области хирургического вмешательства. Это связано с тем, что никотин влияет на кровообращение, что приводит к снижению снабжения тканей кислородом и питательными веществами. С другой стороны, употребление алкоголя может вызвать стойкий отек из-за задержки жидкости в межклеточном пространстве. Он также может препятствовать естественному процессу детоксикации клеток и препятствовать нормальным метаболическим функциям. Чтобы обеспечить правильную регенерацию тканей после операции, крайне важно воздерживаться от любых алкогольных напитков, независимо от их крепости."
						/>
					</div>
				</div>
			)}

			<ContactForm className="contact-form" />
			<Footer />
		</div>
	);
}
