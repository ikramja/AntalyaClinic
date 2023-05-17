import "./index.css";
import Cover_Video from "../../../../Assets/Home/CoverVideo.mp4";
import { Button } from "antd";
import Logo from "../../../../Assets/Logo/Logo.png";

export default function CoverVideo() {
	return (
		<div className="left-title-home-cover-container h-100">
			<div className="left-title-home-cover-text  center-div">
				<div>
					<h1 className="clinic-name mt-3">The Clinic for Plastic Surgery</h1>
					<h1 className="clinic-specialty">
						Клиника Пластической Хирургии в Анталии
					</h1>
					<Button className="home-cover-button  ">ЗАПИСАТЬСЯ НА ПРИЕМ</Button>
				</div>
			</div>

			<video
				className="w-100 left-title-home-cover"
				muted
				loop
				playsInline
				autoPlay
			>
				<source
					src={Cover_Video}
					type="video/mp4"
					className="w-100 video-cover"
				/>
			</video>
			<img className="logo-right me-4 mb-2" src={Logo}></img>
		</div>
	);
}
