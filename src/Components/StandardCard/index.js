import "./index.css";
import { Card } from "antd";
import { Link } from "react-router-dom";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

const { Meta } = Card;

const StandardCardTitle = (props) => {
	return (
		<div
			style={{ display: "flex", flexDirection: "column" }}
			className="center-div"
		>
			<h3 className="px-0 mb-2">{props.cardTitle}</h3>

			<h4
				style={{
					fontSize: "1rem",
					display: "block",
					maxWidth: "220px",
					wordWrap: "break-word",
				}}
			>
				{props.cardTitle2}
			</h4>
		</div>
	);
};

const StandardCard = (props) => {
	const { height } = props;
	const { width } = props;

	return (
		<Link
			className="link-no-text-decoration"
			to={props.link}
			style={{ width: props.linkWidth }}
		>
			<Card
				style={{ width: `${width ? width : ""} ${width ? "%" : ""}` }}
				className="standard-card "
				cover={
					<Pulse top delay={500}>
						<img
							src={props.cardImage}
							className="standard-card-image"
							style={{
								height: `${height}px`,
								width: `${width}%`,
								borderRadius: props.imageBorderRadius,
								borderRight: props.rightGreenBorder && "11px solid #016245",
							}}
							alt={decodeURIComponent(
								props.cardImage.split("/").pop().split(".")[0]
							)}
						/>
					</Pulse>
				}
			>
				<Meta
					title={
						<Fade top delay={500} cascade duration={4000}>
							<StandardCardTitle
								cardTitle={
									<div>
										<div style={props.cardTitleStyle}>{props.cardTitle}</div>

										<div
											className="mt-2"
											style={{
												color: " #016245",
												fontWeight: "Bold",
												fontSize: "0.7rem",
											}}
										>
											{props.DoctorRate}
										</div>
									</div>
								}
								cardTitle2={props.cardTitle2}
							/>
						</Fade>
					}
					description={
						<div style={props.cardDescriptionStyle}>
							{props.cardDescription}
						</div>
					}
				/>
			</Card>
		</Link>
	);
};

export default StandardCard;
