import "./index.css";
import Logo from "../../Assets/Logo/Logo.png";
import HomeCoverVideo from "../../videos/cover-video.mp4";

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
					<div>
						<h1 className="center-title-cover-name">{title}</h1>
						<h2 className="center-title-cover-specialty">{subtitle}</h2>
					</div>
				</div>
				<img
					className="logo-left"
					src={Logo}
					alt={decodeURIComponent(Logo.split("/").pop().split(".")[0])}
				></img>
			</div>
			{type === "image" ? (
				<img className="w-100 title-cover" src={source} />
			) : type === "video" ? (
				<video
					className="w-100 title-cover"
					src={HomeCoverVideo}
					alt={decodeURIComponent(
						HomeCoverVideo.split("/").pop().split(".")[0]
					)}
					type="video/mp4"
					autoPlay
					loop
					muted
				/>
			) : null}
		</div>
	);
}
