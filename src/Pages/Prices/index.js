import "./index.css";
import PriceCategoryMenu from "./Components/PriceCategoryMenu";
import axios from "axios";
import PriceCover from "../../Assets/Covers/Price.png";
import Footer from "../../Layouts/Footer";
import React, { useState, useEffect } from "react";
import TitleCover from "../../Components/TitleCover";
import ContactForm from "../../Layouts/ContactForm";

export default function Prices() {
	const [PricesData, setPricesData] = useState(null);
	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BACKEND_BASE_URL + `/api/get/services/prices/`)
			.then((Response) => {
				console.log(Response);
				setPricesData(Response.data);
			});
	}, []);
	return (
		<div>
			{PricesData && (
				<div>
					<TitleCover
						title="СТОИМОСТЬ"
						titleAlign="center"
						Cover={PriceCover}
					/>
					<PriceCategoryMenu PriceMenuData={PricesData} />
				</div>
			)}
			<ContactForm className="contact-form" />
			<Footer />
		</div>
	);
}
