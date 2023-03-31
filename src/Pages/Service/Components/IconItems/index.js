import "./index.css";

export default function IconItems(props) {
	return (
		<div className="icon-items-data">
			<img className="icon-image" src={props.icon}></img>
			<div className="icon-title">
				<h6 className="fw-bold">{props.title}</h6>
				<div className="icon-text">
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}
