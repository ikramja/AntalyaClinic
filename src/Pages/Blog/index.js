import "./index.css";
import SideImagSection from "../../Components/SideImageSection";
import BlogArticles from "./Components/BlogArticles";
import { Container } from "react-bootstrap";
import Footer from "../../Layouts/Footer";
import NewsLetter from "../../Components/NewsLetter";

export default function Blog() {
	return (
		<div className="blog ">
			<Container>
				<div className="blog-title-container">
					<h1 className="blog-title mb-4">БЛОГ</h1>
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
