import "./index.css";
import "swiper/css";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Image } from "antd";

export default function DoctorCertificatesCarousel(props) {
	const [swiper, setSwiper] = useState(null);

	const handleClick = (index) => {
		swiper.slideTo(index);
	};

	return (
		props.certificates && (
			<div style={{ width: "300px" }} className="w-100 mY-5">
				<Swiper
					spaceBetween={5}
					onSwiper={setSwiper}
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 20,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					initialSlide={2}
					className="mySwiper"
				>
					{props.certificates.map((certificate) => (
						<SwiperSlide
							onClick={() => handleClick(certificate.id - 1)}
							key={certificate.id}
						>
							{/* <img
								src={certificate.image}
								alt={"slide" + certificate.id}
								className="swiper-zoom-container"
							/> */}

							<Image
								src={certificate.image}
								alt={"slide" + certificate.id}
								className="swiper-zoom-container"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		)
	);
}
