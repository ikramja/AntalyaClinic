import "./index.css";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const StandardCard = (props) => {
	const { height } = props;
	return (
		<Link className="link-no-text-decoration" to="/">
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
					title={props.cardTitle}
					description=<div style={props.cardDescriptionStyle}>
						{props.cardDescription}
					</div>
				/>
			</Card>
		</Link>
	);
};
export default StandardCard;
