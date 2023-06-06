import "./index.css";
import CategoryList from "./Components/CategoryList";
import TitleCover from "../../Components/TitleCover";
import CategoryCover from "../../Assets/Covers/Category.png";
import axios from "axios";
import Footer from "../../Layouts/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../../Layouts/ContactForm";

export default function Category() {
	const [categoryData, setCategoryData] = useState(null);
	const { categoryName } = useParams();
	useEffect(() => {
		axios.get(`/get/category/${categoryName}/`).then(({ data }) => {
			console.log(data);
			setCategoryData(data);
		});
	}, []);
	return (
		<div>
			<div>
				{categoryData && (
					<>
						<TitleCover
							title={categoryData.cover_header}
							subtitle={categoryData.cover_sub_header}
							titleAlign="center"
							Cover={categoryData.cover_image}
						/>
						<CategoryList category_articles={categoryData.category_articles} />
					</>
				)}
			</div>
			<ContactForm className="contact-form" />
			<Footer />
		</div>
	);
}
