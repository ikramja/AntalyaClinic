import { Col, Container, Row } from "react-bootstrap";
import Side from "../../Assets/Blog/side.png";
import "./index.css";

export default function SideImagSection() {
	return (
		<div>
			<Container>
				<Row className="center-div">
					<Col md={6} className="center-div">
						<img className="blog-side-image w-100" src={Side}></img>
					</Col>
					<Col md={6} className="center-div ">
						<div>
							<h1
								style={{
									fontSize: "2rem",
								}}
								className="mb-4 blog-side-image-header mt-4"
							>
								ЧТО МОЖЕТ ДАТЬ ПЛАСТИЧЕСКАЯ ХИРУРГИЯ ИЗ, НЕЛЬЗЯДОБИТЬСЯ В
								СПОРТЗАЛЕ.
							</h1>
							<div className="blog-side-image-text center-div">
								<p>
									Все мы хотим идеальное тело и вечно молодое лицо, но
									постоянный стресс, бесконечная работа, городской ритм и плохая
									экология берут свое. Все мы хотим идеальное тело и вечно
									молодое лицо, но постоянный стресс, бесконечная работа,
									городской ритм и плохая экология берут свое.
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
