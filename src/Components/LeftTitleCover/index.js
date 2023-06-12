import LeftTitleCoverDoctor from "../../Assets/Covers/LeftTitleCoverDoctor.png";
import "./index.css";

export default function LeftTitleCover(props) {
	return (
		<div className="left-title-cover-container">
			<div className="left-title-cover-text center-div">
				<div>
					<h3 className="doctor-name">{props.title}</h3>
					<h5 className="doctor-specialty">{props.subtitle}</h5>
				</div>
			</div>
			<img
				className="w-100 left-title-cover"
				src={LeftTitleCoverDoctor}
				alt={decodeURIComponent(
					LeftTitleCoverDoctor.split("/").pop().split(".")[0]
				)}
			/>
		</div>
	);
}
