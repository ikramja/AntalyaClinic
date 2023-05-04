import { Affix, Tabs } from "antd";
import Card from "./Components/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import about from "../../Assets/MenuTab/about.PNG";
import service from "../../Assets/MenuTab/service.png";
import forPatient from "../../Assets/MenuTab/forPatient.png";
import blog from "../../Assets/MenuTab/blog.png";

const MenuTabs = (props) => {
	const [doctors, setDoctors] = useState(null);
	const [categoryData, setCategoryData] = useState(null);
	const [showAllDoctors, setShowAllDoctors] = useState(false);
	useEffect(() => {
		axios.get("/get/doctors/").then(({ data }) => {
			setDoctors(data);
		});
	}, []);
	useEffect(() => {
		axios.get("/get/categories/").then(({ data }) => {
			console.log(data);
			setCategoryData(data);
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
									cardImage={category.category_image}
									cardTitle={category.category_name_in_menu}
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
				<Row className="w-100">
					<Col md={3}>
						<Card cardImage={about} cardTitle="НАШИ ДОКТОРА" />
					</Col>
					<Col md={3}>
						<Card cardImage={blog} cardTitle="БЛОГ" />
					</Col>
					<Col md={3}>
						<Card cardImage={forPatient} cardTitle="СЕРВИС" />
					</Col>
					<Col md={3}>
						<Card cardImage={service} cardTitle="ДЛЯ ПАЦИЕНТОВ" />
					</Col>
				</Row>
			),
		},
		{
			label: <div className="menu-tab-title">ГИД ПО ОТДЫХУ</div>,
			key: "ГИД ПО ОТДЫХУ",
		},
		{
			label: (
				<div className="menu-tab-title">
					<Link to="/">ЦЕНЫ</Link>
				</div>
			),
			key: "ЦЕНЫ",
		},

		{
			label: (
				<div className="menu-tab-title">
					<Link to="/">КОНТАКТЫ</Link>
				</div>
			),
			key: "КОНТАКТЫ",
		},
	];
	const onChange = (key) => {
		console.log(key);
	};

	return (
		categoryData && (
			<div>
				<div style={{ marginTop: "64px" }}>
					<Tabs
						defaultActiveKey="3"
						items={menuItems}
						animated={{ inkBar: false }}
						className="menu-tabs"
					/>
				</div>
			</div>
		)
	);
};
export default MenuTabs;
