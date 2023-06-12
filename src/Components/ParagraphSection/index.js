import { Container } from "react-bootstrap";
import "./index.css";

export default function ParagraphSection(props) {
	return (
		<div
			className="Paragraph-Section py-5"
			style={{
				backgroundImage:
					props.backgroundImage && `url(${props.backgroundImage})`,
			}}
		>
			<Container className="paragraph-section-container">
				<h1>{props.title}</h1>
				<p className="paragraph-section">{props.description}</p>
			</Container>
		</div>
	);
}
