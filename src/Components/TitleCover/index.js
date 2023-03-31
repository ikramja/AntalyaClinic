import "./index.css";
import Logo from "../../Assets/Logo/Logo.png";

export default function CenterTitleCover(props) {
	return (
		<div className="h-100 d-flex align-items-end">
			<div
				className={
					"cover-text-container w-100" +
					(props.titleAlign === "center"
						? " pb-4"
						: props.titleAlign === "left"
						? ""
						: props.titleAlign === "right"
						? ""
						: "")
				}
				style={{
					display: "flex",

					alignItems: props.titleAlign === "center" ? "flex-end" : "",
					justifyContent:
						props.titleAlign === "left"
							? ""
							: props.titleAlign === "right"
							? "flex-end"
							: "center",
				}}
			>
				<div
					style={{ textAlign: "center" }}
					className="center-title-cover-text"
				>
					<h3 className="center-title-cover-name">{props.title}</h3>
					<h5 className="center-title-cover-specialty">{props.subtitle}</h5>
				</div>
				<img className="logo-left" src={Logo}></img>
			</div>

			<img className="w-100 title-cover" src={props.Cover} />
		</div>
	);
}
