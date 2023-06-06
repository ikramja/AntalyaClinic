import "./index.css";
import SideImagSection from "../../Components/SideImageSection";
import { Container } from "react-bootstrap";
import { Button } from "antd";
import { Rate } from "antd";
import Footer from "../../Layouts/Footer";
import NewsLetter from "../../Components/NewsLetter";
import { Comments, Auth } from "react-vk";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BlogArticle() {
	const { articleTitle } = useParams();
	const [articleData, setArticleData] = useState(null);
	useEffect(() => {
		axios.get(`get/blog/article/${articleTitle}/`).then((Response) => {
			setArticleData(Response.data);
		});
	}, []);
	return (
		articleData && (
			<div className="blog-article">
				<Link to="/blog" style={{ textDecoration: "none", color: "#545454" }}>
					<Container>
						<div className="blog-title-container">
							<h1 className="blog-title mb-4">БЛОГ</h1>
						</div>
					</Container>
				</Link>

				<SideImagSection articleData={articleData} clickable={false} />
				<Container>
					<div
						className="blog-article-text mt-5"
						dangerouslySetInnerHTML={{ __html: articleData.description }}
					></div>
					<div className="stars-section-blog my-5">
						<p
							className="mb-0 me-4"
							style={{
								color: "#323334",
								fontWeight: "bold",
								fontSize: "1.2rem",
							}}
						>
							НАСКОЛЬКО ВАМ БЫЛА ПОЛЕЗНА СТАТЬЯ?
						</p>
						<Rate allowClear={false} defaultValue={articleData.rating} />
						<span className="ant-rate-text "></span>
					</div>
					<Comments pageId="1" />
					<div className="center-div m-5">
						<Link to="/blog" style={{ textDecoration: "none" }}>
							<Button
								className="blog-articles-button center-div p-4 "
								// onClick={() => setShowAllDoctors(true)}
							>
								ВСЕ СТАТЬИ
							</Button>
						</Link>
					</div>
				</Container>
				<NewsLetter />
				<Footer />
			</div>
		)
	);
}
