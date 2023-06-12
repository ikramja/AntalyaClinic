import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import doctor1 from "../../../../Assets/AboutOurDoctors/Doctor_1.png";
import "./index.css";

export default function DoctorDescription(props) {
	return (
		<div>
			<Row className="my-5 w-100 mx-0">
				<Col md={8}>
					<Container className="px-4">
						<h1
							style={{ fontSize: "calc(1.325rem + .9vw)" }}
							className="doctor-info-name "
						>
							{props.nameTurkish}
						</h1>
						<h2
							style={{ fontSize: "calc(1.275rem + .3vw)" }}
							className="pb-4 doctor-info-name-russian"
						>
							{props.nameRussian}
						</h2>
						<div
							className="doctor-info-content"
							dangerouslySetInnerHTML={{ __html: props.aboutDoctor }}
						></div>
					</Container>
				</Col>

				<Col md={4} className="p-0 d-flex flex-column align-items-end m-0">
					<img
						src={props.image}
						alt={decodeURIComponent(props.image.split("/").pop().split(".")[0])}
						className="doctor-image w-100"
					></img>
				</Col>
			</Row>
		</div>
	);
}
