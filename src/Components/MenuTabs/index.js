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

	useEffect(() => {
		axios.get("/get/categories/").then(({ data }) => {
			console.log(data);
			setCategoryData(data);
		});
		axios.get("/get/doctors/").then(({ data }) => {
			setDoctors(data);
		});
	}, []);
	const menuItems = [
		{
			label: <div className="menu-tab-title">УСЛУГИ</div>,
			key: "УСЛУГИ",
			children: (
				<Row className="m-0 w-100  mb-5">
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
												fontSize: "1rem",
												marginBottom: "1rem",
											}}
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
			label: <div className="menu-tab-title ">О НАС</div>,
			key: "О НАС",
			children: (
				<Row className="w-100 mx-1 mb-5">
					<Col md={3}>
						<Card
							cardImage={about}
							cardTitle="НАШИ ДОКТОРА"
							cardLink={`/our-doctors`}
							setShowMenu={props.setShowMenu}
							setShowContent={props.setShowContent}
						/>
						{doctors &&
							doctors.map((doctor) => (
								<Link
									key={doctor.id}
									style={{ textDecoration: "none" }}
									to={`/doctor/${doctor.name_english}/`}
									onClick={() => {
										props.setShowMenu(false);
										props.setShowContent(true);
									}}
								>
									<h6
										style={{
											textAlign: "left",
											color: "black",
										}}
									>
										{doctor.name_russian}
									</h6>
								</Link>
							))}
					</Col>

					<Col md={3}>
						<Card cardImage={blog} cardTitle="БЛОГ" />
						<Link
							style={{ textDecoration: "none" }}
							to="/news"
							onClick={() => {
								props.setShowMenu(false);
								props.setShowContent(true);
							}}
						>
							<h6
								style={{
									textAlign: "left",
									color: "black",
								}}
							>
								Новости
							</h6>
						</Link>
						<Link
							style={{ textDecoration: "none" }}
							to="/blog"
							onClick={() => {
								props.setShowMenu(false);
								props.setShowContent(true);
							}}
						>
							<h6
								style={{
									textAlign: "left",
									color: "black",
								}}
							>
								Статьи
							</h6>
						</Link>
					</Col>
					<Col md={3}>
						<Card cardImage={forPatient} cardTitle="СЕРВИС" />
						<Link
							style={{ textDecoration: "none" }}
							to=""
							onClick={() => {
								props.setShowMenu(false);
								props.setShowContent(true);
							}}
						>
							<h6
								style={{
									textAlign: "left",
									color: "black",
								}}
							>
								Трансфер
							</h6>
						</Link>
						<Link
							style={{ textDecoration: "none" }}
							to=""
							onClick={() => {
								props.setShowMenu(false);
								props.setShowContent(true);
							}}
						>
							<h6
								style={{
									textAlign: "left",
									color: "black",
								}}
							>
								Отели
							</h6>
						</Link>
						<Link
							style={{ textDecoration: "none" }}
							to=""
							onClick={() => {
								props.setShowMenu(false);
								props.setShowContent(true);
							}}
						>
							<h6
								style={{
									textAlign: "left",
									color: "black",
								}}
							>
								Переводчик
							</h6>
						</Link>
					</Col>
					<Col md={3}>
						<Card cardImage={service} cardTitle="ДЛЯ ПАЦИЕНТОВ" />
						<Link
							style={{ textDecoration: "none" }}
							to="/Excursion"
							onClick={() => {
								props.setShowMenu(false);
								props.setShowContent(true);
							}}
						>
							<h6
								style={{
									textAlign: "left",
									color: "black",
								}}
							>
								Памятки пациентам
							</h6>
						</Link>
					</Col>
				</Row>
			),
		},
		{
			label: <div className="menu-tab-title">ГИД ПО ОТДЫХУ</div>,
			key: "ГИД ПО ОТДЫХУ",
			href: "/Excursion",
		},
		{
			label: (
				<Link
					to="/Prices"
					onClick={() => {
						props.setShowMenu(false);
						props.setShowContent(true);
					}}
					style={{
						textDecoration: "none",
						color: "black",
					}}
				>
					<div className="menu-tab-title">ЦЕНЫ</div>
				</Link>
			),
			key: "ЦЕНЫ",
			href: "/Prices",
		},

		{
			label: (
				<Link
					to="/Contact"
					onClick={() => {
						props.setShowMenu(false);
						props.setShowContent(true);
					}}
					style={{
						textDecoration: "none",
						color: "black",
						fontWeight: "bold",
					}}
				>
					<div className="menu-tab-title">КОНТАКТЫ</div>
				</Link>
			),
			key: "КОНТАКТЫ",
			href: "/Contact",
		},
	];
	const onChange = (key) => {
		console.log(key);
	};
	const handleTabClick = (key, event) => {
		event.stopPropagation(); // prevent the default tab behavior
		if (!(key === "О НАС" || key === "УСЛУГИ")) {
			props.setShowMenu(false);
			props.setShowContent(true);
		}

		const item = menuItems.find((item) => item.key === key);
		if (item && item.href) {
			window.location.href = item.href;
		}
	};
	return (
		categoryData && (
			<div>
				<div style={{ marginTop: "64px" }}>
					<Tabs
						onTabClick={handleTabClick}
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
