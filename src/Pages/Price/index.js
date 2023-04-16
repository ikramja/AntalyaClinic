import "./index.css";
import PriceCategoryMenu from "./Components/PriceCategoryMenu";
import axios from "axios";
import PriceCover from "../../Assets/Covers/Price.png";
import React, { useState, useEffect } from "react";
import TitleCover from "../../Components/TitleCover";

export default function Price() {
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
		PricesData && (
			<div>
				<TitleCover title="СТОИМОСТЬ" titleAlign="center" Cover={PriceCover} />
				<PriceCategoryMenu PriceMenuData={PricesData} />
			</div>
		)
	);
}
