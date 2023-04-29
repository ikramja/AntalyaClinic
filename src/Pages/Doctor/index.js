import "./index.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import TitleCover from "../../Components/TitleCover";
import Doctor_Cover from "../../Assets/AboutOurDoctors/doctor_cover.png";
import { Button } from "antd";
import ContactForm from "../../Layouts/ContactForm";

import DoctorCertificatesCarousel from "./Components/DoctorCertificatesCarousel";
import { Link, useParams } from "react-router-dom";
import DoctorDescription from "./Components/DoctorDescription";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
export default function AboutOurDoctor() {
	const [doctorData, setDoctorData] = useState(null);
	const { doctorName } = useParams();
	useEffect(() => {
		axios.get(`/get/doctor/${doctorName}/`).then(({ data }) => {
			console.log(data);
			setDoctorData(data);
		});
	}, []);

	return (
		<div>
			{doctorData && (
				<div>
					<TitleCover
						title={doctorData.name_turkish}
						subtitle={doctorData.name_russian}
						titleAlign="center"
						Cover={Doctor_Cover}
					/>

					<Container>
						<DoctorDescription
							nameTurkish={doctorData.name_turkish}
							nameRussian={doctorData.name_russian}
							image={doctorData.image}
							aboutDoctor={doctorData.about_doctor}
						/>
						<DoctorCertificatesCarousel
							certificates={doctorData.certificates}
						/>
						{/* <div className="doctor-info-button-container  mb-3"></div> */}
						<div className="center-div m-4">
							<Link to="/our-doctors">
								<Button className="our-doctors-button">
									<div className="center-div">ПОСМОТРЕТЬ ВСЕХ ВРАЧЕЙ</div>
								</Button>
							</Link>
						</div>
					</Container>
				</div>
			)}
			<ContactForm />
		</div>
	);
}
