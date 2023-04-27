import "./index.css";
import { Carousel, Button, Image } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { LeftOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";

const images = [
	"https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg",
	"https://images.pexels.com/photos/3767403/pexels-photo-3767403.jpeg",
	"https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg",
];

function getFilenameWithoutExtension(url) {
	const pathComponents = url.split("/");
	const filename = pathComponents[pathComponents.length - 1];
	const filenameComponents = filename.split(".");
	filenameComponents.pop();
	return filenameComponents.join(".");
}

export default function ResultsCarousel(props) {
	const carouselRef = useRef();
	const [currentSlide, setCurrentSlide] = useState(0);
	const settings = {
		dots: true,
		// infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div id={props.id} className="section">
			<h1 className="results-carousel-header mt-5">РЕЗУЛЬТАТ</h1>
			<h2 className="mb-5">До/После</h2>
			<div className="w-100 center-div my-5">
				<div className="result-carousel-image-container">
					<LeftOutlined
						className="prev-arrow"
						onClick={() => {
							setCurrentSlide(
								currentSlide === 0 ? images.length - 1 : currentSlide - 1
							);
							carouselRef.current.prev();
						}}
					/>
					<Carousel
						{...settings}
						ref={carouselRef}
						className="custom-carousel"
						afterChange={(current) => setCurrentSlide(current)}
					>
						{props.images.map((image) => (
							<div key={image}>
								<Image
									className="result-carousel-image"
									src={image.image}
									alt={getFilenameWithoutExtension(image.image)}
								/>
							</div>
						))}
					</Carousel>
					<RightOutlined
						className="next-arrow"
						onClick={() => {
							setCurrentSlide(
								currentSlide === images.length - 1 ? 0 : currentSlide + 1
							);
							carouselRef.current.next();
						}}
					/>
				</div>
			</div>
		</div>
	);
}
