import LeftTitleCoverDoctor from "../../Assets/Covers/LeftTitleCoverDoctor.png";
import "./index.css";

export default function LeftTitleCover() {
	return (
		<div className="left-title-cover-container">
			<div className="left-title-cover-text">
				<h1>АЛЕКСАНДР АЛЕКСАНДРОВИЧ</h1>
				<h2>ПЛАСТИЧЕСКИЙ ХИРУРГ</h2>
			</div>
			<img className="w-100 left-title-cover" src={LeftTitleCoverDoctor} />
		</div>
	);
}
