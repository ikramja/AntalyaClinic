import "./index.css";
import Cover_Video from "../../../../Assets/Home/CoverVideo.mp4";
import { Button } from "antd";

export default function CoverVideo() {
	return (
		<div className="left-title-home-cover-container h-100">
			<div className="left-title-home-cover-text center-div">
				<div>
					<h3 className="clinic-name">The Clinic for Plastic Surgery</h3>
					<h1 className="clinic-specialty">
						Клиника Пластической <br />
						<span>Хирургии</span>
					</h1>
					<Button className="home-cover-button mt-4">
						Записаться на прием
					</Button>
				</div>
			</div>

			<video
				className="w-100 left-title-home-cover"
				autoplay
				muted
				loop
				playsinline
			>
				<source src={Cover_Video} type="video/mp4" />
			</video>
		</div>
	);
}
