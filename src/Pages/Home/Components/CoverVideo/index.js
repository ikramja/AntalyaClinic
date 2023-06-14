import "./index.css";
import { Button } from "antd";
import Fade from "react-reveal/Fade";
import HomeCoverVideo from "../../../../videos/cover-video.mp4";
import Logo from "../../../../Assets/Logo/Logo.png";
import { motion } from "framer-motion";
import FadeInUpAnimation from "../../../../Components/FadeInUp";

export default function CoverVideo(props) {
	return (
		<div className="left-title-home-cover-container h-100">
			<div className="left-title-home-cover-text  center-div mt-5">
				<Fade top cascade delay={1000}>
					<h1 className="clinic-name mt-5">The Clinic for Plastic Surgery</h1>

					<h2 className="clinic-specialty">
						Клиника Пластической Хирургии в Анталии
					</h2>
				</Fade>
			</div>
			<div className="image-overlay-container">
				<video
					className="w-100 left-title-home-cover video-cover"
					playsInline
					autoPlay
					muted
					loop
				>
					<source
						src={HomeCoverVideo}
						alt={decodeURIComponent(
							HomeCoverVideo.split("/").pop().split(".")[0]
						)}
						type="video/mp4"
					/>
				</video>
			</div>
			<img className="logo-right me-4 mb-2" src={Logo}></img>
		</div>
	);
}
