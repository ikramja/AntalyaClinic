import { Affix, Tabs } from "antd";
import Card from "./Components/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MenuTabs = (props) => {
	const [categoryData, setCategoryData] = useState(null);
	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BACKEND_BASE_URL + `/api/get/categories/`)
			.then((response) => {
				console.log(response);
				setCategoryData(response.data);
			});
	}, []);
	const menuItems = [
		{
			label: <div className="menu-tab-title">УСЛУГИ</div>,
			key: "УСЛУГИ",
			children: (
				<Row className="m-0 w-100 px-2">
					{categoryData &&
						categoryData.map((category) => (
							<Col key={category.cover_sub_header} md={3}>
								<Card
									cardImage={
										process.env.REACT_APP_BACKEND_BASE_URL +
										category.category_image
									}
									cardTitle={category.cover_sub_header}
									cardLink={`/category/${category.cover_header}/`}
									setShowMenu={props.setShowMenu}
									setShowContent={props.setShowContent}
								/>
								{category.category_articles.map((article) => (
									<Link
										style={{ textDecoration: "none" }}
										to={`/service/${article.cover_header}/`}
										onClick={() => {
											props.setShowMenu(false);
											props.setShowContent(true);
										}}
									>
										<h6
											style={{
												textAlign: "left",
												color: "black",
												fontWeight: "bold",
											}}
											className="p-2"
										>
											{article.cover_header}
										</h6>
									</Link>
								))}
							</Col>
						))}
				</Row>
			),
		},
		{
			label: <div className="menu-tab-title">О НАС</div>,
			key: "О НАС",
			children: (
				<Row className="px-3">
					<Col>
						<Card />
					</Col>
					<Col>
						<Card />
					</Col>
					<Col>
						<Card />
					</Col>
					<Col>
						<Card />
					</Col>
				</Row>
			),
		},
		{
			label: <div className="menu-tab-title">ГИД ПО ОТДЫХУ</div>,
			key: "ГИД ПО ОТДЫХУ",
			children: `ГИД ПО ОТДЫХУ`,
		},
		{
			label: <div className="menu-tab-title">ЦЕНЫ</div>,
			key: "ЦЕНЫ",
			children: `ЦЕНЫ`,
		},
		{
			label: <div className="menu-tab-title">КОНТАКТЫ</div>,
			key: "КОНТАКТЫ",
			children: "f",
		},
	];
	const onChange = (key) => {
		console.log(key);
	};

	return (
		categoryData && (
			<div style={{ zIndex: "1" }}>
				{" "}
				<Affix offsetTop={64}>
					<Tabs
						defaultActiveKey="3"
						items={menuItems}
						animated={{ inkBar: false }}
						className="menu-tabs"
					/>
				</Affix>
			</div>
		)
	);
};
export default MenuTabs;
