import "./index.css";
import SideImagSection from "../../Components/SideImageSection";
import Footer from "../../Layouts/Footer";
import BlogArticles from "../Blog/Components/BlogArticles";
import { Container } from "react-bootstrap";
import NewsLetter from "../../Components/NewsLetter";

export default function News() {
	return (
		<div>
			<Container>
				<div className="blog-title-container">
					<h1 className="blog-title mb-4">НОВОСТИ</h1>
				</div>
			</Container>
			<SideImagSection />
			<Container>
				<BlogArticles />
			</Container>
			<NewsLetter />
			<Footer />
		</div>
	);
}
