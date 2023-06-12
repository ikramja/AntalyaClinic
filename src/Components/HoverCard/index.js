import "./index.css";
export default function HoverCard(props) {
	return (
		<div className="center-div">
			<div className="hover-card-container">
				<img
					src={props.hoverCard}
					alt={decodeURIComponent(
						props.hoverCard.split("/").pop().split(".")[0]
					)}
					className="hover-card-image"
				></img>
				<div className="hover-card-text w-100 h-100">
					<p>{props.hoverCardText1}</p>
					<p>{props.hoverCardText2}</p>
					<p>{props.hoverCardText3}</p>
				</div>
			</div>
		</div>
	);
}
