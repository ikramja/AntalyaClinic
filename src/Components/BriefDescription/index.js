import "./index.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Button } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BriefDescription({
	id,
	title,
	subtitle,
	description,
	button,
	source,
	containerStyle,
	headerStyle,
	descriptionStyle,
	text,
}) {
	return (
		<div className="center-div">
			<Slide bottom cascade>
				<div
					style={containerStyle ? containerStyle : {}}
					className="brief-description"
				>
					<div>
						<Slide bottom delay={200}>
							<Container>
								<div id={id} className="section">
									<div>
										<h2
											className="Brief-description-header mt-2 my-1"
											style={headerStyle ? headerStyle : {}}
										>
											{title}
										</h2>

										{subtitle && (
											<div>
												<br />

												<h3 className="font-weight-bold pb-3">{subtitle}</h3>
											</div>
										)}
									</div>
								</div>
							</Container>
						</Slide>
						<Container className="mb-4">
							<div>
								<Row>
									{source && (
										<Col md={4}>
											<img
												className="Brief-description-image"
												src={source}
												alt={decodeURIComponent(
													source.split("/").pop().split(".")[0]
												)}
											></img>
										</Col>
									)}
									<Col md={source ? 8 : 12}>
										<div
											className="Brief-description px-4 "
											style={descriptionStyle ? descriptionStyle : {}}
											dangerouslySetInnerHTML={{ __html: description }}
										/>
									</Col>
								</Row>

								{button && (
									<div className="w-100 d-flex justify-content-end px-4">
										<Button className="brief-description-button px-4 py-4 my-4">
											{button}
										</Button>
									</div>
								)}
								{text && (
									<div className="w-100 mt-3">
										<div className="d-flex home-doctors-animation-text-container button-text-container">
											<Link
												to="/Excursion"
												style={{ textDecoration: "none", color: "black" }}
											>
												<p className="home-image-animation-text mb-0">
													ПОДРОБНЕЕ...
												</p>
											</Link>
											<div className="arrow-container">
												<Button shape="circle" className="circle-button" />

												<div className="button-arrow" />
											</div>
										</div>
									</div>
								)}
							</div>
						</Container>
					</div>
				</div>
			</Slide>
		</div>
	);
}
