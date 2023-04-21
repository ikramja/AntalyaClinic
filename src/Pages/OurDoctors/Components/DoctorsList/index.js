import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "antd";
import StandardCard from "../../../../Components/StandardCard";
import Doctor_1_Image from "../../../../Assets/AboutOurDoctors/Doctor_1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function DoctorsList() {
	const [doctors, setDoctors] = useState(null);
	const [showAllDoctors, setShowAllDoctors] = useState(false);
	useEffect(() => {
		axios
			.get('/get/doctors/')
			.then(({data}) => {
				setDoctors(data);
			});
	}, []);
	return (
		doctors && (
			<div>
				<Row className="my-5 mx-0">
					{doctors
						.slice(0, showAllDoctors ? doctors.length : 3)
						.map((doctor) => (
							<Col md="4" className="center-div" key={doctor.id}>
								{/* <Link to=> */}
								<StandardCard
									height={320}
									cardImage={doctor.image}
									cardTitle={doctor.name_turkish}
									cardTitle2={doctor.name_russian}
									cardDescription={doctor.specialization.name}
									link={`/doctor/${doctor.name_english}/`}
								/>
								{/* </Link> */}
							</Col>
						))}
				</Row>
				<div className="center-div m-4">
					<Button
						className="our-doctors-button"
						onClick={() => setShowAllDoctors(true)}
					>
						<div className="center-div">ПОСМОТРЕТЬ ВСЕХ ВРАЧЕЙ</div>
					</Button>
				</div>
			</div>
		)
	);
}
