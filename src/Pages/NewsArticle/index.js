import "./index.css";
import SideImagSection from "../../Components/SideImageSection";
import { Container } from "react-bootstrap";
import { Button } from "antd";
import NewsLetter from "../../Components/NewsLetter";
import Footer from "../../Layouts/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function NewsArticle() {
	const { articleTitle } = useParams();
	const [articleData, setArticleData] = useState(null);
	useEffect(() => {
		axios.get(`get/news/article/${articleTitle}/`).then((Response) => {
			console.log(Response);
			setArticleData(Response.data);
		});
	}, []);
	return (
		articleData && (
			<div>
				<Link to="/news" style={{ textDecoration: "none", color: "#545454" }}>
					<Container>
						<div className="blog-title-container">
							<h1 className="blog-title mb-4">НОВОСТИ</h1>
						</div>
					</Container>
				</Link>
				<SideImagSection articleData={articleData} clickable={false} />
				<Container>
					<div
						className="news-article-text mt-5"
						dangerouslySetInnerHTML={{ __html: articleData.description }}
					></div>
					<div className="center-div m-5">
						<Link to="/news" style={{ textDecoration: "none" }}>
							<Button className="blog-articles-button center-div p-4 mt-3">
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
