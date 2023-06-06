import "./index.css";
import SideImagSection from "../../Components/SideImageSection";
import Footer from "../../Layouts/Footer";
import BlogArticles from "../Blog/Components/BlogArticles";
import { Container } from "react-bootstrap";
import NewsLetter from "../../Components/NewsLetter";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function News() {
	const [allArticles, setAllArticles] = useState(null);
	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BACKEND_BASE_URL + "/api/get/news/articles/")
			.then((response) => {
				setAllArticles(response.data);
				// const data = response.data;
				// const duplicatedData = Array(10)
				// 	.fill()
				// 	.flatMap(() => data);
				// setAllArticles(duplicatedData);
			});
	}, []);
	return (
		allArticles && (
			<div>
				<Link to="/news" style={{ textDecoration: "none", color: "#545454" }}>
					<Container>
						<div className="blog-title-container">
							<h1 className="news-title mb-4">НОВОСТИ</h1>
						</div>
					</Container>
				</Link>
				<SideImagSection
					articleData={allArticles[0]}
					blog={false}
					clickable={true}
				/>
				<Container>
					<BlogArticles allArticles={allArticles} blog={false} />
				</Container>
				<NewsLetter />
				<Footer />
			</div>
		)
	);
}
