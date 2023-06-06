import ForPatientsCover from "../../Assets/Covers/ForPatients.png";
import TitleCover from "../../Components/TitleCover";
import { Col, Row } from "antd";
import ContactForm from "../../Layouts/ContactForm";
import Footer from "../../Layouts/Footer";
export default function Contact() {
	return (
		<div>
			<TitleCover
				title="КОНТАКТЫ"
				titleAlign="center"
				Cover={ForPatientsCover}
			/>

			<Row className="container py-5" align="middle">
				<Col sm={24} md={8}>
					<h1 style={{ fontSize: "1.5rem", fontWeight: "800" }}>Телефон:</h1>
					<h4 style={{ fontSize: "1.2rem", fontWeight: "400" }}>
						+7 (495) 181-10-83
					</h4>
					<a
						href="mailto:info@elarte.clinic"
						style={{
							textDecoration: "none",
						}}
					>
						<h5
							style={{
								fontSize: "1.4rem",
								fontWeight: "400",
								color: "green",
							}}
						>
							info@elarte.clinic
						</h5>
					</a>

					<h1
						className="mt-4"
						style={{ fontSize: "1.6rem", fontWeight: "800" }}
					>
						График работы:
					</h1>
					<h4 style={{ fontSize: "1.2rem", fontWeight: "400" }}>
						с 9:00 до 21:00
					</h4>
				</Col>
				<Col sm={24} md={16}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.808384275834!2d30.73670039999999!3d36.894932000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38538b4180bdf%3A0x9ddee6d1743fcc7e!2zTWVobWV0w6dpaywgVGVybWVzb3MgQmx2LiwgTXVyYXRwYcWfYS9BbnRhbHlhLCBUw7xya2l5ZQ!5e0!3m2!1sen!2sru!4v1682086472855!5m2!1sen!2sru"
						width="100%"
						height="500vh"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<h3
						className="mt-4 text-start"
						style={{ fontSize: "1.5rem", fontWeight: "700" }}
					>
						Mehmetçik Mah. Termesos Bulvarı Çınar Sitesi B blok No 16/B
						D28Muratpaşa, Antalya
					</h3>
				</Col>
			</Row>
			<ContactForm className="contact-form" />

			<Footer />
		</div>
	);
}
