import "./index.css";
import { Link } from "react-router-dom";
export default function Card(props) {
	return (
		<div className="menu-card w-100 p-2">
			<Link to={props.cardLink} style={{ textDecoration: "none" }}>
				<div
					class="menu-card-image-container w-100 mb-4"
					onClick={() => {
						props.setShowMenu(false);
						props.setShowContent(true);
					}}
				>
					<img src={props.cardImage} className="menu-card-image" />
				</div>
				<div
					className="menu-card-title my-1"
					onClick={() => {
						props.setShowMenu(false);
						props.setShowContent(true);
					}}
				>
					<h3>{props.cardTitle}</h3>
				</div>
			</Link>
		</div>
	);
}
