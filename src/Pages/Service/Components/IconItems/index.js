import "./index.css";

export default function IconItems(props) {
	return (
		<div
			className="icon-items-data px-3 py-3 h-100"
			style={{
				background: "#FFFFFF",
				boxShadow:
					"-2px 5px 8px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.2)",
				borderRadius: "10px",
			}}
		>
			<img
				className="icon-image"
				src={props.icon}
				alt={decodeURIComponent(props.icon.split("/").pop().split(".")[0])}
			></img>
			<div className="icon-title">
				<h4 style={{ fontSize: "1rem" }} className="fw-bold">
					{props.title}
				</h4>
				<div className="icon-text">
					<p className="my-0">{props.description}</p>
				</div>
			</div>
		</div>
	);
}
