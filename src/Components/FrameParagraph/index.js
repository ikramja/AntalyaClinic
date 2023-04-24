import { Container } from "react-bootstrap";
import "./index.css";

export default function FrameParagraph(props) {
	return (
		<div className="w-100 ">
			<Container className="center-div">
				<div className="frame-paragraph py-3 px-5">
					<h1 style={{ fontWeight: "bold" }}>{props.title}</h1>
					<div className="frame-paragraph-text">
						<p>{props.text}</p>
					</div>
				</div>
			</Container>
		</div>
	);
}
