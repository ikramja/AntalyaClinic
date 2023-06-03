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
			<div className="home-doctor">
				<Container className="px-5">
					<Row className="px-5">
						<Col md={7}>
							<h1
								style={{
									fontSize: "4.5rem",
									fontFamily: "Oswald",
									fontWeight: "bold",
									textAlign: "left",
								}}
							>
								Наши доктора
							</h1>
						</Col>
						<Col md={5}>
							<h1
								style={{
									fontFamily: "Oswald",
									textAlign: "left",
									fontSize: "1.6rem",
									fontWeight: "bold",
									alignSelf: "flex-start",
								}}
							>
								Наша Философия
							</h1>
							<p className="home-doctor-text-header mb-4">
								Мы не только гордимся квалификацией наших врачей, но и уверены,
								что их заботливое и внимательное отношение к каждому пациенту -
								это неотъемлемая часть нашей философии. Мы стремимся
								предоставить не только медицинскую экспертизу, но и поддержку и
								внимание, чтобы вы чувствовали себя в надежных руках.
							</p>
						</Col>
					</Row>

					<Row className=" card-doctor-home-row center-div px-5">
						{doctors
							.slice(0, showAllDoctors ? doctors.length : 3)
							.map((doctor, i) => (
								<Col lg={4} key={doctor.id} className="center-div mb-2 px-1">
									<div className="card-doctor-home-container w-100">
										<StandardCard
											cardTitleStyle={{
												fontSize: "1.3rem",
												fontWeight: "bold",
												fontFamily: "Arsenal",
											}}
											height={350}
											width={100}
											cardImage={doctor.image}
											imageBorderRadius="0"
											cardTitle={doctor.name_turkish}
											DoctorRate="ПЛАСТИЧЕСКИЙ ХИРУРГ ВЫСШЕЙ КАТЕГОРИИ"
											link={`/doctor/${doctor.name_english}/`}
											rightGreenBorder={i === 2}
										/>
									</div>
								</Col>
							))}

						{/* <div className="w-100 pb-0">
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
						</div> */}
						<div style={{ display: "flex" }} className="w-100">
							<div className="me-3">
								<h1
									style={{
										fontWeight: "bolder",
										fontSize: "1.8rem",
										textAlign: "left",
									}}
								>
									900+
								</h1>
								<div class="progress-bar">
									<div class="progress" style={{ width: "80%" }}></div>
								</div>
								<h1
									className="mt-1"
									style={{
										fontSize: "0.7rem",
										textAlign: "left",
										fontWeight: "bolder",
									}}
								>
									Операций
								</h1>
							</div>
							<div className="ms-4">
								<h1
									style={{
										fontSize: "1.8rem",
										textAlign: "left",
										fontWeight: "bolder",
										width: "130px",
									}}
								>
									550+
								</h1>
								<div class="progress-bar">
									<div class="progress" style={{ width: "80%" }}></div>
								</div>
								<h1
									className="mt-1"
									style={{
										fontSize: "0.7rem",
										textAlign: "left",
										fontWeight: "bolder",
									}}
								>
									Довольных Клиентов
								</h1>
							</div>
							<div className="w-100">
								<h1
									style={{
										fontWeight: "bolder",
										fontSize: "1.8rem",
										textAlign: "left",
									}}
								>
									15+
								</h1>

								<div class="progress-bar ">
									<div class="progress" style={{ width: "60%" }}></div>
								</div>
								<h1
									className="mt-1"
									style={{
										fontSize: "0.7rem",
										textAlign: "left",
										fontWeight: "bolder",
									}}
								>
									Лет в медицине
								</h1>
							</div>
							<div className="w-100 contact-form-button-container my-3">
								<Button className="contact-form-button  py-1 px-5 ">
									Все врачи
								</Button>
							</div>
						</div>
					</Row>
				</Container>
			</div>
		)
	);
}
