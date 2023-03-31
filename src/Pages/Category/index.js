import "./index.css";
import CategoryList from "./Components/CategoryList";
import TitleCover from "../../Components/TitleCover";
import CategoryCover from "../../Assets/Covers/Category.png";

export default function Category() {
	return (
		<div>
			<TitleCover
				title="ПЛАСТИКА"
				subtitle="ЛИЦА И ШЕИ"
				titleAlign="center"
				Cover={CategoryCover}
			/>
			<CategoryList />
		</div>
	);
}
