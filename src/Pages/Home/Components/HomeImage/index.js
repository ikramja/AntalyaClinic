import "./index.css";
import BigImage from "../../../../Assets/Home/bigImage.png";
import { Container } from "react-bootstrap";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { ImArrowRight } from "react-icons/im";
import ContactForm from "../../../../Layouts/ContactForm";
import { useEffect, useState } from "react";
import FadeInUpAnimation from "../../../../Components/FadeInUp";
import Fade from "react-reveal/Fade";

export default function HomeImage() {
	return (
		<div>
			<div
				style={{ position: "relative" }}
				className="big-image--white-frame-container-div"
			>
				<img src={BigImage} className="w-100 big-image"></img>
				<div>
					{/* <Fade bottom cascade delay={100}> */}
					<Container className="big-image--white-frame-container">
						<Fade bottom delay={100}>
							<h1
								style={{
									textAlign: "left",
									// fontFamily: "Montserrat",
									fontWeight: "600",
									fontSize: "1.5rem",
								}}
							>
								EL ARTE Анталия
							</h1>
						</Fade>
						<ul className="big-image-list">
							<Fade bottom cascade delay={90}>
								<li style={{ textAlign: "left", fontSize: "1.2rem" }}>
									Пластическая хирургияTelegram (ссылка)
								</li>
							</Fade>
							<Fade bottom cascade delay={80}>
								<li style={{ textAlign: "left", fontSize: "1.2rem" }}>
									ул. Мустафа Кемаль, Телефон:+7 (495) 181-10-83
								</li>
							</Fade>
							<Fade bottom cascade delay={70}>
								<li style={{ textAlign: "left", fontSize: "1.2rem" }}>
									График работы: с 9:00 до 21:00
								</li>
							</Fade>
						</ul>
					</Container>
					{/* </Fade> */}
					{/* <div className="w-100  mt-4">
						<div className="button-text-container d-flex home-image-animation-text-container">
							<Link
								to="/Contact"
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
				</div>

				<ContactForm
					className="alternate-context contact-form no-background"
					formWidth="1000px"
					formStyle={{
						position: "absolute",
						top: "-100px",
					}}
				/>
			</div>

			<div className="home-image-green">
				<Container className="py-5 home-image-green-container">
					<Container>
						<Fade bottom cascade delay={70}>
							<h1 className="pb-4  home-image-green-header">
								Добро пожаловать в клинику пластической хирургии EL ARTE Здесь
								красота встречается с опытом.
							</h1>
						</Fade>
					</Container>
					<Fade top cascade delay={70}>
						<p className="under-big-image-container-paragraph">
							Клиника эстетической медицины «LE ARTE» открыла свои двери в
							Турции. Современное инновационное оборудование клиники позволяет
							гостям получить комплексную эффективную диагностику, преображение
							и лечение. Команда врачей нашей клиники - профессионалы высокого
							класса, имеющие признанною сертификацию.
						</p>
					</Fade>
				</Container>
			</div>
		</div>
	);
}
