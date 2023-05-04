import { Col, Container, Row } from "react-bootstrap";
import "./index.css";

export default function ImageBriefDescription(props) {
	return (
		<div className=" my-5 " style={props.borderRight ? props.borderRight : {}}>
			<Row className="w-100 mx-5">
				<Col lg={6} className="px-0">
					<img
						className="image-Brief-description-image w-100 "
						src={props.source}
					></img>
				</Col>
				<Col lg={6} className="image-brief-description-text-column ">
					<div id={props.id} className="section px-5">
						<h1 className="image-brief-description-header mt-2 mb-0">
							{props.title}
						</h1>

						{props.subtitle && (
							<div>
								<br />
								<h2 className="image-brief-description-subtitle mb-3">
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
