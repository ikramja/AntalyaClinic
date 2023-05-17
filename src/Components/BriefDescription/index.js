import "./index.css";

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
	text,
}) {
	return (
		<div
			style={containerStyle ? containerStyle : {}}
			className="brief-description my-3"
		>
			<div>
				<Container>
					<div id={id} className="section">
						<div>
							<h1
								className="Brief-description-header mt-2 my-1"
								style={headerStyle ? headerStyle : {}}
							>
								{title}
							</h1>

							{/* {subtitle && (
								<div>
									<br />
									<h2 className="font-weight-bold pb-3">{subtitle}</h2>
								</div>
							)} */}
						</div>
					</div>
				</Container>

				<Container className="mb-4">
					<div>
						<Row>
							{source && (
								<Col md={4}>
									<img className="Brief-description-image" src={source}></img>
								</Col>
							)}
							<Col md={source ? 8 : 12}>
								<div
									className="Brief-description px-4 "
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
							<div className="w-100 d-flex  mt-3 home-doctors-animation-text-container pb-2">
								<Link
									to="/Excursion"
									style={{ textDecoration: "none", color: "black" }}
								>
									<p className="home-image-animation-text mb-0">ПОДРОБНЕЕ...</p>
								</Link>
								<div className="arrow-container">
									<Button shape="circle" className="circle-button" />
									<div className="button-arrow" />
								</div>
							</div>
						)}
					</div>
				</Container>
			</div>
		</div>
	);
}
