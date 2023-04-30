import { Col, Container, Row } from "react-bootstrap";
import "./index.css";

export default function ImageBriefDescription(props) {
	return (
		<div
			className=" my-5 w-100"
			style={props.borderRight ? props.borderRight : {}}
		>
			<Row className="w-100">
				<Col md={4} className="px-0">
					<img
						className="image-Brief-description-image w-100"
						src={props.source}
					></img>
				</Col>
				<Col md={8} className="px--1">
					<div id={props.id} className="section">
						<h1 className="image-brief-description-header mt-2 mb-0">
							{props.title}
						</h1>

						{props.subtitle && (
							<div>
								<br />
								<h2 className="font-weight-bold image-brief-description-subtitle pb-3 pe-5">
									{props.subtitle}
								</h2>
							</div>
						)}

						<div
							className="image-Brief-description"
							dangerouslySetInnerHTML={{ __html: props.description }}
						/>
					</div>
				</Col>
			</Row>
		</div>
	);
}
