import { Col, Container, Row } from "react-bootstrap";
import "./index.css";

export default function ImageBriefDescription(props) {
	return (
		<Container>
			<div
				className=" my-5 "
				style={props.borderRight ? props.borderRight : {}}
			>
				<Container>
					<Row className="w-100 m-0">
						<Col lg={5} className="px-0">
							<img
								className="image-Brief-description-image w-100 h-100"
								src={props.source}
							></img>
						</Col>
						<Col lg={7} className="image-brief-description-text-column">
							<div id={props.id} className="section">
								<h1 className="image-brief-description-header mt-2 mb-0">
									{props.title}
								</h1>

								{props.subtitle && (
									<div>
										<br />
										<h2 className="image-brief-description-subtitle pb-3">
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
				</Container>
			</div>
		</Container>
	);
}
