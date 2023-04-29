import "./index.css";
import { Button } from "antd";
import { Col, Container, Row } from "react-bootstrap";

export default function BriefDescription({
	id,
	title,
	subtitle,
	description,
	button,
	source,
	briefStyle,
	containerStyle,
	headerStyle,
	borderRight,
}) {
	return (
		<div
			style={
				(containerStyle ? containerStyle : {}, briefStyle ? briefStyle : {})
			}
			className="brief-description my-3 "
		>
			<Container>
				<div id={id} className="section">
					<div>
						<h1
							className="Brief-description-header mt-2"
							style={headerStyle ? headerStyle : {}}
						>
							{title}
						</h1>

						{subtitle && (
							<div>
								<br />
								<h2 className="font-weight-bold pb-3">{subtitle}</h2>
							</div>
						)}
					</div>
				</div>
			</Container>
			<div style={borderRight ? borderRight : {}}>
				<Container className="my-4">
					<div className="py-2">
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
					</div>
				</Container>
			</div>
		</div>
	);
}
