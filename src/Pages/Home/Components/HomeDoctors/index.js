import "./index.css";

import StandardCard from "../../../../Components/StandardCard";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function HomeDoctors() {
	const [doctors, setDoctors] = useState(null);
	const [showAllDoctors, setShowAllDoctors] = useState(false);
	useEffect(() => {
		axios.get("/get/doctors/").then(({ data }) => {
			setDoctors(data);
		});
	}, []);
	return (
		doctors && (
			<div>
				<h1 style={{ fontSize: "2rem", fontWeight: "bold" }} className="mb-3">
					НАШИ СПЕЦИАЛИСТЫ
				</h1>
				<Container>
					<Row className="w-100 card-doctor-home-row">
						{doctors
							.slice(0, showAllDoctors ? doctors.length : 3)
							.map((doctor) => (
								<Col lg={4} key={doctor.id} className="center-div mb-2">
									<div className="card-doctor-home-container px-3 py-3">
										<StandardCard
											cardTitleStyle={{ fontSize: "1.3rem" }}
											height={350}
											cardImage={doctor.image}
											cardTitle={doctor.name_turkish}
											cardDescription={doctor.specialization.name}
											link={`/doctor/${doctor.name_english}/`}
										/>
									</div>
								</Col>
							))}
						<div className="w-100 pb-0">
							<div className="d-flex mt-4 home-doctors-animation-text-container button-text-container">
								<Link
									to="our-doctors"
									style={{ textDecoration: "none", color: "black" }}
								>
									<p className="home-image-animation-text mb-0">ПОДРОБНЕЕ...</p>
								</Link>
								<div className="arrow-container">
									<Button shape="circle" className="circle-button" />
									<div className="button-arrow" />
								</div>
							</div>
						</div>
					</Row>
				</Container>
			</div>
		)
	);
}
