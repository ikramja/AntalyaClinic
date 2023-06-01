import "./index.css";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const StandardCardTitle = (props) => {
	return (
		<h1
			style={{ display: "flex", flexDirection: "column" }}
			className="center-div"
		>
			<span className="px-0 mb-2">{props.cardTitle}</span>

			<span
				style={{
					fontSize: "1rem",
					display: "block",
					maxWidth: "220px",
					wordWrap: "break-word",
				}}
			>
				{props.cardTitle2}
			</span>
		</h1>
	);
};

const StandardCard = (props) => {
	const { height } = props;
	const { width } = props;
	return (
		<Link className="link-no-text-decoration" to={props.link}>
			<Card
				style={{ width: `${width ? width : "240px"} ${width ? "%" : ""}` }}
				className="standard-card "
				cover={
					<img
						src={props.cardImage}
						className="standard-card-image"
						style={{ height: `${height}px`, width: `${width}%` }}
					/>
				}
			>
				<Meta
					title={
						<StandardCardTitle
							cardTitle={
								<div style={props.cardTitleStyle}>{props.cardTitle}</div>
							}
							cardTitle2={props.cardTitle2}
						/>
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
