import "./index.css";
import { Link } from "react-router-dom";
export default function Card(props) {
	return (
		<div className="menu-card ">
			<Link to={props.cardLink} style={{ textDecoration: "none" }}>
				<div
					class="menu-card-image-container mb-3 "
					onClick={() => {
						props.setShowMenu(false);
						props.setShowContent(true);
					}}
				>
					<img
						src={props.cardImage}
						alt={decodeURIComponent(
							props.cardImage.split("/").pop().split(".")[0]
						)}
						className="menu-card-image "
					/>
				</div>
				<div
					className="menu-card-title my-1 "
					onClick={() => {
						props.setShowMenu(false);
						props.setShowContent(true);
					}}
				>
					<h1
						style={{
							fontSize: "1.2rem",
							fontWeight: "700",
							lineHeight: "33px",
							color: "black",
						}}
					>
						{props.cardTitle}
					</h1>
				</div>
			</Link>
		</div>
	);
}
