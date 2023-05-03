import "./index.css";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const StandardCardTitle = (props) => {
	return (
		<h1 style={{ display: "flex", flexDirection: "column" }}>
			<span
				className="px-0 mb-2"
				style={{
					fontSize: "1.25rem",
					maxWidth: "220px",
					display: "block",
					wordWrap: "break-word",
				}}
			>
				{props.cardTitle}
			</span>

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
	return (
		<Link className="link-no-text-decoration" to={props.link}>
			<Card
				className="standard-card"
				cover={
					<img
						src={props.cardImage}
						className="standard-card-image"
						style={{ height: `${height}px` }}
					/>
				}
			>
				<Meta
					title={
						<StandardCardTitle
							cardTitle={props.cardTitle}
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
