import "./index.css";
import { Link } from "react-router-dom";
export default function Card() {
	return (
		<div className="menu-card w-100 p-2">
			<div class="menu-card-image-container w-100 mb-4">
				<img
					src="https://images.pexels.com/photos/6605193/pexels-photo-6605193.jpeg"
					className="menu-card-image w-100"
				></img>
			</div>
			<h3 className="menu-card-title my-1">ДЛЯ ПАЦИЕНТОВ</h3>
			<a className="menu-card-article" href="/">
				Памятки пациентам
			</a>
		</div>
	);
}
