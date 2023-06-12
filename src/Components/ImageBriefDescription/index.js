import { Col, Container, Row } from "react-bootstrap";
import "./index.css";

export default function ImageBriefDescription(props) {
	return (
		<div
			className=" mb-5 border-right"
			style={props.borderRight ? props.borderRight : {}}
		>
			<Row className="w-100  brief-image-description-row">
				<Col lg={4} className="px-0">
					<img
						className="image-Brief-description-image w-100"
						src={props.source}
						alt={decodeURIComponent(
							props.source.split("/").pop().split(".")[0]
						)}
					></img>
				</Col>
				<Col lg={8} className="image-brief-description-text-column ">
					<div
						id={props.id}
						className="section  image-brief-description-section-container"
					>
						<h3
							style={{ fontSize: "calc(1.375rem + 1.5vw)" }}
							className="image-brief-description-header mt-2 mb-1 "
						>
							{props.title}
						</h3>

						{props.subtitle && (
							<h4 className="image-brief-description-subtitle mb-3">
								{props.subtitle}
							</h4>
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
