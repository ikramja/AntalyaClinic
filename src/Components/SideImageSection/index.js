import { Col, Container, Row } from "react-bootstrap";
import Side from "../../Assets/Blog/side.png";
import "./index.css";
import { Link } from "react-router-dom";

export default function SideImagSection(props) {
	return props.clickable ? (
		<Link
			style={{ textDecoration: "none", color: "#545454" }}
			to={
				props.blog
					? `/blog/${props.articleData.title}`
					: `/news/${props.articleData.title}`
			}
		>
			<div>
				<Container>
					<Row className="center-div">
						<Col md={6} className="center-div">
							<img
								className="blog-side-image w-100"
								src={props.articleData.image}
							></img>
						</Col>
						<Col md={6} className="center-div ">
							<div>
								<h1
									style={{
										fontSize: "2rem",
									}}
									className="mb-4 blog-side-image-header mt-4"
								>
									{props.articleData.title}
								</h1>
								<div className="blog-side-image-text center-div">
									<p>{props.articleData.head}</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</Link>
	) : (
		<div>
			<Container>
				<Row className="center-div">
					<Col md={6} className="center-div">
						<img
							className="blog-side-image w-100"
							src={props.articleData.image}
						></img>
					</Col>
					<Col md={6} className="center-div ">
						<div>
							<h1
								style={{
									fontSize: "2rem",
								}}
								className="mb-4 blog-side-image-header mt-4"
							>
								{props.articleData.title}
							</h1>
							<div className="blog-side-image-text center-div">
								<p>{props.articleData.head}</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
