import "./index.css";
import SideImagSection from "../../Components/SideImageSection";
import BlogArticles from "./Components/BlogArticles";
import { Container } from "react-bootstrap";
import Footer from "../../Layouts/Footer";
import NewsLetter from "../../Components/NewsLetter";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Blog() {
	const [allArticles, setAllArticles] = useState(null);
	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BACKEND_BASE_URL + "/api/get/blog/articles/")
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
			<div className="blog ">
				<Link to="/blog" style={{ textDecoration: "none", color: "#545454" }}>
					<Container>
						<div className="blog-title-container">
							<h1 className="blog-title mb-4">БЛОГ</h1>
						</div>
					</Container>
				</Link>

				<SideImagSection
					articleData={allArticles[0]}
					blog={true}
					clickable={true}
				/>
				<Container>
					<BlogArticles allArticles={allArticles} blog={true} />
				</Container>
				<NewsLetter />
				<Footer />
			</div>
		)
	);
}
