import "./index.css";
import { Button } from "antd";
import HomeCoverVideo from "../../../../Assets/Home/cover-video.mp4";
import Logo from "../../../../Assets/Logo/Logo.png";

export default function CoverVideo(props) {
	return (
		<div className="left-title-home-cover-container h-100">
			<div className="left-title-home-cover-text  center-div mt-5">
				<div>
					<h1 className="clinic-name mt-5">The Clinic for Plastic Surgery</h1>
					<h1 className="clinic-specialty">
						Клиника Пластической Хирургии в Анталии
					</h1>
				</div>
			</div>
			<div className="image-overlay-container">
				<video
					className="w-100 left-title-home-cover video-cover"
					autoPlay
					loop
					muted
				>
					<source src={HomeCoverVideo} type="video/mp4"></source>
				</video>
			</div>
			<img className="logo-right me-4 mb-2" src={Logo}></img>
		</div>
	);
}
