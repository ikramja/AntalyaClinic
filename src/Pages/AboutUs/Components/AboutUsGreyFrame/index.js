import "./index.css";
export default function GreyFrame(props) {
	return (
		<div
			className="about-us-grey-frame my-4 ps-4"
			style={{ width: props.width, ...props.style }}
		>
			<h1 className=" about-us-grey-frame-head">
				<h5 className="about-us-grey-frame-title">{props.subtitle}</h5>
				<span className="about-us-grey-frame-subtitle">{props.title}</span>
			</h1>
			<p className="about-us-grey-frame-text pb-4 mb-4">{props.text} </p>
		</div>
	);
}
