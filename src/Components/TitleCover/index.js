import "./index.css";
import Logo from "../../Assets/Logo/Logo.png";
import HomeCoverVideo from "../../Assets/Home/cover-video.mp4";

export default function CenterTitleCover({
	title,
	titleAlign,
	subtitle,
	Cover,
	type,
	source,
}) {
	return (
		<div className="h-100 d-flex align-items-end">
			<div
				className={
					"cover-text-container w-100" +
					(titleAlign === "center"
						? " pb-4"
						: titleAlign === "left"
						? ""
						: titleAlign === "right"
						? ""
						: "")
				}
				style={{
					display: "flex",

					alignItems: titleAlign === "center" ? "flex-end" : "",
					justifyContent:
						titleAlign === "left"
							? ""
							: titleAlign === "right"
							? "flex-end"
							: "center",
				}}
			>
				<div
					style={{ textAlign: "center" }}
					className="center-title-cover-text"
				>
					<h1>
						<span className="center-title-cover-name">{title}</span>
						<span className="center-title-cover-specialty">{subtitle}</span>
					</h1>
				</div>
				<img className="logo-left" src={Logo}></img>
			</div>
			{type === "image" ? (
				<img className="w-100 title-cover" src={source} />
			) : type === "video" ? (
				<video
					className="w-100 title-cover"
					src={HomeCoverVideo}
					type="video/mp4"
					autoPlay
					loop
					muted
				/>
			) : null}
		</div>
	);
}
